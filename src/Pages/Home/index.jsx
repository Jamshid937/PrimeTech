import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import NavBar from '../../Components/NavBar/NavBar'
import Container from '../../layout/Container'
import Validate from '../../Components/Validate'
import Footer from '../../Components/Footer'

import gift from '../../imgs/Gift.png'
import who from '../../imgs/mechanical.png'
import increase from '../../imgs/increase.png'
import warning from '../../imgs/warning.png'
import logo from '../../imgs/logo.png'
import mainLogo from '../../imgs/mainLogo.png'
import check from '../../imgs/check.png'
import anvar from '../../imgs/anvar.png'
import mobion from '../../imgs/mobion.png'
import aksiya from '../../imgs/aksiya.png'
import rizvon from '../../imgs/rizvon.png'
import toshkent from '../../imgs/tashkent.jpg'
import av from '../../imgs/av.jpg'
import db from '../../imgs/db.png'
import bek from '../../imgs/bek.png'
import gesso from '../../imgs/gesso.png'
import aminows from '../../imgs/aminows.png'
import video from '../../imgs/PrimeTech.mp4'
import SwiperCard from '../../Components/Swiper/inddex';
import './Home.css'
import SwiperTwo from '../../Components/SwiperTwo';
import Collapse from '../../Components/Collapse';
const Home = () => {
    const { t, i18n } = useTranslation();
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');


    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('August 29, 2025 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)

    }
    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })


    return (
        <>
            <NavBar></NavBar>
            <Container>
                <div className='header__hero__bottom'>
                    <ul className='header__hero__bottom-box'>
                        <li className='header__hero__bottom-box__item'>
                            <span>+36ta</span>
                            <p>Tadbirkorlarga IT orqali biznesidagi muommasiga yechim berilgan.</p>
                        </li>
                        <li className='header__hero__bottom-box__item'>
                            <span>90NPS</span>
                            <p>Kerakli dasturiy ta’minot orqali xarajatlaringizni 25%gacha kamaytirasiz.</p>
                        </li>
                        <li className='header__hero__bottom-box__item'>
                            <span>4Yil</span>
                            <p>Shu vaqt davomida tadbirkorlarimiz bilan ishlab kelmoqdamiz.</p>
                        </li>
                    </ul>
                </div>
                <div className='who'>
                    <h2 className='who__title'>PrimeTech <span>IT</span>  kompaniyasi xizmatlari kimlar uchun?</h2>
                    <div className='who__cards'>
                        <div className='who__cards__item'>
                            <img src={who} alt="" />
                            <h4>Biznesni tizimlashtirmoqchi bo’lganlar uchun</h4>
                            <ul>
                                <li>Hodimlar ozlariga berilayotgan vazifani bajarmayaptimi</li>
                                <li>Jamoani boshqarishda muammo bormi?</li>
                            </ul>
                        </div>
                        <div className='who__cards__item'>
                            <img src={increase} alt="" />
                            <h4>Biznesni kengaytirmoqchi bo’lganlar uchun</h4>
                            <ul>
                                <li>Molya bo’limidagi raqamlarni hisoblay olmayapsizmi?</li>
                                <li>Biznesni kengaytirmoqchisiz, lekin hodimlar tayyor emasmi?</li>
                            </ul>
                        </div>
                        <div className='who__cards__item'>
                            <img src={warning} alt="" />
                            <h4>Sotuv va mijozlar bilan muammosi borlar uchun</h4>
                            <ul>
                                <li>Sotuv bo’yicha amalga oshirilishi kerak bo’lgan  rejalar bajarilmayaptimi?</li>
                                <li>Nasiyalaringiz ko’payib ketyaptimi?</li>
                            </ul>
                        </div>
                    </div>
                </div>
</Container>
                <div className='about'>
                    <Container><h2 className='about__title'><span>PrimeTech</span>qanday kompaniya?</h2></Container>
                    
                    
                    
                    <div className='about__box'>
                        
                        <video src={video} autoPlay loop  muted></video>
                        <div className='about__box__info__container'>
                        <div className='about__box__img'>
                            <a href="#" className='about__box__logo'><img src={logo} alt="" /></a>
                            <p>Prime Tech <span>IT</span> bilan shug’ullanadigon kompaniya</p>
                        </div>
                        <div className='about__box__info'>
                           <p>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           </p>
                           <p>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           </p>
                        </div>
                        </div>
                    </div>
                    <div className='about__btn__box'>
                        <a href="#validate" className='about__btn'>Ro`yxatdan o`tish</a>
                    </div>
                </div>
        <Container>
            <Collapse/>
                <SwiperCard></SwiperCard>
                <div className='biznes'>
                    <h2 className='biznes__title'> <span>Biznes</span> va <span> IT </span> birga bog’laymiz</h2>
                    <p>Tadbirkorlarning biznesini avtomatlashtirish orqali biznesni bir bosqichdan ikkinchi bosqichga olib chiqishga hamda muvaffaqiyatli biznes qurishga yordam beramiz.</p>
                    <div className='biznes__cards'>
                        <div className='biznes__cards__item'>
                            <p>Web sayt orqali daromadni oshirish</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>CRM orqali kompaniyani tizimlashtirish</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>Mobile app va telegram botda foydalanish</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>Marketingni IT da qo’llash</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>IT orqali sotuvni 25% ga oshirish</p>
                            <div>+</div>
                        </div>
                    </div>
                </div>
                <div className='biznes__bottom'>
                    <div>
                        <div className='biznes__box'>
                            <div className='biznes__box__img'>
                                <a href="#" className='about__box__logo'><img src={mainLogo} alt="" /></a>
                                <p>Biznesingiz bilan IT birga bog’lang.</p>
                            </div>
                        </div>
                        <div className='about__btn__box'>
                            <a href="#validate" className='about__btn'>Royhatdan otish</a>
                        </div>
                        <div className='biznes__bottom--gift'>
                            <img src={gift} alt="" />
                            <p>{t('p')}</p>
                        </div>
                    </div>
                    <div className='biznes__bottom__info'>
                        <h4>Xizmatlarimizdan foydalangandan sòng ushbu natijalarga erishasiz.</h4>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>Sayt orqali samarali reklama berishni</p>
                        </div>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>CRM orqali kompaniya ichki tizimini qurishni</p>
                        </div>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>Telegram bot orqali marketingni rivojlantirishni</p>
                        </div>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>Mobil ilova orqali umumiy ma’lumotlaringizni bir joyga jamlashga</p>
                        </div>
                    </div>
                </div>
                <div className='comments'>
                    <h2>Buning isbotini <span>tadbirkorlarni</span>  fikridan bilib oling</h2>
                    <div className='comments__cards'>
                        <div className='comments__cards__item'>
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={anvar} alt="" />
                                </div>
                            </div>

                            <h4>Husan mamasaidov</h4>
                            <p>Decos,Mfaktor</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>Soxa</p>
                                    <p>Shahar</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>IT</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <div className='comments__cards__btn'>
                                <a href="">Fikrlar</a>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={anvar} alt="" />
                                </div>
                            </div>

                            <h4>Husan mamasaidov</h4>
                            <p>Decos,Mfaktor</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>Soxa</p>
                                    <p>Shahar</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>IT</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <div className='comments__cards__btn'>
                                <a href="">Fikrlar</a>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={anvar} alt="" />
                                </div>
                            </div>

                            <h4>Husan mamasaidov</h4>
                            <p>Decos,Mfaktor</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>Soxa</p>
                                    <p>Shahar</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>IT</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <div className='comments__cards__btn'>
                                <a href="">Fikrlar</a>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={anvar} alt="" />
                                </div>
                            </div>

                            <h4>Husan mamasaidov</h4>
                            <p>Decos,Mfaktor</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>Soxa</p>
                                    <p>Shahar</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>IT</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <div className='comments__cards__btn'>
                                <a href="">Fikrlar</a>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={anvar} alt="" />
                                </div>
                            </div>

                            <h4>Husan mamasaidov</h4>
                            <p>Decos,Mfaktor</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>Soxa</p>
                                    <p>Shahar</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>IT</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <div className='comments__cards__btn'>
                                <a href="">Fikrlar</a>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={anvar} alt="" />
                                </div>
                            </div>

                            <h4>Husan mamasaidov</h4>
                            <p>Decos,Mfaktor</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>Soxa</p>
                                    <p>Shahar</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>IT</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <div className='comments__cards__btn'>
                                <a href="">Fikrlar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <SwiperTwo />
                <div className="helper">
                    <h2>Biz yordam bergan <span>bizneslar</span> </h2>
                    <div className="helper__cards">
                        <div>

                            <div className="helper__cards__item">
                                <img src={mobion} alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="helper__cards__item">
                                <img src={rizvon} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="helper__cards__item">
                                <img src={bek} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="helper__cards__item">
                                <img src={aminows} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="helper__cards__item">
                                <img src={gesso} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="helper__cards__item">
                                <img src={toshkent} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="helper__cards__item">
                                <img src={db} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="helper__cards__item">
                                <img src={av} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Validate />

                <div className="aksiya">
                    <h2>Hoziroq ro‘yxatdan o‘ting va sotuvn <span>3x</span>  ga oshiradigan  <span>kitobga</span>  ega bo‘ling! </h2>
                    <p>Joylar soni  chegaralangan</p>
                    <div className='aksiya__cards'>
                        <div className='aksiya__cards__item'>
                            <span>{timerDays}</span>
                            <p>Kun</p>
                        </div>
                        <div className='aksiya__cards__item'>
                            <span>{timerHours}</span>
                            <p>Soat</p>
                        </div>
                        <div className='aksiya__cards__item'>
                            <span>{timerMinutes}</span>
                            <p>Minut</p>
                        </div>
                        <div className='aksiya__cards__item'>
                            <span>{timerSeconds}</span>
                            <p>Sekund</p>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className="aksiya__title">Bu <span>taklif</span> faqat sizlar uchun</h2>
                    <div className="aksiya__bottom">
                        <div className='aksiya__bottom__info'>
                            <p>Xizmatimizdan foydalanish orqali Siz yana quyidagilarga ega bo‘lasiz:</p>
                            <ul>
                                <li><div>1</div>Sotuvingizni 30%dan 80%gacha oshiradigan maxsus kitobga </li>
                                <li><div>2</div> 1 oylik domen va hostingga</li>
                                <li><div>3</div> Call center botga</li>
                                <li><div>4</div> Xizmatlar uchun keshbekga</li>
                                <li><div>5</div> Maxsus sovg’aga</li>
                            </ul>
                        </div>
                        <div className='aksiya__bottom__img'>
                            <img src={aksiya} alt="" />
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Home