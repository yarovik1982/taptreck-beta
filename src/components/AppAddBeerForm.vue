<script setup>
import { ref } from 'vue';

const emits = defineEmits(['close-form', 'add-beer'])
const handleClick = () => {
   emits('close-form')
}

const description = ref('')
const image = ref('')
const title = ref('')

const handleSubmit = () => {
   const data = {
      title: title.value,
      description: description.value,
      image: image.value
   }
   emits('add-beer',data)
   handleClick()
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
      <h3>Добавить пиво</h3>
    </div>
    <div class="mb-3">
      <label for="inpBeerTitle" class="form-label"
        >Название</label
      >
      <input
        type="text"
        class="form-control"
        id="inpBeerTitle"
        v-model="title"
      />
    </div>
    <div class="mb-3">
      <label for="inpDescription" class="form-label">Описание</label>
      <input type="text" class="form-control" id="inpDescription" v-model="description"/>
    </div>
    <div class="mb-3">
       <label class="form-label" for="inpImage">Ссылка на изображение</label>
      <input type="text" class="form-control" id="inpImage" v-model="image" />
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>
  </form>
</template>
<style scoped></style>
