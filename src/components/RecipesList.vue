<template>
  <div class="recipesList">
    <h3 @click="openAll" class="all-header">All recipes</h3>
    <ul>
      <RecipesTree
        v-for="(recipe, index) in recipes"
        v-bind:key="index"
        :item="recipe"
      />
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RecipesTree from '@/components/RecipesTree.vue'
export default {
  name: 'RecipesList',
  components: {
    RecipesTree
  },
  computed: {
    ...mapState(['recipes'])
  },
  methods: {
    ...mapActions(['unSetRecipe']),
    openAll () {
      this.unSetRecipe()
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: disc;
}
.recipesList {
  max-height: 60vh;
  width: 20%;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  margin-right: 10%;
}
.all-header {
  cursor: pointer;
}
</style>
