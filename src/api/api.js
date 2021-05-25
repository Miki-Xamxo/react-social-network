import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '05f2f074-94ee-4907-8d6d-7bbe2c5c1c94',
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  follow(id){
    return instance.post(`follow/${id}`).then(response => response.data)
  },
  unFollow(id){
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
  getProfile(id){
    return profileAPI.getProfile(id)
  }
}

export const profileAPI = {
  getProfile(id){
    return instance.get(`profile/${id}`).then(response => response.data)
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },

  updateStatus(status){
    return instance.put(`profile/status`, {status: status})
  }

}

export const authAPI = {
  authMe(){
    return instance.get(`auth/me`).then(response => response.data)
  },
  authLogin(email, password, rememberMe){
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  authLogout(){
    return instance.delete(`auth/login`)
  }
}






