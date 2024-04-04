<script setup>
import { RouterLink } from 'vue-router'
import { ref , onMounted } from 'vue'
import { storage } from '../services/auth-header'



const isAuth = ref(null)
const emit = defineEmits(["open-form"]);
const handleClick = (typeForm) => {
  emit("open-form", typeForm);
};
onMounted(()=>{
  if(!storage.getCurrentUser()){
    isAuth.value = false
  }else{
    isAuth.value = true
  }
})
</script>
<template>
  <nav class="navbar navbar-expand">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100">
          <li class="nav-item">
            <RouterLink class="nav-link py-0 position-relative" aria-current="page" to="/">Главная</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0 position-relative" aria-current="page" to="/place">Места</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0 position-relative" aria-current="page" to="/beer">Пиво</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0 position-relative" aria-current="page" to="/brewery">Пивоварни</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0 position-relative" aria-current="page" to="/test">TEST</RouterLink>
          </li>
          <li class="nav-item">
            <a role="button" class="nav-link py-0" @click="handleClick('writeUs')">Написать нам</a>
          </li>
          <li class="nav-item ms-auto" v-if="isAuth">
            <RouterLink class="nav-link py-0 position-relative" to="/profile-favorites">Профиль</RouterLink>
          </li>         
        </ul>
        
      </div>
    </div>
  </nav>
</template>
<style scoped>
.router-link-active::before{
   position: absolute;
   content:"";
   top: 100%;
   left: 10px;
   width: 50%;
   height: 3px;
   background-color: yellow;
}

</style>
