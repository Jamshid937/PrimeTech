import React from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next';
import logo from '../../imgs/logo.png'


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
    <div className={navBar ? 'navbar active' : 'navbar'}  >
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <div className='header__logo'>
            <div className="nav-logo">
              <a exact href="#home"  >
                <img src={logo} alt="" />
              </a>
            </div>
                <p>
                Prime Tech <br />
                IT kompaniyasi
                </p>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="tel">+998938111881</a>
            </li>

            <li className="nav-item">
              <div className='header__media'>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div className='header__media'>
               <i class="fa fa-facebook" aria-hidden="true"></i>
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
  );
}

export default NavBar