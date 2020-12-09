<template>
  <li>
    <div @click="showRecipeDetailes(index)" class="recipeItem ">
      {{ title }}
    </div>
    <ul v-if="children">
      <RecipesTree
        v-for="(child, index) in children"
        :key="index"
        :index="child.id"
        :title="child.title"
        :children="child.children"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "RecipesTree",
  props: {
    index: String,
    title: String,
    children: Array
  },
  methods: {
    showRecipeDetailes(index) {
      this.$router.push(`/recipe/${index}`);
    }
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
