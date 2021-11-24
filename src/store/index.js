import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  // State
  state: {
    Authorized: "",
    AuthorizedUser: "",
    BoardListPopLike: [],
    BoardListFree: [],
    BoardViewFree: {},
    BoardListNews: [],
    BoardViewNews: {},
    BoardListCoin: [],
    BoardViewCoin: {},
    BoardListLive: [],
    BoardViewLive: {},
    BoardListMoreList: [],
    BoardListMorePage: {},
    BoardListInfiniteList: [],
    BoardListInfinitePage: {},
    BoardListMasonryList: [],
    BoardListMasonryPage: {},
    BoardListNotice: [],
    BoardViewNotice: {},
    EventList: [],
    EventView: {},
    SearchList: [],
    CategoryList: [],
  },

  // Mutation
  mutations: {
    // Authorized
    Authorized(state, Authorized){
      state.Authorized = Authorized;
    },
    AuthorizedUser(state, AuthorizedUser){
      state.AuthorizedUser = AuthorizedUser;
    },
    // Popular and Like
    BoardListPopLike(state, BoardListPopLike){
      state.BoardListPopLike = BoardListPopLike;
    },
    // Free
    BoardListFree(state, BoardListFree) {
      state.BoardListFree = BoardListFree;
    },
    BoardViewFree(state, BoardViewFree) {
      state.BoardViewFree = BoardViewFree;
    },
    // News
    BoardListNews(state, BoardListNews) {
      state.BoardListNews = BoardListNews;
    },
    BoardViewNews(state, BoardViewNews) {
      state.BoardViewNews = BoardViewNews;
    },
    // Coin
    BoardListCoin(state, BoardListCoin) {
      state.BoardListCoin = BoardListCoin;
    },
    BoardViewCoin(state, BoardViewCoin) {
      state.BoardViewCoin = BoardViewCoin;
    },
    // Live
    BoardListLive(state, BoardListLive) {
      state.BoardListLive = BoardListLive;
    },
    BoardViewLive(state, BoardViewLive) {
      state.BoardViewLive = BoardViewLive;
    },
    // Notice
    BoardListNotice(state, BoardListNotice) {
      state.BoardListNotice = BoardListNotice;
    },
    BoardViewNotice(state, BoardViewNotice) {
      state.BoardViewNotice = BoardViewNotice;
    },
    // More
    BoardListMoreList(state, BoardListMoreList) {
      state.BoardListMoreList.push(...BoardListMoreList);
    },
    BoardListMorePage(state, BoardListMorePage) {
      state.BoardListMorePage = BoardListMorePage;
    },
    // Infinite
    BoardListInfiniteList(state, BoardListInfiniteList) {
      state.BoardListInfiniteList.push(...BoardListInfiniteList);
    },
    BoardListInfinitePage(state, BoardListInfinitePage) {
      state.BoardListInfinitePage = BoardListInfinitePage;
    },
    // Masonry
    BoardListMasonryList(state, BoardListMasonryList) {
      state.BoardListMasonryList.push(...BoardListMasonryList);
    },
    BoardListMasonryPage(state, BoardListMasonryPage) {
      state.BoardListMasonryPage = BoardListMasonryPage;
    },
    // Event
    EventList(state, EventList) {
      state.EventList = EventList;
    },
    EventView(state, EventView) {
      state.EventView = EventView;
    },
    // Search
    SearchList(state, SearchList) {
      state.SearchList = SearchList;
    },
    // Category
    CategoryList(state, CategoryList) {
      state.CategoryList = CategoryList;
    },
  },

  // Action
  actions: {
    actionAuthorized({ commit }, { auth }) {
      commit("Authorized", auth);
    },
    actionAuthorizedUser({ commit }, { user }) {
      commit("AuthorizedUser", user);
    },
    actionBoardListPopLike({ commit }, { id1, id2 }) {
      Vue.prototype.$api
        .getBoardPopLike(id1, id2)
        .then((response) => {
          commit("BoardListPopLike", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListFree({ commit }, { page, perPage, sort, keyword, target, category }) {
      Vue.prototype.$api
        .getBoardListFree(page, perPage, sort, keyword, target, category)
        .then((response) => {
          commit("BoardListFree", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardViewFree({ commit }, { id }) {
      Vue.prototype.$api
        .getBoardViewFree(id)
        .then((response) => {
          commit("BoardViewFree", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListNews({ commit }, { page, perPage, sort, keyword, target, category }) {
      Vue.prototype.$api
        .getBoardListNews(page, perPage, sort, keyword, target, category)
        .then((response) => {
          commit("BoardListNews", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardViewNews({ commit }, { id }) {
      Vue.prototype.$api
        .getBoardViewNews(id)
        .then((response) => {
          commit("BoardViewNews", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListLive({ commit }, { page, perPage, sort, keyword, target }) {
      Vue.prototype.$api
        .getBoardListLive(page, perPage, sort, keyword, target)
        .then((response) => {
          commit("BoardListLive", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardViewLive({ commit }, { id }) {
      Vue.prototype.$api
        .getBoardViewLive(id)
        .then((response) => {
          commit("BoardViewLive", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListCoin({ commit }, { page, perPage, sort, keyword, target }) {
      Vue.prototype.$api
        .getBoardListCoin(page, perPage, sort, keyword, target)
        .then((response) => {
          commit("BoardListCoin", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardViewCoin({ commit }, { id }) {
      Vue.prototype.$api
        .getBoardViewCoin(id)
        .then((response) => {
          commit("BoardViewCoin", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListNotice({ commit }, { page, perPage, sort, keyword, target }) {
      Vue.prototype.$api
        .getBoardListNotice(page, perPage, sort, keyword, target)
        .then((response) => {
          commit("BoardListNotice", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardViewNotice({ commit }, { id }) {
      Vue.prototype.$api
        .getBoardViewNotice(id)
        .then((response) => {
          commit("BoardViewNotice", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListMore({ commit }, { page, perPage, sort, keyword, target }) {
      Vue.prototype.$api
        .getBoardListFree(page, perPage, sort, keyword, target)
        .then((response) => {
          commit("BoardListMoreList", response.data.list);
          commit("BoardListMorePage", response.data.page);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListInfinite({ commit }, { page, perPage, sort, keyword, target }) {
      Vue.prototype.$api
        .getBoardListNews(page, perPage, sort, keyword, target)
        .then((response) => {
          commit("BoardListInfiniteList", response.data.list);
          commit("BoardListInfinitePage", response.data.page);
        })
        .catch((error) => console.log(error));
    },
    actionBoardListMasonry({ commit }, { page, perPage, sort, keyword, target }) {
      Vue.prototype.$api
        .getBoardListLive(page, perPage, sort, keyword, target)
        .then((response) => {
          commit("BoardListMasonryList", response.data.list);
          commit("BoardListMasonryPage", response.data.page);
        })
        .catch((error) => console.log(error));
    },
    actionEventList({ commit }, { page, perPage, keyword, target }) {
      Vue.prototype.$api
        .getEventList(page, perPage, keyword, target)
        .then((response) => {
          commit("EventList", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionEventView({ commit }, { id }) {
      Vue.prototype.$api
        .getEventView(id)
        .then((response) => {
          commit("EventView", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionSearchList({ commit }, { page, perPage, fullSearch, mid }) {
      Vue.prototype.$api
        .getSearchList(page, perPage, fullSearch, mid)
        .then((response) => {
          commit("SearchList", response.data);
        })
        .catch((error) => console.log(error));
    },
    actionCategoryList({ commit }) {
      Vue.prototype.$api
        .getCategoryList()
        .then((response) => {
          commit("CategoryList", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
