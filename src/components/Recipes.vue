<template>
  <div class="recipes">
    <div
      v-for="(recipe, index) in allRecipes"
      v-bind:key="index"
      class="recipe-wrapper"
    >
      <div class="title-recipe">
        <div class="recipeDate">{{ recipe.createdAt }}</div>
        {{ recipe.title }}
        <div class="addRecipes">
          <div class="Wrap"></div>
        </div>
      </div>
      <div class="main-recipe">
        <div class="ingredients-recipe">
          <div class="imgWrap">
            <img :src="recipe.image" class="recipeImg" />
          </div>
          <h3 class="title">Ingredients</h3>
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Recipes',
  computed: {
    ...mapState(['recipes']),
    ...mapGetters(['allRecipes'])
  }
}
</script>

<style scoped>
.imgWrap {
  width: 90%;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
}
.recipeImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recipeDate {
  font-size: 0.5em;
}
.recipes {
  max-height: 60vh;
  width: 70%;
  overflow: auto;
}
.Wrap {
  width: 100px;
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
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.main-recipe {
  min-height: 100px;
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
  text-align: justify;
  padding: 10px;
}
.title {
  margin: 0 0 10px 0;
  padding: 0;
}
</style>
