import { Categories } from './components/Categories/Categories'
import { Header } from './components/Header/Header'
import { ProductMain } from './components/ProductMain/ProductMain'
import { Sale } from './components/Sale/Sale'

import './App.scss'
import { Slider } from './components/Slider/Slider'
import { Partnership } from './components/Partnership/Partnership'
import { RelatedProducts } from './components/RelatedProducts/RelatedProducts'
import { Brands } from './components/Brands/Brands'
import { Footer } from './components/Footer/Footer'

export function App() {
  return (
    <>
      <Header />
      <Sale />
      <main className="main-container">
        <Categories />
        <ProductMain />
        <Slider />
        <Partnership />
        <RelatedProducts />
        <Partnership />
        <Brands />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  )
}
