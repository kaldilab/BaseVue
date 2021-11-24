<template>
  <div v-frag>
    <section class="section mypage">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 글쓰기 -->
      <div class="module__top text-end">
        <router-link class="btn btn-primary" to="/member/logout">
          로그아웃
        </router-link>
        <button class="btn btn-danger" @click="getUnlink()">
          회원탈퇴
        </button>
      </div>
      <!-- //글쓰기 -->
      <div class="mypage__content">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <div class="card w-25 mx-auto" v-else>
          <img
            :src="authUser.image"
            class="card-img-top"
            :alt="authUser.nickname"
          />
          <div class="card-body">
            <h5 class="card-title">닉네임 : {{ authUser.nickname }}</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoadingDiv from "@/components/Loading/LoadingDiv";

export default {
  components: {
    LoadingDiv,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    const self = this;
    const authType = this.$utils.getLocalStore("basevue_auth_type");
    const authTo = this.$utils.getSessionStore("basevue_auth_to");

    // Kakao
    if (authType === "kakao") {
      const getProfileKakao = (self) => {
        window.Kakao.Auth.setAccessToken(self.$store.state.Authorized);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function(response) {
            if (response.connected_at) {
              const nickname = response.kakao_account.profile.nickname;
              const image = response.kakao_account.profile.profile_image_url;
              self.loading = false;
              self.$utils.setLocalStore("basevue_user_nickname", nickname);
              self.$utils.setLocalStore("basevue_user_image", image);
              self.$store.dispatch("actionAuthorizedUser", {
                user: {
                  nickname: nickname,
                  image: image,
                },
              });
              if (authTo) {
                self.$router.push(authTo).catch(() => {});
              }
            }
          },
          fail: function(error) {
            console.log(error);
          },
        });
      };
      if (window.Kakao) {
        getProfileKakao(self);
      } else {
        window.addEventListener("load", function() {
          getProfileKakao(self);
        });
      }
    }
    // Naver
    else if (authType === "naver") {
      $.ajax({
        url:
          "https://openapi.naver.com/v1/nid/getUserProfile.json?response_type=json",
        type: "GET",
        data: { access_token: self.$store.state.Authorized },
        dataType: "jsonp",
        jsonp: "oauth_callback",
        success: function(result) {
          if (result.resultcode == "00") {
            const nickname = result.response.nickname;
            const image = result.response.profile_image;
            self.loading = false;
            self.$utils.setLocalStore("basevue_user_nickname", nickname);
            self.$utils.setLocalStore("basevue_user_image", image);
            self.$store.dispatch("actionAuthorizedUser", {
              user: {
                nickname: nickname,
                image: image,
              },
            });
            if (authTo) {
              self.$router.push(authTo).catch(() => {});
            }
          }
        },
        error: function(xhr, textStatus, errorThrown) {
          console.log(xhr.status);
          console.log(errorThrown);
        },
      });
    }
  },
  methods: {
    getUnlink() {
      const self = this;
      const authType = this.$utils.getLocalStore("basevue_auth_type");
      if (window.confirm("정말로 탈퇴하시겠습니까?")) {
        // Kakao
        if (authType === "kakao") {
          window.Kakao.API.request({
            url: "/v1/user/unlink",
            success: function(response) {
              console.log(response);
              self.$router.push("/member/logout").catch(() => {});
            },
            fail: function(error) {
              console.log(error);
            },
          });
        }
        // Naver
        else if (authType === "naver") {
          alert("회원탈퇴 개발 중...");
        }
      } else {
        return false;
      }
    },
  },
  computed: {
    authUser() {
      return this.$store.state.AuthorizedUser;
    },
  },
};
</script>
