import { profileURL } from "./Config";
import axios from 'axios';

// profile Instance
const profileInstance = axios.create({
  baseURL: profileURL,
  timeout: 1000,
  headers: { 'Profile_data': 'Profile_Api_data' }, // request headers
});


profileInstance.interceptors.request.use(function (config) {
  return { ...config };
}, function (err) {
  console.log(err);
});

profileInstance.interceptors.response.use(function (response) {
  console.log(response);
  return response;
}, function (err) {
  console.log(err);
});


export {
    profileInstance
}
