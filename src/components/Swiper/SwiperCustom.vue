<template>
  <div v-frag>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          }
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 300px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
