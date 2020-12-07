<template>
  <Recipe
    v-for="(recipe, index) in allRecipes"
    v-bind:key="index"
    :recipe="recipe"
  />
</template>

<script>
import { mapGetters } from "vuex";
import Recipe from "@/components/Recipe.vue";

export default {
  name: "Recipes",
  components: {
    Recipe
  },
  computed: {
    ...mapGetters(["allRecipes"])
  }
};
</script>

<style scoped></style>
