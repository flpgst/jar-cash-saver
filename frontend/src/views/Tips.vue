<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
        class="headline font-weight-black d-flex justify-center pb-0"
      >
        Nossos parceiros
      </v-col>
      <v-col cols="12" class="font-weight-medium d-flex justify-center">
        Clique e veja dicas valiosas de educação financeira.
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-carousel cycle height="193" show-arrows-on-hover>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="require(`../assets/partners/tips/${item.src}`)"
            :href="item.url"
            target="_blank"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "me-poupe.jpg",
        url: "https://mepoupenaweb.uol.com.br/"
      },
      {
        src: "primo-rico.jpg",
        url: "https://www.youtube.com/channel/UCT4nDeU5pv1XIGySbSK-GgA"
      },

      {
        src: "spiti.jpg",
        url: "https://invistaspiti.com.br/"
      }
    ]
  })
};
</script>
