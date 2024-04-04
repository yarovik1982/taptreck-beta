<!-- HomePage.vue -->
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  handler:{
    type:Function,
    default:()=>{}
  }
})
const emit = defineEmits(["open-form"]);
const handleClick = (typeForm) => {
    
  emit("open-form", typeForm);
};
</script>
<template>
    <h1 class="text-center">Home Page</h1>
    <section id="hero">
        <h2 class="section-title text-center text-capitalize"></h2>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-4">
                    <div class="p-3">
                        <h2 class="block-title">
                            Насладитесь красивым закатом или приятной компанией с 
                            <span style="font-weight: bold;">TapTreck</span>
                        </h2>
                        <p>
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Lorem пояс щеке переписывается вопрос. Безопасную вдали раз образ однажды.
                        </p>
                        <button class="btn btn-info btn-sm text-capitalize"
                         
                         @click="handleClick('writeUs')"
                         >написать нам</button>
                    </div>
                </div>
                <div class="col-8">
                    <div class="img rounded rounded-3 w-100" >
                        <img src="../../assets/images/home.png" alt="" style="width: 100%;object-fit: cover; border-radius:1rem;" >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped >

</style>