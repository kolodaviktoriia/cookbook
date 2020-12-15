<template>
  <div class="modalRecipe">
    <div class="modal-mask">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {{ titleModal }}
            </h5>
          </div>
          <div class="modal-body">
            <div class="input-div">
              <label class="input-label">Title:</label>
              <input class="input-title" type="text" placeholder="Add title" v-model="title" />
            </div>
            <div class="input-div">
              <label class="input-label">Image (link):</label>
              <input class="input-title" type="text" placeholder="Add link" v-model="image" />
            </div>
            <div class="input-div">
              <label class="input-label">Ingredients:</label>
              <textarea
                class="input-ingredients"
                placeholder="Add ingredients"
                v-model="ingredients"
              />
            </div>
            <div class="input-div">
              <label class="input-label">Description:</label>
              <textarea
                class="input-description"
                placeholder="Add description"
                v-model="description"
              />
            </div>
            <div v-if="!id" class="input-div">
              <label class="input-label">Parent recipe:</label>
              <select v-model="parentId" class="input-parent">
                <option :value="null" disabled selected hidden>None</option>
                <option v-for="recipe in recipes" :key="recipe.id" :value="recipe.id">
                  {{ recipe.title }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="onClose" type="button" class="btn btn-outline-dark">
              Cancel
            </button>
            <button
              @click="onSubmit"
              type="button"
              class="btn btn-outline-secondary"
              :disabled="!(title && ingredients && description && image)"
            >
              {{ label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { uuid } from "vue-uuid";
import defaultImage from "@/assets/default.png";

export default {
  name: "ModalRecipe",
  props: {
    id: {
      type: String,
      default: ""
    },
    close: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      title: "",
      ingredients: "",
      description: "",
      parentId: null,
      image: "",
      titleModal: "Add new recipe",
      label: "Add recipe"
    };
  },
  mounted() {
    if (this.id) {
      const recipe = this.recipeById(this.id);
      this.label = "Edit recipe";
      this.titleModal = "Edit recipe";
      this.title = recipe.title;
      this.ingredients = recipe.ingredients;
      this.description = recipe.description;
      this.image = recipe.image;
      this.parentId = recipe.parentId;
    }
  },
  computed: {
    ...mapState(["recipes"]),
    ...mapGetters(["recipeById"])
  },
  methods: {
    ...mapActions(["addRecipe", "editRecipe"]),
    onClose() {
      this.title = "";
      this.ingredients = "";
      this.description = "";
      this.parentId = null;
      this.close();
    },
    editRecipes() {
      this.editRecipe({
        id: this.id,
        title: this.title,
        ingredients: this.ingredients,
        description: this.description,
        parentId: this.parentId,
        image: this.imageExists(this.image) ? this.image : defaultImage
      });
      this.onClose();
    },
    addRecipes() {
      this.addRecipe({
        id: uuid.v1(),
        title: this.title,
        image: this.imageExists(this.image) ? this.image : defaultImage,
        ingredients: this.ingredients,
        description: this.description,
        createdAt: new Date().toLocaleString(),
        parentId: this.parentId
      });
      this.onClose();
    },
    imageExists(url) {
      const http = new XMLHttpRequest();
      http.open("HEAD", url, false);
      http.send();
      return http.status !== 404;
    },
    onSubmit() {
      this.id ? this.editRecipes() : this.addRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
.addRecipes {
  margin: 10px 150px;
}
.input-title,
.input-parent,
.input-description,
.input-ingredients {
  padding: 10px;
  width: 300px;
}
.input-description,
.input-ingredients {
  height: 100px;
  resize: none;
}
.input-div {
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
.input-label {
  margin-right: 10px;
}
.btnWrap {
  margin-left: auto;
  width: 100px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>
