import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/users";
const USER_API_BASE_URL_2 = "http://localhost:8081/register";
class UserService {
  createUser(user) {
    return axios.post(USER_API_BASE_URL_2, user);
  }
  getUsers(){
    return axios.get(USER_API_BASE_URL);
}


getUserById(userId){
    return axios.get(USER_API_BASE_URL + '/' + userId);
}

updateUser(user, userId){
    return axios.put(USER_API_BASE_URL + '/' + userId, user);
}

deleteUser(userId){
    return axios.delete(USER_API_BASE_URL + '/' + userId);
}
}

export default new UserService();