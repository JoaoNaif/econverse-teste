import { http, HttpResponse } from 'msw'

import { GetProducts } from '../get-products'

export const getProductsMock = http.get<never, never, GetProducts>(
  '',
  async () => {
    return HttpResponse.json({
      success: true,
      products: [],
    })
  },
)
