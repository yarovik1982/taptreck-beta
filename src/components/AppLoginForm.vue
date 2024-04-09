<script setup>
import { computed, ref } from 'vue';
import AppInput from './UI/AppInput.vue'
import { auth, API_URL } from '../services/auth.service'
import { useStore } from 'vuex'
import { storage } from '../services/auth-header'
import { useRouter } from 'vue-router'
const emit = defineEmits(["close-form", "handle-submit"]);
const login = ref('')
const password = ref('')
const toProfile = useRouter()
const handleClick = () => {
  emit("close-form");
};



const store = useStore()


const handleSubmit = async() => {
 await store.dispatch('GET_AUTH',{
    login:login.value,
    password:password.value
  })
  // const token = store.state.token
  // console.log(token);
  const token = await storage.getToken(token)
  if(!token)return false
 await store.dispatch('GET_USER', token)
 toProfile.push('/profile')
 handleClick()
//  setTimeout(()=>{
//   location.reload()
//  },100)
  
}

const updateLogin = (event) => {
  login.value = event.target.value;
}
</script>
<template>
  <form
    action="#"
    class="fform bg-white p-5 w-50 rounded-5 position-relative"
    @submit.prevent="handleSubmit"
  >
  <div class="fform-bg w-100 h-100 position-absolute top-0 start-0 rounded-5"></div>
    <button class="btnClose position-absolute" @click.prevent="handleClick">
      &times;
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
</template>
<style scoped></style>

