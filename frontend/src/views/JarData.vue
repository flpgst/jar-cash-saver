<template>
  <v-container v-if="jar">
    <v-row>
      <v-col cols="12" class="font-weight-black text-center pb-0">
        {{ jar.name }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-badge :color="getBadgeColor()" :icon="getLockIcon()" overlap>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-icon
                @click="getWarning(jar.status, true)"
                v-on="on"
                size="80"
                :color="jar.color"
                >{{ getIcon() }}</v-icon
              >
            </template>
            <span class="caption" v-if="jar.status === 'LOCKED'">
              O cadeado abrirá apenas quando o jarro estiver 70% completo
            </span>
            <span v-else
              >Seu jarro está completo! Clique e veja as promoções que
              preparamos!
            </span>
          </v-tooltip>
        </v-badge>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          v-model="targetValue"
          label="Meta estipulada"
          :readonly="editTargetValue"
          dense
          prefix="R$"
          :append-outer-icon="editableIcon(editTargetValue)"
          @click:append-outer="toggleEditTargetValue"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          :value="getMonthlyValue()"
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
          :value="jar.currentValue.toFixed(2)"
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
          v-model="dueDate"
          label="Data para atingir a meta"
          :readonly="editDueDate"
          dense
          :append-outer-icon="editableIcon(editDueDate)"
          @click:append-outer="toggleEditDueDate"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-dialog v-model="warning">
      <v-card flat>
        <complete-warning :jar="jar" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import api from "../api";
import CompleteWarning from "../components/JarCompleteWarning";
import { format, parseISO } from "date-fns";

export default {
  props: {
    id: String
  },
  components: {
    CompleteWarning
  },
  data: () => ({
    targetValue: "",
    dueDate: "",
    editTargetValue: true,
    editDueDate: true,
    account: null,
    jar: null,
    warning: false
  }),
  methods: {
    format,
    parseISO,
    getWarning(status, clicked) {
      if (
        (status === "UNLOCKED" && !clicked) ||
        (status !== "UOCKED" && clicked)
      ) {
        this.warning = true;
      }
    },
    getMonthlyValue() {
      return (this.account.monthlySaving * this.jar.fraction).toFixed(2);
    },
    getIcon() {
      if (this.jar.currentValue === 0) {
        return "mdi-cup-outline";
      } else {
        return "mdi-cup";
      }
    },
    getLockIcon() {
      let icon;
      switch (this.jar.status) {
        case "LOCKED":
          icon = "mdi-lock";
          break;
        case "UNLOCKED":
          icon = "mdi-exclamation-thick";
          break;
        case "ACHIEVED":
          icon = "mdi-lock-open-variant";
          break;
        case "COMPLETED":
          icon = "mdi-check-bold";
          break;
      }
      return icon;
    },
    getBadgeColor() {
      let color;
      switch (this.jar.status) {
        case "LOCKED":
          color = "#f7b500";
          break;
        case "UNLOCKED":
          color = "#da3d37";
          break;
        case "ACHIEVED":
          color = "blue";
          break;
        case "COMPLETED":
          color = "#00a857";
          break;
      }
      return color;
    },
    editing() {
      return true;
    },
    editableIcon(editable) {
      return editable ? "mdi-pencil" : "mdi-content-save";
    },
    toggleEditTargetValue() {
      if (!this.editTargetValue) {
        api.saveJar({ ...this.jar, targetValue: parseFloat(this.targetValue) });
      }
      this.editTargetValue = !this.editTargetValue;
    },
    toggleEditDueDate() {
      if (!this.editDueDate) {
        const dateParts = this.dueDate.split("/");
        const newDueDate = new Date(
          dateParts[2],
          parseInt(dateParts[1]) - 1,
          dateParts[0]
        );
        api.saveJar({ ...this.jar, dueDate: newDueDate });
      }
      this.editDueDate = !this.editDueDate;
    }
  },
  mounted() {
    const id = parseInt(this.id);
    this.account = api.getAccount();
    this.jar = api.getJarById(id);
    this.getWarning(this.jar.status, false);
    this.targetValue = this.jar.targetValue
      ? this.jar.targetValue.toFixed(2)
      : "";
    this.dueDate = this.jar.dueDate
      ? format(parseISO(this.jar.dueDate), "dd/MM/yyyy")
      : "";
  }
};
</script>
