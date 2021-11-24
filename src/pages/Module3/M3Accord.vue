<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 아코디언 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__accordion accordion" id="accordion" v-else>
        <div class="accordion-item" v-for="(item, index) in boardList" :key="item.index">
          <div class="accordion-header" :id="`heading${index + 1}`">
            <h2 class="mb-0">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                :data-bs-target="`#collapse${index + 1}`"
                :aria-controls="`collapse${index + 1}`"
              >
                <span class="badge bg-secondary me-3">
                  {{ totalItem - index }}
                </span>
                {{ item.title }}
              </button>
            </h2>
          </div>
          <div
            :id="`collapse${index + 1}`"
            :class="`accordion-collapse collapse ${index === 0 ? 'show' : ''}`"
            :aria-labelledby="`heading${index + 1}`"
            data-bs-parent="#accordion"
          >
            <div class="card">
              <div class="card-body">
                <figure class="figure mx-auto w-50 mb-5">
                  <img
                    class="figure-img img-fluid rounded"
                    :src="item.thum_images"
                    :alt="item.title"
                  />
                  <figcaption class="figure-caption">
                    {{ item.title }}
                  </figcaption>
                </figure>
                <div class="card-text" v-html="item.content"></div>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  {{ $utils.formatDate14(item.regdate) }}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!boardList.length" class="col-12 text-center py-5">게시글이 없습니다.</div>
      </div>
      <!-- //아코디언 -->
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
    this.$store.dispatch("actionBoardListNotice", {
      page: 1,
      perPage: 100,
    });
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListNotice.list;
    },
    loading() {
      return this.$store.state.BoardListNotice.list ? false : true;
    },
    totalItem() {
      return this.$store.state.BoardListNotice.page.tot;
    },
  },
};
</script>
