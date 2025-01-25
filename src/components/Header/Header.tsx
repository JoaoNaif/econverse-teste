import { HeaderContent } from './components/HeaderContent/HeaderContent'
import { HeaderNav } from './components/HeaderNav/HeaderNav'
import { HeaderTop } from './components/HeaderTop/HeaderTop'

import './Header.scss'

export function Header() {
  return (
    <header className="header-container">
      <HeaderTop />
      <HeaderContent />
      <HeaderNav />
    </header>
  )
}
