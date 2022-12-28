<template>
  <navbar></navbar>
    <LogIn></LogIn>
  </template>
  
  <script>
  import LogIn from "@/components/AuthComponent/LogIn.vue";
import Navbar from "@/components/NavBar/Navbar.vue";
import { defineComponent } from "vue";  
  
  // Components
  
  export default defineComponent({
    name: "LogInView",
  
    components: {
    LogIn,
        Navbar,
      
  },
  });
  </script>
  