import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Home
  },
  {
    path: "/jars",
    name: "Jars",
    component: Home
  },
  {
    path: "/tips",
    name: "Tips",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
