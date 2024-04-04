<script setup>
import AppLoginForm from '../AppLoginForm.vue';
import AppRegisterForm from '../AppRegisterForm.vue';
import AppWriteUsForm from '../AppWriteUsForm.vue';
import AppAddBeerForm from '../AppAddBeerForm.vue'

const props = defineProps({
   layoutVisible: false
})

</script>
<template>
     <div class="layout modal fide"
   
   :style="layoutVisible ? 'display: block;' : 'display: none;'"
    v-if="layoutVisible === true"
    @click.self="hideLayout"
    @close-form="hideLayout"
  >
    <AppLoginForm
      @close-form="hideLayout"
      v-if="currentTypeForm === 'login'"
      
    />
    <AppAddBeerForm 
    @close-form="hideLayout"
    @add-beer="addBeer"
    v-else-if="currentTypeForm === 'addBeer'"
    />
    <AppRegisterForm
      @close-form="hideLayout"
      v-else-if="currentTypeForm === 'register'"
    />
    <AppWriteUsForm
      @close-form="hideLayout"
      v-else-if="currentTypeForm === 'writeUs'"
    />
  </div>
</template>
<style scoped >

</style>