<template>
  <div id="wrapper">
    <div id="header">
      <img src="./assets/logo.png" id="logo" />
      Cookbook
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
#logo {
  width: 90px;
  height: 90px;
}
#wrapper {
  padding: 50px 150px 0px 150px;
}

#header {
  padding: 20px;
  border-radius: 5px;
  background: #ffff;
  display: flex;
  flex-flow: row;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 5em;
  font-weight: bold;
  color: #262626;
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
  #header {
    font-size: 3em;
  }
  #logo {
    width: 60px;
    height: 60px;
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
