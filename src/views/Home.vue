<template>
  <div class="home">
    <AddRecipe />
    <div class="main">
      <RecipesList />
      <div class="recipesBlock">
        <Recipes v-if="!currentRecipe" />
        <Recipe v-else :recipe="currentRecipe" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddRecipe from "@/components/AddRecipe.vue";
import Recipes from "@/components/Recipes.vue";
import Recipe from "@/components/Recipe.vue";
import RecipesList from "@/components/RecipesList.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    AddRecipe,
    Recipes,
    Recipe,
    RecipesList
  },
  computed: {
    ...mapState(["currentRecipe"])
  }
};
</script>
<style>
.main {
  display: flex;
}
.recipesBlock {
  display: flex;
  overflow: auto;
  width: 70%;
  max-height: 70vh;
  flex-direction: column;
}
</style>
