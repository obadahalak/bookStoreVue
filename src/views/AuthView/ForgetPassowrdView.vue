<template>
  <navbar></navbar>
  <ForgetPassword></ForgetPassword>
  </template>
  
  <script>
  import ForgetPassword from "@/components/AuthComponent/ForgetPassword.vue";
import Navbar from "@/components/NavBar/Navbar.vue";
import { defineComponent } from "vue";  
  
  // Components
  
  export default defineComponent({
    name: "ForgetPasswordView",
  
    components: {
        ForgetPassword,
        Navbar,
      
  },
  });
  </script>
  