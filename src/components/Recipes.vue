<template>
  <div class="recipes">
    <div
      v-for="(recipe, index) in recipes"
      v-bind:key="index"
      class="recipe-wrapper"
    >
      <div class="title-recipe">
        {{ recipe.title }}
      </div>
      <div class="main-recipe">
        <div class="ingredients-recipe">
          <h3>Ingredients</h3>
          {{ recipe.ingredients }}
        </div>
        <div class="description-recipe">
          {{ recipe.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Recipes',
  data () {
    return {
      title: '',
      ingredients: '',
      description: ''
    }
  },
  computed: {
    ...mapState(['recipes'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipes {
  max-height: 50vh;
  width: 70%;
  overflow: auto;
}
.recipe-wrapper {
  background: #ffff;
  border-radius: 5px;
  padding: 10px 0;
  margin-bottom: 25px;
}
.title-recipe {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 2px solid #7a75756e;
  padding: 10px;
}
.main-recipe {
  min-height: 200px;
  display: flex;
  flex-flow: row;
  padding: 2%;
}
.ingredients-recipe {
  width: 40%;
  min-height: 100%;
  margin-left: 2%;
  margin-right: 6%;
}
.description-recipe {
  width: 50%;
  min-height: 100%;
  border-left: 2px solid #7a75756e;
}
</style>
