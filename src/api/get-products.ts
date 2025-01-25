import { api } from '../lib/axios'

export interface Products {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface GetProducts {
  success: boolean
  products: Products[]
}

export async function getProducts() {
  const response = await api.get<GetProducts>('')

  return response.data.products
}
