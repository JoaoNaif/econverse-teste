import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://app.econverse.com.br',
  withCredentials: true,
})
