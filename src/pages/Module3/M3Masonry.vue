<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- Masonry -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div
        v-masonry
        item-selector=".masonry-item"
        transition-duration="0"
        class="module__masonry masonry-list row"
      >
        <div
          v-masonry-tile
          v-for="item in boardList"
          :key="item.index"
          class="masonry-item col-3"
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
                <router-link
                  :to="{
                    name: `${$route.matched[1].name}view`,
                    params: { id: item.document_srl, paging: paging },
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
      <!-- //Masonry -->
      <!-- 더보기 -->
      <div class="module__bottom" v-if="!loading">
        <button
          v-if="perMore < totalItem || paging < totalPage"
          @click="handleMore"
          class="btn btn-primary"
        >
          더보기
        </button>
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
    const paramsPaging = realPage
      ? realPage
      : Number(this.$route.params.paging);
    return {
      paging: paramsPaging ? paramsPaging : 1,
      perMore: 8,
    };
  },
  created() {
    if (!this.$store.state.BoardListMasonryList.length) {
      this.$store.dispatch("actionBoardListMasonry", {
        page: this.paging,
        perPage: this.perMore,
      });
    }
  },
  methods: {
    handleMore() {
      this.paging++;
      this.$store.dispatch("actionBoardListMasonry", {
        page: this.paging,
        perPage: this.perMore,
      });
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListMasonryList;
    },
    loading() {
      return this.$store.state.BoardListMasonryList &&
        this.$store.state.BoardListMasonryPage
        ? false
        : true;
    },
    totalItem() {
      return this.$store.state.BoardListMasonryPage.tot;
    },
    totalPage() {
      return this.$store.state.BoardListMasonryPage.lastPage;
    },
  },
};
</script>
