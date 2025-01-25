import axios from 'axios'

export const api = axios.create({
  baseURL:
    '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  withCredentials: true,
})
