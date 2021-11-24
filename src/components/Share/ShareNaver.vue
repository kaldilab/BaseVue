<template>
  <div v-frag>
    <a
      class="btn"
      :class="shareClass"
      :href="`//share.naver.com/web/shareView.nhn?url=${sharePath}&title=${shareTitle}`"
      target="_blank"
      v-bind="$attrs"
    >
      {{ shareValue }}
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["shareClass", "sharePath", "shareTitle", "shareValue"],
};
</script>

<style lang="scss" scoped>
</style>
