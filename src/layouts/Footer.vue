<template>
  <div v-frag>
    <footer class="footer text-end">
      <h2 class="visually-hidden">footer</h2>
      <Navigation></Navigation>
      <p class="mt-5">{{ $settings.default.title }}. ©2021.</p>
      <button class="btn btn-top" @click="scrollToTop">
        <span class="material-icons">arrow_upward</span>
      </button>
    </footer>
  </div>
</template>

<script>
import Navigation from "./Navigation";

export default {
  components: {
    Navigation,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
