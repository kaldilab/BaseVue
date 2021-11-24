import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import store from "@/store";
import * as utils from "@/utils";

import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import Hello from "@/pages/Hello/Hello.vue";
import Static from "@/pages/Hello/Static.vue";
import Handling from "@/pages/Hello/Handling.vue";
import Slider from "@/pages/Hello/Slider.vue";
import Animation from "@/pages/Hello/Animation.vue";
import Location from "@/pages/Hello/Location.vue";
import Lazyload from "@/pages/Hello/Lazyload.vue";
import Parallax from "@/pages/Hello/Parallax.vue";
import Module1 from "@/pages/Module1/Module1.vue";
import M1Table from "@/pages/Module1/M1Table.vue";
import M1Sort from "@/pages/Module1/M1Sort.vue";
import M1Perpage from "@/pages/Module1/M1Perpage.vue";
import M1Search from "@/pages/Module1/M1Search.vue";
import M1Category from "@/pages/Module1/M1Category.vue";
import M1Add from "@/pages/Module1/M1Add.vue";
import M1View from "@/pages/Module1/M1View.vue";
import M1Edit from "@/pages/Module1/M1Edit.vue";
import Module2 from "@/pages/Module2/Module2.vue";
import M2Card from "@/pages/Module2/M2Card.vue";
import M2Sort from "@/pages/Module2/M2Sort.vue";
import M2Perpage from "@/pages/Module2/M2Perpage.vue";
import M2Search from "@/pages/Module2/M2Search.vue";
import M2Category from "@/pages/Module2/M2Category.vue";
import M2Add from "@/pages/Module2/M2Add.vue";
import M2View from "@/pages/Module2/M2View.vue";
import M2Edit from "@/pages/Module2/M2Edit.vue";
import Module3 from "@/pages/Module3/Module3.vue";
import M3More from "@/pages/Module3/M3More.vue";
import M3MoreView from "@/pages/Module3/M3MoreView.vue";
import M3Infinite from "@/pages/Module3/M3Infinite.vue";
import M3InfiniteView from "@/pages/Module3/M3InfiniteView.vue";
import M3Masonry from "@/pages/Module3/M3Masonry.vue";
import M3MasonryView from "@/pages/Module3/M3MasonryView.vue";
import M3Type from "@/pages/Module3/M3Type.vue";
import M3TypeView from "@/pages/Module3/M3TypeView.vue";
import M3Accord from "@/pages/Module3/M3Accord.vue";
import Module4 from "@/pages/Module4/Module4.vue";
import M4Event from "@/pages/Module4/M4Event.vue";
import M4Calendar from "@/pages/Module4/M4Calendar.vue";
import M4Map from "@/pages/Module4/M4Map.vue";
import M4Add from "@/pages/Module4/M4Add.vue";
import M4View from "@/pages/Module4/M4View.vue";
import M4Edit from "@/pages/Module4/M4Edit.vue";
import Module5 from "@/pages/Module5/Module5.vue";
import M5Share from "@/pages/Module5/M5Share.vue";
import M5ShareView from "@/pages/Module5/M5ShareView.vue";
import M5Comment from "@/pages/Module5/M5Comment.vue";
import M5CommentView from "@/pages/Module5/M5CommentView.vue";
import M5Vote from "@/pages/Module5/M5Vote.vue";
import M5VoteView from "@/pages/Module5/M5VoteView.vue";
import M5Auth from "@/pages/Module5/M5Auth.vue";
import M5AuthAdd from "@/pages/Module5/M5AuthAdd.vue";
import M5AuthView from "@/pages/Module5/M5AuthView.vue";
import M5AuthEdit from "@/pages/Module5/M5AuthEdit.vue";
import Member from "@/pages/Member/Member.vue";
import Mypage from "@/pages/Member/Mypage.vue";
import Login from "@/pages/Member/Login.vue";
import Logout from "@/pages/Member/Logout.vue";
import Auth from "@/pages/Member/Auth.vue";
import Search from "@/pages/Search/Search.vue";

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        label: "홈",
        navigation: false,
      },
    },
    {
      path: "/hello",
      redirect: "/hello/static",
      name: "hello",
      component: Hello,
      meta: {
        label: "헬로우",
        navigation: true,
      },
      children: [
        {
          path: "/hello/static",
          name: "static",
          component: Static,
          meta: {
            label: "스태틱",
            navigation: true,
          },
        },
        {
          path: "/hello/handling",
          name: "handling",
          component: Handling,
          meta: {
            label: "핸들링",
            navigation: true,
          },
        },
        {
          path: "/hello/slider",
          name: "slider",
          component: Slider,
          meta: {
            label: "슬라이더",
            navigation: true,
          },
        },
        {
          path: "/hello/animation",
          name: "animation",
          component: Animation,
          meta: {
            label: "애니메이션",
            navigation: true,
          },
        },
        {
          path: "/hello/location",
          name: "location",
          component: Location,
          meta: {
            label: "로케이션",
            navigation: true,
          },
        },
        {
          path: "/hello/lazyload",
          name: "lazyload",
          component: Lazyload,
          meta: {
            label: "레이지로드",
            navigation: true,
          },
        },
        {
          path: "/hello/parallax",
          name: "parallax",
          component: Parallax,
          meta: {
            label: "패럴랙스",
            navigation: true,
          },
        },
      ],
    },
    {
      path: "/module1",
      redirect: "/module1/m1table",
      name: "module1",
      component: Module1,
      meta: {
        label: "모듈1",
        navigation: true,
      },
      children: [
        {
          path: "/module1/m1table",
          name: "m1table",
          component: M1Table,
          meta: {
            label: "테이블",
            navigation: true,
          },
        },
        {
          path: "/module1/m1sort",
          name: "m1sort",
          component: M1Sort,
          meta: {
            label: "정렬",
            navigation: true,
          },
        },
        {
          path: "/module1/m1perpage",
          name: "m1perpage",
          component: M1Perpage,
          meta: {
            label: "퍼페이지",
            navigation: true,
          },
        },
        {
          path: "/module1/m1search",
          name: "m1search",
          component: M1Search,
          meta: {
            label: "검색",
            navigation: true,
          },
        },
        {
          path: "/module1/m1category",
          name: "m1category",
          component: M1Category,
          meta: {
            label: "카테고리",
            navigation: true,
          },
        },
        {
          path: "/module1/m1add",
          name: "m1add",
          component: M1Add,
          meta: {
            label: "쓰기",
            navigation: false,
          },
        },
        {
          path: "/module1/view_m1*/:id",
          name: "m1view",
          component: M1View,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module1/edit_m1*/:id",
          name: "m1edit",
          component: M1Edit,
          meta: {
            label: "수정",
            navigation: false,
          },
        },
      ],
    },
    {
      path: "/module2",
      redirect: "/module2/m2card",
      name: "module2",
      component: Module2,
      meta: {
        label: "모듈2",
        navigation: true,
      },
      children: [
        {
          path: "/module2/m2card",
          name: "m2card",
          component: M2Card,
          meta: {
            label: "카드",
            navigation: true,
          },
        },
        {
          path: "/module2/m2sort",
          name: "m2sort",
          component: M2Sort,
          meta: {
            label: "정렬",
            navigation: true,
          },
        },
        {
          path: "/module2/m2perpage",
          name: "m2perpage",
          component: M2Perpage,
          meta: {
            label: "퍼페이지",
            navigation: true,
          },
        },
        {
          path: "/module2/m2search",
          name: "m2search",
          component: M2Search,
          meta: {
            label: "검색",
            navigation: true,
          },
        },
        {
          path: "/module2/m2category",
          name: "m2category",
          component: M2Category,
          meta: {
            label: "카테고리",
            navigation: true,
          },
        },
        {
          path: "/module2/m2add",
          name: "m2add",
          component: M2Add,
          meta: {
            label: "쓰기",
            navigation: false,
          },
        },
        {
          path: "/module2/view_m2*/:id",
          name: "m2view",
          component: M2View,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module2/edit_m2*/:id",
          name: "m2edit",
          component: M2Edit,
          meta: {
            label: "수정",
            navigation: false,
          },
        },
      ],
    },
    {
      path: "/module3",
      redirect: "/module3/m3more",
      name: "module3",
      component: Module3,
      meta: {
        label: "모듈3",
        navigation: true,
      },
      children: [
        {
          path: "/module3/m3more",
          name: "m3more",
          component: M3More,
          meta: {
            label: "더보기",
            navigation: true,
          },
        },
        {
          path: "/module3/view_m3more/:id",
          name: "m3moreview",
          component: M3MoreView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module3/m3infinite",
          name: "m3infinite",
          component: M3Infinite,
          meta: {
            label: "무한스크롤",
            navigation: true,
          },
        },
        {
          path: "/module3/view_m3infinite/:id",
          name: "m3infiniteview",
          component: M3InfiniteView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module3/m3masonry",
          name: "m3masonry",
          component: M3Masonry,
          meta: {
            label: "Masonry",
            navigation: true,
          },
        },
        {
          path: "/module3/view_m3masonry/:id",
          name: "m3masonryview",
          component: M3MasonryView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module3/m3type",
          name: "m3type",
          component: M3Type,
          meta: {
            label: "타입",
            navigation: true,
          },
        },
        {
          path: "/module3/view_m3type/:id",
          name: "m3typeview",
          component: M3TypeView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module3/m3accord",
          name: "m3accord",
          component: M3Accord,
          meta: {
            label: "아코디언",
            navigation: true,
          },
        },
      ],
    },
    {
      path: "/module4",
      redirect: "/module4/m4event",
      name: "module4",
      component: Module4,
      meta: {
        label: "모듈4",
        navigation: true,
      },
      children: [
        {
          path: "/module4/m4event",
          name: "m4event",
          component: M4Event,
          meta: {
            label: "이벤트",
            navigation: true,
          },
        },
        {
          path: "/module4/m4calendar",
          name: "m4calendar",
          component: M4Calendar,
          meta: {
            label: "캘린더",
            navigation: true,
          },
        },
        {
          path: "/module4/m4map",
          name: "m4map",
          component: M4Map,
          meta: {
            label: "지도",
            navigation: true,
          },
        },
        {
          path: "/module4/m4add",
          name: "m4add",
          component: M4Add,
          meta: {
            label: "쓰기",
            navigation: false,
          },
        },
        {
          path: "/module4/view_m4*/:id",
          name: "m4view",
          component: M4View,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module4/edit_m4*/:id",
          name: "m4edit",
          component: M4Edit,
          meta: {
            label: "수정",
            navigation: false,
          },
        },
      ],
    },
    {
      path: "/module5",
      redirect: "/module5/m5share",
      name: "module5",
      component: Module5,
      meta: {
        label: "모듈5",
        navigation: true,
      },
      children: [
        {
          path: "/module5/m5share",
          name: "m5share",
          component: M5Share,
          meta: {
            label: "공유",
            navigation: true,
          },
        },
        {
          path: "/module5/view_m5share/:id",
          name: "m5shareview",
          component: M5ShareView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module5/m5comment",
          name: "m5comment",
          component: M5Comment,
          meta: {
            label: "댓글",
            navigation: true,
          },
        },
        {
          path: "/module5/view_m5comment/:id",
          name: "m5commentview",
          component: M5CommentView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module5/m5vote",
          name: "m5vote",
          component: M5Vote,
          meta: {
            label: "추천",
            navigation: true,
          },
        },
        {
          path: "/module5/view_m5vote/:id",
          name: "m5voteview",
          component: M5VoteView,
          meta: {
            label: "보기",
            navigation: false,
          },
        },
        {
          path: "/module5/m5auth",
          name: "m5auth",
          component: M5Auth,
          meta: {
            label: "권한",
            navigation: true,
          },
        },
        {
          path: "/module5/m5authadd",
          name: "m5authadd",
          component: M5AuthAdd,
          meta: {
            label: "쓰기",
            navigation: false,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              next();
            } else {
              utils.setSessionStore("basevue_auth_to", to.fullPath);
              router.push("/member/login").catch(() => {});
              next();
            }
          },
        },
        {
          path: "/module5/view_m5auth/:id",
          name: "m5authview",
          component: M5AuthView,
          meta: {
            label: "보기",
            navigation: false,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              next();
            } else {
              utils.setSessionStore("basevue_auth_to", to.fullPath);
              router.push("/member/login").catch(() => {});
              next();
            }
          },
        },
        {
          path: "/module5/edit_m5auth/:id",
          name: "m5authedit",
          component: M5AuthEdit,
          meta: {
            label: "수정",
            navigation: false,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              next();
            } else {
              utils.setSessionStore("basevue_auth_to", to.fullPath);
              router.push("/member/login").catch(() => {});
              next();
            }
          },
        },
      ],
    },
    {
      path: "/member",
      redirect: "/member/mypage",
      name: "member",
      component: Member,
      meta: {
        label: "회원",
        navigation: true,
      },
      children: [
        {
          path: "/member/mypage",
          name: "mypage",
          component: Mypage,
          meta: {
            label: "마이페이지",
            navigation: true,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              next();
            } else {
              router.push("/member/login").catch(() => {});
              next();
            }
          },
        },
        {
          path: "/member/login",
          name: "login",
          component: Login,
          meta: {
            label: "로그인",
            navigation: true,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              router.push("/member/mypage").catch(() => {});
              next();
            } else {
              next();
            }
          },
        },
        {
          path: "/member/logout",
          name: "logout",
          component: Logout,
          meta: {
            label: "로그아웃",
            navigation: false,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              next();
            } else {
              router.push("/member/login").catch(() => {});
              next();
            }
          },
        },
        {
          path: "/member/auth",
          name: "auth",
          component: Auth,
          meta: {
            label: "인증",
            navigation: false,
          },
          beforeEnter: function(to, from, next) {
            if (store.state.Authorized) {
              router.push("/member/mypage").catch(() => {});
              next();
            } else {
              next();
            }
          },
        },
      ],
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      meta: {
        label: "검색",
        navigation: false,
      },
    },
    {
      path: "/404",
      name: "notfound",
      component: NotFound,
      meta: {
        label: "Page Not Found",
        navigation: false,
      },
    },
    {
      path: "*",
      redirect: "/404",
      name: "other",
      component: NotFound,
      meta: {
        label: "Page Not Found",
        navigation: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch("actionAuthorized", {
    auth: utils.getLocalStore("basevue_auth_token"),
  });
  if (store.state.Authorized) {
    // Login
    const login = router.resolve({ name: "login" });
    login.resolved.meta.navigation = false;
    // Logout
    const logout = router.resolve({ name: "logout" });
    logout.resolved.meta.navigation = true;
    next();
  } else {
    next();
  }
});

export default router;
