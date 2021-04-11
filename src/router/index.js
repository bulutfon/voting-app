import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Idea from "../views/Idea.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/idea/:id",
    name: "Idea",
    component: Idea,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
