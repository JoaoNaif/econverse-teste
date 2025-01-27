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
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
