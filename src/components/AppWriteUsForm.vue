<script setup>
const emit = defineEmits(['close-form'])
const handleClick = (type) => {
   emit('close-form')
}
</script>
<template>
    <form
    action="#"
    class="fform bg-white p-5 w-50 rounded-5 position-relative"
  >
    <button class="btnClose position-absolute" @click.prevent="handleClick('writeUs')">
      &times;
    </button>
    <div class="form-header">
      <h3 class="form-title">Написать нам</h3>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 p-2">
          <div class="mb-3">
      <label for="email" class="form-label"
        >Email</label
      >
      <input
        type="email"
        class="fform-control w-100"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input type="password" class="fform-control w-100" id="password" />
    </div>
        </div>
        <div class="col-6 p-2">
          <div class="mb-3">
      <label for="email-1" class="form-label"
        >Email</label
      >
      <input
        type="email"
        class="fform-control w-100"
        id="email-1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="password-1" class="form-label">Пароль</label>
      <input type="password" class="fform-control w-100" id="password-1" />
    </div>
        </div>
      </div>
    </div>
    <button type="submit" class="base-btn">Отправить</button>
  </form>
</template>
<style scoped >

</style>