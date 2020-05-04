<template>
  <div>
    <v-app-bar color="transparent" flat dense>
      <v-toolbar-title class="font-weight-black primary--text"
        >PoupJar</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-badge bottom left :content="coins" overlap>
            <v-btn icon v-on="on" to="achievements">
              <v-icon>$vuetify.icons.coins</v-icon>
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
  }
};
</script>
