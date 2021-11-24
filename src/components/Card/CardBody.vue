<template>
  <div v-frag>
    <div class="card-body" :class="bodyClass" v-bind="$attrs">
      <h5 class="card-title" :class="titleClass">
        {{ titleValue }}
      </h5>
      <div class="card-text" :class="textClass">
        {{ textValue }}
      </div>
      <span class="badge bg-primary" :class="badgeClass">
        {{ badgeValue }}
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "bodyClass",
    "titleClass",
    "textClass",
    "badgeClass",
    "titleValue",
    "textValue",
    "badgeValue",
  ],
};
</script>

<style lang="scss" scoped>
</style>
