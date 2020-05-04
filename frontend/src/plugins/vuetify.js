import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";
import Coins from "../components/icons/Coins";

Vue.use(Vuetify);

Vue.component("my-component", {
  methods: {
    changeLocale() {
      this.$vuetify.lang.current = "pt";
    }
  }
});

export default new Vuetify({
  icons: {
    values: {
      coins: {
        component: Coins
      }
    }
  },
  lang: {
    locales: { pt },
    current: "pt"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        background: "#B9FBAF",
        primary: "#b620e0",
        secondary: "#f7b500"
      }
    }
  }
});
