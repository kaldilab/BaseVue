<template>
  <div v-frag>
    <main class="main" :class="$route.name === 'home' ? 'main-home' : 'main-content'" id="content">
      <MainBreadcrumb v-if="$route.name !== 'home'"></MainBreadcrumb>
      <MainTop v-if="$route.name !== 'home' && $route.name !== 'notfound'"></MainTop>
      <router-view :key="$route.fullPath"></router-view>
      <MainBottom v-if="$route.name !== 'home' && $route.name !== 'notfound'"></MainBottom>
    </main>
  </div>
</template>

<script>
import MainTop from './MainTop';
import MainBottom from './MainBottom';
import MainBreadcrumb from './MainBreadcrumb';

export default {
  components: {
    MainTop,
    MainBottom,
    MainBreadcrumb,
  }
};
</script>
