<script setup>
import { defineProps } from 'vue'
const props = defineProps({
   type:{type:String, default:'button'},
   btnClass:{type:String, default:'btn'}
})
</script>
<template>
    <button >
      <slot></slot>
    </button>
</template>
<style scoped >

</style>