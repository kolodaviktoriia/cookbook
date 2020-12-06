import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        id: '6e30db04-364a-11eb-adc1-0242ac120002',
        title: 'Chicken',
        ingredients: 'chicken, vegetables',
        description: '1. Cut vegetables.',
        createdAt: new Date().toLocaleString(),
        children: []
      }
    ],
    currentRecipe: null
  },
  getters: {
    allRecipes: state => {
      const addRecipe = recipes => {
        let all = []
        all.push({
          id: recipes.id,
          title: recipes.title,
          ingredients: recipes.ingredients,
          description: recipes.description,
          createdAt: recipes.createdAt
        })
        if (recipes.children) {
          recipes.children.forEach(child => {
            all = all.concat(addRecipe(child))
          })
          return all
        }
      }
      let allRecipes = []
      state.recipes.forEach(v => {
        allRecipes = allRecipes.concat(addRecipe(v))
      })

      return allRecipes
    }
  },
  mutations: {
    ADD_RECIPE: (state, payload) => {
      if (!payload.parentId) {
        state.recipes.push(payload.recipe)
      } else {
        const updateRecipe = (id, recipe, recipes) => {
          if (recipes.id === id) {
            recipes.children.push(recipe)
          } else {
            recipes.children = recipes.children.map(child =>
              updateRecipe(id, recipe, child)
            )
          }
          recipes.children = recipes.children.sort((a, b) =>
            a.title > b.title ? 1 : -1
          )
          return recipes
        }
        state.recipes.forEach((v, i) => {
          state.recipes[i] = updateRecipe(payload.parentId, payload.recipe, v)
        })
      }
    },
    EDIT_RECIPE: (state, recipe) => {
      const updateRecipe = (id, recipe, recipes) => {
        if (recipes.id === id) {
          recipes = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            createdAt: recipe.createdAt
          }
        } else {
          recipes.children = recipes.children.map(child =>
            updateRecipe(id, recipe, child)
          )
        }
        return recipes
      }
      state.recipes.forEach((v, i) => {
        state.recipes[i] = updateRecipe(recipe.id, recipe, v)
      })
      state.currentRecipe = recipe
    },
    SET_CURRENT_RECIPE: (state, recipe) => {
      state.currentRecipe = recipe
    }
  },
  actions: {
    addRecipe: (context, payload) => {
      context.commit('ADD_RECIPE', payload)
    },
    editRecipe: (context, recipe) => {
      context.commit('EDIT_RECIPE', recipe)
    },
    setRecipe: (context, recipe) => {
      context.commit('SET_CURRENT_RECIPE', recipe)
    },
    unSetRecipe: context => {
      context.commit('SET_CURRENT_RECIPE', null)
    }
  },
  modules: {}
})
