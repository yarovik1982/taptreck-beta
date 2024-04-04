<script setup>
const emit = defineEmits(["close-form"]);
const hideLayout = () => {
  emit("close-form");
};
</script>
<template>
  
  <form
    action="#"
    class="fform bg-success p-5 w-50 rounded-5 position-relative"
  >
    <button
      class="btnClose position-absolute"
      @click.prevent="hideLayout('test')"
    >
      &times;
    </button>
    <div class="form-header">
      <h3>Регистрация</h3>
    </div>
    <div class="mb-3">
      <label for="regInpEmail" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="regInpEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="regInpEmail" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="regInpEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="regInpEmail" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="regInpEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="regInpEmail" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="regInpEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="regInpEmail" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="regInpEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="regInpPassword" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="regInpPassword" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Проверить меня</label>
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>
  </form>
</template>
<style scoped></style>
