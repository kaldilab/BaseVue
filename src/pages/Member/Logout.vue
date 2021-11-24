<template>
  <div v-frag>
    <section class="section logout">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <div class="logout__content">
        <div class="text-center">로그아웃 중입니다.</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    const self = this;
    const authType = this.$utils.getLocalStore("basevue_auth_type");

    // Kakao
    if (authType === "kakao") {
      const getKakaoLogout = (self) => {
        window.Kakao.Auth.logout(function() {
          self.$utils.removeLocalStore("basevue_auth_type");
          self.$utils.removeLocalStore("basevue_auth_token");
          self.$utils.removeLocalStore("basevue_user_nickname");
          self.$utils.removeLocalStore("basevue_user_image");
          self.$utils.removeSessionStore("basevue_auth_to");
          window.location.href = `${self.$settings.default.url}/`;
        });
      };
      if (window.Kakao) {
        getKakaoLogout(self);
      } else {
        window.addEventListener("load", function() {
          getKakaoLogout(self);
        });
      }
    }
    // Naver
    else if (authType === "naver") {
      this.$utils.removeLocalStore("basevue_auth_type");
      this.$utils.removeLocalStore("basevue_auth_token");
      this.$utils.removeLocalStore("basevue_user_nickname");
      this.$utils.removeLocalStore("basevue_user_image");
      this.$utils.removeSessionStore("basevue_auth_to");
      window.location.href = `${this.$settings.default.url}/`;
    }
  },
};
</script>
