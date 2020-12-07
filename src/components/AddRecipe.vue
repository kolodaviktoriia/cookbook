<template>
  <div class="addRecipes">
    <div class="btnWrap">
      <button @click="showModal" class="btnOpen">Add recipe</button>
    </div>
    <ModalRecipe v-if="isOpen" :close="closeModal" />
  </div>
</template>

<script>
import ModalRecipe from "@/components/ModalRecipe.vue";

export default {
  name: "AddRecipe",
  components: {
    ModalRecipe
  },
  data() {
    return {
      isOpen: false
    };
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

<style scoped>
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
  margin: 10px 10px 10px auto;
  height: 50px;
  width: 100px;
  border: 2px solid #7a75756e;
}

.btnOpen:hover {
  background: #dededeb8;
}
</style>
