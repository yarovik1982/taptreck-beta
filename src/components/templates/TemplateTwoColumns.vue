<script setup>

</script>
<template>
    <div class="container-fluid">
    <div class="flex">
      <div class="flex-item flex-item-extend">
        
         <slot name="leftColumn"></slot>
        
      </div>
      <div class="flex-item flex-item-fixed--width">
        
          <slot name="rightColumn"></slot>
        
      </div>
    </div>
  </div>
</template>
<style scoped >

</style>