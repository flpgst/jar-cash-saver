<template>
  <v-container class="fill-height pt-0">
    <v-row>
      <v-col cols="12" class="font-weight-black text-center pb-0 headline">
        Vamos realizar uma conquista juntos?
      </v-col>
      <v-col cols="12" class="font-weight-medium text-center">
        Crie seu jarro aqui e nós te ajudamos a poupar.
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          label="Nome do jarro"
          placeholder="Jarro da felicidade =D"
          dense
        />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="10" class="pt-0 px-0">
        <span class="caption caption-color"
          >Personalize seu jarro, escolha uma cor:</span
        >

        <v-btn-toggle borderless background-color="transparent" v-model="color">
          <v-btn icon>
            <v-icon small color="#0091ff">mdi-checkbox-blank-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small color="#6dd400">mdi-checkbox-blank-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small color="#f94283">mdi-checkbox-blank-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small color="#44d7b6">mdi-checkbox-blank-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small color="#ff6d0b">mdi-checkbox-blank-circle</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="justify-self-center pa-0" cols="10">
        <v-text-field
          label="Quanto precisamos para alcançar o objetivo?"
          dense
          placeholder="$$$$$$$$"
          prefix="R$"
        />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col v-if="date" class="justify-self-center pa-0" cols="10">
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="270px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="Quando deseja completar a meta?"
              readonly
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            color="#b620e0"
            width="270px"
            @input="closeDatePicker(date)"
          >
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn rounded depressed dark color="#00a857">Criar jarro</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    id: String
  },
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    modal: false,
    color: null
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    closeDatePicker(date) {
      this.$refs.dialog.save(date), (this.modal = false);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
<style scoped>
.caption-color {
  color: rgba(0, 0, 0, 0.6);
}
</style>
