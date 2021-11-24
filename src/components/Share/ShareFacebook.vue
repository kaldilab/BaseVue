<template>
  <div v-frag>
    <a
      class="btn"
      :class="shareClass"
      :href="`//www.facebook.com/sharer/sharer.php?u=${sharePath}`"
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
  props: ["shareClass", "sharePath", "shareValue"],
};
</script>

<style lang="scss" scoped>
</style>
