import './Sale.scss'

export function Sale() {
  return (
    <section className="sale-container">
      <h1 className="sale-title">
        Venha conhecer as nossas <br />
        promoções
      </h1>
      <h3 className="sale-subtitle">
        <span className="sale-span">50% Off</span> nos produtos
      </h3>
      <button className="sale-button">Ver produtos</button>
    </section>
  )
}
