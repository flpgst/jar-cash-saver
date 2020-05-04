<template>
  <v-container>
    <!-- Extrato de moedas -->
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        class="headline font-weight-black d-flex justify-center pb-0"
      >
        Suas Moedas
      </v-col>
      <v-col cols="12" class="headline font-weight-black d-flex justify-center">
        <span class="align-self-center">
          <v-icon size="50" color="yellow darken-3"
            >$vuetify.icons.coins</v-icon
          >
        </span>
        <span class="align-self-center pl-3">
          {{ coins }}
        </span>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          text
          small
          color="primary"
          size="x-small"
          to="achievements-partners"
        >
          Veja como gastar suas moedas
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!--  -->
    <!-- Coleção de troféus -->
    <!-- 1 -->
    <v-row>
      <v-col
        cols="12"
        class="headline font-weight-black d-flex justify-center pb-0"
      >
        Seus Troféus
      </v-col>
      <v-col cols="6">
        <v-card outlined class="text-center">
          <v-system-bar color="#b620e0" height="10" />
          <v-container class="py-2">
            <v-img><trophy-img /></v-img>
          </v-container>
          <v-card-text class="font-weight-medium caption pb-0 px-1">
            Indicou 3 amigos
          </v-card-text>
          <v-card-text class="caption d-flex justify-center pa-0">
            Ganhou 5 moedas
          </v-card-text>
        </v-card>
      </v-col>
      <!--  -->
      <!-- 2 -->
      <v-col cols="6">
        <v-card outlined class="text-center">
          <v-system-bar color="#d6d6d6" height="10" />
          <v-container class="py-2">
            <v-img><trophy-disabled-img /></v-img>
          </v-container>
          <v-card-text class="font-weight-medium caption pb-0 px-1">
            Indicou 5 amigos
          </v-card-text>
          <v-card-text class="caption d-flex justify-center pa-0">
            Ganhou 20 moedas
          </v-card-text>
        </v-card>
      </v-col>
      <!--  -->
      <!-- 3 -->
      <v-col cols="6">
        <v-card outlined class="text-center">
          <v-system-bar color="#d6d6d6" height="10" />
          <v-container class="py-2">
            <v-img><trophy-disabled-img /></v-img>
          </v-container>
          <v-card-text class="font-weight-medium caption pb-0 px-1">
            Poupou mais que o mês anterior
          </v-card-text>
          <v-card-text class="caption d-flex justify-center pa-0">
            Ganhou 50 moedas
          </v-card-text>
        </v-card>
      </v-col>
      <!--  -->
      <!-- 4 -->
      <v-col cols="6">
        <v-card outlined class="text-center">
          <v-system-bar color="#d6d6d6" height="10" />
          <v-container class="py-2">
            <v-img><trophy-disabled-img /></v-img>
          </v-container>
          <v-card-text class="font-weight-medium caption pb-0 px-1">
            Já está poupando a 5 meses
          </v-card-text>
          <v-card-text class="caption d-flex justify-center pa-0">
            Ganhou 100 moedas
          </v-card-text>
        </v-card>
      </v-col>
      <!--  -->
    </v-row>
  </v-container>
</template>

<script>
import api from "../api";
import TrophyImg from "../components/images/Trophy";
import TrophyDisabledImg from "../components/images/TrophyDisable";

export default {
  name: "Achievements",

  data: () => ({
    coins: 0
  }),
  components: {
    TrophyImg,
    TrophyDisabledImg
  },
  mounted() {
    const account = api.getAccount();
    this.coins = account.coins;
  }
};
</script>
