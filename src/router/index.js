import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/Login",
  //   name: "login",
  //   component: Login,
  // },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
