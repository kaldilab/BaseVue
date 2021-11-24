<template>
  <div v-frag>
    <td
      :class="tdClass"
      :colspan="tdColspan"
      :rowspan="tdRowspan"
    >
      <slot></slot>
    </td>
  </div>
</template>

<script>
export default {
  props: ["tdClass", "tdColspan", "tdRowspan"],
};
</script>

<style lang="scss" scoped>
</style>
