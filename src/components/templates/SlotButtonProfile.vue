<script setup>
import AppButton from '../UI/AppButton.vue';
</script>
<template>
    <div class="container-fluid position-absolute" style="top:140px;left: 0;">
        <div class="text-end">
            <app-button :class="'base-btn'" @click="handleClick('addPlace')">Добавить точку продаж</app-button>
        </div>
    </div>
</template>
<style scoped >

</style>