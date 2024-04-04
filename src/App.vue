//App.vue
<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppDialog from './components/UI/AppDialog.vue'
import AppLoginForm from "./components/AppLoginForm.vue";
import AppRegisterForm from './components/AppRegisterForm.vue'
import AppWriteUsForm from "./components/AppWriteUsForm.vue";
import AppAddBeerForm from "./components/AppAddBeerForm.vue"
import { RouterView, useRoute } from "vue-router";
import { ref } from "vue";
import { unScrolled, isScrolled } from "./functions/useScroll";

const currentTypeForm = ref("");
const layoutVisible = ref(false)
const openForm = (typeForm) => {
  unScrolled()
  currentTypeForm.value = typeForm;
  layoutVisible.value = currentTypeForm === '' ? false : true
};
const hideLayout = () => {
  layoutVisible.value = false
  isScrolled()
}

</script>

<template>
  <app-dialog @click="openForm"/>
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
  <AppHeader @open-form="openForm" />
  <AppNavbar @open-form="openForm"/>
  <RouterView
  @open-form="openForm"
  
  >
  </RouterView>
</template>

<style scoped></style>
