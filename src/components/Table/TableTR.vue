<template>
  <div v-frag>
    <tr :class="trClass">
      <slot></slot>
    </tr>
  </div>
</template>

<script>
export default {
  props: ["trClass"],
};
</script>

<style lang="scss" scoped>
</style>
