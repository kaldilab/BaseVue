<template>
  <div v-frag>
    <button class="btn" :class="shareClass" @click="$emit('shareClick', $event)">
      {{ shareValue }}
    </button>
    <input class="visually-hidden" type="text" :value="sharePath" />
  </div>
</template>

<script>
export default {
  props: ["shareClass", "shareValue", "sharePath", "shareClick"],
};
</script>

<style lang="scss" scoped></style>
