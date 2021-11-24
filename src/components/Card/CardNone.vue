<template>
  <div v-frag>
    <div class="card none" :class="noneClass" v-bind="$attrs">
      {{ noneText }}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["noneClass", "noneText"],
};
</script>

<style lang="scss" scoped>
</style>
