import { shallowMount } from "@vue/test-utils";
import RecipesTree from "@/components/RecipesTree.vue";

describe("RecipesTree.vue", () => {
  const test = {
    id: "test1",
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
  it("renders props.title when passed", () => {
    const wrapper = shallowMount(RecipesTree, {
      props: test
    });
    expect(wrapper.text()).toMatch("testTitle1");
  });
});
