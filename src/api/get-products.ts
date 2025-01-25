import { Products } from '../components/Slider/Slider'
import { api } from '../lib/axios'

export interface GetProducts {
  success: boolean
  products: Products[]
}

export async function getProducts() {
  const response = await api.get<GetProducts>(
    '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  )

  return response.data
}
