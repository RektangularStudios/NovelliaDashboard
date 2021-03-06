// runs in renderer context
// called automatically by webpack

import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./index.scss";
import App from "./App.vue";

const vm = createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
