import { shallowMount } from "@vue/test-utils";
import Recipe from "@/components/Recipe.vue";
import { createStore } from "vuex";

describe("Recipe.vue", () => {
  it("check passing props to Recipe", () => {
    const test = {
      id: "TestGetterId",
      image: "TestGetterImage",
      title: "TestGetterTitle",
      ingredients: "TestGetterIngredients",
      description: "TestGetterDescription",
      createdAt: "TestGetterCreactedAt",
      parentId: null
    };

    const $route = {
      path: "/",
      params: {
        id: null
      }
    };

    const wrapper = shallowMount(Recipe, {
      props: test,
      global: {
        mocks: {
          $route
        }
      }
    });
    expect(wrapper.vm.recipe.id).toBe(test.id);
    expect(wrapper.vm.recipe.title).toBe(test.title);
    expect(wrapper.vm.recipe.description).toBe(test.description);
    expect(wrapper.vm.recipe.ingredients).toBe(test.ingredients);
    expect(wrapper.vm.recipe.createdAt).toBe(test.createdAt);
    expect(wrapper.vm.recipe.image).toBe(test.image);
    expect(wrapper.vm.recipe.parentId).toBe(test.parentId);
  });
});

it("check find recipe by id", () => {
  const test = {
    id: "TestGetterId",
    image: "TestGetterImage",
    title: "TestGetterTitle",
    ingredients: "TestGetterIngredients",
    description: "TestGetterDescription",
    createdAt: "TestGetterCreactedAt",
    parentId: null
  };

  const $route = {
    path: "/recipe",
    params: {
      id: test.id
    }
  };

  const $store = createStore({
    state: [],
    getters: {
      recipeById: state => id => {
        return test;
      }
    }
  });

  const wrapper = shallowMount(Recipe, {
    global: {
      mocks: {
        $route,
        $store
      }
    }
  });
  expect(wrapper.vm.recipe.id).toBe(test.id);
  expect(wrapper.vm.recipe.title).toBe(test.title);
  expect(wrapper.vm.recipe.description).toBe(test.description);
  expect(wrapper.vm.recipe.ingredients).toBe(test.ingredients);
  expect(wrapper.vm.recipe.createdAt).toBe(test.createdAt);
  expect(wrapper.vm.recipe.image).toBe(test.image);
  expect(wrapper.vm.recipe.parentId).toBe(test.parentId);
});

it("check trigger for Modal", () => {
  const test = {
    id: "TestGetterId",
    image: "TestGetterImage",
    title: "TestGetterTitle",
    ingredients: "TestGetterIngredients",
    description: "TestGetterDescription",
    createdAt: "TestGetterCreactedAt",
    parentId: null
  };

  const $route = {
    path: "/recipe",
    params: {
      id: test.id
    }
  };

  const $store = createStore({
    state: [],
    getters: {
      recipeById: state => id => {
        return test;
      }
    }
  });

  const wrapper = shallowMount(Recipe, {
    global: {
      mocks: {
        $route,
        $store
      }
    }
  });
  expect(wrapper.vm.isOpen).toBe(false);
  wrapper.find("button").trigger("click");
  expect(wrapper.vm.isOpen).toBe(true);
  wrapper.vm.closeModal();
  expect(wrapper.vm.isOpen).toBe(false);
});
