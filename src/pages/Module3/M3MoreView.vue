<template>
  <div v-frag>
    <section class="section view">
      <!-- 내용 -->
      <article class="view__article">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <div class="view__article--inner" v-else>
          <div class="view__article--body">
            <div class="view__article--cont">
              <h4 class="h4">{{ boardView.nick_name }}</h4>
              <p class="lead">
                <small class="text-secondary">[{{ boardView.category_name }}]</small>
                {{ boardView.title }}
              </p>
              <span class="small">{{ $utils.formatDate14(boardView.regdate) }}</span>
              <hr class="my-4" />
              <div class="ql-editor" v-html="boardView.content"></div>
            </div>
          </div>
          <div class="view__article--foot">
            <ul class="view__article--prevnext">
              <li class="list-group list-group-flush">
                <router-link
                  v-if="boardView.prev_document_srl"
                  :to="{
                    path: `/module3/view_m3more/${boardView.prev_document_srl}`,
                  }"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="badge bg-primary">이전글</h6>
                    <small>{{ $utils.formatDate14(boardView.prev_regdate) }}</small>
                  </div>
                  <p class="mt-3">{{ boardView.prev_title }}</p>
                </router-link>
                <span v-else class="p-4">이전글이 없습니다.</span>
              </li>
              <li class="list-group list-group-flush border-top">
                <router-link
                  v-if="boardView.next_document_srl"
                  :to="{
                    path: `/module3/view_m3more/${boardView.next_document_srl}`,
                  }"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="badge bg-primary">다음글</h6>
                    <small>{{ $utils.formatDate14(boardView.next_regdate) }}</small>
                  </div>
                  <p class="mt-3">{{ boardView.next_title }}</p>
                </router-link>
                <span v-else class="p-4">다음글이 없습니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <!-- //내용 -->
      <!-- 목록보기 -->
      <div class="view__bottom">
        <router-link
          class="btn btn-primary"
          :to="{
            name: 'm3more',
            params: { paging: $route.params.paging },
          }"
        >
          목록 보기
        </router-link>
      </div>
      <!-- //목록보기 -->
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
    return {
      loading: true,
    }
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionBoardViewFree", {
      id: this.$route.params.id,
    });
  },
  computed: {
    boardView() {
      return this.$store.state.BoardViewFree.info;
    },
  },
  watch:{
    boardView(newValue, oldValue) {
      if(newValue || oldValue === undefined) {
        this.loading = false;
      }
    }
  },
};
</script>
