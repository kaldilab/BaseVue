<template>
  <div v-frag>
    <section class="section visual">
      <h2 class="slogan__title">
        <span class="material-icons slogan__title--icon">desktop_mac</span>
        베이스 뷰
      </h2>
      <h3 class="slogan__subtitle">Vue 웹사이트 베이스!</h3>
      <swiper class="swiper visual__slider" :options="visualOption">
        <swiper-slide>
          <video preload="metadata" autoplay="" muted="" playsinline="" loop="">
            <source src="@/assets/videos/video1.mp4" type="video/mp4" />
          </video>
          <h4 class="position-absolute text-white visual__slider--title">
            Vue Website Base...
          </h4>
        </swiper-slide>
        <swiper-slide>
          <video preload="metadata" autoplay="" muted="" playsinline="" loop="">
            <source src="@/assets/videos/video2.mp4" type="video/mp4" />
          </video>
          <h4 class="position-absolute text-white visual__slider--title">
            Base Vue!
          </h4>
        </swiper-slide>
        <swiper-slide>
          <video preload="metadata" autoplay="" muted="" playsinline="" loop="">
            <source src="@/assets/videos/video3.mp4" type="video/mp4" />
          </video>
          <h4 class="position-absolute text-white visual__slider--title">
            <i>베이스 뷰</i>
          </h4>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>

    <section class="section info">
      <h2 class="info__title">{{ $settings.default.title }}란?</h2>
      <p class="info__desc">
        베이스 뷰는
        <a
          href="https://kr.vuejs.org/v2/guide/index.html"
          target="_blank"
          class="info__desc--link"
        >
          Vue.js
        </a>
        프레임워크를 활용하여 웹사이트를 제작하기 위한<br />
        프론트엔드 개발 베이스 사이트입니다.<br />
        일종의 Vue 데모사이트로서,<br />
        Vue 웹사이트 개발에 생산성과 효율성을 높일 수 있고,<br />
        기획이나 협업의 커뮤니케이션 도구로도 활용할 수 있습니다.<br />
        앞으로도 지속적인 기능 개발과 고도화로 더 좋은 베이스를 구축해나갈
        예정입니다.<br />
        기대해주세욧!
      </p>
    </section>

    <section class="section latest">
      <h3 class="latest__title visually-hidden">Latest</h3>
      <div class="row latest__list">
        <div class="col-6 latest__item column">
          <div class="card__list">
            <div class="card__item">
              <div class="card-tab half">
                <div class="card-text">
                  <h5 class="card-text--title">
                    <span class="material-icons">error</span>
                    최신글입니다...
                  </h5>
                </div>
              </div>
            </div>
            <LoadingDiv v-if="loadingBoardListFree"></LoadingDiv>
            <div
              class="card__item"
              v-for="item in boardListFree(4)"
              :key="item.index"
            >
              <router-link
                class="card__link"
                :to="`/module1/view_m1table/${item.document_srl}`"
              >
                <div class="card-tab">
                  <div class="card-text">
                    <span class="material-icons">blur_circular</span>
                    <h4 class="card-text--info">Module1</h4>
                    <h5 class="card-text--title">
                      {{ $utils.getEllipsis(item.title, 50, "...") }}
                    </h5>
                    <p class="card-text--sub">
                      {{ item.nick_name }}
                    </p>
                  </div>
                  <div class="card-img">
                    <img :src="item.thum_images" :alt="item.title" />
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="card__list">
            <LoadingDiv v-if="loadingBoardListNews"></LoadingDiv>
            <div
              class="card__item"
              v-for="item in boardListNews(4)"
              :key="item.index"
            >
              <router-link
                class="card__link"
                :to="`/module2/view_m2card/${item.document_srl}`"
              >
                <div class="card-tab">
                  <div class="card-text">
                    <span class="material-icons">catching_pokemon</span>
                    <h4 class="card-text--info">Module2</h4>
                    <h5 class="card-text--title">
                      {{ $utils.getEllipsis(item.title, 50, "...") }}
                    </h5>
                    <p class="card-text--sub">
                      {{ item.nick_name }}
                    </p>
                  </div>
                  <div class="card-img">
                    <img :src="item.thum_images" :alt="item.title" />
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-6 latest__item card__slider">
          <div class="card__slider--sticky">
            <LoadingDiv v-if="loadingBoardListNotice"></LoadingDiv>
            <swiper class="swiper" :options="noticeOption" v-else>
              <swiper-slide
                v-for="item in boardListNotice(3)"
                :key="item.index"
              >
                <div class="card__slider--item">
                  <div class="card__slider--tab">
                    <div class="card-text">
                      <h4 class="card-text--notice border-bottom">
                        <span class="material-icons">campaign</span>
                        <strong>Notice</strong>
                      </h4>
                      <p class="card-text--title">
                        {{ $utils.getEllipsis(item.title, 40, "...") }}
                      </p>
                      <div
                        v-html="item.content"
                        class="card-text--content"
                      ></div>
                    </div>
                    <div class="card__slider--link">
                      <router-link
                        to="/module3/m3accord"
                        class="btn btn-primary btn-sm"
                        @click.native="$scrollToTop"
                      >
                        더보기
                        <span class="material-icons-outlined">east</span>
                      </router-link>
                    </div>
                    <div class="card-img">
                      <img :src="item.thum_images" :alt="item.title" />
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="section favorite">
      <div class="row favorite__list">
        <div class="col-6">
          <div class="favorite__item">
            <h3 class="favorite__title">
              <span class="material-icons">sports_soccer</span>
              좋아요
            </h3>
            <LoadingDiv v-if="loadingBoardListLike"></LoadingDiv>
            <div class="list-group list-group-flush" v-else>
              <router-link
                class="list-group-item list-group-item-action"
                v-for="item in boardListLike(3)"
                :key="item.index"
                :to="`/module1/view_m1table/${item.document_srl}`"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1 list__item--title">
                    {{ $utils.getEllipsis(item.title, 45, "...") }}
                  </h5>
                  <small class="list__item--sub">{{ item.nick_name }}</small>
                </div>
                <small class="list__item--date">
                  {{ $utils.formatDate14(item.regdate) }}
                </small>
              </router-link>
            </div>
            <div class="favorite__link">
              <router-link
                to="/module1/m1table"
                class="favorite__link"
                @click.native="$scrollToTop"
              >
                더보기
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="favorite__item">
            <h3 class="favorite__title">
              <span class="material-icons">sports_esports</span>
              인기글
            </h3>
            <LoadingDiv v-if="loadingBoardListPop"></LoadingDiv>
            <div class="list-group list-group-flush" v-else>
              <router-link
                class="list-group-item list-group-item-action"
                v-for="item in boardListPop(3)"
                :key="item.index"
                :to="`/module2/view_m2card/${item.document_srl}`"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1 list__item--title">
                    {{ $utils.getEllipsis(item.title, 45, "...") }}
                  </h5>
                  <small class="list__item--sub">{{ item.nick_name }}</small>
                </div>
                <small class="list__item--date">
                  {{ $utils.formatDate14(item.regdate) }}
                </small>
              </router-link>
            </div>
            <div class="favorite__link">
              <router-link
                to="/module2/m2card"
                class="favorite__link"
                @click.native="$scrollToTop"
              >
                더보기
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section banner">
      <h3 class="banner__title">
        <a href="//www.co.kr" target="_blank">회사</a>
      </h3>
      <img class="w-100" src="@/assets/images/sample10.jpg" alt="이미지" />
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
      visualOption: {
        loop: true,
        autoplay: {
          delay: 8000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      noticeOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  created() {
    this.$store.dispatch("actionBoardListFree", { page: 1 });
    this.$store.dispatch("actionBoardListNews", { page: 1 });
    this.$store.dispatch("actionBoardListNotice", { page: 1 });
    this.$store.dispatch("actionBoardListPopLike", { id1: 10, id2: 10 });
  },
  methods: {
    boardListFree(limit) {
      const list = this.$store.state.BoardListFree.list;
      return list ? list.slice(0, limit) : list;
    },
    boardListNews(limit) {
      const list = this.$store.state.BoardListNews.list;
      return list ? list.slice(0, limit) : list;
    },
    boardListNotice(limit) {
      const list = this.$store.state.BoardListNotice.list;
      return list ? list.slice(0, limit) : list;
    },
    boardListPop(limit) {
      const list = this.$store.state.BoardListPopLike.list_pop;
      return list ? list.slice(0, limit) : list;
    },
    boardListLike(limit) {
      const list = this.$store.state.BoardListPopLike.list_like;
      return list ? list.slice(0, limit) : list;
    },
  },
  computed: {
    loadingBoardListFree() {
      return this.$store.state.BoardListFree.list ? false : true;
    },
    loadingBoardListNews() {
      return this.$store.state.BoardListNews.list ? false : true;
    },
    loadingBoardListNotice() {
      return this.$store.state.BoardListNotice.list ? false : true;
    },
    loadingBoardListPop() {
      return this.$store.state.BoardListPopLike.list_pop ? false : true;
    },
    loadingBoardListLike() {
      return this.$store.state.BoardListPopLike.list_like ? false : true;
    },
  },
};
</script>
