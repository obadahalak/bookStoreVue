<template>

    <div class="container ma-8">
        <v-row>
            <v-col cols="8">
                <h1 class="text-red">{{book.name}}</h1>
                <div class="informatoin ma-5" style="font-size: 20px; font-family:segoe ui ;">
                    <p>{{book.category_name}}</p>
                    <p>{{book.auther}}</p>
                    <p>500 Page</p>
                    <div><v-rating></v-rating></div>
                </div>
            </v-col>
            <v-col>
                    <div class="d-flex bg-grey-lighten-4">
                        <v-img class="bg-white" width="300" :aspect-ratio="2" :src="book.coverImage"></v-img>
                    </div>
            </v-col>
        </v-row>
        <br><br>
        <p class="font-weight-bold">OverView</p>
        <p>
          {{book.overview}}
        </p>
        <p class="font-weight-bold">Details</p>
        <p>
          {{book.details}}
        </p>
        <p class="font-weight-bold">List Image</p>
    <v-slide-group v-model="model" class="pa-5" selected-class="bg-success" show-arrows>
      <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <v-card
          color="red"
          :class="['ma-4', selectedClass]"
          height="250"
          width="250"
          @click="toggle">
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
    </div>
    <div class="text-right ma-12">
      <v-btn  color="red" size="large">Download PDF</v-btn>
    </div>
</template>
<style scoped>
.font-weight-bold{
    margin: 20px 0px;
    font-family: segoe ui;
    font-size: 30px;
}   
</style>
<script>

export default {
  
  props:{book:Object},
}
</script>
