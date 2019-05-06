import axios from 'axios';

const url = 'http://localhost:3000/user';

class UserService {
  static GetUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static CreateUser(userObject) {
    return axios.post(url, userObject);
  }
}

export default UserService;