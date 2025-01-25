import { CreditCard, ShieldCheck, Truck } from 'lucide-react'

import './HeaderTop.scss'

export function HeaderTop() {
  return (
    <header className="headerTop-container">
      <ul className="perks-container">
        <li className="perks">
          <ShieldCheck className="perk-icon" />
          <p className="perk-text">
            Compra <span className="perk-span">100% segura</span>
          </p>
        </li>
        <li className="perks">
          <Truck className="perk-icon" />
          <p className="perk-text">
            <span className="perk-span">Frete grátis </span>
            acima de R$ 200
          </p>
        </li>
        <li className="perks">
          <CreditCard className="perk-icon" />
          <p className="perk-text">
            <span className="perk-span">Parcele </span>
            suas compras
          </p>
        </li>
      </ul>
    </header>
  )
}
