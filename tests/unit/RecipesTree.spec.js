import { shallowMount } from "@vue/test-utils";
import RecipesTree from "@/components/RecipesTree.vue";

describe("RecipesTree.vue", () => {
  it("renders props.title when passed", () => {
    //    const msg = "new message";
    //    const wrapper = shallowMount(HelloWorld, {
    //      props: { msg }
    //   });
    const wrapper = shallowMount(RecipesTree, 
      {
          props: { title:"Test"}
           });
    expect(wrapper.text()).toMatch("Test");
  });
});
