const axios = require("axios");

const uri = "http://localhost:4000/user";

function register(user) {
  const response = axios
    .post(`${uri}/register`, user)
    .then((res) => {
     if(res){ console.log(res);
       return res;}
    })
    .catch((error) => {
      console.debug(error);
     });
     
  return response;

}

const login = (user) => {
  const response = axios
    .post(`${uri}/login`, user)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.user.email);
      return response;
    })
    .catch((error) => {
      console.debug(error);
      console.log(user);

    });
  return response;
};

module.exports = {
  login,
  register,
};