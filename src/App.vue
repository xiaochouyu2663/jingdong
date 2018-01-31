<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html{
  width:100%;
  height:100%;
  background:#f5f5f5;
}
body{
  min-width:320px;
  max-width:640px;
  outline:1px solid ;
  margin:0 auto;
}
</style>
