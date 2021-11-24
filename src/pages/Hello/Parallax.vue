<template>
  <div v-frag>
    <section class="section parallax">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="parallax__top">
        <h4 class="display-4">Scroll</h4>
        <span class="material-icons display-4">arrow_downward</span>
      </div>
      <div class="parallax__list">
        <div class="parallax__item">
          <span class="item-text">item</span>
        </div>
        <div class="parallax__item">
          <span class="item-text">item</span>
        </div>
        <div class="parallax__item">
          <span class="item-text">item</span>
        </div>
      </div>
      <div class="parallax__bottom">
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
      window.addEventListener("scroll", () => {
        document.querySelectorAll(".parallax__item").forEach((element, index) => {
          if (element) {
            const io = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    console.log(`scroll : ${window.scrollY}`);
                    console.log(`ratio ${index + 1} : ${entry.intersectionRatio}`);
                    console.log(`element ${index + 1} : ${entry.boundingClientRect.y}`);
                    element.children[0].style.left = (entry.boundingClientRect.y + 'px')
                  }
                });
              },
              { rootMargin: "0px 0px 10%" }
            );
            io.observe(element);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-text {
  position: absolute;
  font-size: 30px;
  color: red
}
</style>