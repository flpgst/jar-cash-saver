<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" class="d-flex justify-center">
        Nós também não resistimos a uma comprinha! Você pode usar as moedas que
        conquistou para comprar produtos e serviços com nossos parceiros.
        Confira as oportunidades.
      </v-col>
    </v-row>

    <!-- Partners -->
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <v-card flat :to="item.to">
          <v-system-bar :color="item.color" height="10" />
          <v-container class="py-2">
            <v-img
              :src="require(`../assets/partners/achievements/${item.src}`)"
            ></v-img>
          </v-container>
        </v-card>
      </v-col>
      <!--  -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "burguer-king.jpg",
        to: "achievements-prizes",
        color: "#6dd400"
      },
      {
        src: "udacity.jpg",
        to: "achievements-prizes",
        color: "#e02020"
      },

      {
        src: "league-of-legends.jpg",
        to: "achievements-prizes",
        color: "#f7b500"
      }
    ]
  })
};
</script>
