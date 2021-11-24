<template>
  <div v-frag>
    <li class="list-group-item none" :class="noneClass" v-bind="$attrs">
      {{ noneText }}
      <slot></slot>
    </li>
  </div>
</template>

<script>
export default {
  props: ["noneClass", "noneText"],
};
</script>

<style lang="scss" scoped>
</style>
