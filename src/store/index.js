import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async getUserData({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"));
        axios.defaults.headers.common["x-auth-header"] =
          localStorage.getItem("token");
      } else {
        delete axios.defaults.headers.common["x-auth-header"];
      }
      try {
        const res = await axios.get("http://localhost:5000/auth");

        commit("setUser", res.data);
        console.log(res.data);

        //console.log(res.data);
      } catch (error) {
        commit("setUser", null);
      }
    },
  },
  modules: {},
});
