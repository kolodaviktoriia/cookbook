<template>
  <div class="home">
    <AddRecipe />
    <div class="main">
      <RecipesList :recipes="recipesTree" />
      <div class="recipesBlock">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddRecipe from "@/components/AddRecipe.vue";
import RecipesList from "@/components/RecipesList.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    AddRecipe,
    RecipesList
  },
  computed: {
    ...mapState(["currentRecipe", "recipes"]),
    ...mapGetters(["recipesTree"])
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
