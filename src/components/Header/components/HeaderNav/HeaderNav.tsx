import { Crown } from 'lucide-react'
import './HeaderNav.scss'

export function HeaderNav() {
  return (
    <nav className="headerNav-Container">
      <ul className="nav-list">
        <li className="nav-item">TODAS CATEGORIAS</li>
        <li className="nav-item">SUPERMERCADO</li>
        <li className="nav-item">LIVROS</li>
        <li className="nav-item">MODA</li>
        <li className="nav-item">LANÇAMENTOS</li>
        <li className="nav-item active">OFERTAS DO DIA</li>
        <li className="nav-item premium">
          <Crown className="nav-icon" />
          <span>ASSINATURA</span>
        </li>
      </ul>
    </nav>
  )
}
