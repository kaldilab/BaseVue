<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 글쓰기 -->
      <div class="module__top text-end">
        <router-link class="btn btn-primary" to="/module2/m2add">
          글쓰기
        </router-link>
      </div>
      <!-- //글쓰기 -->
      <!-- 카드 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__card row" v-else>
        <div
          class="col-4 mb-5"
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
                    query: { paging: paging },
                  }"
                >
                  {{ item.title }}
                </router-link>
              </h5>
              <small class="text-secondary">[{{ item.category_name }}]</small>
              <div class="card-text">{{ item.nick_name }}</div>
              <span class="badge bg-success me-1">{{ item.readed_count }}</span>
              <span class="badge bg-warning me-1">{{ item.voted_count }}</span>
              <span class="badge bg-info">{{ item.comment_count }}</span>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                {{ $utils.formatDate14(item.regdate) }}
              </small>
            </div>
          </div>
        </div>
        <div v-if="!boardList.length" class="col-12 text-center py-5">
          게시글이 없습니다.
        </div>
      </div>
      <!-- //카드 -->
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
import LoadingDiv from "@/components/Loading/LoadingDiv";

export default {
  components: {
    LoadingDiv,
  },
  data() {
    const queryPaging = Number(this.$route.query.paging);
    return {
      paging: queryPaging ? queryPaging : 1,
    };
  },
  created() {
    this.$store.dispatch("actionBoardListNews", {
      page: this.paging,
      perPage: 6,
    });
  },
  methods: {
    handlePaging(pagingValue) {
      this.$router
        .push({
          query: {
            paging: pagingValue,
          },
        })
        .catch(() => {});
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListNews.list;
    },
    loading() {
      return this.$store.state.BoardListNews.list ? false : true;
    },
    currentPage() {
      return this.$store.state.BoardListNews.page.realPage;
    },
    perPage() {
      return this.$store.state.BoardListNews.page.currPage;
    },
    totalItem() {
      return this.$store.state.BoardListNews.page.tot;
    },
    totalPage() {
      return this.$store.state.BoardListNews.page.lastPage;
    },
  },
};
</script>
