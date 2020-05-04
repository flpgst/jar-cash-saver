import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

import Coins from "../components/icons/Coins";

import JarMenu from "../components/icons/JarMenu";

import JarBlueEmpty from "../components/icons/jars/BlueEmpty";
import JarBlueHalf from "../components/icons/jars/BlueHalf";
import JarBlueFull from "../components/icons/jars/BlueFull";

// import JarCyanEmpty from "../components/icons/jars/CyanEmpty";
// import JarCyanHalf from "../components/icons/jars/CyanHalf";
// import JarCyanfull from "../components/icons/jars/CyanFull";

// import JarGreenEmpty from "../components/icons/jars/GreenEmpty";
// import JarGreenHalf from "../components/icons/jars/GreenHalf";
// import JarGreenfull from "../components/icons/jars/GreenFull";

// import JarOrangeEmpty from "../components/icons/jars/OrangeEmpty";
// import JarOrangeHalf from "../components/icons/jars/OrangeHalf";
// import JarOrangefull from "../components/icons/jars/OrangeFull";

// import JarPinkEmpty from "../components/icons/jars/PinkEmpty";
// import JarPinkHalf from "../components/icons/jars/PinkHalf";
// import JarPinkfull from "../components/icons/jars/PinkFull";

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
      },
      jarmenu: {
        component: JarMenu
      },
      jars: {
        blue: {
          empty: {
            component: JarBlueEmpty
          },
          half: {
            component: JarBlueHalf
          },
          full: {
            component: JarBlueFull
          }
        }
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
