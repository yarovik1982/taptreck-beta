<script setup>
import { defineProps } from 'vue'
const props = defineProps({
   type:String,
   btnClass:String
})
</script>
<template>
    <button :type="type" :class="btnClass">
      <slot></slot>
    </button>
</template>
<style scoped >

</style>