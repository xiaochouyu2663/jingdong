<template>
  <div class="home">
    <div class="index_search">
      <!-- <mt-search v-model="search" cancel-text=""></mt-search> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      search:''
    }
  }
}
</script>
<style>
.home{
  position: relative;
}
  .index_search{
    position:absolute;
    top:0;
    width:100%;
    height:50px;
    background:linear-gradient(#000,transparent);
  }
  .mint-search{
    height:60px;
    /* border-image-width:0; */
  }
  .mint-searchbar-inner .mintui-search{
    font-size:20px;
  }
  .mint-searchbar-inner{
    border-radius:30px;
  }
</style>


