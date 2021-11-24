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
                {{ $utils.formatDate14(boardView.regdate) }}</span>
              <hr class="my-4" />
              <div class="ql-editor" v-html="boardView.content"></div>
            </div>
          </div>
          <!-- 댓글 -->
          <div class="view__article--comment">
            <!-- 댓글 헤드 -->
            <div class="comment-head">
              <h5 class="comment-title h5">댓글</h5>
              <p class="comment-desc">
                <small v-if="boardView.comment_count > 0"
                  >총
                  <strong class="text-danger">
                    {{ boardView.comment_count }}
                  </strong>
                  개의 댓글이 있습니다.
                </small>
                <small v-else>댓글이 없습니다.</small>
              </p>
            </div>
            <!-- //댓글 헤드 -->
            <!-- 댓글 입력 -->
            <div class="comment-add">
              <h6 class="comment-reply h6">댓글을 남겨주세요.</h6>
              <form @submit.prevent="commentAdd" class="comment-form">
                <div class="form-group">
                  <label for="exampleFormControlInput1" class="form-label">
                    닉네임
                  </label>
                  <input
                    v-model="commentNickName"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="닉네임을 입력하세요."
                  />
                  <p v-if="errors.length && !this.commentNickName">
                    <small class="text-danger">닉네임을 입력해주세요.</small>
                  </p>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    내용
                  </label>
                  <textarea
                    v-model="commentContent"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="내용을 입력하세요."
                  ></textarea>
                  <p v-if="errors.length && !this.commentContent">
                    <small class="text-danger">내용을 입력해주세요.</small>
                  </p>
                </div>
                <div class="d-grid gap-1 col-12 mx-auto mt-5">
                  <button type="submit" class="btn btn-primary">등록</button>
                </div>
              </form>
            </div>
            <!-- //댓글 입력 -->
            <!-- 댓글 리스트 -->
            <ul
              v-if="boardView.comment_count > 0"
              class="comment-list list-group list-group-flush"
            >
              <li
                v-for="item in boardView.comment_list"
                :key="item.index"
                class="comment-item list-group-item"
                :class="`comment-item-${item.comment_srl}`"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="comment-name mb-1">
                    <span class="material-icons">person</span>
                    <strong>{{ item.nick_name }}</strong>
                  </h5>
                  <small class="comment-date">
                    {{ $utils.formatDateTime(item.regdate) }}
                  </small>
                </div>
                <p class="mb-1 comment-content" v-html="item.content"></p>
                <div class="comment-button text-end">
                  <button
                    class="btn btn-primary btn-sm py-2"
                    @click="[
                      handleCommentEdit(item.comment_srl, item.content),
                      handleCommentEditForm(item.comment_srl)
                    ]"
                  >
                    수정
                  </button>
                  <button
                    class="btn btn-danger btn-sm py-2"
                    @click="commentDelete(item.comment_srl)"
                  >
                    삭제
                  </button>
                </div>
                <!-- 댓글 수정 -->
                <div class="comment-edit" :ref="`commentEdit${item.comment_srl}`">
                  <form @submit.prevent="commentEdit" class="comment-form">
                    <div class="form-group">
                      <textarea
                        v-model="editCommentContent"
                        class="form-control"
                        rows="3"
                        placeholder="내용을 입력하세요."
                      ></textarea>
                    </div>
                    <div class="d-grid gap-1 col-12 mx-auto mt-1">
                      <button type="submit" class="btn btn-primary btn-sm">
                        등록
                      </button>
                    </div>
                  </form>
                </div>
                <!-- //댓글 수정 -->
              </li>
            </ul>
            <!-- //댓글 리스트 -->
          </div>
          <!-- //댓글 -->
        </div>
      </article>
      <!-- //내용 -->
      <!-- 목록보기 -->
      <div class="view__bottom">
        <router-link
          class="btn btn-primary"
          :to="{
            path: `/module5/m5comment`,
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
      errors: [],
      commentContent: "",
      commentNickName: "",
      editCommentId: "",
      editCommentContent: "",
    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionBoardViewFree", {
      id: this.$route.params.id,
    });
  },
  methods: {
    handleCommentEditForm(commentId) {
      const target = `commentEdit${commentId}`;
      const elem = this.$refs[target][0];
      $('.comment-edit').hide();
      $(elem).show();
    },
    handleCommentEdit(commentId, commentContent) {
      this.editCommentId = commentId;
      this.editCommentContent = commentContent;
    },
    commentAdd() {
      if (!this.commentContent || !this.commentNickName) {
        this.errors.push(null);
      }
      if (this.commentContent && this.commentNickName) {
        this.$api
          .postComment(
            155,
            this.$route.params.id,
            this.commentContent,
            this.commentNickName
          )
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("댓글이 등록되었습니다.");
              return response;
            }
          })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.log(error));
      }
    },
    commentEdit() {
      if (this.editCommentContent) {
        this.$api
          .putComment(
            155,
            this.$route.params.id,
            this.editCommentId,
            this.editCommentContent
          )
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("댓글이 수정되었습니다.");
              return response;
            }
          })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.log(error));
      }
    },
    commentDelete(comment_srl) {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        this.$api
          .deleteComment(155, this.$route.params.id, comment_srl)
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("댓글이 삭제되었습니다.");
            }
          })
          .then(() => {
            window.location.reload();
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
