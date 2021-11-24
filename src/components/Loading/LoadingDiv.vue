<template>
  <div v-frag>
    <div class="loading loading-div" :class="loadingClass">
      <div><span></span><span></span><span></span><span></span></div>
      <i>로딩중입니다.</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loadingClass"],
};
</script>

<style lang="scss" scoped>
</style>
