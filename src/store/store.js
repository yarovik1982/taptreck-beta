import { createStore } from 'vuex'
import { watch } from "vue";

export default createStore({
   state:{
      beerData:[
        
      ]
   },
   getters:{
      getBeerData(state){
         return state.beerData
      },
   },
   mutations:{
      ADD_BEER(state, data){
         state.beerData = [...state.beerData, data]
      },
   },
   actions:{},
   modules:{
      // auth,
   }
})
