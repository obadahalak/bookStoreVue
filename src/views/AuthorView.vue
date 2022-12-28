<template>
    <navbar></navbar>
    <AuthorName></AuthorName>
</template>
    
    <script>
  import AuthorName from "@/components/AuthorName.vue";
import Navbar from "@/components/NavBar/Navbar.vue";
  import { defineComponent } from "vue";  
    
    // Components
    
    export default defineComponent({
      name: "AuthorView",
    
      components: {
    Navbar,
    AuthorName
},
    });
    </script>
    