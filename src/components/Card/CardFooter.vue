<template>
  <div v-frag>
    <div class="card-footer" :class="footerClass" v-bind="$attrs">
      <small class="text-muted" :class="textClass">
        {{ textValue }}
      </small>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["footerClass", "textClass", "textValue"],
};
</script>

<style lang="scss" scoped>
</style>
