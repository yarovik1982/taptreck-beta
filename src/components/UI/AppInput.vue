//AppInput.vue
<script setup>
const props = defineProps({
   divClass:'mb-3',
   labelFor:String,
   labelClass:String,
   labelText:String,
   inputType:String,
   inputClass:String,
   inputId:String,
   inputName:String,
   value:String,
   action:{
      type:()=>{},
      default:null
   }
})
</script>
<template>
    <div :class="props.divClass ">
      <label :for="props.labelFor" :class="props.labelClass"
        ><slot>{{ props.labelText }}</slot></label
      >
      <input
        :type="props.inputType"
        :class="props.inputClass"
        :id="props.inputId"
        :name="props.inputName"
        :value="props.value"
      />
      
    </div>
</template>
<style scoped >

</style>