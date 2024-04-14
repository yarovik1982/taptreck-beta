<script setup>
import AppInput from '../components/UI/AppInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storage } from "../services/auth-header.js"
import { useStore } from 'vuex'

const store = useStore()
const login = ref('')
const password = ref('')


const router = useRouter()

const handleClick = () => {
   router.go(-1)
}
const handleSubmit = async() => {
 await store.dispatch('GET_AUTH',{
    login:login.value,
    password:password.value
  })  
  const token = await storage.getToken()
  if(!token)return false
 await store.dispatch('GET_USER', token)
 setTimeout(()=>{
   router.push('/profile') 
   location.reload()
 },100)
}
const updateLogin = (event) => {
  login.value = event.target.value;
}
</script>
<template>
    <div class="layout d-flex" @click.self="handleClick">
      <form
    action="#"
    class="fform bg-white p-5 w-50 rounded-5 position-relative"
    @submit.prevent="handleSubmit"
    
  >
  <div class="fform-bg w-100 h-100 position-absolute top-0 start-0 rounded-5"></div>
    <button class="btnClose btn btn-outline-warning btn-sm position-absolute" @click.prevent="handleClick">
      <!-- &times; -->
      Назад
    </button>
    <div class="form-header">
      <h3 class="form-title">Авторизация</h3>
    </div>
    <AppInput
      divClass="mb-3"
      labelFor="inpLogin"
      labelClass="form-label"
      labelText="Логин"
      inputType="text"
      inputClass="form-control"
      inputId="inpLogin"
      inputName="login"
      :value="login"
      @input="updateLogin"
    />
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Проверить меня</label>
    </div>
      <button type="submit" class="base-btn d-block m-auto">Отправить</button>
  </form>
    </div>
</template>
<style scoped >

</style>