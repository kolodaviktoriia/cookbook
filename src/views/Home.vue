<template>
  <div class="home">
    <AddRecipe/>
    <Recipes/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddRecipe from '@/components/AddRecipe.vue'
import Recipes from '@/components/Recipes.vue'

export default {
  name: 'Home',
  components: {
    AddRecipe,
    Recipes
  }
}
</script>
