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
import api from "./api";
import "./app.css";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import { addMonths } from "date-fns";

export default {
  name: "App",

  data: () => ({
    currentDate: new Date()
  }),

  components: {
    AppMenu,
    AppHeader
  },

  methods: {
    simulateMontlhyIncoming() {
      this.currentDate = addMonths(this.currentDate, 1);
      api.processMonthlyIncoming(this.currentDate);
    }
  },

  created() {
    this.$options.interval = setInterval(this.simulateMontlhyIncoming, 60000);
  }
};
</script>
