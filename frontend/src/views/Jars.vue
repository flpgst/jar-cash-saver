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
          <v-icon color="#6dd400">mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="4"
        v-for="(jar, i) in jars"
        :key="i"
        class="d-flex flex-wrap justify-center"
      >
        <v-badge :color="jar.locker.color" :icon="jar.locker.icon" overlap>
          <v-btn icon :to="jar.path">
            <v-icon size="40" :color="jar.color">{{ jar.icon }}</v-icon>
          </v-btn>
        </v-badge>
        <p class="font-weight-medium caption text-center">
          {{ jar.name }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    jars: [
      {
        id: 1,
        name: "Jarro da Reserva",
        icon: "mdi-cup",
        path: "jar/1",
        locker: {
          icon: "mdi-lock",
          color: "#f7b500"
        }
      },
      {
        id: 2,
        name: "Jarro da Despesa Emergencial",
        icon: "mdi-cup-outline",
        path: "jar/2",
        locker: {
          icon: "mdi-lock",
          color: "#f7b500"
        }
      },
      {
        id: 3,
        name: "Jarro do Futuro",
        icon: "mdi-cup",
        path: "jar/3",
        locker: {
          icon: "mdi-lock",
          color: "#f7b500"
        }
      },
      {
        id: 4,
        name: "Viagem Nordeste",
        icon: "mdi-cup-outline",
        path: "jar/4",
        locker: {
          icon: "mdi-exclamation-thick",
          color: "#e02020"
        }
      }
    ]
  })
};
</script>
