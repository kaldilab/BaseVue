<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 카드 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__card row" v-else>
        <div
          class="col-4 mb-5"
          v-for="(item, index) in boardList"
          :key="item.index"
        >
          <div class="card">
            <div class="card-figure">
              <img
                class="card-img-top"
                :src="item.thum_images"
                :alt="item.title"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <span class="badge bg-primary">
                  {{ totalItem - (currentPage - 1) * perPage - index }}
                </span>
                <router-link
                  :to="{
                    path: `/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`,
                    query: { paging: paging },
                  }"
                >
                  {{ item.title }}
                </router-link>
              </h5>
              <small class="text-secondary">[{{ item.category_name }}]</small>
              <div class="card-text">{{ item.nick_name }}</div>
              <span class="badge bg-success me-1">{{ item.readed_count }}</span>
              <span class="badge bg-warning me-1">{{ item.voted_count }}</span>
              <span class="badge bg-info">{{ item.comment_count }}</span>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                {{ $utils.formatDate14(item.regdate) }}
              </small>
            </div>
            <div class="card-share">
              <ShareFacebook
                shareClass="btn-light ms-1 btn-sm"
                :sharePath="
                  `${$settings.default.url}/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`
                "
                shareValue="페이스북"
              >
              </ShareFacebook>
              <ShareTwiter
                shareClass="btn-light ms-1 btn-sm"
                :sharePath="
                  `${$settings.default.url}/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`
                "
                :shareTitle="item.title"
                shareValue="트위터"
              >
              </ShareTwiter>
              <ShareNaver
                shareClass="btn-light ms-1 btn-sm"
                :sharePath="
                  `${$settings.default.url}/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`
                "
                :shareTitle="item.title"
                shareValue="네이버"
              >
              </ShareNaver>
              <ShareKakao
                shareClass="btn-light ms-1 btn-sm"
                shareValue="카카오"
                @shareClick="shareKakao(item.title)"
              >
              </ShareKakao>
              <ShareEmail
                shareClass="btn-light ms-1 btn-sm"
                :shareSite="$settings.default.title"
                :sharePath="
                  `${$settings.default.url}/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`
                "
                :shareTitle="item.title"
                shareValue="이메일"
              >
              </ShareEmail>
              <ShareUrl
                shareClass="btn-light ms-1 btn-sm"
                :sharePath="
                  `${$settings.default.url}/${$route.matched[0].name}/view_${$route.matched[1].name}/${item.document_srl}`
                "
                shareValue="URL"
                @shareClick="$utils.getShareUrl"
              >
              </ShareUrl>
            </div>
          </div>
        </div>
        <div v-if="!boardList.length" class="col-12 text-center py-5">
          게시글이 없습니다.
        </div>
      </div>
      <!-- //카드 -->
      <!-- 페이지네이션 -->
      <paginate
        v-if="!loading"
        v-model="paging"
        :page-count="totalPage"
        :page-range="3"
        :prev-text="'이전'"
        :next-text="'다음'"
        :container-class="'pagination-list'"
        :page-class="'pagination-item'"
        :click-handler="handlePaging"
      >
      </paginate>
      <!-- //페이지네이션 -->
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
    const queryPaging = Number(this.$route.query.paging);
    return {
      paging: queryPaging ? queryPaging : 1,
    };
  },
  created() {
    this.$store.dispatch("actionBoardListFree", {
      page: this.paging,
      perPage: 6,
    });
  },
  methods: {
    // Kakao
    shareKakao(title) {
      const shareLink = this.$settings.default.url + this.$route.path;
      window.Kakao.Link.sendDefault({
        objectType: "text",
        text: title,
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink,
        },
      });
    },
    handlePaging(pagingValue) {
      this.$router
        .push({
          query: {
            paging: pagingValue,
          },
        })
        .catch(() => {});
    },
  },
  computed: {
    boardList() {
      return this.$store.state.BoardListFree.list;
    },
    loading() {
      return this.$store.state.BoardListFree.list ? false : true;
    },
    currentPage() {
      return this.$store.state.BoardListFree.page.realPage;
    },
    perPage() {
      return this.$store.state.BoardListFree.page.currPage;
    },
    totalItem() {
      return this.$store.state.BoardListFree.page.tot;
    },
    totalPage() {
      return this.$store.state.BoardListFree.page.lastPage;
    },
  },
};
</script>
