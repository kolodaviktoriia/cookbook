<template>
  <li>
    <div @click="setRecipe(item)" class="recipeItem ">
      {{ title }}
    </div>
    <ul v-if="children">
      <RecipesTree
        v-for="(child, index) in children"
        :key="index"
        :title="child.title"
        :children="child.children"
      />
    </ul>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RecipesTree",
  props: {
    title: String,
    children: Array
  },
  methods: {
    ...mapActions(["setRecipe"])
  }
};
</script>

<style scoped>
.recipeItem {
  cursor: pointer;
  text-align: initial;
}
ul {
  list-style-type: disc;
}
</style>
