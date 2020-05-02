<template>
  <v-container>
    <v-row class="my-12">
      <v-col
        cols="12"
        class="display-1 font-weight-black text-center title-color"
      >
        <span class="title-color"> POUINJAR</span>
      </v-col>
    </v-row>
    <v-row class="text-center pt-6">
      <v-col cols="12" class="font-weight-medium">
        Comece conectando suas contas corrente e cartões de crédito
      </v-col>
      <v-col cols="12">
        <v-btn rounded color="#f7b500" depressed to="connect-accounts">
          Conectar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Initial"
};
</script>

<style scoped>
.title-color {
  color: #f7b500;
}
</style>
