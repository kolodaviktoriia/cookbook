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
              <input class="input-title" type="text" placeholder="Add title" v-model="titleModel" />
            </div>
            <div class="input-div">
              <label class="input-label">Image (link):</label>
              <input class="input-title" type="text" placeholder="Add link" v-model="imageModel" />
            </div>
            <div class="input-div">
              <label class="input-label">Ingredients:</label>
              <textarea
                class="input-ingredients"
                placeholder="Add ingredients"
                v-model="ingredientsModel"
              />
            </div>
            <div class="input-div">
              <label class="input-label">Description:</label>
              <textarea
                class="input-description"
                placeholder="Add description"
                v-model="descriptionModel"
              />
            </div>
            <div v-if="!id" class="input-div">
              <label class="input-label">Parent recipe:</label>
              <select v-model="parentIdModel" class="input-parent">
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
              :disabled="!(titleModel && ingredientsModel && descriptionModel && imageModel)"
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
import { mapState } from "vuex";
import { uuid } from "vue-uuid";
import defaultImage from "@/assets/default.png";

export default {
  name: "ModalRecipe",
  props: {
    id: {
      type: String,
      default: null
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
      default: null
    },
    image: {
      type: String,
      default: ""
    },
    parentId: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: "Add recipe"
    },
    titleModal: {
      type: String,
      default: "Add new recipe"
    }
  },
  data() {
    return {
      titleModel: "",
      ingredientsModel: "",
      descriptionModel: "",
      parentIdModel: null,
      imageModel: ""
    };
  },
  mounted() {
    this.titleModel = this.title;
    this.ingredientsModel = this.ingredients;
    this.descriptionModel = this.description;
    this.imageModel = this.image;
    this.parentIdModel = this.parentId;
  },
  computed: {
    ...mapState(["recipes"])
  },
  methods: {
    onClose() {
      this.$emit("on-close");
    },
    imageExists(url) {
      const http = new XMLHttpRequest();
      http.open("HEAD", url, false);
      http.send();
      return http.status !== 404;
    },
    onSubmit() {
      this.$emit("on-submit", {
        id: this.id ?? uuid.v1(),
        title: this.titleModel,
        image: this.imageExists(this.imageModel) ? this.imageModel : defaultImage,
        ingredients: this.ingredientsModel,
        description: this.descriptionModel,
        parentId: this.parentIdModel,
        createdAt: this.createdAt ?? new Date().toLocaleString()
      });
      this.$emit("on-close");
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
