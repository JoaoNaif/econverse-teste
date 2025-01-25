import { Categories } from './components/Categories/Categories'
import { Header } from './components/Header/Header'
import { ProductMain } from './components/ProductMain/ProductMain'
import { Sale } from './components/Sale/Sale'

import './App.scss'
import { Slider } from './components/Slider/Slider'

export function App() {
  return (
    <>
      <Header />
      <Sale />
      <main className="main-container">
        <Categories />
        <ProductMain />
        <Slider />
      </main>
    </>
  )
}
