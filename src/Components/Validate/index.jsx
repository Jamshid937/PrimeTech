import React from 'react'
import './Validate.css'
import logo from '../../imgs/logo.png'
import mainLogo from '../../imgs/mainLogo.png'

const Validate = () => {

  return (
    <div className='Validate' id='validate'>
      <div className='validate__back'> 
        <div className='validate__logo'>
           <img src={mainLogo} alt="" />
        </div>
      </div>

        <div>
            <h2 className='validate__title'>Siz bilan bog‘lanishimiz uchun so’rovnomani to‘ldiring</h2>
            <form className='validate__form'>
                 <input type="text" placeholder='Ismingiz'/>
                 <input type="tel" name="" id="" placeholder='Telefon raqamingiz'/>
                 <input type="text" placeholder='Biznes faoliyatingiz'/>
                 <input type="text" placeholder='Muammoyingiz'/>
                 <button>Jo’natish</button>
            </form>
        </div>
    </div>
  )
}

export default Validate
