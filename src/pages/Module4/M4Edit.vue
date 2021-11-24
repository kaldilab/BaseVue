<template>
  <div v-frag>
    <section class="section edit">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="edit__body">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <form @submit.prevent="eventEdit" v-else>
          <div class="form-group">
            <label class="required" for="exampleInput1">제목</label>
            <input
              v-model="eventTitle"
              type="text"
              class="form-control"
              id="exampleInput1"
            />
            <p v-if="errors.length && !this.title">
              <small class="text-danger">제목을 입력해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="exampleInput2">내용</label>
            <vue-editor v-model="eventContent" id="exampleInput2"></vue-editor>
            <p v-if="errors.length && !this.content">
              <small class="text-danger">내용을 입력해주세요.</small>
            </p>
          </div>
          <div class="form-group row">
            <div class="col-6">
              <div class="form-group">
                <label class="required" for="startDate">시작일</label>
                <input
                  v-model="eventStartDate"
                  type="text"
                  class="form-control date-picker"
                  id="startDate"
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
                  v-model="eventEndDate"
                  type="text"
                  class="form-control date-picker"
                  id="endDate"
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
                v-model="eventThumbnail"
                type="text"
                class="form-control"
                for="inputThumbnail"
                readonly
              />
              <input
                type="file"
                class="visually-hidden"
                id="inputThumbnail"
                aria-describedby="inputGroupFileAddon01"
                @change="handleFileChange"
                value="dfdf"
              />
              <label class="input-group-text" for="inputThumbnail"
                >업로드</label
              >
            </div>
            <p v-if="errors.length && !this.thumbnail">
              <small class="text-danger">썸네일 이미지를 업로드해주세요.</small>
            </p>
          </div>
          <div class="form-group">
            <label class="required" for="exampleInput4">작성자</label>
            <input
              v-model="eventName"
              type="text"
              class="form-control"
              id="exampleInput4"
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
      start_date: "",
      end_date: "",
      place: "",
      address: "",
      thumbnail: "",
    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionEventView", {
      id: this.$route.params.id,
    });
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
      this.$store.state.EventView.info.thum_images = file.name;
    },
    eventEdit() {
      if (
        !this.title ||
        !this.content ||
        !this.start_date ||
        !this.end_date ||
        !this.place ||
        !this.address ||
        !this.thumbnail
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
        this.thumbnail
      ) {
        this.$api
          .putEvent(
            this.$route.params.id,
            this.title,
            this.content,
            this.start_date,
            this.end_date,
            this.place,
            this.address,
            this.thumbnail
          )
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("글이 수정되었습니다.");
            }
          })
          .then(() => {
            this.$router.push(
              `/module4/view_m4${this.$route.path.match(this.$route.matched[1].regex)[1]}/${this.$route.params.id}`
            ).catch(() => {});
          })
          .catch((error) => console.log(error));
      }
    },
  },
  computed: {
    eventView() {
      return this.$store.state.EventView.info;
    },
    eventTitle: {
      get() {
        return this.$store.state.EventView.info.title;
      },
      set(value) {
        this.title = value;
      },
    },
    eventContent: {
      get() {
        return this.$store.state.EventView.info.content;
      },
      set(value) {
        this.content = value;
      },
    },
    eventStartDate: {
      get() {
        return this.$store.state.EventView.info.start_date;
      },
      set(value) {
        this.start_date = value;
      },
    },
    eventEndDate: {
      get() {
        return this.$store.state.EventView.info.end_date;
      },
      set(value) {
        this.end_date = value;
      },
    },
    eventPlace: {
      get() {
        return this.$store.state.EventView.info.place;
      },
      set(value) {
        this.place = value;
      },
    },
    eventAddress: {
      get() {
        return this.$store.state.EventView.info.address;
      },
      set(value) {
        this.address = value;
      },
    },
    eventThumbnail() {
      return this.$store.state.EventView.info.thum_images;
    },
    eventName() {
      return this.$store.state.EventView.info.nick_name;
    },
  },
  watch: {
    eventView(newValue, oldValue) {
      if (newValue || oldValue === undefined) {
        this.title = this.$store.state.EventView.info.title;
        this.content = this.$store.state.EventView.info.content;
        this.start_date = this.$store.state.EventView.info.start_date;
        this.end_date = this.$store.state.EventView.info.end_date;
        this.place = this.$store.state.EventView.info.place;
        this.address = this.$store.state.EventView.info.address;
        this.thumbnail = this.$store.state.EventView.info.thum_images;
        this.loading = false;
      }
    },
  },
};
</script>
