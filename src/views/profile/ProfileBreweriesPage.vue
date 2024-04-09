<script setup>
import AppButton from '../../components/UI/AppButton.vue';
const emits = defineEmits(['open-form'])
const handleClick = (typeForm) =>{
    emits('open-form', typeForm)
}
</script>
<template>
    <div class="container-fluid position-absolute" style="top:140px;left: 0;">
        <div class="text-end">
            <app-button :class="'base-btn'" @click="handleClick('addBrewery')">Добавить пивоварню</app-button>
        </div>
    </div>
    <h3 class="text-center">Мои пивоварни</h3>
</template>
<style scoped >

</style>