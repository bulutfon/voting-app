import Vue from "vue";
import Vuex from "vuex";
import ideas from "./ideas";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    ideas,
  },
});
export default store;
