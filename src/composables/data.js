import { listData } from "../functions/useList";
import { ref, onMounted } from 'vue';

export const useData = () => {
   const data = ref({})

   onMounted(() => {
      data.value = listData
   })

   return {data}
}