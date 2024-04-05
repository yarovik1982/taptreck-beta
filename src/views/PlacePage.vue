<script setup>
import TemplateTwoColumns from '../components/templates/TemplateTwoColumns.vue';
</script>
<template>
    <h3 class="text-center">Это страница мест</h3>
    <TemplateTwoColumnsVue>
      <template #leftColumn>
        <div class="flex-body"></div>
      </template>
      <template #rightColumn>
        <div class="flex-body"></div>
      </template>
    </TemplateTwoColumnsVue>
</template>
<style scoped >

</style>