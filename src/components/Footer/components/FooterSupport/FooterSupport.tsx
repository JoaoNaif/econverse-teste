import { Facebook, Instagram, Linkedin } from 'lucide-react'
import logo from '../../../../../public/Logo.png'

import './FooterSupport.scss'

export function FooterSupport() {
  return (
    <nav className="footerSupport-container">
      <div className="footer-company">
        <figure className="footer-figure">
          <img src={logo} alt="" className="footer-img" />
          <p className="footer-span">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
        </figure>
        <ul className="social-media">
          <li className="social-icon">
            <Instagram />
          </li>
          <li className="social-icon">
            <Facebook />
          </li>
          <li className="social-icon">
            <Linkedin />
          </li>
        </ul>
      </div>
      <div className="support">
        <ul className="about-us support-list">
          <h3>Institucional</h3>
          <li>Sobre Nós</li>
          <li>Movimento</li>
          <li>Trabalhe conosco</li>
        </ul>

        <ul className="help support-list">
          <h3>Ajuda</h3>
          <li>Suporte</li>
          <li>Fale Conosco</li>
          <li>Perguntas Frequentes</li>
        </ul>

        <ul className="terms support-list">
          <h3>Termos</h3>
          <li>Termos e Condições</li>
          <li>Política de Privacidade</li>
          <li>Troca e Devolução</li>
        </ul>
      </div>
    </nav>
  )
}
