<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="headline font-weight-black">
        Olá {{ account.name }}
      </v-col>
      <v-col class="py-0 font-weight-medium" cols="12">
        Até agora você juntou
      </v-col>
      <v-col
        cols="9"
        class=" py-0 align-self-center headline font-weight-black"
      >
        <span v-if="showCurrentValue"
          >R$ {{ account.currentValue.toFixed(2) }}</span
        >
        <span v-else>-</span>
      </v-col>
      <v-col cols="auto" class="py-0 align-self-center">
        <v-btn text fab small @click="showCurrentValue = !showCurrentValue">
          <v-icon
            >{{ showCurrentValue ? "mdi-eye-outline" : "mdi-eye-off-outline" }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat to="tips">
          <v-row class="ma-0">
            <v-avatar size="75" class="ml-2 align-self-center" tile>
              <v-img><tips-img /></v-img>
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
        <v-card flat to="achievements">
          <v-row class="ma-0">
            <v-avatar size="75" class="ml-2 align-self-center" tile>
              <v-img>
                <achievements-img />
              </v-img>
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
import api from "../api";
import TipsImg from "../components/images/Tips";
import AchievementsImg from "../components/images/Achievements";

export default {
  name: "Home",
  components: {
    TipsImg,
    AchievementsImg
  },
  data: () => ({
    showCurrentValue: true,
    account: {
      name: "",
      currentValue: 0.0
    }
  }),

  mounted() {
    this.account = api.getAccount();
    this.$store.commit("login");
  }
};
</script>

<style scoped>
.title-color {
  color: #00a857;
}
</style>
