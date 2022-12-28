
<template>  
 
  <v-tabs class="tabs" bg-color="#efefef" fixed-tabs>
 
      <v-tab @click="getCategories(tag.id)"  v-for="tag in categorytags" class="tab">{{tag.name}}</v-tab>
 
  </v-tabs>

</template>  

<script>

export default {
 
 props:{
   categorytags:Array
 },
 methods:{
  getCategories(id){
      console.log('click'+id);
      
      this.$emit('getCategories',id);
  }
 }
}
</script>

<style scoped>
.tabs{
  display: block;
}
.tabs2{ 
  display: none;
}
  /* @media(max-width: 800px){
    .tabs2{
      display: block;
      width: 170px;
      height: 250px;
      float: left;
      z-index: 1;
    } */
    /* .tabs{
      display: none;
    } */
  /* } */
</style>