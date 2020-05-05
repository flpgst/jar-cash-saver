<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="text-justify body-2" cols="12">
        <p>Oba!</p>
        <p>
          Estamos muito contentes que você está aqui e vamos te ajudar a
          conquistar seus objetivos financeiros. Fique tranquilo, nosso sistema
          utiliza o método <strong>open banking</strong>, ou seja, através de
          suas contas bancárias saberemos qual o seu fluxo financeiro diário e
          despesas fixas.
        </p>
        <p>
          Basta você nos dizer quais objetivos quer alcançar que diremos a você
          quanto precisa poupar. Tudo com total segurança e transparência,
          afinal de contas, é do seu rendimento e sonhos que estamos falando.
        </p>
        <p class="mb-0">
          Com a gente além de realizar grandes conquistas, você receberá dicas
          para sua saúde financeira, terá acesso a cursos online gratuitos e
          muitos benefícios exclusivos para usuários do POUPJAR fornecidos pelos
          nossos parceiros.
        </p>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-checkbox
          v-model="terms"
          label="Li e aceito os termos de uso "
        ></v-checkbox>
      </v-col>
      <v-col cols="12" class="text-center py-0">
        <v-btn
          rounded
          depressed
          :disabled="!terms"
          color="#00a857"
          :dark="terms"
          to="connect-accounts"
          >Avançar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SecurityTerms",

  data: () => ({
    terms: false
  })
};
</script>
<style scoped>
:disabled {
  color: #000000 !important;
  background-color: #000000 !important;
}
</style>
