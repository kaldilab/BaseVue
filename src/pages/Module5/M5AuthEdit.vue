<template>
  <div v-frag>
    <section class="section edit">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="edit__body">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <form @submit.prevent="boardEdit" v-else>
          <div class="form-group">
            <label class="required" for="exampleInput4">카테고리</label>
            <select v-model="boardCategory" v-if="categoryList" class="form-select" id="exampleInput4">
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
              v-model="boardTitle"
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
            <vue-editor v-model="boardContent" id="exampleInput2"></vue-editor>
            <p v-if="errors.length && !this.content">
              <small class="text-danger">내용을 입력해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="required" for="exampleInput3">작성자</label>
            <input
              v-model="boardName"
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
import { VueEditor } from 'vue2-editor';
import LoadingDiv from "@/components/Loading/LoadingDiv";

export default {
  components: {
    VueEditor,
    LoadingDiv,
  },
  data() {
    return {
      loading: true,
      errors: [],
      title: "",
      content: "",
      category: "",
    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionBoardViewFree", {
      id: this.$route.params.id,
    });
    this.$store.dispatch("actionCategoryList");
  },
  methods: {
    categoryList(id) {
      const list = this.$store.state.CategoryList.list_category ? this.$store.state.CategoryList.list_category : [];
      const filterList = list.filter(
        (item) => item.module_srl === id
      );
      return filterList;
    },
    boardEdit() {
      if (!this.title || !this.content || !this.category) {
        this.errors.push(null);
      }
      if (this.title && this.content && this.category) {
        this.$api
          .putBoardFree(this.$route.params.id, this.title, this.content, this.category)
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("글이 수정되었습니다.");
            }
          })
          .then(() => {
            this.$router.push(
              `/module5/view_m5auth/${this.$route.params.id}`
            ).catch(() => {});
          })
          .catch((error) => console.log(error));
      }
    },
  },
  computed: {
    boardView() {
      return this.$store.state.BoardViewFree.info;
    },
    boardTitle: {
      get() {
        return this.$store.state.BoardViewFree.info.title;
      },
      set(value) {
        this.title = value;
      },
    },
    boardContent: {
      get() {
        return this.$store.state.BoardViewFree.info.content;
      },
      set(value) {
        this.content = value;
      },
    },
    boardCategory: {
      get() {
        return this.$store.state.BoardViewFree.info.category_srl;
      },
      set(value) {
        this.category = value;
      },
    },
    boardName() {
      return this.$store.state.BoardViewFree.info.nick_name;
    },
  },
  watch:{
    boardView(newValue, oldValue) {
      if(newValue || oldValue === undefined) {
        this.title = this.$store.state.BoardViewFree.info.title;
        this.content = this.$store.state.BoardViewFree.info.content;
        this.category = this.$store.state.BoardViewFree.info.category_srl;
        this.loading = false;
      }
    }
  },
};
</script>
