import React from 'react'
import { useTranslation } from 'react-i18next';
import right from '../../imgs/right.png'
import left from '../../imgs/left.png'
import quote from '../../imgs/quote.png'
import zafar from '../../imgs/zafar.jpg'
import bekzod from '../../imgs/behzod.jpg'
import beknazar from '../../imgs/beknazar.jpg'
import quoteWhite from '../../imgs/quoteWhite.png'
import './SwiperTwo.css'
const SwiperTwo = () => {
    const { t, i18n } = useTranslation();
    const scrollLeft = () => {
        document.getElementById('comment').scrollLeft -= 800;
    }
    const scrollRight = () => {
    document.getElementById('comment').scrollLeft += 480;
    }

    return (
        <div className='comments__bottom'>
            <h2>{t('h9')}</h2>
            <div className='comments__carusel'>
                <div className='comments__carusel__cards' id='comment'>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={zafar} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>A.Zafar </p>
                                    <p>{t('p11')}</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            {t('p20')}
                            </p>
                        </div>
                        <div className='comments__carusel__cards__item--quote'>
                            <img src={quote} alt="" />
                            <img src={quoteWhite} alt="" />
                        </div>
                    </div>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={bekzod} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>H.Behzod </p>
                                    <p>{t('p14')}</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            {t('p21')}
                            </p>
                        </div>
                        <div className='comments__carusel__cards__item--quote'>
                            <img src={quote} alt="" />
                            <img src={quoteWhite} alt="" />
                        </div>
                    </div>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={beknazar} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>K.Beknazar </p>
                                    <p>{t('p10')}</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            {t('p22')}
                            </p>
                        </div>
                        <div className='comments__carusel__cards__item--quote'>
                            <img src={quote} alt="" />
                            <img src={quoteWhite} alt="" />
                        </div>
                    </div>
                </div>
                <div className='comments__carusel__vektor'>
                   <button onClick={scrollLeft}><img src={left} alt=""  className=' comment__carusel__vektor__left'/></button>  
                   <button onClick={scrollRight}><img src={right} alt=""  className=' comment__carusel__vektor__right' /></button> 
                </div>
            </div>
        </div>

    )
}

export default SwiperTwo