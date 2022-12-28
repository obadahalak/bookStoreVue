<template>
  <v-row v-for="tag in tags" :key="tag.id">
    <v-container>
      <p class="text-left text-red text-uppercase">
        {{ tag.tagName }}
      </p>
    </v-container>

    <v-container class="grey lighten-5 ">
      <v-row justify="start">
        <card :tag="tag"  />
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import card from "./Card.vue";
export default {
  components: { card },
  props: {
    tags: Array,
  },
};
</script>

<style></style>
