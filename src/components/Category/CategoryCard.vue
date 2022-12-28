<template>
  <!-- <v-col v-for="category in categories " :key="categories.id"> -->
  <v-card rounded="lg" color="#7bbea8">
    <v-img rounded="xl" :src="category.image" height="200" cover></v-img>

    <v-list-item class="w-100 mb-2 mt-2">
      <template v-slot:prepend>
        <p
          class="text-sm-subtitle-1 text-xs-caption text-md-h6 text-lg-h5 font-weight-thin"
        >
          {{ category.name }}
        </p>
      </template>

      <template v-slot:append>
        <div>
          <p class="text-button">{{ category.title }}</p>
        </div>
      </template>
    </v-list-item>

    <v-card-text
      id="style-1"
      class="scrollbar d-flex justify-center"
      style="max-height: 190px"
    >
      <p class="text-body-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        reprehenderit voluptatem repellat at nemo unde quia maxime suscipit
        amet, enim assumenda doloribus neque itaque eligendi nisi quod velit
        perferendis beatae. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Harum, reprehenderit voluptatem repellat at nemo unde quia maxime
        suscipit amet, enim assumenda doloribus neque itaque eligendi nisi quod
        velit perferendis
      </p>
    </v-card-text>

    <v-card-action class="d-flex justify-center mx-2">
      <p class="text-h6 text-red mb-2">20 Books</p>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  props: {
    category: Object,
  },
  mounted(){
    console.log("mounted");
  }
};
</script>

<style scoped>
.scrollbar {
 
  background: #f5f5f551;
  overflow-y: auto;
  margin-bottom: 25px;
  border-radius:  10px;
 
}

#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;

}
</style>
