<template>
    <navbar></navbar>
    <UserName></UserName>
</template>
    
    <script>
import Navbar from "@/components/NavBar/Navbar.vue";
import UserName from "@/components/UserName.vue";
  import { defineComponent } from "vue";  
    
    // Components
    
    export default defineComponent({
      name: "AuthorView",
    
      components: {
    Navbar,
    UserName
},
    });
    </script>
    