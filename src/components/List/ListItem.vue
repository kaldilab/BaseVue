<template>
  <div v-frag>
    <li class="list-group-item" :class="itemClass" v-bind="$attrs">
      <slot></slot>
    </li>
  </div>
</template>

<script>
export default {
  props: ["itemClass"],
};
</script>

<style lang="scss" scoped>
</style>
