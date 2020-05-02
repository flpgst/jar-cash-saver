<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        class="headline font-weight-black d-flex justify-center pb-0"
      >
        Meus Jarros
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn icon>
          <v-icon color="6dd400">mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="(jar, i) in jars" :key="i">
        <v-btn icon :to="jar.path">
          <v-icon :color="jar.color">{{ jar.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      jars: [
        {
          id: 1,
          name: "Jarro da Reserva",
          icon: "me-poupe.jpg",
          path: "jar/1"
        },
        {
          id: 2,
          name: "Jarro da Despesa Emergencial",
          icon: "primo-rico.jpg",
          path: "jar/2"
        },

        {
          id: 3,
          name: "Jarro do Futuro",
          icon: "spiti.jpg",
          path: "jar/3"
        }
      ]
    };
  }
};
</script>
