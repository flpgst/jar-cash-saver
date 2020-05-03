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
    <v-row class="font-weight-bold d-flex justify-center py-0 my-0">
      <v-col cols="10" class="text-center pb-0">
        Cartão de crédito
      </v-col>
      <v-col cols="10">
        <v-text-field
          v-model="cpf"
          placeholder="Número do cartão"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row class="font-weight-bold d-flex justify-center">
      <v-col cols="10" class="text-center pb-0">
        Dados da conta
      </v-col>
      <v-col cols="5" class="pb-0">
        <v-text-field
          v-model="bankBranch"
          placeholder="Agência"
          outlined
          dense
        />
      </v-col>
      <v-col cols="5" class="pb-0">
        <v-text-field
          v-model="bankAccount"
          placeholder="Conta (com dígito)"
          outlined
          dense
        />
      </v-col>
      <v-col cols="10" class="pt-0">
        <v-select
          v-model="bank"
          :items="banks"
          :item-text="b => `${b.value} - ${b.label}`"
          item-value="value"
          placeholder="Nome ou número do banco"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>

    <v-col cols="12" class="text-center py-0">
      <v-btn
        rounded
        depressed
        :disabled="!bank || !bankBranch || !bankAccount"
        color="#00a857"
        :dark="!!bank && !!bankBranch && !!bankAccount"
        to="connect-accounts"
        >Conectar</v-btn
      >
    </v-col>
  </v-container>
</template>

<script>
import banks_list from "../util/banks_list.json";
export default {
  name: "connect-acconts",
  data: () => ({
    banks: banks_list,
    bank: null,
    bankBranch: null,
    bankAccount: null,
    cpf: null,
    creditCard: null
  })
};
</script>
