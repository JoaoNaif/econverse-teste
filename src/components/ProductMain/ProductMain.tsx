import { TitleProduct } from '../TitleProduct/TitleProduct'
import { SubCategory } from './components/SubCategory/SubCategory'
import './ProductMain.scss'

export function ProductMain() {
  return (
    <main className="productMain-container">
      <TitleProduct />
      <SubCategory />
    </main>
  )
}
