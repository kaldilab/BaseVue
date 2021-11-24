<template>
  <div v-frag>
    <li class="loading loading-li" :class="loadingClass">
      <div><span></span><span></span><span></span><span></span></div>
      <i>로딩중입니다.</i>
    </li>
  </div>
</template>

<script>
export default {
  props: ["loadingClass"],
};
</script>

<style lang="scss" scoped>
</style>
