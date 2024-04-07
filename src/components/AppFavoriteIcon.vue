<script setup>
import { ref } from 'vue';

// const emit = defineEmits(['set-favorited']) 
const isFavorite = ref(false)
const setFavorited = () => {
   isFavorite.value = !isFavorite.value
  //  emit('set-favoritrd')
}
</script>
<template>
  <div @click="setFavorited()">
    <i class="bi" :class="isFavorite ? 'bi-heart-fill' : 'bi-heart'" style="color: red"></i>
    <!-- <i class="bi bi-heart-fill" v-else style="color: red"></i> -->
  </div>
</template>
<style scoped></style>
