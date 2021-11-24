<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 글쓰기 -->
      <div class="module__top text-end">
        <router-link class="btn btn-primary" to="/module4/m4add">
          이벤트 등록
        </router-link>
      </div>
      <!-- //글쓰기 -->
      <!-- 카드 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__event" v-else>
        <div class="card" v-for="(item, index) in eventList" :key="item.index">
          <div class="row g-0">
            <div class="col-md-4">
              <div class="card-figure">
                <img
                  class="img-fluid rounded-start"
                  :src="item.thum_images"
                  :alt="item.title"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body p-5">
                <h5 class="card-title">
                  <span class="badge bg-primary">
                    {{ totalItem - (currentPage - 1) * perPage - index }}
                  </span>
                  <router-link
                    :to="{
                      path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                    }"
                  >
                    {{ item.title }}
                  </router-link>
                </h5>
                <div class="card-text">
                  <span class="badge bg-info">장소</span> {{ item.place }}
                </div>
                <div class="card-text">
                  <span class="badge bg-info">주소</span> {{ item.address }}
                </div>
                <div class="card-text">
                  {{ $utils.formatDate8(item.start_date) }} ~ {{ $utils.formatDate8(item.end_date) }}
                </div>
                <span class="badge bg-success me-1">
                  {{ item.readed_count }}
                </span>
                <span class="badge bg-warning">{{ item.voted_count }}</span>
                <p class="card-text">
                  <small class="text-muted">
                    {{ $utils.formatDate14(item.regdate) }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!eventList.length" class="text-center py-5">
          게시글이 없습니다.
        </div>
      </div>
      <!-- //카드 -->
    </section>
  </div>
</template>

<script>
import LoadingDiv from "@/components/Loading/LoadingDiv";

export default {
  components: {
    LoadingDiv,
  },
  created() {
    this.$store.dispatch("actionEventList", {
      perPage: 100,
    });
  },
  computed: {
    eventList() {
      return this.$store.state.EventList.list;
    },
    loading() {
      return this.$store.state.EventList.list ? false : true;
    },
    currentPage() {
      return this.$store.state.EventList.page.realPage;
    },
    perPage() {
      return this.$store.state.EventList.page.currPage;
    },
    totalItem() {
      return this.$store.state.EventList.page.tot;
    },
  },
};
</script>
