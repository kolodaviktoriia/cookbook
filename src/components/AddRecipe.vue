<template>
  <div class="addRecipes">
    <div class="btnWrap">
      <button @click="showModal" type="button" class="btn btn-outline-secondary">
        Add recipe
      </button>
    </div>
    <div></div>
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

<style lang="scss" scoped>
.btnWrap {
  margin: 10px 10px 10px auto;
  width: 105px;
}
</style>
