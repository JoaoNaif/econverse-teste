import { setupWorker } from 'msw/browser'

import { env } from '../../env'
import { getProductsMock } from './get-products'

export const worker = setupWorker(getProductsMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
