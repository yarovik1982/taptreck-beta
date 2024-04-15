<script setup>
const props = defineProps({
   item:{
      type:Object,
      required:true
   }
})
</script>
<template>
  <li class="advansed-item d-flex align-items-center  bg-info py-2" :item="item">
    <div class="advansed-img ms-1 me-3"
      style="width: 50px; height: 50px; background-color: #fff"
    >
      <img :src="item.image" :alt="item.title" />
    </div>
    <h6 class="advansed-title text-capitalize">{{ item.title }}</h6>
  </li>
</template>
<style scoped></style>
