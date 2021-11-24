<template>
  <div v-frag>
    <header class="header navbar navbar-expand-lg navbar-light">
      <div class="header__inner">
        <h1 class="header__title">
          <router-link to="/" @click.native="$scrollToTop">
            <img src="@/assets/images/logo.png" alt="회사" />
            <span>
              {{ $settings.default.title }}
            </span>
          </router-link>
        </h1>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleContent"
          aria-controls="navbarToggleContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Navigation id="navbarToggleContent"></Navigation>
        <router-link
          v-if="authUser"
          class="navbar-brand"
          to="/member/mypage"
        >
          <img :src="authUser.image" alt="" width="30" class="d-inline-block align-text-top">
          <small>{{ authUser.nickname }}</small>
        </router-link>
        <SearchBar searchClass="header__search"></SearchBar>
      </div>
    </header>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import SearchBar from "@/components/Search/SearchBar";

export default {
  components: {
    Navigation,
    SearchBar,
  },
  data() {
    const queryKeyword = this.$route.query.search;
    return {
      searchKeyword: queryKeyword ? this.$utils.getDecode(queryKeyword) : "",
    };
  },
  created() {
    this.$store.dispatch("actionAuthorizedUser", {
      user: {
        nickname: this.$utils.getLocalStore("basevue_user_nickname"),
        image: this.$utils.getLocalStore("basevue_user_image"),
      },
    });
  },
  methods: {
    handleSearch() {
      this.$router.push({
        path: "/search",
        query: {
          search: this.searchKeyword,
        },
      })
      .catch(() => {});
    },
  },
  computed: {
    authUser() {
      return this.$store.state.AuthorizedUser;
    },
  },
};
</script>
