<template>
<Navbar></Navbar>
<SignUp></SignUp>
  </template>
  
  <script>
import Navbar from "@/components/NavBar/Navbar.vue";  
import SignUp from "@/components/AuthComponent/SignUp.vue";
import { defineComponent } from "vue";  
  
  // Components
  
  export default defineComponent({
    name: "SignUpView",
  
    components: {
        SignUp,Navbar
          
      
  },
  });
  </script>
  