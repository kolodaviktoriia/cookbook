import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [
      {
        id: "6e30db04-364a-11eb-adc1-0242ac120002",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=300,272",
        title: "Easy pancakes",
        ingredients: "flour, eggs, milk, oil, lemon, sugar",
        description:
          "1. Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil" +
          "and a pinch of salt into a bowl or large jug, then whisk to a smooth batter." +
          "2. Set aside for 30 mins to rest if you have time, or start cooking straight away." +
          "3. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper." +
          "4. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go." +
          "5. Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes " +
          "between baking parchment, then wrap in cling film and freeze for up to 2 months.",
        createdAt: new Date().toLocaleString(),
        children: []
      }
    ],
    currentRecipe: null
  },
  getters: {
    allRecipes: state => {
      const addRecipe = recipes => {
        let all = [];
        all.push({
          id: recipes.id,
          title: recipes.title,
          image: recipes.image,
          ingredients: recipes.ingredients,
          description: recipes.description,
          createdAt: recipes.createdAt
        });
        if (recipes.children) {
          recipes.children.forEach(child => {
            all = all.concat(addRecipe(child));
          });
          return all;
        }
      };
      let allRecipes = [];
      state.recipes.forEach(v => {
        allRecipes = allRecipes.concat(addRecipe(v));
      });

      return allRecipes;
    }
  },
  mutations: {
    ADD_RECIPE: (state, payload) => {
      if (!payload.parentId) {
        state.recipes.push(payload.recipe);
      } else {
        const updateRecipe = (id, recipe, recipes) => {
          if (recipes.id === id) {
            recipes.children.push(recipe);
          } else {
            recipes.children = recipes.children.map(child =>
              updateRecipe(id, recipe, child)
            );
          }
          recipes.children = recipes.children.sort((a, b) =>
            a.title > b.title ? 1 : -1
          );
          return recipes;
        };
        state.recipes.forEach((v, i) => {
          state.recipes[i] = updateRecipe(payload.parentId, payload.recipe, v);
        });
      }
    },
    EDIT_RECIPE: (state, recipe) => {
      const updateRecipe = (id, recipe, recipes) => {
        if (recipes.id === id) {
          recipes = {
            ...recipes,
            title: recipe.title,
            image: recipe.image,
            description: recipe.description,
            ingredients: recipe.ingredients
          };
        } else {
          recipes.children = recipes.children.map(child =>
            updateRecipe(id, recipe, child)
          );
        }
        return recipes;
      };
      state.recipes.forEach((v, i) => {
        state.recipes[i] = updateRecipe(recipe.id, recipe, v);
      });
      if (state.currentRecipe) {
        state.currentRecipe = recipe;
      }
    },
    SET_CURRENT_RECIPE: (state, recipe) => {
      state.currentRecipe = recipe;
    }
  },
  actions: {
    addRecipe: (context, payload) => {
      context.commit("ADD_RECIPE", payload);
    },
    editRecipe: (context, payload) => {
      context.commit("EDIT_RECIPE", payload);
    },
    setRecipe: (context, recipe) => {
      context.commit("SET_CURRENT_RECIPE", recipe);
    },
    unSetRecipe: context => {
      context.commit("SET_CURRENT_RECIPE", null);
    }
  },
  modules: {}
});
