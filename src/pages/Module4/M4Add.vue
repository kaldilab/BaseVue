<template>
  <div v-frag>
    <section class="section add">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="add__body">
        <form @submit.prevent="eventAdd">
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
          <div class="form-group row">
            <div class="col-6">
              <div class="form-group">
                <label class="required" for="startDate">시작일</label>
                <input
                  v-model="start_date"
                  type="text"
                  class="form-control date-picker"
                  id="startDate"
                  autocomplete="off"
                />
                <p v-if="errors.length && !this.start_date">
                  <small class="text-danger">시작일을 입력해주세요.</small>
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label class="required" for="endDate">종료일</label>
                <input
                  v-model="end_date"
                  type="text"
                  class="form-control date-picker"
                  id="endDate"
                  autocomplete="off"
                />
                <p v-if="errors.length && !this.end_date">
                  <small class="text-danger">종료일을 입력해주세요.</small>
                </p>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-6">
              <div class="form-group">
                <label class="required" for="place">장소</label>
                <input
                  v-model="place"
                  type="text"
                  class="form-control"
                  id="place"
                />
                <p v-if="errors.length && !this.place">
                  <small class="text-danger">장소를 입력해주세요.</small>
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label class="required" for="address">주소</label>
                <input
                  v-model="address"
                  type="text"
                  class="form-control"
                  id="address"
                />
                <p v-if="errors.length && !this.address">
                  <small class="text-danger">주소를 입력해주세요.</small>
                </p>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="required" for="inputThumbnail">썸네일</label>
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                id="inputThumbnail"
                aria-describedby="inputGroupFileAddon01"
                @change="handleFileChange"
              />
              <label class="input-group-text" for="inputThumbnail">업로드</label>
            </div>
            <p v-if="errors.length && !this.thumbnail">
              <small class="text-danger">썸네일 이미지를 업로드해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="required" for="exampleInput4">작성자</label>
            <input
              v-model="nick_name"
              type="text"
              class="form-control"
              id="exampleInput4"
            />
            <p v-if="errors.length && !this.nick_name">
              <small class="text-danger">작성자명을 입력해주세요.</small>
            </p>
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
    return {
      errors: [],
      title: "",
      content: "",
      start_date: "",
      end_date: "",
      place: "",
      address: "",
      thumbnail: "",
      nick_name: "",
    };
  },
  mounted() {
    this.handleDatePicker();
  },
  updated() {
    this.handleDatePicker();
  },
  methods: {
    handleDatePicker() {
      const self = this;
      $(".date-picker").datepicker({
        dateFormat: "yymmdd",
        onSelect: function(dateText, event) {
          if (event.id === "startDate") {
            self.start_date = dateText;
          }
          if (event.id === "endDate") {
            self.end_date = dateText;
          }
        },
      });
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.thumbnail = file;
    },
    eventAdd() {
      if (
        !this.title ||
        !this.content ||
        !this.start_date ||
        !this.end_date ||
        !this.place ||
        !this.address ||
        !this.thumbnail ||
        !this.nick_name
      ) {
        this.errors.push(null);
      }
      if (
        this.title &&
        this.content &&
        this.start_date &&
        this.end_date &&
        this.place &&
        this.address &&
        this.thumbnail &&
        this.nick_name
      ) {
        this.$api
          .postEvent(
            this.title,
            this.content,
            this.start_date,
            this.end_date,
            this.place,
            this.address,
            this.thumbnail,
            this.nick_name
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
            this.$router.push(`/module4/view_m4event/${id}`).catch(() => {});
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
