<template>
  <div v-frag>
    <th
      :class="thClass"
      :scope="thScope"
      :colspan="thColspan"
      :rowspan="thRowspan"
    >
      <slot></slot>
    </th>
  </div>
</template>

<script>
export default {
  props: ["thClass", "thScope", "thColspan", "thRowspan"],
};
</script>

<style lang="scss" scoped>
</style>
