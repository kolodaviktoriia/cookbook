<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss">
.main {
  margin-top: 50px;
  display: flex;
  overflow: auto;
  max-height: 70vh;
  flex-direction: column;
}
</style>
