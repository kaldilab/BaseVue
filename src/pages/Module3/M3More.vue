<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 테이블 -->
      <table class="module__table table">
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
              <td>{{ totalItem - index }}</td>
              <td>
                <small class="text-secondary">[{{ item.category_name }}]</small>
                <router-link
                  :to="{
                    name: `${$route.matched[1].name}view`,
                    params: { id: item.document_srl, paging: paging },
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
import LoadingTr from "@/components/Loading/LoadingTr";

export default {
  components: {
    LoadingTr,
  },
  data() {
    const realPage = Number(this.$store.state.BoardListMorePage.realPage);
    const paramsPaging = realPage ? realPage : Number(this.$route.params.paging);
    return {
      paging: paramsPaging ? paramsPaging : 1,
      perMore: 5,
    };
  },
  created() {
    if (!this.$store.state.BoardListMoreList.length) {
      this.$store.dispatch('actionBoardListMore', {
        page: this.paging,
        perPage: this.perMore,
      });
    }
  },
  methods: {
    handleMore() {
      this.paging++;
      this.$store.dispatch('actionBoardListMore', {
        page: this.paging,
        perPage: this.perMore,
      });
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListMoreList;
    },
    loading() {
      return this.$store.state.BoardListMoreList &&
        this.$store.state.BoardListMorePage
        ? false
        : true;
    },
    totalItem() {
      return this.$store.state.BoardListMorePage.tot;
    },
    totalPage() {
      return this.$store.state.BoardListMorePage.lastPage;
    },
  },
};
</script>
