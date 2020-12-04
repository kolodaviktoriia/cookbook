<template>
  <div class="recipe">
    <div class="recipe-wrapper">
      <div class="addRecipes">
        <div class="btnWrap">
          <button @click="showModal" class="btnOpen">Edit</button>
        </div>
      </div>
      <div class="title-recipe">
        {{ currentRecipe.title }}
      </div>
      <div class="main-recipe">
        <div class="ingredients-recipe">
          <h3>Ingredients</h3>
          {{ currentRecipe.ingredients }}
        </div>
        <div class="description-recipe">
          {{ currentRecipe.description }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="isOpen" id="openModal" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Edit recipe</h3>
        </div>
        <div class="modal-body">
          <div class="input-div">
            <label class="input-label">Title:</label>
            <input
              class="input-title"
              type="text"
              placeholder="Add title"
              v-model="title"
            />
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
        </div>
        <div class="modal-footer">
          <div class="modal-btn">
            <button @click="closeModal" class="btnCancel">Cancel</button>
            <button @click="addRecipes" class="btnEdit">Edit recipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Recipe',
  data () {
    return {
      title: '',
      ingredients: '',
      description: '',
      isOpen: false
    }
  },
  computed: {
    ...mapState(['currentRecipe'])
  },
  methods: {
    ...mapActions(['addRecipe']),
    addRecipes () {
      this.addRecipe({
        title: this.title,
        ingredients: this.ingredients,
        description: this.description
      })
      this.isOpen = false
    },
    showModal () {
      this.isOpen = true
    },
    closeModal () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.recipe {
  max-height: 50vh;
  width: 70%;
  overflow: auto;
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
}
.main-recipe {
  min-height: 200px;
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
}
.editRecipes {
  margin: 10px 150px;
}
.input-title {
  padding: 10px;
  width: 300px;
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
  border: none;
}
.btnCancel:hover,
.btnAdd:hover,
.btnOpen:hover {
  background: #dededeb8;
}
</style>
