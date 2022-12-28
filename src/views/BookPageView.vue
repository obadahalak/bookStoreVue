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

  mounted(){
    this.bookId=this.$route.params.bookId;
  },
   async created(){
     this.book=await this.getBook(2);
     
  }
});
</script>
