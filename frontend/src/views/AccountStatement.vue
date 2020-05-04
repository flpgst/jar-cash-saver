<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="headline font-weight-black pb-0">
        Extrato
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list two-line dense color="transparent">
          <template v-for="(transaction, index) in transactions">
            <v-list-item :key="transaction.value + index">
              <v-list-item-content>
                <v-list-item-title class="transparent--text"
                  >.</v-list-item-title
                >
                <v-list-item-title>
                  Saldo - {{ transaction.jar }}
                </v-list-item-title>
                <v-list-item-title>
                  {{ transaction.description }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text class="text--primary">
                  {{ transaction.date }}
                </v-list-item-action-text>

                <v-list-item-action-text class="text--primary">
                  R$ {{ transaction.previousValue.toFixed(2) }}
                </v-list-item-action-text>

                <v-list-item-action-text
                  :class="
                    transaction.incomeValue > 0 ? 'green--text' : 'red--text'
                  "
                  class="text--accent-4 font-weight-bold"
                >
                  R$ {{ transaction.incomeValue.toFixed(2) }}
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>

            <v-divider
              v-if="index + 1 < transactions.length"
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

export default {
  data: () => ({
    transactions: []
  }),
  mounted() {
    this.transactions = api.getAccountTransactions();
  }
};
</script>
