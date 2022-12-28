<template>
  <navbar></navbar>
  <book-information></book-information>
</template>

<script>
import BookInformation from "@/components/BookInformation.vue";
import Navbar from "@/components/NavBar/Navbar.vue";
import { defineComponent } from "vue";
import endpoints from "../mixins/endpoints.js"

export default defineComponent({
  name: "AuthorView",
  mixins:[endpoints],
  components: { Navbar, BookInformation },
  data:()=>{
    bookId:null
  },

  mounted(){
    this.bookId=this.$route.params.bookId;
  },
   created(){
      console.log( this.getBook(2));
  }
});
</script>
