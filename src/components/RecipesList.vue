<template>
  <div class="recipesList">
    <h3>All recipes</h3>
    <ul>
      <li
        class="recipeItem"
        v-for="(r, index) in recipes"
        v-bind:key="index"
        @click="openDetails(r)"
      >
        {{ r.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'RecipesList',
  computed: {
    ...mapState(['recipes'])
  },
  methods: {
    ...mapActions(['setRecipe']),
    openDetails (r) {
      this.setRecipe(r)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipesList {
  max-height: 50vh;
  width: 20%;
  background: #fff;
  overflow: auto;
  border-radius: 5px;
  margin-right: 10%;
}
.recipeItem {
  cursor: pointer;
}
</style>
