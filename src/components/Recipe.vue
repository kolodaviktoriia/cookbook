<template>
  <div class="recipe">
    <div class="card">
      <img class="card-img-top img" :src="recipe.image" alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-title">{{ recipe.title }}</h3>
        <h5 class="card-title">Ingredients</h5>
        <p class="card-text">{{ recipe.ingredients }}</p>
        <h5 class="card-title">Description</h5>
        <p class="card-text">{{ recipe.description }}</p>
      </div>
      <div class="card-footer text-muted footer">
        {{ recipe.createdAt }}
        <button @click="showModal" type="button" class="btn btn-light">
          Edit
        </button>
      </div>
    </div>
    <ModalRecipe v-if="isOpen" :close="closeModal" :id="recipe.id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ModalRecipe from "@/components/ModalRecipe.vue";

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
      default: ""
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
    recipe() {
      if (this.$route.params.id) {
        return this.recipeById(this.$route.params.id);
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
.recipe {
  padding: 0 50px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img {
  height: 400px;
  object-fit: cover;
}
</style>
