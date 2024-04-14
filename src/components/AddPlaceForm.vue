<script setup>
import { usePreview } from '../composables/preview';

const {imageUrl, previewImage} = usePreview()
const emit = defineEmits(["close-form"]);
const handleClick = (type) => {
  emit("close-form");
};
</script>
<template>
  <form action="#" class="fform bg-white p-5 w-75 rounded-5 position-relative">
    <div
      class="fform-bg w-100 h-100 position-absolute top-0 start-0 rounded-5"
    ></div>
    <button
      class="btnClose position-absolute fs-1"
      @click.prevent="handleClick('addPlace')"
    >
      &times;
    </button>
    <div class="form-header d-flex justify-content-center">
      <h3 class="form-title text-center fs-6">Добавить точку продаж</h3>
    </div>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-6 p-2">
          <div class="text-center">
            <label for="inpFile" class="text-center">
              <input
                type="file"
                name="inpFile"
                id="inpFile"
                style="width: 0; height: 0"
                
                @change="previewImage"
              />
              <i class="bi bi-image text-warning" style="font-size: 70px"></i>
            </label>
            <div v-if="imageUrl" class="preview">
              <div class="previev-container">
                <img :src="imageUrl" alt="Preview" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 p-2">
          <div class="mb-3 border-bottom border-warning">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="w-100 border-0 outline-none fw-bold px-2 bg-transparent"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 border-bottom border-warning">
            <label for="password" class="form-label">Пароль</label>
            <input
              type="password"
              class="w-100 border-0 outline-none fw-bold px-2 bg-transparent"
              id="password"
            />
          </div>
          <div class="mb-3 border-bottom border-warning">
            <label for="email-1" class="form-label">Email</label>
            <input
              type="email"
              class="w-100 border-0 outline-none fw-bold px-2 bg-transparent"
              id="email-1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 border-bottom border-warning">
            <label for="password-1" class="form-label">Пароль</label>
            <input
              type="password"
              class="w-100 border-0 outline-none fw-bold px-2 bg-transparent"
              id="password-1"
            />
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="base-btn d-block m-auto">Отправить</button>
  </form>
</template>
<style scoped>
.preview{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.preview-container {
  width: 100%;
  /* height: 100px; */
  border: 1px solid #ddd;
  
}

.preview-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
