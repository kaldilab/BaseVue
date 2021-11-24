<template>
  <div v-frag>
    <thead :class="theadClass">
      <slot></slot>
    </thead>
  </div>
</template>

<script>
export default {
  props: ["theadClass"],
};
</script>

<style lang="scss" scoped>
</style>
