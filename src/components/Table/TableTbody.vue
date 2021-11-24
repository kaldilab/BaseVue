<template>
  <div v-frag>
    <tbody :class="tbodyClass">
      <slot></slot>
    </tbody>
  </div>
</template>

<script>
export default {
  props: ["tbodyClass"],
};
</script>

<style lang="scss" scoped>
</style>
