<template>
  <NavBar />
  <search />
  <AutherCards :data="authors" />
 
  <Footer />
</template>


<script>
import NavBar from "@/components/NavBar/Navbar.vue";
import Search from "@/components/Search.vue";
import AutherCards from "../components/AuthorCards/Authers.vue";
import Footer from "@/components/Footer.vue";
import endpoints from "../mixins/endpoints.js";
import { computed } from '@vue/runtime-core';

export default {
  mixins: [endpoints],
  components: {
    NavBar,
    Search,
    AutherCards,
    Footer,
  },
    data:()=>({
        authors:[],
    }),
    
 async created(){
         this.authors=await this.getAuthoresApi();
  },
};


</script>

<style>
</style>