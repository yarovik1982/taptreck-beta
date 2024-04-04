<script setup>
import {RouterLink, RouterView} from 'vue-router'
const emit = defineEmits(['open-form'])
</script>
<template>
  <h1 class="text-center">Профиль</h1>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 justify-content-around ">
            <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-favorites">Избранное</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-reviews">Мои Отзывы</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-places">Мои точки продаж</RouterLink>
          </li>
         
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-breweries">Мои пивоварни</RouterLink>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  <router-view/>
</template>
<style scoped>
.nav-item{
    border-radius: 0.5rem;
}
.nav-item:has(.router-link-active){
    background-color: #FFC107;
}
.nav-link{
    transition: all .3s linear;
}
.nav-link.router-link-active{
    color:#fff;
    text-shadow: 0 1px #000;
}
</style>
