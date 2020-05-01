<template>
  <v-bottom-navigation background-color="#aeefaa" :value="activeBtn">
    <v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-home-outline</v-icon>
        </template>
        <span>Ínicio</span>
      </v-tooltip>
    </v-btn>

    <v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-currency-usd-circle-outline</v-icon>
        </template>
        <span>Meus Jarros</span>
      </v-tooltip>
    </v-btn>

    <v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-account-outline</v-icon>
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
  }
};
</script>
