<template>
  <v-container>
    <v-row  justify="start" class="d-flex  mx-auto pa-2">
      <!-- <CategoryCard/> -->
      <v-col cols="4" v-for="auther in data.data" >
        
        <Auther :auther="auther" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Auther from "./Auther.vue";
export default {
  props: {
    data: Array,
  },
  components: { Auther },

  computed() {
    console.log(data);
  },
};
</script>
