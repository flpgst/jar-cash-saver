<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    <!-- component  header (onde mostrar as moedas)-->

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-content>
      <home />
    </v-content>
      <v-footer app>
    <!-- menu inferior de navegação -->
  </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
.something {
  color: var(--v-primary-base);
  background-color: var(--v-accent-lighten2);
}
</style>
