import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state: {
    todos: [],
  },
  getters: {},
});

createApp(App).use(store).mount("#app");
