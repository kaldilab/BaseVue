<template>
  <div v-frag>
    <router-link
      class="btn"
      :class="linkClass"
      :to="{ path: linkPath }"
      v-bind="$attrs"
    >
      {{ linkValue }}
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["linkClass", "linkPath", "linkValue"],
};
</script>

<style lang="scss" scoped>
</style>
