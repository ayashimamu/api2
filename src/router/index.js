import Vue from 'vue';
import Header from "../views/Header.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: "/Header",
    name: "Header",
    component: Header,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;