<script setup>
import TemplateTwoColumnsVue from '../components/templates/TemplateTwoColumns.vue';
import AdvansedBlockVue from '../components/advansed/AdvansedBlock.vue';
import AppButton from '../components/UI/AppButton.vue'
import CardList from "../components/CardList.vue"
import { ref } from 'vue';

const dataPlace = ref([
{"id":"1", "title": "Place 1", "description":"Description Place 1","available":false,image:'../../assets/images/news1.png'},
{"id":"2", "title": "Place 2", "description":"Description Place 2","available":false,image:'../../assets/images/news2.png'},
{"id":"3", "title": "Place 3", "description":"Description Place 3","available":false,image:'../../assets/images/news3.png'},
{"id":"4", "title": "Place 4", "description":"Description Place 4","available":false,image:'../../assets/images/news4.png'},
])
</script>
<template>
    <h3 class="text-center">Это страница мест</h3>
    <TemplateTwoColumnsVue>
      <template #leftColumn>
        <div class="flex-body">
          <CardList :list="dataPlace"></CardList>
        </div>
        <div class="text-center mt-5">
          <AppButton :class="'base-btn'">Загрузить еще</AppButton>
        </div>
      </template>
      <template #rightColumn>
        <div class="flex-body border-0 p-0">
          <div class="flex-advansed advansed">

            <AdvansedBlockVue 
              :title="'Рекомендованные места'"
              :class="'advansed-beer mb-1 border border-1 border-warning rounded-top'"
              ></AdvansedBlockVue>
            <AdvansedBlockVue 
              :title="'Рекомендованные пивоварни'"
              :class="'advansed-beer mb-1 border border-1 border-warning'"
            ></AdvansedBlockVue>
            <AdvansedBlockVue 
              :title="'Может быть интересно'"
              :class="'advansed-beer mb-1 border border-1 border-warning rounded-bottom'"
              ></AdvansedBlockVue>
          </div>
        </div>
      </template>
    </TemplateTwoColumnsVue>
</template>
<style scoped >

</style>