<script setup>
import { ref} from 'vue'
const emit = defineEmits(['close-form'])
const hideLayout = (type) => {
   emit('close-form')
}
const userName = ref('')
const login    = ref('')
const mail     = ref('')
const password = ref('')
</script>
<template>
  <form
    action="#"
    class="fform bg-white p-5 w-50 rounded-5 position-relative"
    
  >
    <button class="btnClose position-absolute" @click.prevent="hideLayout('register')">
      &times;
    </button>
    <div class="form-header">
      <h3>Регистрация</h3>
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
        v-model="userName"
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
        v-model="login"
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
        v-model="password"
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
    <div class="d-flex justify-content-center">
      <button type="submit" class="base-btn">Отправить</button>
    </div>
  </form>
</template>
<style scoped></style>
