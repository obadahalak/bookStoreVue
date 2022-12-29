<template>

  <v-col  v-for="book in tag">
    <v-card outlined tile text="" style="background-color: #7bbea8">
      
      <router-link :to="{name:'BookPage',params:{ bookId : book.id }}">

      <v-img 
        :src="book.cover_image.file"
        height="200"
        cover
      ></v-img>
      </router-link>

      <v-list-item class="w-100">
        <template v-slot:prepend>
          <p class="text-sm-subtitle-1 text-xs-caption text-md-h6 text-lg-h5 font-weight-thin">{{ book.name }}</p>
        </template>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-rating
              v-model="book.rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              half-increments
              hover
              readonly
              size="20"
              :empty-icon="emptyIcon"
              :full-icon="fullIcon"
              :half-icon="halfIcon"
            ></v-rating>
          </div>
        </template>
      </v-list-item>

      <v-card-text >
        {{ book.details }}
      </v-card-text>
      <v-card-action class="d-flex justify-end">
        <v-btn
          size="large"
          :color="book.like == true ? 'red' : 'black'"
          variant="text"
          icon="mdi-heart"
        ></v-btn>
      </v-card-action>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    tag: Object,
  },
  data: () => ({

    rating: 3.5,
    emptyIcon: "mdi-star-outline",
    fullIcon: "mdi-star",
    halfIcon: "mdi-star-half",
  }),
};
</script>

<style>
.cardColor {
  background-color: #7bbea8;
}
</style>
