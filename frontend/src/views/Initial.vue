<template>
  <v-container class="fill-height">
    <v-row class="mt-5">
      <v-col cols="12" class="display-1 font-weight-black text-center">
        <span class="secondary--text"> POUPJAR</span>
      </v-col>
    </v-row>
    <v-row class="text-center ">
      <v-col cols="12" class="font-weight-medium">
        Comece conectando suas contas corrente e cartões de crédito
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" class="mt-0 pt-0">
        <v-btn
          rounded
          color="secondary"
          class="black--text"
          depressed
          to="security-terms"
        >
          Conectar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Initial",
  mounted() {
    this.$store.commit("logout");
  }
};
</script>
