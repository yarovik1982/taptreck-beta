<script setup>
import TemplateTwoColumnsVue from "../components/templates/TemplateTwoColumns.vue";

</script>
<template>
    <h3 class="text-center mt-2">Это страница пивовварен</h3>
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