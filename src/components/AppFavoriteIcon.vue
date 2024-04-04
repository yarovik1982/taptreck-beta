<script setup>
import { ref } from 'vue';

const emit = defineEmits(['fill-heart']) 
const isFavorite = ref(false)
const setFavorited = () => {
   isFavorite.value = !isFavorite.value
   emit('fill-heart')
}
</script>
<template>
  <div @click="setFavorited()">
    <i class="bi bi-heart" v-if="!isFavorite" style="color: red"></i>
    <i class="bi bi-heart-fill" v-else style="color: red"></i>
  </div>
</template>
<style scoped></style>
