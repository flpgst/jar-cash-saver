<template>
  <v-container>
    <v-row class="text-center font-weight-bold">
      <v-col cols="12">
        Oba! Seu jarro foi criado com sucesso. Acompanhe o andamento da meta na
        tela inicial.
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-icon size="80">$vuetify.icons.jar{{ color }}empty</v-icon>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn rounded depressed dark color="#00a857" to="/jars">
          Acompanhar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    color: String
  },
  mounted() {
    console.log("color :>> ", this.color);
  }
};
</script>
