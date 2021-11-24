<template>
  <div v-frag>
    <section class="section aos">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="aos__top">
        <h4 class="display-4">Scroll</h4>
        <span class="material-icons display-4">arrow_downward</span>
      </div>
      <ul class="aos__list">
        <li
          class="aos__item"
          data-aos="fade"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-up</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-down</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-left</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-right</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-up-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-up-right</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-up-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-up-left</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-down-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-down-right</h4>
        </li>
        <li
          class="aos__item"
          data-aos="fade-down-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>fade-down-left</h4>
        </li>
        <li
          class="aos__item"
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>flip-up</h4>
        </li>
        <li
          class="aos__item"
          data-aos="flip-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>flip-down</h4>
        </li>
        <li
          class="aos__item"
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>flip-left</h4>
        </li>
        <li
          class="aos__item"
          data-aos="flip-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>flip-right</h4>
        </li>
        <li
          class="aos__item"
          data-aos="slide-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>slide-up</h4>
        </li>
        <li
          class="aos__item"
          data-aos="slide-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>slide-down</h4>
        </li>
        <li
          class="aos__item bg-danger"
          data-aos="slide-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-id="hello"
        >
          <h4>slide-left [HELLO]</h4>
        </li>
        <li
          class="aos__item"
          data-aos="slide-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>slide-right</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-in</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-in-up</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-in-down</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-in-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-in-left</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-in-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-in-right</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-out</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-out-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-out-up</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-out-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-out-down</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-out-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-out-left</h4>
        </li>
        <li
          class="aos__item"
          data-aos="zoom-out-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h4>zoom-out-right</h4>
        </li>
      </ul>
      <div class="aos__bottom">
        <h4 class="display-4">End</h4>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  created() {
    AOS.init();
    document.addEventListener("aos:in", this.aosEventIn);
    document.addEventListener("aos:out", this.aosEventOut);
    document.addEventListener("aos:in", this.aosEventInHello);
    document.addEventListener("aos:out", this.aosEventOutHello);
  },
  methods: {
    aosEventIn({detail}) {
      detail.classList.add('ani');
      console.log("animated in : ", detail.classList.value);
    },
    aosEventOut({detail}) {
      detail.classList.remove('ani');
      console.log("animated out : ", detail.classList.value);
    },
    aosEventInHello({detail}) {
      detail.classList.add('hello');
      console.log("animated in-hello : ", detail.classList.value);
    },
    aosEventOutHello({detail}) {
      detail.classList.remove('hello');
      console.log("animated out-hello : ", detail.classList.value);
    },
  },
};
</script>
