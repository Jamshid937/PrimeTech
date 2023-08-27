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
            <a href="#" className='about__btn'>Royhatdan otish</a>
           </div>

        <div className='footer__location'>
          <img src={location} alt="" />
          <div>
             <p>Tsohkent shahar</p>
             <p>Mirobod tumani NBU bank roparasi</p>
          </div>
        </div>
        <div className="creator">
          <p>Creat by:</p>
          <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer