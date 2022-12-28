<template>
<NavBar></NavBar>

</template>

<script>
import NavBar from "../components/NavBar/Navbar.vue";
import books from '../components/bookCards/Cards.vue';
export default {
components:{ NavBar, books},
 data: () => ({
  
     tags:[{
      id:1,tagName:"newBooks",
       books:[
     { 
              id:   1,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            },
             { 
              id: 2,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            },
             { 
              id: 3,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            },
             { 
              id: 4,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            }
  ],
     },

{
  id:2, tagName: "Category",
  books:[
     { 
              id:   5,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            },
             { 
              id: 6,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            },
             { 
              id: 7,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            },
               { 
              id: 8,
              name: "bookName4",
              details: "details-book.....",
              like: true,
            }
  ],
}

     ]    
    
    
  }),
 
};


</script>

<style>

</style>