<script setup>
import { useCounter } from '../composables/counter';

const {state, decrement, increment} = useCounter()
</script>
<template>
    <div class="d-flex">
      <button class="btn btn-primary btn-sm" @click="decrement">-</button>
      <span>{{ state.count.num }}</span>
      <button class="btn btn-primary btn-sm" @click="increment">+</button>
    </div>
</template>
<style scoped >

</style>