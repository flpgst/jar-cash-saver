<template>
  <v-row class="font-weight-bold d-flex justify-center py-0 my-0">
    <v-col cols="10" class="text-center pb-0">
      Cartão de crédito
    </v-col>
    <v-col cols="10">
      <v-text-field
        v-model="creditcard"
        placeholder="Número do cartão"
        outlined
        dense
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    creditcard: null
  })
};
</script>
