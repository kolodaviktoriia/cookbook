<template>
  <div id="Recipes">
    <Recipe
      v-for="(recipe, index) in recipes"
      :key="index"
      :id="recipe.id"
      :title="recipe.title"
      :description="recipe.description"
      :ingredients="recipe.ingredients"
      :createdAt="recipe.createdAt"
      :image="recipe.image"
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

<style scoped></style>
