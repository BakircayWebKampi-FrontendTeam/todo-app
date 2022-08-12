import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "@/styles/main.css";

const store = createStore({
  state: {
    todos: [],
  },
});

createApp(App).use(store).mount("#app");
