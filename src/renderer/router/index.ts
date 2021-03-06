import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";
import Overview from "../views/Overview.vue";
import Collection from "../views/Collection.vue";
import Market from "../views/Market.vue";
import Community from "../views/Community.vue";
import Developers from "../views/Developers.vue";
import Settings from "../views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/overview",
    name: "Overview",
    component: Overview
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection
  },
  {
    path: "/market",
    name: "Market",
    component: Market
  },
  {
    path: "/community",
    name: "Community",
    component: Community
  },
  {
    path: "/developers",
    name: "Developers",
    component: Developers
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
