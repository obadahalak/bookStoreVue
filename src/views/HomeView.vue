<template>
<NavBar></NavBar>
<search></search>
<cards :tags="tags" />
<Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar/Navbar.vue';
import Search from '@/components/Search.vue';
import cards from "../components/bookCards/Cards.vue";
import Footer from '@/components/Footer.vue';
export default {
  components: {
    NavBar,Search,cards,Footer
  },
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
