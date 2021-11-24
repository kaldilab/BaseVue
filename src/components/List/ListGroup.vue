<template>
  <div v-frag>
    <ul class="list-group" :class="groupClass" v-bind="$attrs">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["groupClass"],
};
</script>

<style lang="scss" scoped>
</style>
