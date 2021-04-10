import Vue from "vue";
import Vuex from "vuex";
import ideas from "./ideas";
import categories from "./categories";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    ideas,
    categories,
  },
});
export default store;
