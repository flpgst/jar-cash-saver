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
                  Saldo do dia
                </v-list-item-title>
                <v-list-item-title>
                  {{ transaction.type }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text class="text--primary">
                  {{ transaction.date }}
                </v-list-item-action-text>

                <v-list-item-action-text class="text--primary">
                  R$ {{ transaction.currentDateValue }}
                </v-list-item-action-text>

                <v-list-item-action-text
                  :class="transaction.value > 0 ? 'green--text' : 'red--text'"
                  class="text--accent-4 font-weight-bold"
                >
                  R$ {{ transaction.value }}
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
export default {
  data: () => ({
    transactions: [
      {
        date: "14/04/2020",
        currentDateValue: 453.56,
        type: "Rendimento",
        value: 1.89
      },
      {
        date: "15/04/2020",
        currentDateValue: 455.45,
        type: "Rendimento",
        value: 0.91
      },
      {
        date: "16/04/2020",
        currentDateValue: 456.36,
        type: "Rendimento",
        value: 0.87
      },
      {
        date: "18/04/2020",
        currentDateValue: 457.23,
        type: "Resgate",
        value: -200.0
      },
      {
        date: "19/04/2020",
        currentDateValue: 257.23,
        type: "Rendimento",
        value: 0.32
      }
    ]
  })
};
</script>
