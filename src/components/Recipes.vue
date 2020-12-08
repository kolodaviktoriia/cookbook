<template>
  <div id="Recipes">
    <Recipe
      v-for="(recipe, index) in recipes"
      :key="index"
      :title="recipe.title"
      :description="recipe.description"
      :ingredients="recipe.ingredients"
      :createdAt="recipe.createdAt"
      :image="recipe.image"
    />
  </div>
</template>

<script>
import Recipe from "@/components/Recipe.vue";

export default {
  name: "Recipes",
  props: {
    recipes: Object
  },
  components: {
    Recipe
  }
};
</script>

<style scoped></style>
