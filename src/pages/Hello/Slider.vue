<template>
  <div v-frag>
    <section class="section slider">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="slider__list">
        <h4 class="text-center mb-3">Index : {{ swiper1Index }}</h4>
        <swiper
          class="swiper"
          ref="swiper1"
          :options="swiperOption1"
          @slideChange="getActiveIndex1"
        >
          <swiper-slide>
            <img src="@/assets/images/sample1.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample2.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample3.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample4.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample5.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample6.jpg" alt="이미지" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="slider__list">
        <h4 class="text-center mb-3">Index : {{ swiper2Index }}</h4>
        <swiper
          class="swiper"
          ref="swiper2"
          :options="swiperOption2"
          @slideChange="getActiveIndex2"
        >
          <swiper-slide>
            <img src="@/assets/images/sample1.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample2.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample3.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample4.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample5.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample6.jpg" alt="이미지" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="slider__list">
        <h4 class="text-center mb-3">Index : {{ swiper3Index }}</h4>
        <swiper
          class="swiper"
          ref="swiper3"
          :options="swiperOption3"
          @slideChange="getActiveIndex3"
        >
          <swiper-slide>
            <img src="@/assets/images/sample1.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample2.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample3.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample4.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample5.jpg" alt="이미지" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/sample6.jpg" alt="이미지" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper1Index: 0,
      swiper2Index: 0,
      swiper3Index: 0,
      swiperOption1: {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOption2: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOption3: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    getActiveIndex1() {
      this.swiper1Index = this.swiper1.activeIndex;
      console.log("swiper1");
    },
    getActiveIndex2() {
      this.swiper2Index = this.swiper2.activeIndex;
      console.log("swiper2");
    },
    getActiveIndex3() {
      this.swiper3Index = this.swiper3.activeIndex;
      console.log("swiper3");
    },
  },
  computed: {
    swiper1() {
      return this.$refs.swiper1.$swiper;
    },
    swiper2() {
      return this.$refs.swiper2.$swiper;
    },
    swiper3() {
      return this.$refs.swiper3.$swiper;
    },
  },
};
</script>
