<script setup>

</script>
<template>
    <form
    action="#"
    class="fform bg-white p-5 w-75 rounded-5 position-relative"
  >
  <div class="fform-bg w-100 h-100 position-absolute top-0 start-0 rounded-5"></div>
    <button class="btnClose position-absolute" @click.prevent="handleClick('addBrewery')">
      &times;
    </button>
    <div class="form-header">
      <h3 class="form-title">Добавить пивоварню</h3>
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
      <button type="submit" class="base-btn d-block m-auto">Отправить</button>
  </form>
</template>
<style scoped >

</style>