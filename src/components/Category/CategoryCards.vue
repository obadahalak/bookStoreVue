<template>
  <v-container>
    <v-row class="d-flex justify-center mx-auto pa-2">
      
      <!-- <CategoryCard/> -->
       <v-col v-for="category in categories " :key="categories.id"> 
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
