import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
});

createApp(App).use(store).mount("#app");
