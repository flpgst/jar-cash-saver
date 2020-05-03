<template>
  <v-row class="font-weight-bold d-flex justify-center">
    <v-col cols="10" class="text-center pb-0">
      Dados da conta
    </v-col>
    <v-col cols="5" class="pb-0">
      <v-text-field
        v-model="bank.number"
        placeholder="Agência"
        outlined
        dense
        @input="handleBank()"
      />
    </v-col>
    <v-col cols="5" class="pb-0">
      <v-text-field
        v-model="bank.account"
        placeholder="Conta (com dígito)"
        outlined
        dense
        @input="handleBank()"
      />
    </v-col>
    <v-col cols="10" class="pt-0">
      <v-select
        v-model="bank.name"
        :items="banks"
        :item-text="b => `${b.value} - ${b.label}`"
        item-value="value"
        placeholder="Nome ou número do banco"
        outlined
        dense
        @input="handleBank()"
      />
    </v-col>
  </v-row>
</template>
<script>
import banks_list from "../util/banks_list.json";
export default {
  data: () => ({
    banks: banks_list,
    bank: [
      {
        name: null,
        number: null,
        account: null
      }
    ]
  }),
  methods: {
    handleBank() {
      this.$emit(
        "bank",
        !!this.bank.number && !!this.bank.account && !!this.bank.name
      );
    }
  }
};
</script>
