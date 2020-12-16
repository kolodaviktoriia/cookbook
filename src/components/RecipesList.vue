<template>
  <div class="recipesList">
    <ul>
      <RecipesTree
        v-for="(recipe, index) in recipes"
        :key="index"
        :index="recipe.id"
        :title="recipe.title"
        :children="recipe.children"
        label="Edit recipe"
      />
    </ul>
  </div>
</template>

<script>
import RecipesTree from "@/components/RecipesTree.vue";

export default {
  name: "RecipesList",
  props: {
    recipes: {
      type: Array,
      default: undefined
    }
  },
  components: {
    RecipesTree
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: disc;
}
.recipesList {
  overflow: auto;
  background: #fff;
  margin-right: 10px;
}
.all-header {
  cursor: pointer;
}
</style>
