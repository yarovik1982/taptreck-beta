<script setup>
import TemplateTwoColumnsVue from "../components/templates/TemplateTwoColumns.vue";
import CardList from "../components/CardList.vue"
import AdvansedBlockVue from "../components/advansed/AdvansedBlock.vue";
import AppButton from '../components/UI/AppButton.vue'
import { ref } from "vue";

const dataBrewery = ref([
{"id":"1", "title": "Brewery 1", "description":"Description Brewery 1","available":false,image:'../../assets/images/news1.png'},
{"id":"2", "title": "Brewery 2", "description":"Description Brewery 2","available":false,image:'../../assets/images/news2.png'},
{"id":"3", "title": "Brewery 3", "description":"Description Brewery 3","available":false,image:'../../assets/images/news3.png'},
{"id":"4", "title": "Brewery 4", "description":"Description Brewery 4","available":false,image:'../../assets/images/news4.png'},
])
</script>
<template>
    <h3 class="text-center">Это страница пивоварен</h3>
    <TemplateTwoColumnsVue>
      <template #leftColumn>
        <div class="flex-body">
          <CardList :list="dataBrewery"></CardList>
        </div>
        <div class="text-center mt-5">
          <AppButton :class="'base-btn'">Загрузить еще</AppButton>
        </div>
      </template>
      <template #rightColumn>
        <div class="flex-body border-0 p-0">
          <div class="flex-advansed advansed">

            <AdvansedBlockVue :title="'Рекомендованные места'"></AdvansedBlockVue>
            <AdvansedBlockVue :title="'Рекомендованные пивоварни'"></AdvansedBlockVue>
            <AdvansedBlockVue :title="'Может быть интересно'"></AdvansedBlockVue>
          </div>
        </div>
      </template>
    </TemplateTwoColumnsVue>
</template>
<style scoped >

</style>