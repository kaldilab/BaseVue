<template>
  <div v-frag>
    <section class="section lazyload">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="lazyload__top">
        <h4 class="display-4">Scroll</h4>
        <span class="material-icons display-4">arrow_downward</span>
      </div>
      <div class="lazyload__list">
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample1.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample2.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample3.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample4.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample5.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample6.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample7.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample8.jpg')"
          src=""
          alt="이미지"
        />
        <img
          class="lazyload__item"
          :data-src="require('@/assets/images/sample9.jpg')"
          src=""
          alt="이미지"
        />
      </div>
      <div class="lazyload__bottom">
        <h4 class="display-4">End</h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initIntersectionObserver();
  },
  methods: {
    initIntersectionObserver() {
      document.querySelectorAll(".lazyload__item").forEach((index) => {
        if (index) {
          const io = new IntersectionObserver(
            (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.src = entry.target.dataset.src;
                  observer.unobserve(entry.target);
                }
              });
            },
            { rootMargin: "0px 0px 10%" }
          );
          io.observe(index);
        }
      });
    },
  },
};
</script>
