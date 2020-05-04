<template>
  <v-container class="fill-height">
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        class="headline font-weight-black d-flex justify-center pb-0"
      >
        Vamos conectar suas contas!
      </v-col>
      <v-col cols="12" class="font-weight-medium d-flex justify-center">
        Por favor, informe seus dados
      </v-col>
    </v-row>
    <v-row class="font-weight-bold d-flex justify-center">
      <v-col cols="10" class="text-center pb-0">
        Insira aqui seu CPF
      </v-col>
      <v-col cols="10" class="justify-self-center pa-0">
        <v-text-field
          dense
          v-model="cpf"
          placeholder="Número do documento"
          outlined
        />
      </v-col>
    </v-row>

    <add-credit-card @onChange="card => syncCreditCard(card)" />

    <add-bank-account
      @onChange="bank => syncBankAccount(bank)"
      @bank="e => handleButton(e)"
    />

    <v-col cols="12" class="text-center py-0">
      <v-btn
        rounded
        depressed
        :disabled="!disabled"
        color="#00a857"
        :dark="disabled"
        @click="submit"
        >Conectar</v-btn
      >
    </v-col>
  </v-container>
</template>

<script>
import AddBankAccount from "../components/AddBankAccount";
import AddCreditCard from "../components/AddCreditCard";
import api from "../api";

export default {
  name: "connect-acconts",
  data: () => ({
    cpf: null,
    creditCard: null,
    bankAccount: null,
    disabled: false
  }),
  components: {
    AddBankAccount,
    AddCreditCard
  },
  methods: {
    handleButton(e) {
      this.disabled = e;
    },
    syncCreditCard(creditCard) {
      this.creditCard = creditCard;
    },
    syncBankAccount(bankAccount) {
      this.bankAccount = bankAccount;
    },
    submit() {
      const account = api.getAccount();
      account.cpf = this.cpf;
      account.creditCards.push(this.creditCard);
      account.bankAccounts.push(this.bankAccount);
      api.saveAccount(account);
      this.$router.push("/");
    }
  }
};
</script>
