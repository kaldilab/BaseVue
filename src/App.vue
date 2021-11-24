<template>
  <div id="app">
    <Accessibility></Accessibility>
    <Container></Container>
  </div>
</template>
<script>
import Accessibility from "@/layouts/Accessibility.vue";
import Container from "@/layouts/Container.vue";

export default {
  components: {
    Accessibility: Accessibility,
    Container: Container,
  },
  created() {
    // Api Kakao
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "//developers.kakao.com/sdk/js/kakao.min.js";
      document.head.appendChild(script);
      script.onload = () => {
        window.Kakao.init(this.$settings.default.kakaoJavascriptKey);
      };
    }
    // Api Naver
    if (!window.Naver) {
      const script = document.createElement("script");
      script.src = "//static.nid.naver.com/js/naverLogin_implicit-1.0.3.js";
      document.head.appendChild(script);
      script.onload = () => {
        window.Naver = new window.naver_id_login(
          this.$settings.default.naverClientId,
          this.$settings.default.apiRedirectUri
        );
      };
    }
  },
  mounted() {
    this.globalScript();
  },
  updated() {
    this.globalScript();
  },
  metaInfo() {
    return {
      title: this.$settings.default.title,
      titleTemplate: `%s | ${this.$settings.default.description}`,
    };
  },
  methods: {
    globalScript() {
      console.log("Global Script!");
    },
  },
};
</script>
