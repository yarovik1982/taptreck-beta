<script setup>
import CardList from '@/components/CardList.vue';
import AppButton from '@/components/UI/AppButton.vue';
import { useData } from '@/composables/data';
const emits = defineEmits(['open-form'])
const handleClick = (typeForm) =>{
    emits('open-form', typeForm)
}
const {data} = useData()
// const {getData} = useUserBreweiesData()
// const breweriesData = ref([])
// onMounted(async () => {
//     breweriesData.value = await getData()
// })
</script>
<template>
    <div class="container-fluid position-absolute" style="top:140px;left: 0;">
        <div class="text-end">
            <app-button :class="'base-btn'" @click="handleClick('addBrewery')">Добавить пивоварню</app-button>
        </div>
    </div>
    <!-- <h3 class="text-center">Мои пивоварни</h3> -->

    <card-list
        :list="data['breweriesData']"
    ></card-list>
</template>
<style scoped >

</style>