<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 카드 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__card row" v-else>
        <div class="col-4 mb-5" v-for="item in boardList" :key="item.index">
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
                <router-link
                  :to="{
                    name: `${$route.matched[1].name}view`,
                    params: { id: item.document_srl, paging: paging },
                  }"
                >
                  {{ item.title }}
                </router-link>
              </h5>
              <small class="text-secondary">[{{ item.category_name }}]</small>
              <div class="card-text">{{ item.nick_name }}</div>
              <span class="badge bg-success me-1">{{ item.readed_count }}</span>
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
      <!-- //카드 -->
      <!-- 더보기 -->
      <div ref="scrollObserver" class="module__bottom" v-if="!loading">
        <LoadingDiv
          v-if="perMore < totalItem || paging < totalPage"
        >
        </LoadingDiv>
        <p v-else>더이상 게시물이 없습니다.</p>
      </div>
      <!-- //더보기 -->
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
    const realPage = Number(this.$store.state.BoardListMorePage.realPage);
    const paramsPaging = realPage ? realPage : Number(this.$route.params.paging);
    return {
      paging: paramsPaging ? paramsPaging : 1,
      perMore: 6,
    };
  },
  created() {
    if (!this.$store.state.BoardListInfiniteList.length) {
      this.$store.dispatch('actionBoardListInfinite', {
        page: this.paging,
        perPage: this.perMore,
      });
    }
  },
  mounted() {
    this.initIntersectionObserver();
  },
  methods: {
    handleMore() {
      this.paging++;
      this.$store.dispatch('actionBoardListInfinite', {
        page: this.paging,
        perPage: this.perMore,
      });
    },
    initIntersectionObserver() {
      const io = new IntersectionObserver(
        async ([entry]) => {
          if (entry.isIntersecting) {
            await this.handleMore();
          }
        }
      );
      io.observe(this.$refs.scrollObserver);
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListInfiniteList;
    },
    loading() {
      return this.$store.state.BoardListInfiniteList &&
        this.$store.state.BoardListInfinitePage
        ? false
        : true;
    },
    totalItem() {
      return this.$store.state.BoardListInfinitePage.tot;
    },
    totalPage() {
      return this.$store.state.BoardListInfinitePage.lastPage;
    },
  },
};
</script>
