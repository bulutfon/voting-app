import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./index.css";

Vue.use(Vuex);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
