import brand from '../../../public/Logo.png'

import './Brands.scss'

export function Brands() {
  return (
    <section className="brands-container">
      <h2 className="brand-title">Navegue por marcas</h2>
      <ul className="brand-list">
        <li className="brand-item">
          <img src={brand} alt="" />
        </li>
        <li className="brand-item">
          <img src={brand} alt="" />
        </li>
        <li className="brand-item">
          <img src={brand} alt="" />
        </li>
        <li className="brand-item">
          <img src={brand} alt="" />
        </li>
        <li className="brand-item">
          <img src={brand} alt="" />
        </li>
      </ul>
    </section>
  )
}
