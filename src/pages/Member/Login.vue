<template>
  <div v-frag>
    <section class="section login">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="login__content">
        <div class="login__list">
          <h5 class="login__title text-center">로그인을 선택하세요.</h5>
          <div class="login__item mt-5">
            <div class="d-grid gap-3 col-12">
              <button class="btn btn-primary btn-kakao" @click="loginKakao">
                카카오 로그인
              </button>
              <button class="btn btn-naver btn-kakao" @click="loginNaver">
                네이버 로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    loginKakao() {
      this.$utils.setLocalStore("basevue_auth_type", "kakao");
      window.Kakao.Auth.authorize({
        redirectUri: this.$settings.default.apiRedirectUri,
      });
    },
    loginNaver() {
      this.$utils.setLocalStore("basevue_auth_type", "naver");
      const state = window.Naver.getUniqState();
      window.location.href = `//nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${this.$settings.default.naverClientId}&redirect_uri=${this.$settings.default.apiRedirectUri}&state=${state}`;
    },
  },
};
</script>
