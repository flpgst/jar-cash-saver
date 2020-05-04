<template>
  <div v-show="logged">
    <v-app-bar color="transparent" flat dense>
      <v-toolbar-title>Nome/Logo do APP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-badge bottom left :content="coins" overlap>
            <v-btn icon v-on="on" to="achievements">
              <v-icon color="yellow darken-3"
                >mdi-circle-multiple-outline</v-icon
              >
            </v-btn>
          </v-badge>
        </template>
        <span>Moedas</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "Home",

  data: () => ({
    coins: 0
  }),

  mounted() {
    const account = api.getAccount();
    this.coins = account.coins;
  },

  computed: {
    logged() {
      return this.$store.state.logged;
    }
  }
};
</script>
