<template>
  <v-container v-if="jar">
    <v-row class="text-center">
      <v-col cols="12" class="headline font-weight-black pb-0">
        Extrato do {{ jar.name }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list two-line dense color="transparent">
          <template v-for="(history, index) in jar.history">
            <v-list-item :key="history.date + index">
              <v-list-item-content>
                <v-list-item-title class="transparent--text"
                  >.</v-list-item-title
                >
                <v-list-item-title>
                  Saldo do dia
                </v-list-item-title>
                <v-list-item-title>
                  {{ history.description }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text class="text--primary">
                  {{ history.date.split(" ")[0] }}
                </v-list-item-action-text>

                <v-list-item-action-text class="text--primary">
                  R$ {{ history.previousValue.toFixed() }}
                </v-list-item-action-text>

                <v-list-item-action-text
                  :class="history.incomeValue > 0 ? 'green--text' : 'red--text'"
                  class="text--accent-4 font-weight-bold"
                >
                  R$ {{ history.incomeValue.toFixed() }}
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>

            <v-divider
              v-if="index + 1 < jar.history.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../api";
import { format, parseISO } from "date-fns";
export default {
  props: {
    id: String
  },
  data: () => ({
    jar: null
  }),
  mounted() {
    this.loadJarData();
  },
  methods: {
    format,
    parseISO,
    loadJarData() {
      const id = parseInt(this.id);
      this.jar = api.getJarById(id);
    }
  }
};
</script>
