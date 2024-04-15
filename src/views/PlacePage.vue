<script setup>
import TemplateTwoColumnsVue from '../components/templates/TemplateTwoColumns.vue';
import AdvansedBlockVue from '../components/advansed/AdvansedBlock.vue';
import AppButton from '../components/UI/AppButton.vue'
import CardList from "../components/CardList.vue"
import { useData } from '../composables/data';

const {data} = useData()
</script>
<template>
    <h3 class="text-center">Это страница мест</h3>
    <TemplateTwoColumnsVue>
      <template #leftColumn>
        <div class="flex-body">
          <CardList :list="data['placesData']"></CardList>
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
              :list="data['placesData']"
              ></AdvansedBlockVue>
            <AdvansedBlockVue 
              :title="'Рекомендованные пивоварни'"
              :class="'advansed-beer mb-1 border border-1 border-warning'"
              :list="data['breweriesData']"
            ></AdvansedBlockVue>
            <AdvansedBlockVue 
              :title="'Может быть интересно'"
              :class="'advansed-beer mb-1 border border-1 border-warning rounded-bottom'"
              :list="data['beerData']"
              ></AdvansedBlockVue>
          </div>
        </div>
      </template>
    </TemplateTwoColumnsVue>
</template>
<style scoped >

</style>