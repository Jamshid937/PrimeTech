import React from 'react'
import right from '../../imgs/right.png'
import left from '../../imgs/left.png'
import quote from '../../imgs/quote.png'
import akbarshoh from '../../imgs/akbarshoh.png'
import './SwiperTwo.css'
const SwiperTwo = () => {
    const scrollLeft = () => {
        document.getElementById('comment').scrollLeft -= 800;
    }
    const scrollRight = () => {
    document.getElementById('comment').scrollLeft += 480;
    }

    return (
        <div className='comments__bottom'>
            <h2>Bizning <span>mamnun</span>  mijozlarimiz fikrlari</h2>
            <div className='comments__carusel'>
                <div className='comments__carusel__cards' id='comment'>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={akbarshoh} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>I.Rahmonjon </p>
                                    <p>Biznesmen</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            nter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron ey of type and scrambled it to me a type specimen not only five centuries fearff
                            </p>
                        </div>
                        <div className='comments__carusel__cards__item--quote'>
                            <img src={quote} alt="" />
                        </div>
                    </div>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={akbarshoh} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>I.Rahmonjon </p>
                                    <p>Biznesmen</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            nter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron ey of type and scrambled it to me a type specimen not only five centuries fearff
                            </p>
                        </div>
                        <div className='comments__carusel__cards__item--quote'>
                            <img src={quote} alt="" />
                        </div>
                    </div>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={akbarshoh} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>I.Rahmonjon </p>
                                    <p>Biznesmen</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            nter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron ey of type and scrambled it to me a type specimen not only five centuries fearff
                            </p>
                        </div>
                        <div className='comments__carusel__cards__item--quote'>
                            <img src={quote} alt="" />
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