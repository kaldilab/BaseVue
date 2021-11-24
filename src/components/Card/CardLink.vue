<template>
  <div v-frag>
    <router-link
      class="card"
      :to="{ path: linkPath }"
      :class="linkClass"
      v-bind="$attrs"
      @click="$emit('linkClick')"
    >
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["linkClass", "linkPath", "linkClick"],
};
</script>

<style lang="scss" scoped>
</style>
