import axios from "axios";

export const apiInstance = axios.create({
  baseURL: 'https://backend-domain/api/',
  headers: {
    'Authorization Bearer': 'token'
  }
})