<template>
  <div>
    <v-row class="font-weight-bold d-flex justify-center py-0 my-0">
      <v-col cols="10" class="text-center pb-0">
        Cartão de crédito
      </v-col>
      <v-col cols="10">
        <v-text-field
          v-model="card.number"
          id="cardNumber"
          ref="cardNumber"
          placeholder="Número do cartão"
          outlined
          dense
        />
      </v-col>
      <v-btn
        v-if="connectBtn"
        rounded
        depressed
        dark
        color="#00a857"
        @click="submit"
      >
        Conectar
      </v-btn>
    </v-row>
  </div>
</template>
<script>
import Cleave from "cleave.js";

export default {
  mounted() {
    new Cleave("#cardNumber", {
      creditCard: true,
      onCreditCardTypeChanged: type => {
        this.card.name = type;
      }
    });
  },
  props: {
    connectBtn: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    card: {
      name: "",
      number: ""
    }
  }),
  methods: {
    submit() {
      this.$emit("onSubmit", this.card);
    }
  }
};
</script>
