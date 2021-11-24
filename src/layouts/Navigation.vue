<template>
  <div v-frag>
    <nav class="nav navbar-collapse" :class="navClass" v-bind="$attrs">
      <ul class="nav-list" :class="navListClass" v-bind="$attrs">
        <!-- nest1 -->
        <div v-frag v-for="nest1 in menus" :key="nest1.index">
          <li
            v-if="nest1.meta.navigation"
            :class="`nav-item menu-depth1 menu-${nest1.name}`"
          >
            <router-link
              class="nav-link"
              :to="{ path: nest1.path }"
              @click.native="$scrollToTop"
            >
              {{ nest1.meta.label }}
            </router-link>
            <ul class="nav-submenu" v-if="nest1.children">
              <!-- nest2 -->
              <div v-frag v-for="nest2 in nest1.children" :key="nest2.index">
                <li
                  v-if="nest2.meta.navigation"
                  :class="`nav-item menu-depth2 menu-${nest2.name}`"
                >
                  <router-link
                    class="nav-link"
                    :to="{ path: nest2.path }"
                    @click.native="$scrollToTop"
                  >
                    {{ nest2.meta.label }}
                  </router-link>
                  <ul class="nav-submenu" v-if="nest2.children">
                    <!-- nest3 -->
                    <div
                      v-frag
                      v-for="nest3 in nest2.children"
                      :key="nest3.index"
                    >
                      <li
                        v-if="nest3.meta.navigation"
                        :class="`nav-item menu-depth3 menu-${nest3.name}`"
                      >
                        <router-link
                          class="nav-link"
                          :to="{ path: nest3.path }"
                          @click.native="$scrollToTop"
                        >
                          {{ nest3.meta.label }}
                        </router-link>
                      </li>
                    </div>
                    <!-- //nest3 -->
                  </ul>
                </li>
              </div>
              <!-- //nest2 -->
            </ul>
          </li>
        </div>
        <!-- //nest1 -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["navClass", "navListClass"],
  data() {
    return {
      menus: this.$router.options.routes,
    };
  },
};
</script>
