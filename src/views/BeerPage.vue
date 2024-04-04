<script setup>
// import AppFavoriteIcon from '../components/AppFavoriteIcon.vue'
import { ref } from "vue";
import ItemList from "../components/ItemList.vue"
const beerList = ref([
{title:'beer 1', description:'Описание описание описание', image: '../../assets/images/profile-favorites4.png'},
])
const emit = defineEmits(["open-form"]);
//открытие формы, кнопка "добавить пиво"
const handleClick = (typeForm) => {
  emit("open-form", typeForm);
};
const addBeer = () => {
  beerList.value.push(item)
}
</script>
<template>
  <h3 class="text-center">Это страница пива</h3>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <ItemList :item="item" @add-beer="addBeer"></ItemList>
      </div>
      <div class="col-4">
        <div class="row justify-content-center">
          <div class="col-6">
            <button
              class="btn btn-warning btn-sm"
              @click="handleClick('addBeer')"
            >
              Добавить пиво
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
