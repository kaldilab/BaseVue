<template>
  <div v-frag>
    <div class="container-fluid">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>
