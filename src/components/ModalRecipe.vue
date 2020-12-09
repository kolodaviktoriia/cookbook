<template>
  <div id="openModal" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ titleModal }}</h3>
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
              type="text"
              placeholder="Add ingredients"
              v-model="ingredients"
            />
          </div>
          <div class="input-div">
            <label class="input-label">Description:</label>
            <textarea
              class="input-description"
              type="text"
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
          <div class="modal-btn">
            <button @click="onClose" class="btnCancel">Cancel</button>
            <button
              @click="onSubmit"
              :disabled="!(title && ingredients && description && image)"
              class="btnAdd"
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

export default {
  name: "ModalRecipe",
  props: {
    id: String,
    close: Function
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
        image: this.image
      });
      this.onClose();
    },
    addRecipes() {
      this.addRecipe({
        id: uuid.v1(),
        title: this.title,
        image: this.image,
        ingredients: this.ingredients,
        description: this.description,
        createdAt: new Date().toLocaleString(),
        parentId: this.parentId
      });
      this.onClose();
    },
    onSubmit() {
      this.id ? this.editRecipes() : this.addRecipes();
    }
  }
};
</script>

<style scoped>
.addRecipes {
  margin: 10px 150px;
}
.input-title {
  padding: 10px;
  width: 300px;
}
.input-parent {
  padding: 10px;
  width: 340px;
}
.input-description,
.input-ingredients {
  padding: 10px;
  width: 300px;
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
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  margin: 0;
  padding: 0;
  pointer-events: auto;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  max-width: 500px;
  margin: 20vh auto;
}

.modal-content {
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eceeef;
}
.modal-title {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 500;
}

.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 15px;
  overflow: auto;
}
.modal-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 15px;
}
.modal-btn {
  display: flex;
  width: 170px;
  justify-content: space-between;
  margin-left: auto;
  padding-right: 10px;
}
.btnCancel,
.btnAdd,
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
  height: 50px;
  width: 100px;
  border: 2px solid #7a75756e;
}
.btnCancel:hover,
.btnAdd:hover,
.btnOpen:hover {
  background: #dededeb8;
}
</style>
