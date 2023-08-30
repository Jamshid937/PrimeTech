import React from 'react'
import './footer.css'
import logo from '../../imgs/logo.png'
import location from '../../imgs/location.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <div className="nav-logo">
              <a exact href="#home"  >
                <img src={logo} alt="" />
              </a>
            </div>
        </div>
        <div className='footer__btn__box'>
            <a href="#validate" className='about__btn'>Ro`yxatdan o`tish</a>
           </div>

        <div className='footer__location'>
          <img src={location} alt="" />
          <div>
             <p>Tsohkent shahar</p>
             <p>Olmazor tumani ,Yangi Olmazor kòchasi,51</p>
          </div>
        </div>
        <div className="creator">
          <p>Creat by:</p>
          <img src={logo} alt="" />
        </div>
        <div className='creator__text'>
         <p>PrimeTech tomonidan barcha huquqlar himoyalangan</p>
        </div>
    </div>
  )
}

export default Footer