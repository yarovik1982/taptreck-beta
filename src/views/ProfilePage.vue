<script setup>
import TemplateTwoColumnsVue from "../components/templates/TemplateTwoColumns.vue";
import { RouterLink, RouterView } from "vue-router";

import { useUserData } from '../composables/getUserRole.js'
const emit = defineEmits(["open-form"]);
// const userRole = storage.getUserRole();

const handleOpenForm = (typeForm) => {
  emit('open-form', typeForm)
  
};
const {userRole, userName, login, mail} = useUserData()
</script>
<template>  
  <nav class="navbar navbar-expand bg-body-tertiary mt-5">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 justify-content-around">
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-favorites"
              >Избранное</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-reviews"
              >Мои Отзывы</RouterLink
            >
          </li>
          <li class="nav-item" v-if="userRole === 2 || userRole === 3">
            <RouterLink class="nav-link py-0" to="/profile-places"
              >Мои точки продаж</RouterLink
            >
          </li>

          <li class="nav-item" v-if="userRole === 3 || userRole === 1">
            <RouterLink class="nav-link py-0" to="/profile-breweries"
              >Мои пивоварни</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <TemplateTwoColumnsVue>
    <template #leftColumn>
      <div class="flex-body">
        <router-view
          @open-form="handleOpenForm"
        />
      </div>
    </template>
    <template #rightColumn>
      <div class="flex-body">
        <div class="flex-dir-col">
          <div class="flex-avatar-settings">
            <div class="flex-avatar-icon">
              <i
                class="bi bi-pencil fs-2 text-warning"
                style="cursor: pointer"
              ></i>
            </div>
            <div class="flex-avatar-icon">
              <i
                class="bi bi-trash fs-2 text-warning"
                style="cursor: pointer"
              ></i>
            </div>
          </div>
          <div class="flex-avatar">
            <img src="" alt="AVATAR" />
            <div
              class="flex-avatar-upload bg-opacity-50 bg-warning d-flex justify-content-center position-absolute bottom-0 w-100"
            >
              <div class="flex-avatar-icon">
                <i
                  class="bi bi-camera fs-2 text-white"
                  style="cursor: pointer"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <form  class="p-2">
          <div class="mb-3 border-bottom border-2 border-warning">
            <label class="form-label">Имя</label>
            <input type="text" class="w-100 border-0 px-2 fw-bold" :value="userName" readonly>
          </div>
          <div class="mb-3 border-bottom border-2 border-warning">
            <label class="form-label">Login</label>
            <input type="text" class="w-100 border-0 px-2 fw-bold" :value="login" readonly>
          </div>
          <div class="mb-3 border-bottom border-2 border-warning">
            <label class="form-label">Email</label>
            <input type="text" class="w-100 border-0 px-2 fw-bold" :value="mail" readonly>
          </div>
        </form>
      </div>
    </template>
  </TemplateTwoColumnsVue>
  <!-- <div class="container-fluid">
    <div class="flex">
      <div class="flex-item flex-item-extend">
        <div class="flex-body">
          <router-view/>
        </div>
      </div>
      <div class="flex-item flex-item-fixed--width">
        <div class="flex-body">
          <div class="flex-dir-col">
            <div class="flex-avatar-settings">
              <div class="flex-avatar-icon" >
                <i class="bi bi-pencil fs-2 text-warning" style="cursor: pointer;"></i>
              </div>
              <div class="flex-avatar-icon" >
                <i class="bi bi-trash fs-2 text-warning" style="cursor: pointer;"></i>
              </div>
            </div>
            <div class="flex-avatar">
              <img src="" alt="AVATAR" />
              <div class="flex-avatar-upload bg-opacity-50 bg-warning d-flex justify-content-center position-absolute bottom-0 w-100">
                <div class="flex-avatar-icon">
                  <i class="bi bi-camera fs-2 text-white" style="cursor: pointer;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<style scoped>
.nav-item {
  border-radius: 0.5rem;
}
.nav-item:has(.router-link-active) {
  background-color: #ffc107;
}
.nav-link {
  transition: all 0.3s linear;
}
.nav-link.router-link-active {
  color: #fff;
  text-shadow: 0 1px #000;
}
</style>
