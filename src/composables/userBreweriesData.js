import { API_URL } from '../functions/api-url'
import axios from 'axios'

export const useUserBreweiesData = () => {

   const userProfile = JSON.parse(localStorage.getItem('user'))
   let jwt = JSON.parse(localStorage.getItem('token'))
   const userId = userProfile.userId
   
   const getData = async () => {
      try {
         const response = await axios.get(API_URL + `/brewery/list/user?userId=${userId}`, {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + jwt,
            }
         });

         if (response.status === 200) {
            return response.data;
         } else if (response.status === 401) {
            const responseRefresh = await axios.post(API_URL + '/user/refresh', {
               body: jwt,
            });

            if (responseRefresh.status === 200) {
               jwt = responseRefresh.data.token;
               localStorage.setItem('token', JSON.stringify(jwt));
               return await axios.get(API_URL + `/brewery/list/user?userId=${userId}`, {
                  headers: {
                     'Content-Type': 'application/json',
                     'Authorization': 'Bearer ' + jwt,
                  }
               }).then(responseData => {
                  if (responseData.status === 200) {
                     return responseData.data;
                  } else {
                     throw new Error('Failed to fetch data after token refresh');
                  }
               });
            } else {
               throw new Error('Failed to refresh token');
            }
         }
      } catch (error) {
         console.error(error);
         throw error;
      }
   }

   return {
      getData
   };
}
