<script setup>
import TemplateTwoColumnsVue from '../components/templates/TemplateTwoColumns.vue'
import AdvansedBlockVue from '../components/advansed/AdvansedBlock.vue';
import CardList from "../components/CardList.vue"
import AppButton from '../components/UI/AppButton.vue';
import { ref } from "vue";
import { useData } from '../composables/data';

const emit = defineEmits(["open-form"]);
const handleClick = (typeForm) => {
  emit("open-form", typeForm);
};
const addBeer = () => {
  beerList.value.push(item)
}
const {data } = useData()
</script>
<template>
  <h3 class="text-center">Это страница пива</h3>
  
    <TemplateTwoColumnsVue>
      <template #leftColumn>
        <div class="flex-body">
          <CardList :list="data['beerData']"></CardList>
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
              :list="data['placesData']"
              :class="'advansed-beer mb-1 border border-1 border-warning rounded-top'"
              ></AdvansedBlockVue>
            <AdvansedBlockVue 
              :title="'Рекомендованные пивоварни'" 
              :list="data['breweriesData']"
              :class="'advansed-beer mb-1 border border-1 border-warning'"
              ></AdvansedBlockVue>
            <AdvansedBlockVue 
              :title="'Может быть интересно'"
              :list="data['beerData']"
              :class="'advansed-beer mb-1 border border-1 border-warning rounded-bottom'"
            ></AdvansedBlockVue>
          </div>
        </div>
      </template>
    </TemplateTwoColumnsVue>
  
</template>
<style scoped>

</style>
