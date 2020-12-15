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
import { mapGetters } from "vuex";
import AddRecipe from "@/components/AddRecipe.vue";
import RecipesList from "@/components/RecipesList.vue";

export default {
  name: "Home",
  components: {
    AddRecipe,
    RecipesList
  },
  computed: {
    ...mapGetters(["recipesTree"])
  }
};
</script>
<style lang="scss">
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
