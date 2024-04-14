<script setup>

import { useAuth } from '../composables/auth';

const {data, login, goToBack} = useAuth()


</script>
<template>
    <div class="layout d-flex" @click.self="goToBack()">
      <form
    action="#"
    class="fform bg-white p-5 w-50 rounded-5 position-relative"
    @submit.prevent="login"
  >
  <div class="fform-bg w-100 h-100 position-absolute top-0 start-0 rounded-5"></div>
  <button class="btnClose btn btn-outline-warning btn-sm position-absolute" @click.prevent="goToBack()">
      <!-- &times; -->
      Назад
    </button>
    <div class="form-header">
      <h3 class="form-title">Регистрация</h3>
    </div>
    <div class="mb-3">
      <label for="inpName" class="form-label"
        >Имя</label
      >
      <input
        type="text"
        name="userName"
        class="form-control"
        id="inpName"
        v-model="data.userName"
      />
    </div>
    <div class="mb-3">
      <label for="inpEmail" class="form-label"
        >Почта</label
      >
      <input
        type="email"
        name="userEmail"
        class="form-control"
        id="inpEmail"
        v-model="data.mail"
      />
    </div>
    <div class="mb-3">
      <label for="inpLogin" class="form-label"
        >Логин</label
      >
      <input
        type="text"
        name="login"
        class="form-control"
        id="inpLogin"
        v-model="data.login"
      />
    </div>
    <div class="mb-3">
      <label for="inpPpass" class="form-label"
        >Пароль</label
      >
      <input
        type="password"
        name="password"
        class="border border-1 border-warning w-100 rounded-1 p-1"
        id="inpPass"
        v-model="data.password"
      />
    </div>
    <div class="mb-3">
      <label for="inpPassConfirm" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        name="passConfirm"
        type="password"
        class="form-control"
        id="inpPassConfirm"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
    </div>
    
      <button type="submit" class="base-btn d-block m-auto">Отправить</button>
    
  </form>
    </div>
</template>
<style scoped >

</style>