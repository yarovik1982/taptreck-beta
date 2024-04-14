import { reactive} from 'vue'

export const useCounter = () => {
   const state = reactive({
      count:{num:0}
   })

   const increment = () => {
      state.count.num++
   }
   const decrement = () => {
      if(state.count.num > 0) state.count.num--
   }
   return {
      state,
      increment,
      decrement
   }
}