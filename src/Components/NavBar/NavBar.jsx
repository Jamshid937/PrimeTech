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
  const [navBar,setNavBar] = React.useState(false)
  // const [navBar, setNavBar] = React.useState(false)
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const ScrollBar =() => {
    if(window.scrollY>=80){
   setNavBar(true)
   }else{
    setNavBar(false)
   }
   }
   window.addEventListener('scroll', ScrollBar)

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
              <a href="tel:998938111881"><span>+998</span>938111881</a>
            </li>

            <li className="nav-item">
              <div className='header__media'>
                <a href="https://t.me/PrimeTech_hr4"><img src={telegram} alt="" /></a>
                <a href="https://instagram.com/primetech_solutions_company?igshid=MzRlODBiNWFlZA=="><img src={instagram} alt="" /></a>
                <a href="https://m.facebook.com/profile.php?id=100089352438314"><img src={facebook} alt="" /></a>
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
        {t('p27')} <span>{t('sapn7')}</span>  {t('p28')} <span>{t('sapn8')}</span>  {t('p29')}
        </h1>
      <a href="#validate" className='header__hero__btn'>{t('btn')}</a>
        <div className='header__hero__gift'>
            <img src={gift} alt="" />
            <p>{t('p')}</p>
        </div>
        </div> 
    </Container>
    </div>
    </div>
  );
}

export default NavBar