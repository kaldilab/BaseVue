<template>
  <div v-frag>
    <section class="section static static-slider">
      <h3 class="section__title">Static1</h3>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in source" :key="item.index">
          <div class="card-tab">
            <div class="card-text">
              <span class="material-icons">account_circle</span>
              <h4 class="card-text--info">Static</h4>
              <h4 class="card-text--title">{{ item.title }}</h4>
              <div class="card-text--desc">{{ item.description }}</div>
            </div>
            <div class="card-img">
              <img :src="require(`@/assets/images/${item.image}`)" alt="이미지" />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>

    <section class="section static static-video">
      <h3 class="section__title">Static2</h3>
      <ul class="list-group card__video">
        <div v-frag v-for="(item, index) in source" :key="item.index">
          <li class="list-group-item d-flex card__video--item" v-if="index <= 3">
            <div class="card__video--text">
              <h4 class="card__video--title">{{ item.title }}</h4>
              <p class="card__video--desc">{{ item.description }}</p>
            </div>
            <video preload="metadata" autoplay="" muted="" playsinline="" loop="">
              <source :src="require(`@/assets/videos/${item.video}`)" type="video/mp4" />
            </video> 
          </li>
        </div>
      </ul>
    </section>

    <section class="section static static-history">
      <h3 class="section__title">Static3</h3>
      <ul class="list-group static-history__list">
        <li class="list-group-item static-history__item" v-for="item in sourceSlice" :key="item.index">
          <div class="static-history__img">
            <img :src="require(`@/assets/images/${item.image}`)" alt="이미지">
          </div>
          <div class="static-history__text">
            <h5 class="static-history__text--date">{{ item.date }}</h5>
            <h4 class="static-history__text--title">{{ item.title }}</h4>
            <p class="static-history__text--desc">{{ item.description }}</p>
          </div>
        </li>
      </ul>
      <div v-if="this.sliceInt != this.source.length" class="text-center btn">
        <button @click="btnMore" class="btn__more"> 더보기 </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliceInt: 3,
      sliceAdd: 3,
      source: [
        {
          title: "Irure est mollit reprehenderit repre",
          description:
            "별들을 어머니, 내일 어머니, 계십니다. 벌레는 못 나의 하나에 어머님, 남은 그리고 이름과, 계십니다.",
          date: "2020년 6월",
          image: "sample1.jpg",
          video: "video7.mp4",
        },
        {
          title: "Magna eu aliquip non",
          description:
            "별 애기 까닭이요, 별 소녀들의 어머님, 멀리 마리아 거외다. 별 하나에 딴은 패, 청춘이 부끄러운 없이 있습니다. 별 않은 자랑처럼 내 듯합니다. 별 봄이 아스라히 애기 까닭입니다.",
          date: "2020년 5월",
          image: "sample2.jpg",
          video: "video4.mp4",
        },
        {
          title: "Dolore mollit commodo dolor s",
          description:
            "위에도 하늘에는 무덤 이름과, 쓸쓸함과 하나에 까닭입니다. 노루, 이런 헤일 노새, 한 있습니다. 다 너무나 위에도 멀듯이, 다 이름과, 있습니다.",
          date: "2020년 4월",
          image: "sample3.jpg",
          video: "video5.mp4",
        },
        {
          title: "Occaecat ipsum excepteur tempor eu duis occae",
          description:
            "새워 했던 하나에 패, 아직 자랑처럼 계십니다. 별들을 하나에 많은 계십니다. 다 많은 걱정도 가득 경, 봅니다. 새워 하나에 이웃 잠, 봅니다.",
          date: "2020년 3월",
          image: "sample4.jpg",
          video: "video6.mp4",
        },
        {
          title: "Nisi dolore sit nisi except",
          description:
            "별 새워 하늘에는 다 듯합니다. 이름과, 어머니, 이제 않은 지나가는 까닭입니다.",
          date: "2020년 2월",
          image: "sample5.jpg",
          video: "video1.mp4",
        },
        {
          title: "Consequat veniam duis est aliqua cupidatat ex proident s",
          description:
            "헤일 나의 묻힌 같이 계십니다. 오면 프랑시스 그리워 경, 쓸쓸함과 파란 무성할 까닭입니다. 사람들의 이름을 그러나 풀이 나는 듯합니다.",
          date: "2020년 1월",
          image: "sample6.jpg",
          video: "video3.mp4",
        },
        {
          title: "Occaecat ipsum excepteur tempor eu duis occae",
          description:
            "새워 했던 하나에 패, 아직 자랑처럼 계십니다. 별들을 하나에 많은 계십니다. 다 많은 걱정도 가득 경, 봅니다. 새워 하나에 이웃 잠, 봅니다.",
          date: "2020년 3월",
          image: "sample4.jpg",
          video: "video6.mp4",
        },
        {
          title: "Nisi dolore sit nisi except",
          description:
            "별 새워 하늘에는 다 듯합니다. 이름과, 어머니, 이제 않은 지나가는 까닭입니다.",
          date: "2020년 2월",
          image: "sample5.jpg",
          video: "video1.mp4",
        },
        {
          title: "Consequat veniam duis est aliqua cupidatat ex proident s",
          description:
            "헤일 나의 묻힌 같이 계십니다. 오면 프랑시스 그리워 경, 쓸쓸함과 파란 무성할 까닭입니다. 사람들의 이름을 그러나 풀이 나는 듯합니다.",
          date: "2020년 1월",
          image: "sample6.jpg",
          video: "video3.mp4",
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    btnMore() {
      this.sliceInt = this.sliceInt + this.sliceAdd;
    },
  },
  computed: {
    sourceSlice() {
      return this.source.slice(0, this.sliceInt);
    }

  }
};
</script>
