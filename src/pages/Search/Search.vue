<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[0].meta.label }}</h3>
      <!-- 카드 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div v-frag v-else>
        <h5 class="text-center">
          <strong class="text-warning">"{{ search }}"</strong>(으)로 총
          <strong class="text-danger">{{ totalItem }}</strong>
          개의 게시물이 검색되었습니다.
        </h5>
        <div class="py-5">
          <SearchBar searchClass="w-25 py-5 mx-auto"></SearchBar>
        </div>
        <div class="module__search row">
          <div class="col-3 mb-5" v-for="item in searchList" :key="item.index">
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
                    {{ item.mid === "155" ? "모듈1" : "모듈2" }}
                  </span>
                  <router-link
                    :to="{
                      path: `/${item.mid === '155' ? 'module1' : 'module2'}/${item.mid === '155' ? 'view_m1table' : 'view_m2card'}/${item.document_srl}`,
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
          <div v-if="!searchList.length" class="col-12 text-center py-5">
            게시글이 없습니다.
          </div>
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
import SearchBar from "@/components/Search/SearchBar";

export default {
  components: {
    LoadingDiv,
    SearchBar,
  },
  data() {
    const queryPaging = Number(this.$route.query.paging);
    const querySearch = this.$route.query.search;
    return {
      paging: queryPaging ? queryPaging : 1,
      search: querySearch ? this.$utils.getDecode(querySearch) : "",
    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionSearchList", {
      perPage: 16,
      fullSearch: this.search,
    });
  },
  methods: {
    handlePaging(pagingValue) {
      this.$router
        .push({
          query: {
            search: this.$utils.getEncode(this.search),
            paging: pagingValue,
          },
        })
        .catch(() => {});
    },
  },
  computed: {
    searchList() {
      return this.$store.state.SearchList.list;
    },
    loading() {
      return this.$store.state.SearchList.list ? false : true;
    },
    totalItem() {
      return this.$store.state.SearchList.page.tot;
    },
    totalPage() {
      return this.$store.state.SearchList.page.lastPage;
    },
  },
  metaInfo() {
    return {
      title: this.$route.matched[0].meta.label,
      titleTemplate: `%s | ${this.$settings.default.title}`,
    };
  },
};
</script>
