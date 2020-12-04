import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        id: '6e30db04-364a-11eb-adc1-0242ac120002',
        title: 'Chicken',
        ingredients: 'chicken, vegetables',
        description: '1. Cut vegetables.'
      }
    ],
    currentRecipe: null
  },
  mutations: {
    ADD_RECIPE: (state, recipe) => {
      state.recipes.push(recipe)
    },
    EDIT_RECIPE: (state, recipe) => {
      console.log(recipe)
      state.recipes.forEach((r, i) => {
        if (r.id === recipe.id) {
          state.recipes[i] = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients
          }
        }
      })
      state.currentRecipe = recipe
      console.log(state.recipes)
    },
    SET_CURRENT_RECIPE: (state, recipe) => {
      state.currentRecipe = recipe
    }
  },
  actions: {
    addRecipe: (context, recipe) => {
      context.commit('ADD_RECIPE', recipe)
    },
    editRecipe: (context, recipe) => {
      context.commit('EDIT_RECIPE', recipe)
    },
    setRecipe: (context, recipe) => {
      context.commit('SET_CURRENT_RECIPE', recipe)
    },
    unSetRecipe: context => {
      context.commit('SET_CURRETN_RECIPE', null)
    }
  },
  modules: {}
})
