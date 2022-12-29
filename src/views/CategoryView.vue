<template>
  <NavBar />
  <nav-bar-2
    @getCategories="(id) => (selectedId = id)"
    :categorytags="tagGategories"
  />
  <search />
  <categoryCards :categories="filterdCategories" />

  <Footer />
</template>

<script>
import NavBar from "../components/NavBar/Navbar.vue";
import search from "../components/Search.vue";
import NavBar2 from "@/components/NavBar/NavBar2.vue";
import categoryCards from "../components/Category/CategoryCards.vue";
import Footer from "@/components/Footer.vue";
import endpoints from "@/mixins/endpoints";
export default {
  mixins: [endpoints],
  components: {
    NavBar,
    NavBar2,
    search,
    categoryCards,
    Footer,
  },
  data: () => ({
    tagGategories: null,
    categories: null,
    selectedId: null,
  }),

  async created() {
    this.tagGategories = await this.getTags();
     this.categories = await this.getcategories();
  },

  // mounted() {
  //   this.categories = this.getcategories();
  // },
  computed: {
     filterdCategories() {
      if (!this.selectedId) {
        return this.categories;
      }
      return this.categories.filter((c) => c.tagId == this.selectedId);
    },
  },
};
</script>
