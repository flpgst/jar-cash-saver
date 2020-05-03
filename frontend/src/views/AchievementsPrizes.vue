<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="font-weight-bold pb-0">
        Você pode gastar suas moedas com skins ou outros itens na loja de nosso
        parceiro!
      </v-col>
    </v-row>
    <!-- Partners -->
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-carousel
          cycle
          height="395"
          show-arrows-on-hover
          style="width: 164px"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="require(`../assets/partners/achievements/lol/${item.src}`)"
            :href="item.url"
            target="_blank"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!--  -->
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        src: "skin1.jpg",
        url:
          "https://www.cvc.com.br/pacotes-turisticos/detalhes?baseDestination=717&departureLocation=9626&destinationLocation=46&national=true&month=0&date=2020-09-04&sci=pkg_AIR_9626%7C46_20200904%7C20200907&scn=pacotes_cvc&scpi=pkg_9626_46&rec_id=5eaf229d73686f4a1201f5de"
      },
      {
        src: "skin2.jpg",
        url:
          "https://www.cvc.com.br/pacotes-turisticos/detalhes?baseDestination=394&departureLocation=9626&destinationLocation=5&national=true&month=0&date=2020-10-08"
      }
    ]
  })
};
</script>
