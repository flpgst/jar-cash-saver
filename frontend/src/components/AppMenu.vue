<template>
  <v-bottom-navigation
    v-show="logged"
    background-color="#B9FBAF"
    :value="activeBtn"
    app
  >
    <v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn to="/" v-on="on">
            <v-icon>mdi-home-outline</v-icon>
          </v-btn>
        </template>
        <span>Ínicio</span>
      </v-tooltip>
    </v-btn>

    <v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn to="/jars" v-on="on">
            <v-icon>$vuetify.icons.jarmenu</v-icon>
          </v-btn>
        </template>
        <span>Meus Jarros</span>
      </v-tooltip>
    </v-btn>

    <v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn to="/profile" v-on="on">
            <v-icon>mdi-account-outline</v-icon>
          </v-btn>
        </template>
        <span>Meu Perfil</span>
      </v-tooltip>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  },
  computed: {
    logged() {
      return this.$store.state.logged;
    }
  }
};
</script>
