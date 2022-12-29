<template>
  <v-container>
    <v-row justify="start" class="d-flex  mx-auto pa-2">
      
      <!-- <CategoryCard/> -->
       <v-col cols="4" v-for="category in categories " :key="categories.id"> 
      <CategoryCard :category="category" />
    
     </v-col> 
    </v-row>
  </v-container>
</template>

<script>

import CategoryCard from "./CategoryCard.vue";
export default {
 
  props:{
    categories:Array
  },
   components: { CategoryCard },

computed(){
  console.log(categories);
}
};
</script>
