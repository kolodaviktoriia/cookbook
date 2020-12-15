<template>
  <div class="recipe">
    <div class="recipe-wrapper">
      <div class="title-recipe">
        <div class="recipeDate">{{ recipe.createdAt }}</div>
        {{ recipe.title }}
        <div class="addRecipes">
          <div class="btnWrap">
            <button @click="showModal" class="btnOpen">Edit</button>
          </div>
        </div>
      </div>
      <div class="main-recipe">
        <div class="ingredients-recipe">
          <div class="imgWrap">
            <img :src="imageRecipe" class="recipeImg" />
          </div>
          <h3 class="title">Ingredients</h3>
          {{ recipe.ingredients }}
        </div>
        <div class="description-recipe">
          {{ recipe.description }}
        </div>
      </div>
    </div>
    <ModalRecipe v-if="isOpen" :close="closeModal" :id="recipe.id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ModalRecipe from "@/components/ModalRecipe.vue";
import defaultImage from "@/assets/default.png";

export default {
  name: "Recipe",
  components: {
    ModalRecipe
  },
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    ingredients: {
      type: String,
      default: ""
    },
    createdAt: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters(["recipeById"]),
    imageRecipe() {
      return this.imageExists(this.image) ? this.image : defaultImage;
    },
    recipe() {
      if (this.$route.params.id) {
        const recipe = this.recipeById(this.$route.params.id);
        return recipe;
      }
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        ingredients: this.ingredients,
        createdAt: this.createdAt,
        image: this.image
      };
    }
  },
  methods: {
    imageExists(url) {
      const http = new XMLHttpRequest();
      http.open("HEAD", url, false);
      http.send();
      return http.status !== 404;
    },
    showModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.imgWrap {
  width: 90%;
  height: 200px;
  overflow: hidden;
  margin: 10px auto;
}
.recipeImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.recipeDate {
  font-size: 0.5em;
}
.recipe-wrapper {
  background: #ffff;
  border-radius: 5px;
  padding: 10px 0;
  margin-bottom: 25px;
}
.title-recipe {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 2px solid #7a75756e;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.main-recipe {
  min-height: 100px;
  display: flex;
  flex-flow: row;
  padding: 2%;
}
.ingredients-recipe {
  width: 40%;
  min-height: 100%;
  margin-left: 2%;
  margin-right: 6%;
}
.description-recipe {
  width: 50%;
  min-height: 100%;
  border-left: 2px solid #7a75756e;
  text-align: justify;
  padding: 10px;
}
.editRecipes {
  margin: 10px 150px;
}
.btnOpen {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  border: none;
}
.btnWrap {
  margin-left: auto;
  width: 100px;
}
.btnOpen {
  background: #ffff;
  margin-left: auto;
  border: none;
}

.btnOpen:hover {
  background: #dededeb8;
}
.title {
  margin: 0 0 10px 0;
  padding: 0;
}
</style>
