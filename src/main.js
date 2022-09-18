import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from "axios";

axios.defaults.baseURL = "https://ticketmasterappbackend.herokuapp.com";
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	store,
	render: (h) => h(App),
}).$mount("#app");
