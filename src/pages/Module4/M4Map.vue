<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 검색 -->
      <div class="module__top row justify-content-center">
        <div class="col-5">
          <div class="d-flex">
            <div class="w-25">
              <select v-model="searchTarget" class="form-select">
                <option value="title" selected>제목</option>
                <option value="content">내용</option>
              </select>
            </div>
            <form class="w-75" @submit.prevent="handleSearchKeyword">
              <div class="input-group mb-3">
                <input
                  v-model="searchKeyword"
                  type="text"
                  class="form-control"
                  placeholder="검색어를 입력하세요"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">
                    입력
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- //검색 -->
      <!-- 테이블 -->
      <table class="table module__table mb-5">
        <colgroup>
          <col style="width: 5%;" />
          <col style="width: auto;" />
          <col style="width: 20%;" />
          <col style="width: 30%;" />
          <col style="width: 20%;" />
          <col style="width: 10%;" />
        </colgroup>
        <thead class="thead">
          <tr class="table-thead thead-light">
            <th>번호</th>
            <th>이벤트</th>
            <th>장소</th>
            <th>주소</th>
            <th>기간</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <LoadingTr loadingColspan="6" v-if="loading"></LoadingTr>
          <div v-frag v-else>
            <tr v-for="(item, index) in eventList" :key="item.index">
              <td>{{ totalItem - (currentPage - 1) * perPage - index }}</td>
              <td>
                <router-link
                  :to="{
                    path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                  }"
                >
                  {{ $utils.getEllipsis(item.title, 20, "...") }}
                </router-link>
              </td>
              <td>{{ item.place }}</td>
              <td>{{ item.address }}</td>
              <td>{{ $utils.formatDate8(item.start_date) }} ~ {{ $utils.formatDate8(item.end_date) }}</td>
              <td>{{ $utils.formatDate14(item.regdate) }}</td>
            </tr>
            <tr v-if="!eventList.length">
              <td colspan="6" class="col-12 text-center py-5">게시글이 없습니다.</td>
            </tr>
          </div>
        </tbody>
      </table>
      <!-- //테이블 -->
      <!-- 지도 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__map" id="map" v-else></div>
      <!-- //지도 -->
    </section>
  </div>
</template>

<script>
import LoadingTr from "@/components/Loading/LoadingTr";
import LoadingDiv from "@/components/Loading/LoadingDiv";

export default {
  components: {
    LoadingTr,
    LoadingDiv,
  },
  data() {
    const queryTarget = this.$route.query.target;
    const queryKeyword = this.$route.query.keyword;
    return {
      searchTarget: queryTarget ? queryTarget : "title",
      searchKeyword: queryKeyword ? this.$utils.getDecode(queryKeyword) : "",
    };
  },
  created() {
    this.$store.dispatch("actionEventList", {
      perPage: 100,
      target: this.searchTarget,
      keyword: this.searchKeyword,
    });
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initKakaoMap();
    } else {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.$settings.default.kakaoJavascriptKey}&libraries=services,clusterer`;
      document.head.appendChild(script);
      script.onload = () => window.kakao.maps.load(this.initKakaoMap);
    }
  },
  methods: {
    handleSearchKeyword() {
      this.$router
        .push({
          query: {
            target: this.searchTarget,
            keyword: this.$utils.getEncode(this.searchKeyword),
          },
        })
        .catch(() => {});
      window.location.reload();
    },
    initKakaoMap() {
      // 지도
      var mapContainer = document.getElementById("map"),
        mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 8,
        };
      var map = new window.kakao.maps.Map(mapContainer, mapOption);
      var geocoder = new window.kakao.maps.services.Geocoder();

      // 데이터
      var kakaomapData = this.eventMapList;

      // 클러스터 배열 생성
      var arrayClusterer = new Array();

      kakaomapData.forEach(function(data) {
        geocoder.addressSearch(data.address, function(result, status) {
          // 주소->좌표 변환
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          }

          // 마커
          var normalImageSrc =
              require("@/assets/images/ico_marker_01.png"),
            normalImageSize = new window.kakao.maps.Size(23, 34),
            normalImageOption = {
              offset: new window.kakao.maps.Point(12, 34),
            };
          var normalImage = new window.kakao.maps.MarkerImage(
            normalImageSrc,
            normalImageSize,
            normalImageOption
          );
          var clickImageSrc =
              require("@/assets/images/ico_marker_02.png"),
            clickImageSize = new window.kakao.maps.Size(23, 34),
            clickImageOption = {
              offset: new window.kakao.maps.Point(12, 34),
            };
          var clickImage = new window.kakao.maps.MarkerImage(
            clickImageSrc,
            clickImageSize,
            clickImageOption
          );
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
            image: normalImage,
            clickable: true,
          });
          marker.normalImage = normalImage;

          // 마커를 클러스터러 배열로
          arrayClusterer.push(marker);

          // 오버레이
          var overlay = new window.kakao.maps.CustomOverlay({
            content: content,
            map: map,
            position: marker.getPosition(),
            xAnchor: 0,
            yAnchor: 0,
          });
          var content = document.createElement("div");
          content.className = "map-overlay";
          content.innerHTML =
            '<ul>' +
            '<li class="tit">' +
            data.title +
            '</li>' +
            '<li class="place">' +
            data.place +
            '</li>' +
            '<li class="address">' +
            data.address +
            '</li>' +
            '<li class="date">' +
            data.start_date + '~' + data.end_date
            '</li>';
            '</ul>';
          var closeOverlay = document.createElement("button");
          closeOverlay.classList = 'btn btn-secondary btn-sm';
          closeOverlay.innerHTML = "닫기";
          closeOverlay.onclick = function() {
            overlay.setMap(null);
            marker.setImage(normalImage);
          };
          content.insertBefore(closeOverlay, content.firstChild);
          overlay.setContent(content);
          overlay.setMap(null);

          // 마커/오버레이 클릭 이벤트
          window.kakao.maps.event.addListener(marker, "click", function() {
            marker.setImage(clickImage);
            overlay.setMap(map);
          });

          // 지도 가운데로
          map.setCenter(coords);
        });
      });

      // 클러스터러
      var clusterer = new window.kakao.maps.MarkerClusterer({
        map: map,
        markers: arrayClusterer,
        gridSize: 150,
        averageCenter: true,
        minLevel: 2,
        disableClickZoom: true,
        styles: [
          {
            width: "120px",
            height: "120px",
            background: "rgba(0,0,0,.3)",
            color: "#fff",
            fontSize: "32px",
            fontWeight: "100",
            textAlign: "center",
            lineHeight: "120px",
            borderRadius: "50%",
          },
        ],
      });

      // 클러스터러 마커 생성
      clusterer.addMarkers(arrayClusterer);

      // 클러스터러 클릭 이벤트
      window.kakao.maps.event.addListener(clusterer, "clusterclick", function(
        cluster
      ) {
        var level = map.getLevel() - 1;
        map.setLevel(level, {
          anchor: cluster.getCenter(),
        });
      });
    },
  },
  computed: {
    eventMapList() {
      const list = this.$store.state.EventList
        ? this.$store.state.EventList.list
        : [];
      const dataEvents = [];
      list.map((item) => {
        return dataEvents.push({
          title: item.title,
          place: item.place,
          address: item.address,
          start_date: item.start_date,
          end_date: item.end_date,
        });
      });
      return dataEvents;
    },
    eventList() {
      return this.$store.state.EventList.list;
    },
    loading() {
      return this.$store.state.EventList.list ? false : true;
    },
    currentPage() {
      return this.$store.state.EventList.page.realPage;
    },
    perPage() {
      return this.$store.state.EventList.page.currPage;
    },
    totalItem() {
      return this.$store.state.EventList.page.tot;
    },
  },
};
</script>
