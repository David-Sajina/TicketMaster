import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
		token: localStorage.getItem("token"),
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		setToken(state, token) {
			state.token = token;
		},
		logout(state) {
			state.user = null;
			state.token = null;
		},
	},
	actions: {
		async getUserData({ commit }) {
			let res = "";
			if (localStorage.getItem("token")) {
				commit("setToken", localStorage.getItem("token"));
				axios.defaults.headers.common["x-auth-header"] =
					localStorage.getItem("token");
			} else {
				delete axios.defaults.headers.common["x-auth-header"];
			}
			try {
				res = await axios.get("/auth");

				commit("setUser", res.data);
				console.log("user", res.data);
				//console.log(res.data);
			} catch (error) {
				commit("setUser", null);
			}
		},
	},
	modules: {},
	getters: {
		user(state) {
			return state.user;
		},
	},
});
