import { FooterBottom } from './components/FooterBottom/FooterBottom'
import { FooterContact } from './components/FooterContact/FooterContact'
import { FooterSupport } from './components/FooterSupport/FooterSupport'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer-container">
      <FooterContact />
      <FooterSupport />
      <FooterBottom />
    </footer>
  )
}
