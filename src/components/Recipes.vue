<template>
  <div id="Recipes">
    <Recipe
      v-for="(recipe, index) in recipes"
      :key="index"
      :id="recipe.id"
      :title="recipe.title"
      :description="recipe.description"
      :ingredients="recipe.ingredients"
      :created-at="recipe.createdAt"
      :image="recipe.image"
      :parent-id="recipe.parentId"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Recipe from "@/components/Recipe.vue";

export default {
  name: "Recipes",
  components: {
    Recipe
  },
  computed: {
    ...mapState(["recipes"])
  }
};
</script>
