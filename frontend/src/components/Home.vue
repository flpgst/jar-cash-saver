<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="headline font-weight-black">
        Olá Fernando
      </v-col>
      <v-col class="py-0 font-weight-medium" cols="12">
        Até agora você juntou
      </v-col>
      <v-col
        cols="9"
        class=" py-0 align-self-center headline font-weight-black"
      >
        R$ 3.123,32
      </v-col>
      <v-col cols="auto" class="py-0 align-self-center">
        <v-btn text fab small>
          <v-icon>mdi-eye-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-row class="ma-0">
            <v-avatar size="75" class="ml-2 align-self-center" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
              ></v-img>
            </v-avatar>
            <v-col class="pa-0 title-color">
              <v-card-title class="headline">
                Dicas
                <v-spacer />
                <v-btn text fab small>
                  <v-icon color="#00a857">mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-subtitle
                >Quando o assunto é poupar, veja dicas de quem entende
                disso!</v-card-subtitle
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-row class="ma-0">
            <v-avatar size="75" class="ml-2 align-self-center" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
              ></v-img>
            </v-avatar>
            <v-col class="pa-0 title-color">
              <v-card-title class="headline">
                Conquistas
                <v-spacer />
                <v-btn text fab small>
                  <v-icon color="#00a857">mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-subtitle
                >Veja aqui seus troféus e suas moedas!</v-card-subtitle
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({})
};
</script>
<style scoped>
.title-color {
  color: #00a857;
}
</style>
