import React from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container'
import logo from '../../imgs/logo.png'
import gift from '../../imgs/Gift.png'
import facebook from '../../imgs/facebook.png'
import telegram from '../../imgs/telegram.png'
import instagram from '../../imgs/instagram.png'
function NavBar() {
  const { t, i18n } = useTranslation();



  function TranslationFunc(e) {
    i18n.changeLanguage(e.target.value)
  }
  const [click, setClick] = React.useState(false);
  const [navBar] = React.useState(false)
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className="transparent">
    <div className='back'>
    <div className={navBar ? 'navbar active' : 'navbar'}  >
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <div className='header__logo'>
              <a exact href="#home" className='nav-logo' >
                <img src={logo} alt="" />
              </a>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="tel">+998938111881</a>
            </li>

            <li className="nav-item">
              <div className='header__media'>
                <img src={telegram} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
              </div>
            </li>

            <li>
              <select className='nav-item_select' onChange={TranslationFunc}>
                <option value="uz" className='nav-item_select__option'>O`z</option>
                <option value="en" className='nav-item_select__option'>En</option>
                <option value="ru" className='nav-item_select__option'>RU</option>
              </select>
            </li>
          </ul>




          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>

    </ div>
    <Container>
              <div className='header__hero'>
        <h1 className='header__hero__title'>
          Biz bilan Biznes va IT ni birga bog’lang
        </h1>
        
            <a href="#" className='header__hero__btn'>Royhatdan otish</a>
        <div className='header__hero__gift'>
            <img src={gift} alt="" />
            <p>Sotuvni 3x ga oshiradigon mahsus kitob</p>
        </div>
        </div> 
    </Container>
    </div>
    </div>
  );
}

export default NavBar