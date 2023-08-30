import React from 'react'
import right from '../../imgs/right.png'
import left from '../../imgs/left.png'
import quote from '../../imgs/quote.png'
import zafar from '../../imgs/zafar.jpg'
import bekzod from '../../imgs/behzod.jpg'
import beknazar from '../../imgs/beknazar.jpg'
import quoteWhite from '../../imgs/quoteWhite.png'
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
            <h2>Bizning mamnun  mijozlarimiz fikrlari</h2>
            <div className='comments__carusel'>
                <div className='comments__carusel__cards' id='comment'>
                    <div className='comments__carusel__cards__item'>
                        <div className='comments__carusel__cards__item__info'>
                            <ul className='comments__carusel__cards__item__info__header'>
                                <li className='comments__carusel__cards__item__info__header--img'><img src={zafar} alt="" /></li>
                                <li className='comments__carusel__cards__item__info__header--text'>
                                    <p>A.Zafar </p>
                                    <p> Telefon dòkon</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            Assalom alaykum, men Ashrapov Zafar "Mobion" telefon do‘koni asoschisiman. Shu paytgacha barcha ishimni o‘zim qilar edim. Mijozlar bilan gaplashish ko‘p vaqtimni olar edi. Shu kabi muommalar yuzasidan "PrimeTech" IT kompaniyasiga muroajat qildim. Ular menga veb-sayt tayyorlab berishdi. Hozirda sayt orqali men mijozlarimga 24/7 ma'lumot bera olaman. Ishlaringiz menga yoqdi. Boshqa biznesmenlarga ham "PrimeTech" IT kompaniyasini tavsiya qilib qolaman.
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
                                    <p>Ishlab chiqarish</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            Assalom alaykum, mening ismim Behzod. "3d panel" dòkoni asoschisiman. Brendim uchun sayt qildirmoqchi edim. Chunki reklama ozroq  sifatsiz bo‘lyotgan edi. Shu kabi muommalar yuzasidan "PrimeTech" IT kompaniyasiga muroajat qildim. Ular menga veb-sayt tayyorlab berishdi. Hozirda sayt orqali men mijozlarimga 24/7 ma'lumot bera olyapman hamda target sifati sezilarli darajada oshgan. 
Ishlaringiz menga yoqdi. Boshqa tadbirkorlarga ham "PrimeTech" IT kompaniyasini tavsiya qilib qolaman.
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
                                    <p>Sayohat</p>
                                </li>
                            </ul>
                            <p className='comments__carusel__cards__item__info--p'>
                            Assalomu alaykum, men Kamaldinov Beknazar "In cruiser travel" kompaniyasi menejeriman. Bizda mijoz bo‘yicha muammolarimiz bor edi. Shu sababdan, "PrimeTech" IT kompaniyasiga murojaat qildik. Ular bizga veb-sayt tayyorlab berishdi. Hozirda sayt yordamida target sifati oshgan va biz o‘z potinsial mijozlarimizga ega bo‘lyapmiz. Biznes bilan shug‘ullanuvchilarga tavsiyam Siz ham hoziroq "PrimeTech"  IT kompaniyasiga murojaat qiling va biznesdagi muammolaringizga yechim toping! PrimeTech zo‘r!
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