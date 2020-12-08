<template>
  <div class="recipesList">
    <h3 @click="unSetRecipe" class="all-header">All recipes</h3>
    <ul>
      <RecipesTree
        v-for="(recipe, index) in recipes"
        :key="index"
        :title="recipe.title"
        :children="recipe.children"
        :item="recipe"
      />
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RecipesTree from "@/components/RecipesTree.vue";

export default {
  name: "RecipesList",
  props: {
    recipes: Array
  },
  components: {
    RecipesTree
  },
  methods: {
    ...mapActions(["unSetRecipe"])
  }
};
</script>

<style scoped>
ul {
  list-style-type: disc;
}
.recipesList {
  max-height: 70vh;
  width: 20%;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  margin-right: 10%;
}
.all-header {
  cursor: pointer;
}
@media (max-width: 900px) {
  .recipesList {
    width: 30%;
    margin-right: 5%;
  }
}
</style>
