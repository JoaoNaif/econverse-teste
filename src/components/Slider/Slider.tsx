import { useEffect, useState } from 'react'
import './Slider.scss'
import { Item } from './components/Item/Item'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../api/get-products'

export function Slider() {
  const [startIndex, setStartIndex] = useState(0)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const itemsPerPage =
    screenWidth > 1024 ? 4 : screenWidth > 768 ? 3 : screenWidth > 425 ? 2 : 1

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage < products.length ? prevIndex + 1 : 0,
    )
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - itemsPerPage,
    )
  }

  return (
    <>
      {products ? (
        <div className="slider-container">
          <button className="left slide-button" onClick={prevSlide}>
            <ChevronLeft />
          </button>

          <div className="slides-wrapper">
            {products
              .slice(startIndex, startIndex + itemsPerPage)
              .map((item, index) => (
                <Item key={startIndex + index} item={item} />
              ))}
          </div>

          <button className="right slide-button" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
      ) : (
        'carregando...'
      )}
    </>
  )
}
