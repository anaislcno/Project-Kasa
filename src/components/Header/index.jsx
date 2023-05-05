import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import '../../styles/Header.scss'

function Header() {
  return (
    <header className='header'>
    <Link to="/">
        <img src={Logo} alt='Logo Kasa' />
      </Link>
    <nav className='navbar'>
      <Link className='navbar__link' to="/">Accueil</Link>
      <Link className='navbar__link' to="/about">À propos</Link>
    </nav>
    </header>
  )
}

export default Header