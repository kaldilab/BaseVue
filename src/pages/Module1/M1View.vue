<template>
  <div v-frag>
    <section class="section view">
      <!-- 수정/삭제 -->
      <div class="view__top">
        <div class="btn-group">
          <router-link
            class="btn btn-primary"
            :to="
              `/module1/edit_m1${$route.path.match($route.matched[1].regex)[1]}/${$route.params.id}`
            "
          >
            수정
          </router-link>
          <button class="btn btn-danger" @click="boardDelete">삭제</button>
        </div>
      </div>
      <!-- //수정/삭제 -->
      <!-- 내용 -->
      <article class="view__article">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <div class="view__article--inner" v-else>
          <div class="view__article--body">
            <div class="view__article--cont">
              <h4 class="h4">{{ boardView.nick_name }}</h4>
              <p class="lead">
                <small class="text-secondary"
                  >[{{ boardView.category_name }}]</small
                >
                {{ boardView.title }}
              </p>
              <span class="small">
                {{ $utils.formatDate14(boardView.regdate) }}
              </span>
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
                    path: `/module1/view_m1${$route.path.match($route.matched[1].regex)[1]}/${boardView.prev_document_srl}`,
                  }"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="badge bg-primary">이전글</h6>
                    <small>{{
                      $utils.formatDate14(boardView.prev_regdate)
                    }}</small>
                  </div>
                  <p class="mt-3">{{ boardView.prev_title }}</p>
                </router-link>
                <span v-else class="p-4">이전글이 없습니다.</span>
              </li>
              <li class="list-group list-group-flush border-top">
                <router-link
                  v-if="boardView.next_document_srl"
                  :to="{
                    path: `/module1/view_m1${$route.path.match($route.matched[1].regex)[1]}/${boardView.next_document_srl}`,
                  }"
                  class="list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="badge bg-primary">다음글</h6>
                    <small>{{
                      $utils.formatDate14(boardView.next_regdate)
                    }}</small>
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
          v-if="$route.path.match($route.matched[1].regex)[1] === 'table'"
          class="btn btn-primary"
          :to="{
            path: `/module1/m1${$route.path.match($route.matched[1].regex)[1]}`,
            query: { paging: $route.query.paging },
          }"
        >
          목록 보기
        </router-link>
        <router-link
          v-if="$route.path.match($route.matched[1].regex)[1] === 'sort'"
          class="btn btn-primary"
          :to="{
            path: `/module1/m1${$route.path.match($route.matched[1].regex)[1]}`,
            query: { paging: $route.query.paging, sort: $route.query.sort },
          }"
        >
          목록 보기
        </router-link>
        <router-link
          v-if="$route.path.match($route.matched[1].regex)[1] === 'perpage'"
          class="btn btn-primary"
          :to="{
            path: `/module1/m1${$route.path.match($route.matched[1].regex)[1]}`,
            query: { paging: $route.query.paging, per: $route.query.per },
          }"
        >
          목록 보기
        </router-link>
        <router-link
          v-if="$route.path.match($route.matched[1].regex)[1] === 'search'"
          class="btn btn-primary"
          :to="{
            path: `/module1/m1${$route.path.match($route.matched[1].regex)[1]}`,
            query: {
              paging: $route.query.paging,
              target: $route.query.target,
              keyword: $route.query.keyword,
              type: $route.query.type,
            },
          }"
        >
          목록 보기
        </router-link>
        <router-link
          v-if="$route.path.match($route.matched[1].regex)[1] === 'category'"
          class="btn btn-primary"
          :to="{
            path: `/module1/m1${$route.path.match($route.matched[1].regex)[1]}`,
            query: {
              paging: $route.query.paging,
              category: $route.query.category,
            },
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
      errors: [],
      commentContent: "",
      commentNickName: "",
    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionBoardViewFree", {
      id: this.$route.params.id,
    });
  },
  methods: {
    boardDelete() {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        this.$api
          .deleteBoardFree(this.$route.params.id)
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("글이 삭제되었습니다.");
            }
          })
          .then(() => {
            this.$router.push(
              `/module1/m1${this.$route.path.match(this.$route.matched[1].regex)[1]}`
            ).catch(() => {});
          })
          .catch((error) => console.log(error));
      } else {
        return false;
      }
    },
  },
  computed: {
    boardView() {
      return this.$store.state.BoardViewFree.info;
    },
  },
  watch: {
    boardView(newValue, oldValue) {
      if (newValue || oldValue === undefined) {
        this.loading = false;
      }
    },
  },
};
</script>
