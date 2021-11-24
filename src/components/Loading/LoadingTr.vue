<template>
  <div v-frag>
    <tr class="loading loading-tr" :class="loadingClass">
      <td :colspan="loadingColspan">
        <div><span></span><span></span><span></span><span></span></div>
        <i>로딩중입니다.</i>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  props: ["loadingClass", "loadingColspan"],
};
</script>

<style lang="scss" scoped>
</style>
