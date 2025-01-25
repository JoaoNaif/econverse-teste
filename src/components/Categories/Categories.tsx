import tech from '../../../public/category/tech.png'
import market from '../../../public/category/market.png'
import fashion from '../../../public/category/fashion.png'
import health from '../../../public/category/health.png'
import run from '../../../public/category/run.png'
import tools from '../../../public/category/tools.png'
import whiskey from '../../../public/category/whiskey.png'

import './Categories.scss'

export function Categories() {
  return (
    <ul className="categories-container">
      <li className="category-item">
        <div className="category-back active-back">
          <img
            className="category-img"
            src={tech}
            alt="Imagem relacionada a tecnologia, na imagem tem monitor, tem tablet na frente do monitor, e tem um celular na frente do tablet"
          />
        </div>
        <span className="category-name active-name">Tecnologia</span>
      </li>
      <li className="category-item">
        <div className="category-back ">
          <img
            className="category-img"
            src={market}
            alt="Imagem relacionada a um supermercado, tem uma propriedade com um carrinho de compras a frente"
          />
        </div>
        <span className="category-name">Supermercado</span>
      </li>
      <li className="category-item">
        <div className="category-back">
          <img
            className="category-img"
            src={whiskey}
            alt="Imagem relacionada a bebida, na imagem tem uma garrafa de
          vidro e um copo ao lado"
          />
        </div>
        <span className="category-name">Bebidas</span>
      </li>
      <li className="category-item">
        <div className="category-back">
          <img
            className="category-img"
            src={tools}
            alt="Imagem relacionada ferramentas, na imagem tem um martelo cruzado com uma chave de fenda"
          />
        </div>
        <span className="category-name">Ferramentas</span>
      </li>
      <li className="category-item">
        <div className="category-back">
          <img
            className="category-img"
            src={health}
            alt="Imagem relacionada a saúde, na imagem tem uma mão e sobre ela tem um coração"
          />
        </div>
        <span className="category-name">Saúde</span>
      </li>
      <li className="category-item">
        <div className="category-back">
          <img
            className="category-img"
            src={run}
            alt="Imagem relacionada a esportes, na imagem tem uma pessoa correndo na esteira"
          />
        </div>
        <span className="category-name">Esportes e Fitness</span>
      </li>
      <li className="category-item">
        <div className="category-back">
          <img
            className="category-img"
            src={fashion}
            alt="Imagem relacionada a moda, na imagem tem um vestido, um salto e um diamante"
          />
        </div>
        <span className="category-name">Moda</span>
      </li>
    </ul>
  )
}
