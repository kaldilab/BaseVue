<template>
  <div v-frag>
    <tr class="none" :class="noneClass">
      <td :colspan="noneColspan"></td>
      <slot></slot>
    </tr>
  </div>
</template>

<script>
export default {
  props: ["noneClass", "noneColspan"],
};
</script>

<style lang="scss" scoped>
</style>
