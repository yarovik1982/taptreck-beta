<script setup>
// import AppFavoriteIcon from '../components/AppFavoriteIcon.vue'
import TemplateTwoColumnsVue from '../components/templates/TemplateTwoColumns.vue'
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
  
    <TemplateTwoColumnsVue>
      <template #leftColumn>
        <div class="flex-body"></div>
      </template>
      <template #rightColumn>
        <div class="flex-body"></div>
      </template>
    </TemplateTwoColumnsVue>
  
</template>
<style scoped>

</style>
