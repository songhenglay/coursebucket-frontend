import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#03a9f4",
        secondary: "#2196f3",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ffc107",
        info: "#cddc39",
        success: "#4caf50"
      }
    }
  }
});
