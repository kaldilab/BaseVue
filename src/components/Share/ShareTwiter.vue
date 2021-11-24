<template>
  <div v-frag>
    <a
      class="btn"
      :class="shareClass"
      :href="`//twitter.com/intent/tweet?url=${sharePath}&text=${shareTitle}`"
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
