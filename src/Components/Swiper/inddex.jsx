import React from 'react'


import right from '../../imgs/right.png'
import left from '../../imgs/left.png'

import './swipercard.css'
const SwiperCard = () => {

const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 800;
}
const scrollRight = () => {
document.getElementById('content').scrollLeft += 800;
}
  return (
    <div className='shop'>
    <h2 className='shop__title'> <span>+36 ta</span>  tadbirkor bizni xizmatlarimiz foydalangan</h2>
    <div className='shop__carusel'>
        <div className='shop__carusel__cards' id='content'>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Husan Mamasaidov</h4>
                    <p>Decos,Mfaktor</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Husan Mamasaidov</h4>
                    <p>Decos,Mfaktor</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Husan Mamasaidov</h4>
                    <p>Decos,Mfaktor</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Husan Mamasaidov</h4>
                    <p>Decos,Mfaktor</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Husan Mamasaidov</h4>
                    <p>Decos,Mfaktor</p>
                </div>
            </div>
        </div>
        <div className='shop__carusel__vektor'>
          <button onClick={scrollLeft}><img src={left} alt=""  className=' shop__carusel__vektor__left'/></button>  
           <button onClick={scrollRight}><img src={right} alt=""  className=' shop__carusel__vektor__right' /></button> 
        </div>
    </div>
</div>
  )
}

export default SwiperCard