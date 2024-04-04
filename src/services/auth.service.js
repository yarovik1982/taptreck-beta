import axios from 'axios';

export const API_URL = 'http://109.201.96.70:8081/api/user';

export function auth(user) {
  return axios
    .post(API_URL + '/auth', {
      login: user.login,
      password: user.password
    })
    .then(response => {
      if (response.token) {
       console.log(response.token);
        localStorage.setItem('token', JSON.stringify(response.token));
      }

      return response.token;
    });
}
// class AuthService {
//   // login(user) {
//   //   return axios
//   //     .post(API_URL + '/auth', {
//   //       login: user.username,
//   //       password: user.password
//   //     })
//   //     .then(response => {
//   //       if (response.token) {
//   //        console.log(response);
//   //         localStorage.setItem('token', JSON.stringify(response.token));
//   //       }

//   //       return response.data;
//   //     });
//   // }

//   // logout() {
//   //   localStorage.removeItem('user');
//   // }

//   // register(user) {
//   //   return axios.post(API_URL + 'signup', {
//   //     username: user.username,
//   //     email: user.email,
//   //     password: user.password
//   //   });
//   // }
// }

// export default new AuthService();