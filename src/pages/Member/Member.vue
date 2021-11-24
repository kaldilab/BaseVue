<template>
  <div v-frag>
    <router-view :key="$route.fullPath"></router-view>
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
