<template>
  <div v-frag>
    <section class="section add">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="add__body">
        <form @submit.prevent="boardAdd">
          <div class="form-group">
            <label class="required" for="exampleInput4">카테고리</label>
            <select
              v-model="category"
              v-if="categoryList"
              class="form-select"
              id="exampleInput4"
            >
              <option value="">카테고리를 선택하세요...</option>
              <option
                v-for="item in categoryList('155')"
                :key="item.index"
                :value="item.category_srl"
              >
                {{ item.title }}
              </option>
            </select>
            <p v-if="errors.length && !this.category">
              <small class="text-danger">카테고리를 입력해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="required" for="exampleInput1">제목</label>
            <input
              v-model="title"
              type="text"
              class="form-control"
              id="exampleInput1"
            />
            <p v-if="errors.length && !this.title">
              <small class="text-danger">제목을 입력해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="required" for="exampleInput2">내용</label>
            <vue-editor v-model="content" id="exampleInput2"></vue-editor>
            <p v-if="errors.length && !this.content">
              <small class="text-danger">내용을 입력해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="required" for="exampleInput3">작성자</label>
            <input
              v-model="nick_name"
              type="text"
              class="form-control"
              id="exampleInput3"
              disabled
            />
          </div>
          <div class="d-grid gap-1 col-12 mx-auto mt-5">
            <button type="submit" class="btn btn-primary">
              등록
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  data() {
    const userNickname = this.$utils.getLocalStore("basevue_user_nickname");
    return {
      errors: [],
      title: "",
      content: "",
      nick_name: userNickname ? userNickname : "",
      category: "",
    };
  },
  created() {
    this.$store.dispatch("actionCategoryList");
  },
  methods: {
    categoryList(id) {
      const list = this.$store.state.CategoryList.list_category
        ? this.$store.state.CategoryList.list_category
        : [];
      const filterList = list.filter((item) => item.module_srl === id);
      return filterList;
    },
    boardAdd() {
      if (!this.title || !this.content || !this.category) {
        this.errors.push(null);
      }
      if (this.title && this.content && this.nick_name && this.category) {
        this.$api
          .postBoardFree(
            this.title,
            this.content,
            this.nick_name,
            this.category
          )
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("글이 등록되었습니다.");
              return response;
            }
          })
          .then((response) => {
            const id = response.data.document_srl;
            this.$router.push(`/module5/view_m5auth/${id}`).catch(() => {});
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
