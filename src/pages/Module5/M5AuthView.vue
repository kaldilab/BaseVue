<template>
  <div v-frag>
    <section class="section view">
      <!-- 수정/삭제 -->
      <div class="view__top">
        <div class="btn-group">
          <router-link
            class="btn btn-primary"
            :to="`/module5/edit_m5auth/${$route.params.id}`"
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
        </div>
      </article>
      <!-- //내용 -->
      <!-- 목록보기 -->
      <div class="view__bottom">
        <router-link
          class="btn btn-primary"
          :to="{
            path: `/module5/m5auth`,
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
            this.$router.push("/module5/m5auth").catch(() => {});
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
