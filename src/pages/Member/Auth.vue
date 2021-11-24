<template>
  <div v-frag>
    <section class="section auth">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    const authCode = this.$route.query.code;
    const authToken = this.$route.hash;
    const authType = this.$utils.getLocalStore("basevue_auth_type");

    // Code
    if (authCode) {
      // Kakao
      if (authType === "kakao") {
        this.$axios
          .post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${this.$settings.default.kakaoRestApiKey}&redirect_uri=${this.$settings.default.apiRedirectUri}&code=${authCode}`
          )
          .then((response) => {
            const status = response.status;
            if (status === 200) {
              const accessToken = response.data.access_token;
              this.$utils.setLocalStore("basevue_auth_token", accessToken);
              this.$store.dispatch("actionAuthorized", {
                auth: accessToken,
              });
            }
          })
          .then(() => {
            this.$router.push("/member/mypage").catch(() => {});
          })
          .catch((error) => console.log(error));
      }
    }
    // Token
    else if (authToken) {
      // Naver
      if (authType === "naver") {
        const self = this;
        const getAuthNaver = (self) => {
          const accessToken = window.Naver.oauthParams.access_token;
          self.$utils.setLocalStore("basevue_auth_token", accessToken);
          self.$store.dispatch("actionAuthorized", {
            auth: accessToken,
          });
          self.$router.push("/member/mypage").catch(() => {});
        };
        if (window.Naver) {
          getAuthNaver(self);
        } else {
          window.addEventListener("load", function() {
            getAuthNaver(self);
          });
        }
      }
    }
    // None
    else {
      this.$router.push("/member/login").catch(() => {});
    }
  },
};
</script>
