import React from 'react'
import { useTranslation } from 'react-i18next';

import right from '../../imgs/right.png'
import left from '../../imgs/left.png'

import './swipercard.css'
const SwiperCard = () => {
    const { t, i18n } = useTranslation();
const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 350;
}
const scrollRight = () => {
document.getElementById('content').scrollLeft += 350;
}
  return (
    <div className='shop'>
    <h2 className='shop__title'> {t('h5')}</h2>
    <div className='shop__carusel'>
        <div className='shop__carusel__cards' id='content'>
            <div className='shop__carusel__cards__item--back'>
                <div className='shop__carusel__cards__item'>
                    <h4>Bakirova Dilafro‘z </h4>
                    <p> {t('p9')}</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back1'>
                <div className='shop__carusel__cards__item'>
                    <h4>Kamaldinov Beknazar</h4>
                    <p>{t('p10')}</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back2'>
                <div className='shop__carusel__cards__item'>
                    <h4>Ashrapov Zafar</h4>
                    <p>{t('p11')}</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back3'>
                <div className='shop__carusel__cards__item'>
                    <h4> Sadriddin Dehkonov</h4>
                    <p>{t('p12')}</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back4'>
                <div className='shop__carusel__cards__item'>
                    <h4> Suhrob</h4>
                    <p>{t('p13')}</p>
                </div>
            </div>
            <div className='shop__carusel__cards__item--back5'>
                <div className='shop__carusel__cards__item'>
                    <h4>Behzod Haldarov</h4>
                    <p>{t('p14')}</p>
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