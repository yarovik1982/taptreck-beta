import { createStore } from 'vuex'
import { watch } from "vue";

const API_URL = 'http://109.201.96.70:8081/api/'


export default createStore({
   state: {
      token: localStorage.getItem('token') || null,
   },
   getters: {
      getToken(state) {
         return state.token;
      },
   },
   mutations: {
      getAuth(state, token) {
         state.token = token;
      },
   },
   actions: {
      async GET_AUTH({ commit }, data) {
         try {
            const response = await fetch(API_URL + 'user/auth', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(data),
            });
            
            if (response.ok) {
               const token = await response.json();
               commit('getAuth', token);
               return token;
            }
         } catch (error) {
            console.error(error);
         }
      },
   },
});

