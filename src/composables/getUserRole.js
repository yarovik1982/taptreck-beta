import { ref } from "vue"

export const useUserData = () => {
   
   const userProfile = JSON.parse(localStorage.getItem('user'))
   const userRole    = userProfile.userRole
   const userId      = userProfile.userId
   const userName    = userProfile.userName
   const login       = userProfile.login
   const mail        = userProfile.mail
   
   console.log(userProfile.userRole);
   console.log(userRole);
   console.log(userId);
   return {
      userRole,
      userId,
      userName,
      login,
      mail
   }
}