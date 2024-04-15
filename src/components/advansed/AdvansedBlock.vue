<script setup>
import AdvancedItem from './AdvancedItem.vue';
const props = defineProps({
   title:String,
   customClas:String,
   list:{
    type:[Array,Object],
    required:true
   }
})

</script>
<template>
    <div :list="list">
              <div class="" :class="customClas">
              <h3 class="text-center fs-5 text-capitalize">{{props.title}}</h3>
              <ul class="advansed-list m-0 p-0">
                <advanced-item 
                  :item="item" 
                  v-for="item in list" 
                  :key="item.id"
                ></advanced-item>
              </ul>
            </div>
            </div>
</template>
<style scoped >

</style>