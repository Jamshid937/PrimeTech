import React from 'react'
import './footer.css'
import logo from '../../imgs/logo.png'
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
        <div className='about__btn__box'>
            <a href="#" className='about__btn'>Royhatdan otish</a>
           </div>
        <div className='footer__tel'>
            <p>Malumot uchun</p>
            <p>+998 99 999 99 99</p>
        </div>
        <div className='footer__location'>
            <p>Tsohkent shahar</p>
            <p>Mirobod tumani NBU bank roparasi</p>

        </div>
    </div>
  )
}

export default Footer