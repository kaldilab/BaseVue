<template>
  <div v-frag>
    <button
      class="btn"
      :class="shareClass"
      @click="$emit('shareClick')"
      v-bind="$attrs"
    >
      {{ shareValue }}
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["shareClass", "shareValue", "shareClick"],
};
</script>

<style lang="scss" scoped>
</style>
