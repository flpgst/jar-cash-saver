<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        Uhuul {{ account.name }}! Já separou o biquíni?<BR />
        A viagem pro Nordeste está mais perto do que nunca :)
      </v-col>
      <v-col cols="12" class="font-weight-bold">
        Você já poupou 70% do planejado para o seu objetivo, mas queremos te
        ajudar a curtir a brisa do mar ainda mais rápido. Que tal aproveitar as
        ofertas especiais que os nossos parceiros prepararam especialmente pra
        você?
      </v-col>
    </v-row>

    <!-- Partners -->
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <v-card outlined flat :to="item.to">
          <v-container class="py-2">
            <v-img
              :src="require(`../assets/partners/jars/${item.src}`)"
            ></v-img>
          </v-container>
        </v-card>
      </v-col>
      <!--  -->
    </v-row>
  </v-container>
</template>

<script>
import api from "../api";
export default {
  mounted() {
    this.account = api.getAccount();
  },
  data: () => ({
    account: {
      name: ""
    },
    items: [
      {
        src: "havan-viajens.jpg",
        to: "/jar-partners"
      },
      {
        src: "cvc.jpg",
        to: "/jar-partners"
      },
      {
        src: "fly-tour.jpg",
        to: "/jar-partners"
      },
      {
        src: "via-fly.jpg",
        to: "/jar-partners"
      }
    ]
  })
};
</script>
