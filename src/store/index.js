import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [{
      title: 'Chicken',
      ingredients: 'chicken, vegetables',
      description: '1. Cut vegetables.'
    }]
  },
  mutations: {
    ADD_RECIPE: (state, recipe) => {
      state.recipes.push(recipe)
    }
  },
  actions: {
    addRecipe: (context, recipe) => {
      context.commit('ADD_RECIPE', recipe)
    }
  },
  modules: {
  }
})
