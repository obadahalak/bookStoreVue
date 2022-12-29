<template>
<NavBar></NavBar>
<search></search>
<cards :tags="data" />
<Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar/Navbar.vue';
import Search from '@/components/Search.vue';
import cards from "../components/bookCards/Cards.vue";
import Footer from '@/components/Footer.vue';
import endpoints from "../mixins/endpoints.js";
export default {
  mixins:[endpoints],
  components: {
    NavBar,Search,cards,Footer
  },
  data: () => ({
  
  data:null,
 
 
}),


 async created(){
   this.data=await this.getHomePageApi();
  //  console.log(tags)
  
  },
};
</script>
