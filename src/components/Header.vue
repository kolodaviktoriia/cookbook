<template>
  <div id="header">
    <div class="logoBlock">
      <img :src="image" id="logo" />
      Cookbook
    </div>
    <div class="nav">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div @click="showAllRecipes" type="button" class="nav-link">
                All recipes
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recipes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <RecipesList :recipes="recipesTree" />
              </div>
            </li>
            <li class="nav-item">
              <div @click="showModal" type="button" class="nav-link">
                Add recipe
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
      <ModalRecipe v-if="isOpen" :close="closeModal" />
    </div>
  </div>
</template>

<script>
import ModalRecipe from "@/components/ModalRecipe.vue";
import RecipesList from "@/components/RecipesList.vue";
import logo from "@/assets/logo.png";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    ModalRecipe,
    RecipesList
  },
  data() {
    return {
      isOpen: false,
      image: logo
    };
  },
  computed: {
    ...mapGetters(["recipesTree"])
  },
  methods: {
    showModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    showAllRecipes() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.btnWrap {
  margin: 10px 10px 10px auto;
  width: 105px;
}
.logoBlock {
  font-size: 3em;
  font-weight: bold;
}
.nav {
  display: flex;
  align-content: center;
}
#header {
  padding: 20px;
  border-radius: 5px;
  background: #ffff;
  display: flex;
  flex-flow: row;
  color: #262626;
  justify-content: space-between;
}
#logo {
  width: 60px;
  height: 60px;
}
</style>
