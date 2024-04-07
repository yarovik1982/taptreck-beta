//CardList.vue
<script setup>
import CardItem from "./CardItem.vue";
import { ref } from 'vue'
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

</script>
<template>
  <CardItem :item="item" v-for="(item, index) in list" :key="index + 1" />
</template>
<style scoped></style>
