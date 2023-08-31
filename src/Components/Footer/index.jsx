import React from 'react'
import { useTranslation } from 'react-i18next';
import './footer.css'
import logo from '../../imgs/logo.png'
import location from '../../imgs/location.png'
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <div className='footer'>
      <div>
        <div className="nav-logo">
              <a exact href="#home"  >
                <img src={logo} alt="" />
              </a>
            </div>
        </div>
        <div className='footer__btn__box'>
            <a href="#validate" className='about__btn'>{t('btn')}</a>
           </div>

        <div className='footer__location'>
          <img src={location} alt="" />
          <div>
             <p>Toshkent shahar</p>
             <p>{t('location')}</p>
          </div>
        </div>
        <div>
        <div className="creator">
          <p>Creat by:</p>
          <img src={logo} alt="" />
        </div>

        </div>

    </div>

 
     <div className='creator__text'>
       <p>{t('creator')}</p>
     </div>
  
    </>
  )
}

export default Footer