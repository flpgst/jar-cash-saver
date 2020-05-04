import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: true
  },
  mutations: {
    login(state) {
      state.logged = true;
    },
    logout(state) {
      state.logged = false;
    }
  },
  actions: {},
  modules: {}
});
