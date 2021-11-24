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
                <small class="text-secondary">
                  [{{ boardView.category_name }}]
                </small>
                {{ boardView.title }}
              </p>
              <span class="small">
                {{ $utils.formatDate14(boardView.regdate) }}
              </span>
              <hr class="my-4" />
              <div class="ql-editor" v-html="boardView.content"></div>
              <p class="display-4 text-center text-danger mt-5">
                {{ boardView.voted_count }}
              </p>
            </div>
            <!-- 추천/비추천 -->
            <div class="view__article--vote">
              <button class="btn btn-primary" @click="handleVote(true)">
                좋아요
              </button>
              <button class="btn btn-danger" @click="handleVote(false)">
                싫어요
              </button>
            </div>
            <!-- //추천/비추천 -->
          </div>
        </div>
      </article>
      <!-- //내용 -->
      <!-- 목록보기 -->
      <div class="view__bottom">
        <router-link
          class="btn btn-primary"
          :to="{
            path: `/module5/m5vote`,
            query: { paging: $route.query.paging },
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
    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionBoardViewFree", {
      id: this.$route.params.id,
    });
  },
  methods: {
    handleVote(vote) {
      if (window.confirm("정말로 참여하시겠습니까?")) {
        this.$api
          .postVote(155, this.$route.params.id, vote)
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert(`${vote === true ? "[좋아요]" : "[싫어요]"}가 반영되었습니다.`);
              window.location.reload();
            }
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
