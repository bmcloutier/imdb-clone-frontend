import { createWebHistory, createRouter } from "vue-router";

// import Signup from "./components/Signup.vue";
// import Login from "./components/Login.vue";
// import LogoutLink from "./components/LogoutLink.vue";
import MoviesIndex from "./components/MoviesIndex.vue";
import MoviesNew from "./components/MoviesNew.vue";
import Content from "./components/Content.vue";

const routes = [
  {
    path: "/content",
    component: Content,
    children: [
      // { path: "/signup", component: Signup },
      // { path: "/login", component: Login },
      // { path: "/logout", component: LogoutLink },
      { path: "/movies", component: MoviesIndex },
      { path: "/movies/new", component: MoviesNew },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
