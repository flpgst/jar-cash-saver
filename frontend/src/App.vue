<template>
  <v-app>
    <app-header />
    <v-content>
      <router-view />
    </v-content>
    <app-menu />
  </v-app>
</template>

<script>
import "./app.css";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";

export default {
  name: "App",

  components: {
    AppMenu,
    AppHeader
  },

  data: () => ({
    //
  })
};
</script>
