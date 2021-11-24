<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 타입 -->
      <div class="module__top text-end">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary">
            <input
              v-model="boardType"
              @click="handleBoardType"
              type="radio"
              value="table"
              checked
            />
            테이블형
          </label>
          <label class="btn btn-secondary">
            <input
              v-model="boardType"
              @click="handleBoardType"
              type="radio"
              value="card"
            />
            카드형
          </label>
          <label class="btn btn-secondary">
            <input
              v-model="boardType"
              @click="handleBoardType"
              type="radio"
              value="pinterest"
            />
            핀터레스트형
          </label>
        </div>
      </div>
      <!-- 타입 -->
      <!-- 테이블 -->
      <table v-if="boardType === 'table'" class="module__table table">
        <colgroup>
          <col style="width: 10%;" />
          <col style="width: auto;" />
          <col style="width: 15%;" />
          <col style="width: 10%;" />
          <col style="width: 10%;" />
          <col style="width: 10%;" />
          <col style="width: 10%;" />
        </colgroup>
        <thead class="thead">
          <tr class="table-thead thead-light">
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>추천수</th>
            <th>조회수</th>
            <th>댓글수</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <LoadingTr loadingColspan="6" v-if="loading"></LoadingTr>
          <div v-frag v-else>
            <tr v-for="(item, index) in boardList" :key="item.index">
              <td>{{ totalItem - (currentPage - 1) * perPage - index }}</td>
              <td>
                <router-link
                  :to="{
                    path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                    query: {
                      paging: paging,
                      type: boardType,
                    },
                  }"
                >
                  {{ $utils.getEllipsis(item.title, 20, "...") }}
                </router-link>
              </td>
              <td>{{ item.nick_name }}</td>
              <td>{{ item.voted_count }}</td>
              <td>{{ item.readed_count }}</td>
              <td>{{ item.comment_count }}</td>
              <td>{{ $utils.formatDate14(item.regdate) }}</td>
            </tr>
            <tr v-if="!boardList.length">
              <td colspan="6" class="col-12 text-center py-5">게시글이 없습니다.</td>
            </tr>
          </div>
        </tbody>
      </table>
      <!-- //테이블 -->
      <!-- 카드 -->
      <div v-if="boardType === 'card'" v-frag>
        <LoadingDiv v-if="loading"></LoadingDiv>
        <div class="module__card row" v-else>
          <div
            class="col-3 mb-5"
            v-for="(item, index) in boardList"
            :key="item.index"
          >
            <div class="card">
              <div class="card-figure">
                <img
                  class="card-img-top"
                  :src="item.thum_images"
                  :alt="item.title"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span class="badge bg-primary">
                    {{ totalItem - (currentPage - 1) * perPage - index }}
                  </span>
                  <router-link
                    :to="{
                      path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                      query: {
                        paging: paging,
                        type: boardType,
                      },
                    }"
                  >
                    {{ item.title }}
                  </router-link>
                </h5>
                <div class="card-text">{{ item.nick_name }}</div>
                <span class="badge bg-success me-1">
                  {{ item.readed_count }}
                </span>
                <span class="badge bg-warning">{{ item.voted_count }}</span>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  {{ $utils.formatDate14(item.regdate) }}
                </small>
              </div>
            </div>
          </div>
          <div v-if="!boardList.length" class="col-12 text-center py-5">게시글이 없습니다.</div>
        </div>
      </div>
      <!-- //카드 -->
      <!-- 핀터레스트형 -->
      <div v-if="boardType === 'pinterest'" v-frag>
        <LoadingDiv v-if="loading"></LoadingDiv>
        <masonry class="module__masonry" :cols="3" :gutter="30">
          <div
            class="masonry-item card"
            v-for="(item, index) in boardList"
            :key="item.index"
          >
            <div class="card-figure">
              <img
                class="card-img-top"
                :src="item.thum_images"
                :alt="item.title"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <span class="badge bg-primary">
                  {{ totalItem - (currentPage - 1) * perPage - index }}
                </span>
                <router-link
                  :to="{
                    path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                    query: {
                      paging: paging,
                      type: boardType,
                    },
                  }"
                >
                  {{ item.title }}
                </router-link>
              </h5>
              <div class="card-text">{{ item.nick_name }}</div>
              <span class="badge bg-success me-1">
                {{ item.readed_count }}
              </span>
              <span class="badge bg-warning">{{ item.voted_count }}</span>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                {{ $utils.formatDate14(item.regdate) }}
              </small>
            </div>
          </div>
        </masonry>
        <div v-if="!boardList.length" class="text-center py-5">게시글이 없습니다.</div>
      </div>
      <!-- //핀터레스트형 -->
      <!-- 페이지네이션 -->
      <paginate
        v-if="!loading"
        v-model="paging"
        :page-count="totalPage"
        :page-range="3"
        :prev-text="'이전'"
        :next-text="'다음'"
        :container-class="'pagination-list'"
        :page-class="'pagination-item'"
        :click-handler="handlePaging"
      >
      </paginate>
      <!-- //페이지네이션 -->
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
    const queryPaging = Number(this.$route.query.paging);
    const queryType = this.$route.query.type;
    return {
      paging: queryPaging ? queryPaging : 1,
      boardType: queryType ? queryType : "table",
    };
  },
  created() {
    this.$store.dispatch("actionBoardListCoin", {
      page: this.paging,
      perPage:
        this.boardType === "table" ? 10 : this.boardType === "card" ? 8 : 9,
    });
  },
  methods: {
    handlePaging(pagingValue) {
      this.$router
        .push({
          query: {
            paging: pagingValue,
            type: this.boardType,
          },
        })
        .catch(() => {});
    },
    handleBoardType(event) {
      this.$router
        .push({
          query: {
            paging: 1,
            type: event.target.value,
          },
        })
        .catch(() => {});
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListCoin.list;
    },
    loading() {
      return this.$store.state.BoardListCoin.list ? false : true;
    },
    currentPage() {
      return this.$store.state.BoardListCoin.page.realPage;
    },
    perPage() {
      return this.$store.state.BoardListCoin.page.currPage;
    },
    totalItem() {
      return this.$store.state.BoardListCoin.page.tot;
    },
    totalPage() {
      return this.$store.state.BoardListCoin.page.lastPage;
    },
  },
};
</script>
