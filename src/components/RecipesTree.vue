<template>
  <li>
    <div @click="showRecipeDetailes(index)" class="recipeItem">
      {{ title }}
    </div>
    <ul v-if="children">
      <RecipesTree
        v-for="(child, id) in children"
        :key="id"
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
    index: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    children: {
      type: Array,
      default: undefined
    }
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
