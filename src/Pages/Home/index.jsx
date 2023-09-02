import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import NavBar from '../../Components/NavBar/NavBar'
import Container from '../../layout/Container'
import Validate from '../../Components/Validate'
import Footer from '../../Components/Footer'
import SwiperTwo from '../../Components/SwiperTwo';
import Collapse from '../../Components/Collapse';
import SwiperCard from '../../Components/Swiper/inddex';
import gift from '../../imgs/Gift.png'
import who from '../../imgs/mechanical.png'
import increase from '../../imgs/increase.png'
import warning from '../../imgs/warning.png'
import mainLogo from '../../imgs/mainLogo.png'
import check from '../../imgs/check.png'
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
import zafar from '../../imgs/zafar.jpg'
import behzod from '../../imgs/behzod.jpg'
import beknazar from '../../imgs/beknazar.jpg'
import dilafruz from '../../imgs/dilafruz.jpg'
import sadriddin from '../../imgs/sadriddin.jpg'
import suhrob from '../../imgs/suhrob.jpg'
import './Home.css'

const Home = () => {
    const { t, i18n } = useTranslation();
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');


    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('September 6, 2023 00:00:00').getTime()

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
                            <span>{t('sapn')}</span>
                            <p>{t('p2')}</p>
                        </li>
                        <li className='header__hero__bottom-box__item'>
                            <span>{t('sapn1')}</span>
                            <p>{t('p3')}</p>
                        </li>
                        <li className='header__hero__bottom-box__item'>
                            <span>{t('sapn2')}</span>
                            <p>{t('p4')}</p>
                        </li>
                    </ul>
                </div>
                <div className='who'>
                    <h2 className='who__title'>{t('h2')}</h2>
                    <div className='who__cards'>
                        <div className='who__cards__item'>
                            <img src={who} alt="" />
                            <h4>{t('h15')}</h4>
                            <ul>
                                <li>{t('li9')}</li>
                                <li>{t('li10')}</li>
                            </ul>
                        </div>
                        <div className='who__cards__item'>
                            <img src={increase} alt="" />
                            <h4>{t('h16')}</h4>
                            <ul>
                                <li>{t('li11')}</li>
                                <li>{t('li12')}</li>
                            </ul>
                        </div>
                        <div className='who__cards__item'>
                            <img src={warning} alt="" />
                            <h4>{t('h17')}</h4>
                            <ul>
                                <li>{t('li13')}</li>
                                <li>{t('li14')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='about'>
                <Container>
                    <h2 className='about__title'>{t('h3')}</h2>
                </Container>
                <div className='about__box'>
                    <video src={video} autoPlay loop muted></video>
                </div>
                <Container>
                <div className='about__btn__box'>
                    <a href="#validate" className='about__btn'>{t('btn')}</a>
                </div>
            </Container>
            </div>

            
                <Collapse />
               <Container> 
                <SwiperCard></SwiperCard>
                <div className='biznes'>
                    <h2 className='biznes__title'> {t('h6')}</h2>
                    <p>{t('p15')}</p>
                    <div className='biznes__cards'>
                        <div className='biznes__cards__item'>
                            <p>{t('li')}</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>{t('li1')}</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>{t('li2')}</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>{t('li3')}</p>
                            <div>+</div>
                        </div>
                        <div className='biznes__cards__item'>
                            <p>{t('li4')}</p>
                            <div>+</div>
                        </div>
                    </div>
                </div>
                <div className='biznes__bottom'>
                    <div>
                        <div className='biznes__box'>
                            <div className='biznes__box__img'>
                                <a href="#" className='about__box__logo'><img src={mainLogo} alt="" /></a>
                                <p>{t('p16')}</p>
                            </div>
                        </div>
                        <div className='about__btn__box'>
                            <a href="#validate" className='about__btn'>{t('btn')}</a>
                        </div>
                        <div className='biznes__bottom--gift'>
                            <img src={gift} alt="" />
                            <p>{t('p')}</p>
                        </div>
                    </div>
                    <div className='biznes__bottom__info'>
                        <h4>{t('h7')}</h4>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>{t('li5')}</p>
                        </div>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>{t('li6')}</p>
                        </div>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>{t('li7')}</p>
                        </div>
                        <div className='biznes__bottom__info__text'>
                            <img src={check} alt="" />
                            <p>{t('li8')}</p>
                        </div>
                    </div>
                </div>
                <div className='comments'>
                    <h2>{t('h8')}</h2>
                    <div className='comments__cards'>
                        <div className='comments__cards__item'>
                        <input type="checkbox" name="" id='checkComments' />
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={dilafruz} alt="" />
                                </div>
                            </div>

                            <h4> Bakirova Dilafro‘z</h4>
                            <p>{t('p9')}</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p18')}</p>
                                    <p>{t('p19')}</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p9')}</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <section className='comments__cards__section'>
                                <p>
                                {t('p24')}
                                </p>
                            </section>
                            <div className='comments__cards__btn'>
                                <label for='checkComments'>{t('btn2')}</label>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                        <input type="checkbox" name="" id='checkComments1' />
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={beknazar} alt="" />
                                </div>
                            </div>

                            <h4>Kamaldinov Beknazar</h4>
                            <p>
                                {t('p10')}
                            </p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                <p>{t('p18')}</p>
                                <p>{t('p19')}</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p10')}</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <section className='comments__cards__section'>
                                <p>
                                {t('p22')}
                                </p>
                            </section>
                            <div className='comments__cards__btn'>
                                <label for='checkComments1'>{t('btn2')}</label>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                        <input type="checkbox" name="" id='checkComments2' />
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={zafar} alt="" />
                                </div>
                            </div>

                            <h4> Ashrapov Zafar</h4>
                            <p>{t('p11')}</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                <p>{t('p18')}</p>
                                <p>{t('p19')}</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p11')}</p>
                                    <p>Samarqand</p>
                                </div>
                            </div>
                            <section className='comments__cards__section'>
                                <p>
                                {t('p20')}
                                </p>
                            </section>
                            <div className='comments__cards__btn'>
                                <label for='checkComments2'>{t('btn2')}</label>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                        <input type="checkbox" name="" id='checkComments3' />
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={sadriddin} alt="" />
                                </div>
                            </div>

                            <h4>Sadriddin Dehkonov</h4>
                            <p>{t('p12')}</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p18')}</p>
                                    <p>{t('p19')}</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p12')}</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <section className='comments__cards__section'>
                                <p>
                                    {t('p25')}
                                </p>
                            </section>
                            <div className='comments__cards__btn'>
                                <label for='checkComments3'> {t('btn2')} </label>
                            </div>
                        </div>
                        <div className='comments__cards__item'>
                        <input type="checkbox" name="" id='checkComments4' />
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={behzod} alt="" />
                                </div>
                            </div>

                            <h4>Behzod Haldarov</h4>
                            <p>{t('p14')}</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                <p>{t('p18')}</p>
                                    <p>{t('p19')}</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p14')}</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <section className='comments__cards__section'>
                                <p>
                                 {t('p21')}
                                </p>
                            </section>
                            <div className='comments__cards__btn'>
                                <label for='checkComments4'>{t('btn2')}</label>
                            </div>
                        </div>
                    <div className='comments__cards__item'>
                        <input type="checkbox"  id='checkComments5' />
                            <div className='comments__cards__img__back'>
                                <div className='comments__cards__img'>
                                    <img src={suhrob} alt="" />
                                </div>
                            </div>

                            <h4>Suhrob</h4>
                            <p> {t('p13')}</p>
                            <div className='comments__cards__info'>
                                <div className='comments__cards__info__text'>
                                <p>{t('p18')}</p>
                                    <p>{t('p19')}</p>
                                </div>
                                <div className='comments__cards__info__text'>
                                    <p>{t('p13')}</p>
                                    <p>Toshkent</p>
                                </div>
                            </div>
                            <section className='comments__cards__section'>
                                <p>
                                {t('p26')}
                                </p>
                            </section>
                            <div className='comments__cards__btn'>
                                <label for='checkComments5'>{t('btn2')}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <SwiperTwo />
                <div className="helper">
                    <h2>{t('h10')}</h2>
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
                    <h2>{t('h12')}</h2>
                    <p>{t('p23')}</p>
                    <div className='aksiya__cards'>
                        <div className='aksiya__cards__item'>
                            <span>{timerDays}</span>
                            <p>{t('sapn3')}</p>
                        </div>
                        <div className='aksiya__cards__item'>
                            <span>{timerHours}</span>
                            <p>{t('sapn4')}</p>
                        </div>
                        <div className='aksiya__cards__item'>
                            <span>{timerMinutes}</span>
                            <p>{t('sapn5')}</p>
                        </div>
                        <div className='aksiya__cards__item'>
                            <span>{timerSeconds}</span>
                            <p>{t('sapn6')}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className="aksiya__title">{t('h13')}</h2>
                    <div className="aksiya__bottom">
                        <div className='aksiya__bottom__info'>
                            <p>{t('h14')}</p>
                            <ul>
                                <li><div>1</div>{t('li15')}</li>
                                <li><div>2</div>{t('li16')}</li>
                                <li><div>3</div>{t('li17')}</li>
                                <li><div>4</div>{t('li18')}</li>
                                <li><div>5</div>{t('li19')}</li>
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