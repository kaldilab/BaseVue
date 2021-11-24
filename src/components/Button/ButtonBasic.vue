<template>
  <div v-frag>
    <button
      class="btn"
      :class="basicClass"
      v-bind="$attrs"
      @click="$emit('basicClick')"
    >
      {{ basicValue }}
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["basicClass", "basicValue", "basicClick"],
};
</script>

<style lang="scss" scoped>
</style>
