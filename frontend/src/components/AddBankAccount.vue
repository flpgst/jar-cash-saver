<template>
  <div>
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
          item-value="label"
          placeholder="Nome ou número do banco"
          outlined
          dense
          @input="handleBank()"
        />
      </v-col>
    </v-row>
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
  </div>
</template>
<script>
import banks_list from "../util/banks_list.json";
export default {
  data: () => ({
    banks: banks_list,
    bank: {
      name: "",
      number: "",
      account: ""
    }
  }),
  props: {
    onSubmit: {
      type: Function,
      default: () => {}
    },
    connectBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit() {
      this.$emit("onSubmit", this.bank);
    },
    handleBank() {
      this.$emit(
        "bank",
        !!this.bank.number && !!this.bank.account && !!this.bank.name
      );
    }
  },
  watch: {
    bank: {
      handler: function(val) {
        this.$emit("onChange", val);
      },
      deep: true
    }
  }
};
</script>
