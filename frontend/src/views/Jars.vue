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
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon to="new-jar" v-on="on">
              <v-icon color="#6dd400">mdi-plus-circle</v-icon>
            </v-btn>
          </template>
          <span>Criar novo jarro</span>
        </v-tooltip>
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
          v-if="jar.unlockable"
          :color="getBadgeColor(jar)"
          :icon="getLockIcon(jar)"
          overlap
        >
          <v-badge
            :color="jar.shared ? '#b620e0' : 'transparent'"
            :icon="jar.shared ? 'mdi-account-group-outline' : ''"
            overlap
            bottom
          >
            <v-btn icon :to="`jar/${jar.id}`">
              <v-icon size="40" :color="jar.color">{{ getIcon(jar) }}</v-icon>
            </v-btn>
          </v-badge>
        </v-badge>
        <v-btn v-else icon :to="`jar/${jar.id}`">
          <v-icon size="40" :color="jar.color">{{ getIcon(jar) }}</v-icon>
        </v-btn>
        <p class="font-weight-medium caption text-center" style="width: 100%">
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
      if (jar.status === "COMPLETED")
        return `$vuetify.icons.jar${jar.color}full`;

      if (jar.targetValue && jar.currentValue < jar.targetValue * 0.1) {
        return `$vuetify.icons.jar${jar.color}empty`;
      }

      return `$vuetify.icons.jar${jar.color}half`;
    },
    getLockIcon(jar) {
      let icon;
      switch (jar.status) {
        case "LOCKED":
          icon = "mdi-lock";
          break;
        case "UNLOCKED":
          icon = "mdi-exclamation-thick";
          break;
        case "ACHIEVED":
          icon = "mdi-lock-open-variant";
          break;
        case "COMPLETED":
          icon = "mdi-check-bold";
          break;
      }
      return icon;
    },
    getBadgeColor(jar) {
      let color;
      switch (jar.status) {
        case "LOCKED":
          color = "#f7b500";
          break;
        case "UNLOCKED":
          color = "#da3d37";
          break;
        case "ACHIEVED":
          color = "blue";
          break;
        case "COMPLETED":
          color = "#00a857";
          break;
      }
      return color;
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
