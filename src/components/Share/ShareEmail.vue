<template>
  <div v-frag>
    <a
      class="btn"
      :class="shareClass"
      :href="
        'mailto:?subject=[' +
          shareSite +
          '] ' +
          shareTitle +
          '&body=' +
          shareSite +
          '에서 찾은 글을 공유합니다.' +
          '%0D%0A' +
          '[' +
          shareTitle +
          ']' +
          '%0D%0A' +
          sharePath
      "
      target="_blank"
      v-bind="$attrs"
    >
      {{ shareValue }}
    </a>
  </div>
</template>

<script>
export default {
  props: ["shareClass", "shareValue", "shareSite", "shareTitle", "sharePath"],
};
</script>

<style lang="scss" scoped></style>
