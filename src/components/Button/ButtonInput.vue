<template>
  <div v-frag>
    <input
      class="btn"
      type="button"
      :class="inputClass"
      :value="inputValue"
      v-bind="$attrs"
      @click="$emit('inputClick')"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["inputClass", "inputValue", "inputClick"],
};
</script>

<style lang="scss" scoped>
</style>
