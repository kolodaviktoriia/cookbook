<template>
  <li>
    <div @click="openDetails(item)" class="recipeItem ">
      {{ item.title }}
    </div>
    <ul v-if="item.children">
      <RecipesTree
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      />
    </ul>
  </li>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RecipesTree",
  props: {
    item: Object
  },
  computed: {
    ...mapState(["recipes"])
  },
  methods: {
    ...mapActions(["setRecipe"]),
    openDetails(r) {
      this.setRecipe(r);
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
