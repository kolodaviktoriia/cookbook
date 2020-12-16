import { shallowMount } from "@vue/test-utils";
import RecipesTree from "@/components/RecipesTree.vue";

describe("RecipesTree.vue", () => {
  it("check passing props to RecipesTree", () => {
    const test = {
      index: "test1",
      title: "testTitle1",
      children: [
        {
          id: "test2",
          title: "testTitle2",
          children: null
        },
        {
          id: "test3",
          title: "testTitle3",
          children: null
        }
      ]
    };
    const wrapper = shallowMount(RecipesTree, { props: test });
    expect(wrapper.vm.index).toBe(test.index);
    expect(wrapper.vm.title).toBe(test.title);
    expect(wrapper.vm.children).toEqual(test.children);
  });

  it("check redirect to recipe", () => {
    const mockRouter = {
      push: jest.fn()
    };
    const test = {
      index: "test1",
      title: "testTitle1",
      children: [
        {
          id: "test2",
          title: "testTitle2",
          children: null
        },
        {
          id: "test3",
          title: "testTitle3",
          children: null
        }
      ]
    };
    const wrapper = shallowMount(RecipesTree, {
      props: test,
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    });

    wrapper.find("div").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledWith("/recipe/test1");
  });
});
