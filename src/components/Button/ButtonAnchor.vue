<template>
  <div v-frag>
    <a
      class="btn"
      :class="anchorClass"
      :href="anchorPath"
      v-bind="$attrs"
      @click.prevent="$emit('anchorClick')"
    >
      {{ anchorValue }}
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["anchorClass", "anchorPath", "anchorValue", "anchorClick"],
};
</script>

<style lang="scss" scoped>
</style>
