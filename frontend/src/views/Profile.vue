<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        class="headline font-weight-black d-flex justify-center pb-0"
      >
        Perfil
      </v-col>
      <v-col cols="12" class="font-weight-bold d-flex justify-center">
        <v-icon size="30" class="align-self-center"
          >mdi-account-cash-outline</v-icon
        ><span class="ml-2 align-self-center"> {{ account.name }}</span>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="8" class="py-0 d-flex justify-center">
        <v-list dense color="transparent" class="py-0">
          <v-subheader
            class="body-1 font-weight-bold black--text align-end px-0"
            >Contas Bancárias</v-subheader
          >
          <v-list-item
            v-for="(bankaccount, i) in account.bankAccounts"
            :key="i"
            class="mt-0"
          >
            <v-list-item-content class="py-0">
              <v-list-item-title v-html="bankaccount.name" />
              <v-list-item-subtitle
                v-html="
                  `Ag: ${bankaccount.number} - C/C: ${bankaccount.account}`
                "
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="modalBankAccount = true">
              <v-icon color="#6dd400">mdi-plus-circle</v-icon>
            </v-btn>
          </template>
          <span>Adicionar conta bancária</span>
        </v-tooltip>
      </v-col>
      <v-col cols="8" class="py-0">
        <v-list dense color="transparent" class="py-0">
          <v-subheader
            class="body-1 font-weight-bold black--text align-end px-0"
            >Cartões de crédito</v-subheader
          >
          <v-list-item v-for="(creditcard, i) in account.creditCards" :key="i">
            <v-list-item-content class="py-0">
              <v-list-item-title v-html="creditcard.name" />
              <v-list-item-subtitle v-html="creditcard.number" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="modalCreditCard = true">
              <v-icon color="#6dd400">mdi-plus-circle</v-icon>
            </v-btn>
          </template>
          <span>Adicionar cartão de crédito</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="10" class="py-0">
        <v-subheader class="body-1 font-weight-bold black--text align-end px-0"
          >Despesas</v-subheader
        ></v-col
      >
      <v-col cols="12">
        <cost-chart class="chart-height" />
      </v-col>
    </v-row>
    <v-dialog v-model="modalBankAccount">
      <v-card flat class="text-center py-3">
        <add-bank-account @onSubmit="addBankAccount" connectBtn />
      </v-card>
    </v-dialog>
    <v-dialog v-model="modalCreditCard">
      <v-card flat class="text-center py-3">
        <add-credit-card @onSubmit="addCreditCard" connectBtn />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import api from "../api";
import CostChart from "../components/CostsChart";
import AddBankAccount from "../components/AddBankAccount";
import AddCreditCard from "../components/AddCreditCard";

export default {
  name: "connect-acconts",
  mounted() {
    this.account = api.getAccount();
    this.bankAccounts = this.account.bankAccounts;
    this.creditCards = this.account.creditCards;
  },
  components: {
    CostChart,
    AddBankAccount,
    AddCreditCard
  },
  data: () => ({
    modalCreditCard: false,
    modalBankAccount: false,
    account: {
      name: "",
      currentValue: 0.0,
      creditCards: [],
      bankAccounts: []
    }
  }),
  methods: {
    addCreditCard(creditCard) {
      this.modalCreditCard = false;
      this.account.creditCards = [...this.creditCards, creditCard];
      api.saveAccount(this.account);
    },
    addBankAccount(bankAccount) {
      this.modalBankAccount = false;
      this.account.bankAccounts = [...this.bankAccounts, bankAccount];
      api.saveAccount(this.account);
    }
  }
};
</script>

<style scoped>
.chart-height {
  height: 150px;
}
</style>
