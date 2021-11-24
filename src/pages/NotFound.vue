<template>
  <div v-frag>
    <section class="section notfound">
      <h3 class="section__title">{{ $route.matched[0].meta.label }}</h3>
      <div class="notfound__text">
        <p class="display-4">페이지를 찾을 수 없습니다.</p>
        <p class="h4 text-secondary">404 Page Not Found</p>
        <router-link to="/" class="btn btn-primary">홈으로</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$route.matched[0].meta.label,
      titleTemplate: `%s | ${this.$settings.default.title}`,
    }
  },
};
</script>
