<template>
  <div v-frag>
    <div class="card" :class="groupClass" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["groupClass"],
};
</script>

<style lang="scss" scoped>
</style>
