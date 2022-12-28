<template>
  <div class="d-flex mb-2 navColor pa-4 rounded-b-lg">
   
    <v-btn class="mr-auto" icon>
      <v-icon color="red darken-1">mdi-home</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-sheet rounded="lg"  :class="{color:navBarColor}" class="ma-2 pa-2">Home</v-sheet>
    </router-link>

    <router-link to="/category">
      <v-sheet rounded="lg" :class="{navBarColor}" flat class="ma-2 pa-2">Category</v-sheet>
    </router-link>
   
    <router-link to="/">
      <v-sheet rounded="lg" class="ma-2 pa-2">Authers</v-sheet>
    </router-link>
   
    <router-link to="/">
      <v-sheet rounded="lg" class="ma-2 pa-2">New book</v-sheet>
    </router-link>

   
    <v-spacer></v-spacer>
   
    <router-link to="AuthView/Login"><v-btn variant="text" size="large" rounded="lg" class="bg-red ma-2 mx-auto">Login</v-btn></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconText: "message-text",
      isActive:false,
      color:'text-red',
     
    };
  },
  // created() {
  //   console.log(this.$route);
  // },
  computed: {
      navBarColor() {
        console.log(this.$route.meta.navBarColor);
        this.color=this.$route.meta.navBarColor;
      }
  }
};
</script>
<style scoped>
.navColor {
  background-color: #bde2d0;
  border-color: #707070;
}
</style>
