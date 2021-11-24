<template>
  <div v-frag>
    <div class="col" :class="colClass" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["colClass"],
};
</script>

<style lang="scss" scoped>
</style>
