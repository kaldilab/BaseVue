<template>
  <div v-frag>
    <input
      class="btn"
      type="submit"
      :class="submitClass"
      :value="submitValue"
      v-bind="$attrs"
      @click="$emit('submitClick')"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["submitClass", "submitValue", "submitClick"],
};
</script>

<style lang="scss" scoped>
</style>
