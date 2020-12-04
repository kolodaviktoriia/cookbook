<template>
  <div id="header-wrapper">
  <div id="header">
    <img src="./assets/logo.png" id="logo">
    Cookbook
  </div>
  </div>
  <router-view/>
</template>
<script>
export default {
}
</script>
<style>

#logo{
  width: 90px;
  height: 90px;
}
#header-wrapper{
  padding: 50px 50px 0px 50px;
}
#header{
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
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #d9d9d973 ;
}
body{
  margin: 0;
  padding: 0;
}
</style>
