export const storage = {
  getToken() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return {};
    } else {
      return token;
    }
  },
  getRefresh(){
    const refresh = JSON.parse(localStorage.getItem('refresh'))
    return (!refresh) ? {} : refresh
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
  },
  getUserRole(){
    const user = this.getCurrentUser()
    return user.userRole
  }
};
