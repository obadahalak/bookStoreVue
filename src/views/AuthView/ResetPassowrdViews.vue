<template>
    <ResetPassword></ResetPassword>
    </template>
    
    <script>
    import ResetPassowrd from "@/components/AuthComponent/ResetPassowrd.vue";
  import { defineComponent } from "vue";  
    
    // Components
    
    export default defineComponent({
      name: "ResetPasswordView",
    
      components: {
      ResetPassowrd
        
    },
    });
    </script>
    