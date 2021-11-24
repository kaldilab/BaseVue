<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 테이블 -->
      <table class="table module__table">
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
                <small class="text-secondary">[{{ item.category_name }}]</small>
                <router-link
                  :to="{
                    path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                    query: { paging: paging },
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

export default {
  components: {
    LoadingTr,
  },
  data() {
    const queryPaging = Number(this.$route.query.paging);
    return {
      paging: queryPaging ? queryPaging : 1,
    };
  },
  created() {
    this.$store.dispatch("actionBoardListFree", {
      page: this.paging,
    });
  },
  methods: {
    handlePaging(pagingValue) {
      this.$router
        .push({
          query: {
            paging: pagingValue,
            sort: this.sort,
          },
        })
        .catch(() => {});
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListFree.list;
    },
    loading() {
      return this.$store.state.BoardListFree.list ? false : true;
    },
    currentPage() {
      return this.$store.state.BoardListFree.page.realPage;
    },
    perPage() {
      return this.$store.state.BoardListFree.page.currPage;
    },
    totalItem() {
      return this.$store.state.BoardListFree.page.tot;
    },
    totalPage() {
      return this.$store.state.BoardListFree.page.lastPage;
    },
  },
};
</script>
