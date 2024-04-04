<script setup>
const emit = defineEmits(['close-form'])
const handleClick = (type) => {
   emit('close-form')
}
</script>
<template>
    <form
    action="#"
    class="fform bg-success p-5 w-50 rounded-5 position-relative"
  >
    <button class="btnClose position-absolute" @click.prevent="handleClick('writeUs')">
      &times;
    </button>
    <div class="form-header">
      <h3>Написать нам</h3>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>
  </form>
</template>
<style scoped >

</style>