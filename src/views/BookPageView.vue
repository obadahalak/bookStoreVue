<template>
  <navbar></navbar>
  <book-information :book="book"></book-information>
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
  data:()=>({

    bookId:null,
    
    book:[],
}),


   async created(){
     this.book=await this.getBook(this.$route.params.bookId);
     
  }
});
</script>
