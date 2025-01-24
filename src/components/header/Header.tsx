import { HeaderContent } from './components/HeaderContent/HeaderContent'
import { HeaderTop } from './components/HeaderTop/HeaderTop'

import './Header.scss'

export function Header() {
  return (
    <header className="header-container">
      <HeaderTop />
      <HeaderContent />
    </header>
  )
}
