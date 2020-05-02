<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="font-weight-black text-center pb-0">
        {{ jar.name }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-badge :color="jar.locker.color" :icon="jar.locker.icon" overlap>
          <v-tooltip :color="jar.locker.color" right>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" size="80" :color="jar.color">{{
                jar.icon
              }}</v-icon>
            </template>
            <span class="caption"
              >O cadeado abrirá apenas quando o jarro estiver 70% completo</span
            >
          </v-tooltip>
        </v-badge>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          value="2.000"
          label="Meta Estipulada"
          :readonly="editTargetValue"
          dense
          :append-outer-icon="editableIcon(editTargetValue)"
          @click:append-outer="editTargetValue = !editTargetValue"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          value="166"
          label="Valor poupado mensal"
          readonly
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          value="500"
          label="Valor poupado até o momento"
          readonly
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          value="6%"
          label="Total Rendido"
          readonly
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0 d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          value="20/12/2020"
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
export default {
  props: {
    id: String
  },
  data: () => ({
    editTargetValue: true,
    editDueDate: true,
    jar: {
      id: 1,
      name: "Jarro da Reserva",
      icon: "mdi-cup",
      path: "jar/1",
      locker: {
        icon: "mdi-lock",
        color: "#f7b500"
      }
    }
  }),
  methods: {
    editing() {
      return true;
    },
    editableIcon(editable) {
      return editable ? "mdi-pencil" : "mdi-content-save";
    }
  }
};
</script>
