<template>
  <div v-frag>
    <section class="section view">
      <!-- 수정/삭제 -->
      <div class="view__top">
        <div class="btn-group">
          <router-link
            class="btn btn-primary"
            :to="`/module4/edit_m4${$route.path.match($route.matched[1].regex)[1]}/${$route.params.id}`"
          >
            수정
          </router-link>
          <button class="btn btn-danger" @click="eventDelete">삭제</button>
        </div>
      </div>
      <!-- //수정/삭제 -->
      <!-- 내용 -->
      <article class="view__article">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <div class="view__article--inner" v-else>
          <div class="view__article--body">
            <div class="view__article--cont">
              <h4 class="h4">{{ eventView.title }}</h4>
              <p class="lead">
                <small>{{ $utils.formatDate8(eventView.start_date) }} ~ {{ $utils.formatDate8(eventView.end_date) }}</small>
              </p>
              <p><span class="badge bg-info">장소</span> {{ eventView.place }}</p>
              <p><span class="badge bg-info">주소</span> {{ eventView.address }}</p>
              <hr class="my-4" />
              <figure class="view__article--figure figure">
                <img :src="eventView.thum_images" class="figure-img img-fluid rounded" :alt="eventView.title">
                <figcaption class="figure-caption">{{ eventView.title }}</figcaption>
              </figure>
              <div class="ql-editor" v-html="eventView.content"></div>
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
            path: `/module4/m4${$route.path.match($route.matched[1].regex)[1]}`,
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
    this.$store.dispatch("actionEventView", {
      id: this.$route.params.id,
    });
  },
  methods: {
    eventDelete() {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        this.$api
          .deleteEvent(this.$route.params.id)
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              alert("글이 삭제되었습니다.");
            }
          })
          .then(() => {
            this.$router.push(
              `/module4/m4${this.$route.path.match(this.$route.matched[1].regex)[1]}`
            ).catch(() => {});
          })
          .catch((error) => console.log(error));
      } else {
        return false;
      }
    },
  },
  computed: {
    eventView() {
      return this.$store.state.EventView.info;
    },
  },
  watch:{
    eventView(newValue, oldValue) {
      if(newValue || oldValue === undefined) {
        this.loading = false;
      }
    }
  },
};
</script>
