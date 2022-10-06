import { createRouter, createWebHashHistory } from "vue-router";
import users from "../views/users.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: users,
  },
  {
    path: "/user/:id",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
