<template>
  <v-container v-if="jar">
    <v-row>
      <v-col cols="12" class="font-weight-black text-center pb-0">
        {{ jar.name }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-badge color="#f7b500" :icon="getLockIcon(jar)" overlap>
          <v-tooltip color="#f7b500" right>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" size="80" :color="jar.color">{{
                getIcon(jar)
              }}</v-icon>
            </template>
            <span class="caption">
              O cadeado abrirá apenas quando o jarro estiver 70% completo
            </span>
          </v-tooltip>
        </v-badge>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          :value="jar.targetValue"
          label="Meta estipulada"
          :readonly="editTargetValue"
          dense
          prefix="R$"
          :append-outer-icon="editableIcon(editTargetValue)"
          @click:append-outer="editTargetValue = !editTargetValue"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          :value="account.monthlySaving * jar.fraction"
          label="Valor depositado por mês"
          readonly
          prefix="R$"
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          :value="jar.currentValue"
          label="Valor poupado até o momento"
          readonly
          dense
          prefix="R$"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          :value="jar.dueDate"
          label="Data para atingir a meta"
          :readonly="editDueDate"
          dense
          :append-outer-icon="editableIcon(editDueDate)"
          @click:append-outer="editDueDate = !editDueDate"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../api";

export default {
  props: {
    id: String
  },
  data: () => ({
    editTargetValue: true,
    editDueDate: true,
    account: null,
    jar: null
  }),
  methods: {
    getIcon(jar) {
      if (jar.currentValue === 0) {
        return "mdi-cup-outline";
      } else {
        return "mdi-cup";
      }
    },
    getLockIcon(jar) {
      return jar.targetValue * 0.7 < jar.currentValue
        ? "mdi-lock"
        : "mdi-exclamation-thick";
    },
    editing() {
      return true;
    },
    editableIcon(editable) {
      return editable ? "mdi-pencil" : "mdi-content-save";
    }
  },
  mounted() {
    const id = parseInt(this.id);
    this.account = api.getAccount();
    this.jar = api.getJarById(id);
  }
};
</script>
