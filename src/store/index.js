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
        parentId: null
      }
    ]
  },
  getters: {
    recipesTree: state => {
      function buildTree(items, parentId = null) {
        let result = [];
        items.forEach(item => {
          if (item.parentId === parentId) {
            result.push(item);
            item.children = buildTree(items, item.id);
          }
        });
        return result;
      }
      const roots = state.recipes.filter(r => r.parentId === null);
      const result = roots.map(r => ({
        ...r,
        children: buildTree(state.recipes, r.id)
      }));
      return result;
    },
    recipeById: state => id => {
      return state.recipes.find(recipe => recipe.id === id);
    }
  },
  mutations: {
    ADD_RECIPE: (state, payload) => {
      state.recipes.push(payload);
    },
    EDIT_RECIPE: (state, payload) => {
      const updateIndex = state.recipes.findIndex(recipe => recipe.id === payload.id);
      state.recipes[updateIndex] = payload;
    }
  },
  actions: {
    addRecipe: (context, payload) => {
      context.commit("ADD_RECIPE", payload);
    },
    editRecipe: (context, payload) => {
      context.commit("EDIT_RECIPE", payload);
    }
  },
  modules: {}
});
