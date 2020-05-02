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
        <v-badge
          v-if="jar.targetValue"
          color="#f7b500"
          :icon="getLockIcon(jar)"
          overlap
        >
          <v-btn icon :to="`jar/${jar.id}`">
            <v-icon size="40" :color="jar.color">{{ getIcon(jar) }}</v-icon>
          </v-btn>
        </v-badge>
        <v-btn v-else icon :to="`jar/${jar.id}`">
          <v-icon size="40" :color="jar.color">{{ getIcon(jar) }}</v-icon>
        </v-btn>
        <p class="font-weight-medium caption text-center">
          {{ jar.name }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../api";

export default {
  methods: {
    getIcon(jar) {
      if (jar.currentValue === 0) {
        return "mdi-cup-outline";
      } else {
        return "mdi-cup";
      }
    },
    getLockIcon(jar) {
      if (!jar.targetValue) {
        return "";
      }
      return jar.targetValue * 0.7 < jar.currentValue
        ? "mdi-lock"
        : "mdi-exclamation-thick";
    }
  },
  data: () => ({
    jars: []
  }),
  mounted() {
    this.jars = api.getJars();
  }
};
</script>
