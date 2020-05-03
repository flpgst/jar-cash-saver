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
    path: "/security-terms",
    name: "SecurityTerms",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "security-terms" */ "../views/SecurityTerms.vue"
      )
  },
  {
    path: "/connect-accounts",
    name: "ConnectAccounts",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "connect-accounts" */ "../views/ConnectAccounts.vue"
      )
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    props: true,
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
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
      import(/* webpackChunkName: "achievements" */ "../views/Achievements.vue")
  },
  {
    path: "/achievements-partners",
    name: "AchievementsPartners",
    component: () =>
      import(
        /* webpackChunkName: "achievement-partners" */ "../views/AchievementsPartners.vue"
      )
  },
  {
    path: "/jars",
    name: "Jars",
    component: () => import(/* webpackChunkName: "jars" */ "../views/Jars.vue")
  },
  {
    path: "/jar/:id",
    name: "JarData",
    props: true,
    component: () =>
      import(/* webpackChunkName: "jar" */ "../views/JarData.vue")
  },
  {
    path: "/new-jar",
    name: "JarCreation",
    props: true,
    component: () =>
      import(/* webpackChunkName: "new-jar" */ "../views/JarCreation.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
