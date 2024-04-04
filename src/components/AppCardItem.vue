<script setup>
import { ref } from "vue";

const props = defineProps({
   'listType'  :{type: String, default: 'listBeer'}, 
  "name"       :{type: String, default:''},
  "id"         :{type: Number, required:true},
  "description":{type: String, default:''},
  "image"      :{type: String, default:''},
});

const isFavorite = ref(false)
const setFavorited = () => {
   isFavorite.value = !isFavorite.value
}
</script>
<template>
    <div class="item border border-2 border-warning rounded rounded-2 mb-2">
      <div class="row">
         <div class="col-4 d-flex align-items-center justify-content-center">
            <div class="item-img">
               <img :src="image" :alt="name">
            </div>
         </div>
         <div class="col-8 p-3">
            <div class="d-flex align-items-center justify-content-between">
               <h4 class="item-title">{{ name }}</h4>
               <div @click="setFavorited()">
                  <i class="bi bi-heart" v-if="!isFavorite" style="color: red;" ></i>
                  <i class="bi bi-heart-fill" v-else style="color: red;"></i>
               </div>
            </div>
            <div class="item-description">{{ description }}</div>
         </div>
      </div>
    </div>
</template>
<style scoped >
.item-img{
   max-width: 200px;
   aspect-ratio: 1/1;
}
.item-img img{
   width: 100%;
   object-fit: cover;
}
.item-description{
   padding: 8px;
   max-height: 200px;
   transition: box-shadow .3s linear;
   overflow-y: auto;
}
.item-description:hover{
   box-shadow:0 0 8px 3px #ffc107;
   cursor:ns-resize;
}
</style>