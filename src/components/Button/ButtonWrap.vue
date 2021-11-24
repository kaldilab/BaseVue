<template>
  <div v-frag>
    <div class="clearfix" :class="wrapClass" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wrapClass"],
};
</script>

<style lang="scss" scoped>
</style>
