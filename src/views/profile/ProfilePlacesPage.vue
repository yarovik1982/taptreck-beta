//ProfilePlacesPage.vue
<script setup>
import AppButton from '@/components/UI/AppButton.vue';
import CardList from '@/components/CardList.vue';
import { useData } from '@/composables/data';
const emits = defineEmits(['open-form'])
const handleClick = (typeForm) => {
    
  emits("open-form", typeForm);

};
const {data} = useData()
</script>
<template>
    <div class="container-fluid position-absolute" style="top:140px;left: 0;">
        <div class="text-end">
            <app-button :class="'base-btn'" @click="handleClick('addPlace')">Добавить точку продаж</app-button>
        </div>
    </div>
    <h3 class="text-center">Мои точки продаж</h3>
    <card-list
        :list="data['placesData']"
    ></card-list>
</template>
<style scoped >

</style>