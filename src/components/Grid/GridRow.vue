<template>
  <div v-frag>
    <div class="row" :class="rowClass" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rowClass"],
};
</script>

<style lang="scss" scoped>
</style>
