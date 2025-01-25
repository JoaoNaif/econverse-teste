import './FooterContact.scss'

export function FooterContact() {
  return (
    <section className="footerContact-container">
      <div className="footer-newsletter">
        <h2 className="footer-title">Inscreva-se na nossa newsletter</h2>
        <p className="footer-description">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <form className="footer-form">
        <div className="footer-data">
          <input
            type="text"
            className="footer-input"
            placeholder="Digite seu nome"
          />
          <input
            type="text"
            className="footer-input"
            placeholder="Digite seu e-mail"
          />
          <button className="footer-button">INSCREVER</button>
        </div>
        <div className="footer-check">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Aceito os termos e condições</label>
        </div>
      </form>
    </section>
  )
}
