import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
    <Link to="/">
        <img src={Logo} alt='' className='' />
      </Link>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
    </nav>
    </header>
  )
}

export default Header