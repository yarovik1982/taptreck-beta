export const storage = {
  getToken() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return {};
    } else {
      return token;
    }
  },
  getCurrentUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if(!currentUser){
      return
    }else{
      return currentUser
    }
  },
  logout(){
    
    localStorage.clear()
  }
};
