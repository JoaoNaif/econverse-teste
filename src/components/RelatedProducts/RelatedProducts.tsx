import { Slider } from '../Slider/Slider'
import { TitleProduct } from '../TitleProduct/TitleProduct'

import './RelatedProducts.scss'

export function RelatedProducts() {
  return (
    <main className="relatedProducts-container">
      <TitleProduct />
      <span className="related-all">Ver todos</span>
      <Slider />
    </main>
  )
}
