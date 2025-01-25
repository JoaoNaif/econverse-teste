import { useState } from 'react'
import './Slider.scss'
import { Item } from './components/Item/Item'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getProducts, Products } from '../../api/get-products'

// const products: Products[] = [
//   {
//     productName: 'Iphone 11 PRO MAX BRANCO 1',
//     descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 15000,
//   },
//   {
//     productName: 'IPHONE 13 MINI 1',
//     descriptionShort: 'IPHONE 13 MINI 1',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 9000,
//   },
//   {
//     productName: 'Iphone 11 PRO MAX BRANCO 2',
//     descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 14990,
//   },
//   {
//     productName: 'IPHONE 13 MINI 2',
//     descriptionShort: 'IPHONE 13 MINI 2',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 12000,
//   },
//   {
//     productName: 'Iphone 11 PRO MAX BRANCO 3',
//     descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 4550,
//   },
//   {
//     productName: 'IPHONE 13 MINI 3',
//     descriptionShort: 'IPHONE 13 MINI 3',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 38000,
//   },
//   {
//     productName: 'Iphone 11 PRO MAX BRANCO 4',
//     descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 42000,
//   },
//   {
//     productName: 'IPHONE 13 MINI 4',
//     descriptionShort: 'IPHONE 13 MINI 4',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 520,
//   },
//   {
//     productName: 'Iphone 11 PRO MAX BRANCO 5',
//     descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 149990,
//   },
//   {
//     productName: 'IPHONE 13 MINI 5',
//     descriptionShort: 'IPHONE 13 MINI 5',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 100000,
//   },
//   {
//     productName: 'IPHONE 13 MINI 5',
//     descriptionShort: 'IPHONE 13 MINI 5',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 100000,
//   },
//   {
//     productName: 'IPHONE 13 MINI 5',
//     descriptionShort: 'IPHONE 13 MINI 5',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 100000,
//   },
//   {
//     productName: 'IPHONE 13 MINI 5',
//     descriptionShort: 'IPHONE 13 MINI 5',
//     photo:
//       'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
//     price: 100000,
//   },
// ]

export function Slider() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 4

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
        'carregando'
      )}
    </>
  )
}
