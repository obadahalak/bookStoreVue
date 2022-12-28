<template>
  <NavBar/>
  <nav-bar-2 @getCategories="(id)=>selectedId=id" :categorytags="tagGategories"/>
  <search />
  <categoryCards :categories="filterdCategories"/>
  <Footer/>
</template>

<script>
import NavBar from "../components/NavBar/Navbar.vue";
import search from "../components/Search.vue";
import NavBar2 from "@/components/NavBar/NavBar2.vue";
import categoryCards from "../components/Category/CategoryCards.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    NavBar2,
    search,
    categoryCards,
    Footer,
},  
  data: () => ({
    tagGategories:[
      {id:1,name:"categoryName1"},
      {id:2,name:"categoryName2"},
      {id:3,name:"categoryName3"},
      {id:4,name:"categoryName4"},
      {id:5,name:"categoryName5"},
    
    ],
  categories:[
    {id:1,name:"category1",title:"title1", image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:1},
    {id:2,name:"category1",title:"title2",image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:1},
    {id:3,name:"category2",title:"title3", image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:1},
    {id:4,name:"category2",title:"title4", image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:2},
    {id:5,name:"category3",title:"title5", image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:2},
    {id:6,name:"category6",title:"title6", image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:3},
    {id:7,name:"category2",title:"title7", image:"https://via.placeholder.com/600x600.png/000011?text=et",tagId:3},
    
  ],
  selectedId :null,
  }
  
  ),
  
  computed:{
  //   GetfilterCategoryById(id){
     
  //   console.log("GetfilterCategoryById"+id);
  //  return this.categories.filter(c=> c.tagId==id);
  //   }
  filterdCategories(){
    if(!this.selectedId)
    return this.categories;
    return this.categories.filter(c=> c.tagId==this.selectedId);
    // console.log(this.selectedId);
  }
  }
};
</script>
