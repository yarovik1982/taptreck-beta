import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";


const API_URL = 'http://109.201.96.70:8081/api/'
export const useAuth = () => {
   const data = reactive({
      userName:'',
      login:'',
      mail:'',
      password:''
   }) 
   // const router = useRouter()
   const login = async () => { 
      try{
         const response = await axios.post(API_URL + 'user/create', data, { 
            headers:{
               'Content-Type': 'application/json',
            },
         });
         if(response.status >= 200 && response.status <= 299){ 
            alert('Данные отправлены, статус: '+ response.status); 
            goToBack();
         } else {
            alert("Error, status " + response.status);
         }
      } catch(error){
         console.log(error);
      }
   };

   const goToBack = () => {
      useRouter().go(-1);
   };

   return {
      data,
      login,
      goToBack
   };
};


// // Функция для отправки запросов к API с использованием access токена
// async function fetchData(url, accessToken) {
//    try {
//        const response = await fetch(url, {
//            method: 'GET',
//            headers: {
//                'Authorization': 'Bearer ' + accessToken
//            }
//        });
//        if (response.ok) {
//            const data = await response.json();
//            return data;
//        } else {
//            // Если получен статус 401 (Unauthorized), обрабатываем как истекший access токен
//            if (response.status === 401) {
//                throw new Error('Access token expired');
//            }
//            // Обработка других ошибок
//            const errorData = await response.json();
//            throw new Error(errorData.message);
//        }
//    } catch (error) {
//        console.error('Error fetching data:', error.message);
//        throw error;
//    }
// }

// // Пример использования fetchData для получения данных с API
// const apiUrl = 'https://api.example.com/data';
// const accessToken = localStorage.getItem('accessToken');
// fetchData(apiUrl, accessToken)
//    .then(data => {
//        console.log('Data:', data);
//    })
//    .catch(error => {
//        // Если возникает ошибка из-за истекшего access токена, обрабатываем обновление токена
//        if (error.message === 'Access token expired') {
//            // Отправляем refresh токен на сервер для обновления access токена
//            const refreshToken = localStorage.getItem('refreshToken');
//            // Реализуйте логику обновления токена на сервере и сохранения новых токенов в localStorage
//            // После успешного обновления токена повторяем запрос к API с новым access токеном
//        }
//    });
