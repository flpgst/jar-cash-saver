<template>
  <v-app>
    <app-header />
    <v-content>
      <home />
    </v-content>
    <app-menu />
  </v-app>
</template>

<script>
import "./app.css";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home,
    AppMenu,
    AppHeader
  },

  data: () => ({
    //
  })
};
</script>
