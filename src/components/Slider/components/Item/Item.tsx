import { Products } from '../../Slider'
import { Modal } from '../Modal/Modal'

import './Item.scss'

interface ItemProps {
  item: Products
}

export function Item({ item }: ItemProps) {
  return (
    <div className="item-container">
      <figure className="item-figure">
        <img src={item.photo} alt="" className="item-photo" />
      </figure>
      <p className="item-name">{item.productName}</p>
      <div className="item-price">
        <span className="item-total">R$ {(item.price * 1.15).toFixed(2)}</span>
        <h1 className="item-discount">R$ {item.price.toFixed(2)}</h1>
      </div>
      <p className="item-installment">
        ou 2x de R$ {(item.price / 2).toFixed(2)} sem juros
      </p>
      <span className="item-freight">Frete grátis</span>
      <Modal item={item} />
    </div>
  )
}
