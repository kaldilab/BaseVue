<template>
  <div v-frag>
    <section class="section view">
      <!-- 내용 -->
      <article class="view__article">
        <LoadingDiv v-if="loading"></LoadingDiv>
        <div class="view__article--inner" v-else>
          <div class="view__article--body">
            <div class="view__article--cont">
              <h4 class="h4">{{ boardView.nick_name }}</h4>
              <p class="lead">
                <small class="text-secondary">[{{ boardView.category_name }}]</small>
                {{ boardView.title }}
              </p>
              <span class="small">{{ $utils.formatDate14(boardView.regdate) }}</span>
              <hr class="my-4" />
              <div class="ql-editor" v-html="boardView.content"></div>
            </div>
            <!-- 공유하기 -->
            <div class="view__article--share">
              <ShareFacebook
                shareClass="btn-secondary btn-sm"
                :sharePath="$settings.default.url + $route.path"
                shareValue="페이스북"
              >
              </ShareFacebook>
              <ShareTwiter
                shareClass="btn-secondary btn-sm"
                :sharePath="$settings.default.url + $route.path"
                :shareTitle="boardView.title"
                shareValue="트위터"
              >
              </ShareTwiter>
              <ShareNaver
                shareClass="btn-secondary btn-sm"
                :sharePath="$settings.default.url + $route.path"
                :shareTitle="boardView.title"
                shareValue="네이버"
              >
              </ShareNaver>
              <ShareKakao
                shareClass="btn-secondary btn-sm"
                shareValue="카카오"
                @shareClick="shareKakao"
              >
              </ShareKakao>
              <ShareEmail
                shareClass="btn-secondary btn-sm"
                :shareSite="$settings.default.title"
                :sharePath="$settings.default.url + $route.path"
                :shareTitle="boardView.title"
                shareValue="이메일"
              >
              </ShareEmail>
              <ShareUrl
                shareClass="btn-secondary btn-sm"
                :sharePath="$settings.default.url + $route.path"
                shareValue="URL"
                @shareClick="$utils.getShareUrl"
              >
              </ShareUrl>
            </div>
            <!-- //공유하기 -->
          </div>
        </div>
      </article>
      <!-- //내용 -->
      <!-- 목록보기 -->
      <div class="view__bottom">
        <router-link
          class="btn btn-primary"
          :to="{
            path: `/module5/m5share`,
            query: { paging: $route.query.paging },
          }"
        >
          목록 보기
        </router-link>
      </div>
      <!-- //목록보기 -->
    </section>
  </div>
</template>

<script>
import LoadingDiv from "@/components/Loading/LoadingDiv";
import ShareFacebook from "@/components/Share/ShareFacebook";
import ShareTwiter from "@/components/Share/ShareTwiter";
import ShareNaver from "@/components/Share/ShareNaver";
import ShareKakao from "@/components/Share/ShareKakao";
import ShareEmail from "@/components/Share/ShareEmail";
import ShareUrl from "@/components/Share/ShareUrl";

export default {
  components: {
    LoadingDiv,
    ShareFacebook,
    ShareTwiter,
    ShareNaver,
    ShareKakao,
    ShareEmail,
    ShareUrl,
  },
  data() {
    return {
      loading: true,
    }
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("actionBoardViewFree", {
      id: this.$route.params.id,
    });
  },
  methods: {
    // Kakao
    shareKakao() {
      const shareLink = this.$settings.default.url + this.$route.path;
      window.Kakao.Link.sendDefault({
        objectType: "text",
        text: this.boardView.title,
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink,
        },
      });
    },
  },
  computed: {
    boardView() {
      return this.$store.state.BoardViewFree.info;
    },
  },
  watch:{
    boardView(newValue, oldValue) {
      if(newValue || oldValue === undefined) {
        this.loading = false;
      }
    }
  },
};
</script>
