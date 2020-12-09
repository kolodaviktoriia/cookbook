import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Recipe from "../components/Recipe.vue";
import Recipes from "../components/Recipes.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Recipes",
        component: Recipes
      },
      {
        path: "recipe/:id",
        name: "Recipe",
        component: Recipe
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
