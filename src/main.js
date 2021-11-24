import Vue from "vue";
import frag from "vue-frag";
import axios from "axios";
import Paginate from "vuejs-paginate";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { VueMasonryPlugin } from "vue-masonry";
import VueMasonry from "vue-masonry-css";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import * as settings from "@/settings";
import * as utils from "@/utils";
import * as api from "@/api";

// js
import "jquery-ui-dist/jquery-ui.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// css
import "jquery-ui-dist/jquery-ui.min.css";
import "material-icons/iconfont/material-icons.css";
import "swiper/css/swiper.min.css";
import "quill/dist/quill.core.css";
import "aos/dist/aos.css";

// scss
import "@/assets/scss/style.scss";

// config
Vue.config.productionTip = false;

// plugins
const plugins = {
  install() {
    Vue.prototype.$axios = axios;
    Vue.prototype.$settings = settings;
    Vue.prototype.$utils = utils;
    Vue.prototype.$api = api;
    Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);
  },
};

// use
Vue.use(plugins);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMasonryPlugin);
Vue.use(VueMasonry);

// directive
Vue.directive("frag", frag);

// component
Vue.component("paginate", Paginate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
