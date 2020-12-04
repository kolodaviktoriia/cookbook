<template>
  <div class="addRecipes">
    <h1>Add new recipe</h1>
    <div class="input-div">
      <label class="input-label">Title:</label>
       <input
          class="input-title"
          type="text"
          placeholder="Add title"
          v-model="title"
        />
        </div>
        <div class="input-div">
        <label class="input-label">Ingredients:</label>
        <textarea
          class="input-ingredients"
          type="text"
          placeholder="Add ingredients"
          v-model="ingredients"
        />
        </div>
        <div class="input-div">
        <label class="input-label">Description:</label>
        <textarea
          class="input-description"
          type="text"
          placeholder="Add description"
          v-model="description"
        />
        </div>
        <button @click="addRecipes">Add recipe</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AddRecipe',
  data () {
    return {
      title: '',
      ingredients: '',
      description: ''
    }
  },
  computed: {
    ...mapState(['recipes'])
  },
  methods: {
    ...mapActions([
      'addRecipe'
    ]),
    addRecipes () {
      this.addRecipe({ title: this.title, ingredients: this.ingredients, description: this.description })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-title{
  width: 200px
}
.input-description ,
.input-ingredients{
  width: 200px;
  height: 50px;
}
.input-div{
  margin: 10px auto;
  display: flex;
  align-items: end;
  width: 20%;
}
.input-label{
  margin-right: 10px;
}

</style>
