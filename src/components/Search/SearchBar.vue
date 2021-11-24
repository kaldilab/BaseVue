<template>
  <div v-frag>
    <form @submit.prevent="handleSearch" :class="searchClass" v-bind="$attrs">
      <input
        v-model="searchKeyword"
        class="form-control"
        type="search"
        placeholder="검색어를 입력하세요."
        aria-label="검색"
      />
    </form>
  </div>
</template>

<script>
export default {
  props: ["searchClass"],
  data() {
    const queryKeyword = this.$route.query.search;
    return {
      searchKeyword: queryKeyword ? this.$utils.getDecode(queryKeyword) : "",
    };
  },
  methods: {
    handleSearch() {
      this.$router.push({
        path: "/search",
        query: {
          search: this.$utils.getEncode(this.searchKeyword),
        },
      })
      .catch(() => {});
    },
  },
};
</script>
