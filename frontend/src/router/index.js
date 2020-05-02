import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/initial",
    name: "Initial",
    component: () =>
      import(/* webpackChunkName: "initial" */ "../views/Initial.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tips",
    name: "Tips",
    component: () => import(/* webpackChunkName: "tips" */ "../views/Tips.vue")
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: () =>
      import(/* webpackChunkName: "tips" */ "../views/Achievements.vue")
  },
  {
    path: "/achievements-partners",
    name: "AchievementsPartners",
    component: () =>
      import(/* webpackChunkName: "tips" */ "../views/AchievementsPartners.vue")
  },
  {
    path: "/jars",
    name: "Jars",
    component: () => import(/* webpackChunkName: "tips" */ "../views/Jars.vue")
  },
  {
    path: "/jar/:id",
    name: "JarData",
    props: true,
    component: () =>
      import(/* webpackChunkName: "tips" */ "../views/JarData.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
