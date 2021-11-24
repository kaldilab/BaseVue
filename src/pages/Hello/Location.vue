<template>
  <div v-frag>
    <section class="section location">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="jumbotron">
        <h1 class="display-4">{{ $settings.default.company }}</h1>
        <p class="lead">{{ $settings.default.address }} (우)06105</p>
        <hr class="my-4" />
        <p>Tel : 02-511-9160</p>
        <p>Fax : 02-583-9550</p>
      </div>
      <div class="location__map" id="map"></div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initKakaoMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => window.kakao.maps.load(this.initKakaoMap);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.$settings.default.kakaoJavascriptKey}&libraries=services`;
      document.head.appendChild(script);
    }
  },
  methods: {
    initKakaoMap() {
      var company = this.$settings.default.company;
      var address = this.$settings.default.address;

      var mapContainer = document.getElementById("map"),
        mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
      var map = new window.kakao.maps.Map(mapContainer, mapOption);
      var geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(
        address,
        function(result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 위치
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 마커
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우
            var infowindow = new window.kakao.maps.InfoWindow({
              zIndex: 1,
            });
            infowindow.setContent(
              '<div style="width:150px;padding:5px;font-size:14px;color:#333;font-weight:bold;text-align:center;"><a href="//map.kakao.com/?q=' + address + '" target="_blank">' + company + '</a></div>'
            );
            infowindow.open(map, marker);

            // 지도 가운데로
            map.setCenter(coords);
          }
        }
      );
    },
  },
};
</script>
