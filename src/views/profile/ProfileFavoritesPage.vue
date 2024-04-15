<script setup>
import CardList from '@/components/CardList.vue';
import {  useData } from '@/composables/data.js';

const { data } = useData()
</script>
<template>
    <h3 class="text-center">Избранное</h3>
    <card-list
        :list="data['placesData']"
    ></card-list>
</template>
<style scoped >

</style>