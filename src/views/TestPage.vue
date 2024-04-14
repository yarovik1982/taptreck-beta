<script setup>
import AppHeader from '../components/AppHeader.vue'
import Counter from '../components/Counter.vue'
import { useMouth } from '../composables/mouth';

const {x, y} = useMouth()
</script>
<template>
  <AppHeader/>
  <div class="container">
    <p> Mouse position at: {{ x }}, {{ y }}</p>
  </div>
  <div class="container">
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
  </div>
</template>
<style scoped></style>
