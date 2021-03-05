// runs in renderer context
// called automatically by webpack

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import './index.scss';

console.log('👋 This message is being logged by "renderer.ts", included via webpack');

const vm = createApp(App).mount("#app");
//app.use(store);
//app.use(router);
/*
  .use(store)
  .use(router)
  .mount("#app");
*/
//app.component("app", {});
//const vm = app.mount("#app");
