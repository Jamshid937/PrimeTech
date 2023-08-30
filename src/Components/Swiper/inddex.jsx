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
    <h2 className='shop__title'> +36 ta  tadbirkor bizni xizmatlarimiz foydalangan</h2>
    <div className='shop__carusel'>
        <div className='shop__carusel__cards' id='content'>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Bakirova Dilafro‘z </h4>
                    <p> Shifokor</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back1'>
                <div className='shop__carusel__cards__item'>
                    <h4>Kamaldinov Beknazar</h4>
                    <p>Sayohat</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back2'>
                <div className='shop__carusel__cards__item'>
                    <h4>Ashrapov Zafar</h4>
                    <p>Telefon dòkon</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back3'>
                <div className='shop__carusel__cards__item'>
                    <h4> Sadriddin Dehkonov</h4>
                    <p>Gòsht mahsulotlari</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back4'>
                <div className='shop__carusel__cards__item'>
                    <h4> Suhrob</h4>
                    <p>Oyoq kiyim</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back5'>
                <div className='shop__carusel__cards__item'>
                    <h4>Behzod Haldarov</h4>
                    <p>Ishlab chiqarish</p>
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