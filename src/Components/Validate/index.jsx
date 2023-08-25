import React from 'react'
import './Validate.css'
import logo from '../../imgs/logo.png'
const Validate = () => {

  return (
    <div className='Validate'>
      <div className='validate__back'> 
        <div className='validate__logo'>
           <img src={logo} alt="" />
        </div>
      </div>

        <div>
            <h2 className='validate__title'>Siz bilan bog'lanishimiz uchun sòrovnomani tòldiring.</h2>
            <form className='validate__form'>
                 <input type="text" placeholder='Ismingiz'/>
                 <input type="tel" name="" id="" placeholder='Telefoningiz'/>
                 <input type="text" placeholder='Biznes faoliyatingiz'/>
                 <input type="text" placeholder='Mammoingiz'/>
                 <button>Jo’natish</button>
            </form>
        </div>
    </div>
  )
}

export default Validate
