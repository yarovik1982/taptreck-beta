<script setup>
import { ref } from 'vue';
import AppInput from './UI/AppInput.vue'
import { auth, API_URL } from '../services/auth.service'
import { storage } from '../services/auth-header'
import { useRouter } from 'vue-router'
const emit = defineEmits(["close-form", "handle-submit"]);
const login = ref('')
const password = ref('')
const toProfile = useRouter()
const handleClick = () => {
  emit("close-form");
};

const handleSubmit = async () =>{
  const data = {
    login:login.value,
    password:password.value
  }
  try{
    const response = await fetch(API_URL + '/auth',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if(response.ok){
      const responseData = await response.json()
      const token = responseData.token
      localStorage.setItem('token', JSON.stringify(token))
      const profileResponse = await fetch(API_URL + "/profile", {
        headers: {
              Authorization: 'Bearer ' + storage.getToken(),
            },
          });
        
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            console.log(profileData);
            localStorage.setItem("user", JSON.stringify(profileData))
            
            toProfile.push("/profile");
            setTimeout(() => {
              location.reload(true)
              message.value = ''
            }, 300)
          } else
            alert("Плохо")
        }
    }
    catch(error) {
      console.log(error);
    }
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

    <!-- <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        Мы никогда никому не передадим вашу электронную почту.
      </div>
    </div> -->
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Проверить меня</label>
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>
  </form>
</template>
<style scoped></style>
