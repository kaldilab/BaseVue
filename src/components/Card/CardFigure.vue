<template>
  <div v-frag>
    <div class="card-figure" :class="figureClass" v-bind="$attrs">
      <img
        class="card-img-top"
        :src="figureSrc"
        :alt="figureAlt"
        :class="imageClass"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["figureSrc", "figureAlt", "figureClass", "imageClass"],
};
</script>

<style lang="scss" scoped>
</style>
