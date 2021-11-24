<template>
  <div v-frag>
    <table class="table" :class="wrapClass" v-bind="$attrs">
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  props: ["wrapClass"],
};
</script>

<style lang="scss" scoped>
</style>
