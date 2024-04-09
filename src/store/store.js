import { createStore } from 'vuex'

import axios from "axios";

const API_URL = 'http://109.201.96.70:8081/api/'


export default createStore({
   state: {
      token: localStorage.getItem('token') || null,
      refresh: localStorage.getItem('refresh') || null,
      user: localStorage.getItem('user') || null,
   },
   getters: {
      getToken(state) {
         return state.token;
      },
      getRefresh(state){
         return state.refresh
      },
      getUser(state){
         return state.user
      }
   },
   mutations: {
      setToken(state, token) {
         localStorage.setItem("token", JSON.stringify(token));
         state.token = token;
      },
      setRefresh(state, refresh){
         localStorage.setItem('refresh', JSON.stringify(refresh));
         state.refresh = refresh
      },
      setUser(state, user){
         localStorage.setItem('user', JSON.stringify(user))
         state.user = user;
      },
   },
   actions: {
      async GET_AUTH({ commit }, data) {
         try {
           const response = await axios.post(API_URL + 'user/auth', data, {
             headers: {
               'Content-Type': 'application/json',
             },
           });
       
           if (response.status === 200) {
             const token = response.data;
             commit('setToken', token.token);
             commit('setRefresh', token.refresh)
             return token;
           }
         } catch (error) {
           console.error(error);
         }
       },
       async GET_USER({ commit }, token) {
         // token = this.getters.getToken().token
         try {
           const response = await axios.get(API_URL + 'user/profile', {
             headers: {
               // Authorization: 'Bearer ' + token
               Authorization: 'Bearer ' + token
             }
           });
       
           if (response.status === 200) {
             const user = response.data;
             commit('setUser', user);
             return user;
           }
         } catch (error) {
           console.error(error);
         }
       }
   },
});

