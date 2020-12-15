<template>
  <div id="wrapper">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
<style lang="scss">
#wrapper {
  padding: 50px 150px 0px 150px;
}

@media (max-width: 1120px) {
  #wrapper {
    padding: 10px 50px 0px 50px;
  }
}

@media (max-width: 680px) {
  #wrapper {
    padding: 10px 10px 0px 10px;
  }
}

#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262626;
  background: #d9d9d973;
}
body {
  margin: 0;
  padding: 0;
}
</style>
