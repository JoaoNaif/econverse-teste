import {
  FolderOutput,
  Heart,
  Search,
  ShoppingCart,
  UserCircle,
} from 'lucide-react'
import logo from '../../../../../public/Logo.png'

import './HeaderContent.scss'

export function HeaderContent() {
  return (
    <main className="headerContent-Container">
      <img
        src={logo}
        alt="Logo econverse, a duas primeiras letras 'ec' são cor branca com um plano de fundo em formato circular e cor amarela, já o restante das letras 'onverse' está em roxo e não tem plano de fundo"
      />
      <form action="" className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="O que você está buscando?"
        />
        <button className="search-button" type="submit">
          <Search className="search-icon" />
        </button>
      </form>
      <div>
        <button>
          <FolderOutput />
        </button>
        <button>
          <Heart />
        </button>
        <button>
          <UserCircle />
        </button>
        <button>
          <ShoppingCart />
        </button>
      </div>
    </main>
  )
}
