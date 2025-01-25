import { useState } from 'react'

import './Modal.scss'
import { Products } from '../../Slider'
import { Minus, Plus, X } from 'lucide-react'

interface ModalProps {
  item: Products
}

export function Modal({ item }: ModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="button-modal" onClick={() => setOpen(true)}>
        COMPRAR
      </button>

      {open && (
        <div className="modal-open">
          <div className="dialog">
            <X className="close" onClick={() => setOpen(false)} />
            <figure className="modal-figure">
              <img src={item.photo} alt="" className="modal-img" />
            </figure>
            <section className="modal-info">
              <div className="modal-main">
                <h1 className="modal-name">{item.productName}</h1>
                <span className="modal-price">R$ {item.price}</span>
              </div>

              <div className="modal-second">
                <p>{item.descriptionShort}</p>
                <span>Veja mais detalhes do produto</span>
              </div>

              <article className="modal-buy">
                <div className="modal-quantity">
                  <Minus className="modal-icon disabled" />
                  <span className="modal-span">01</span>
                  <Plus className="modal-icon" />
                </div>
                <button className="modal-button">COMPRAR</button>
              </article>
            </section>
          </div>
        </div>
      )}
    </>
  )
}
