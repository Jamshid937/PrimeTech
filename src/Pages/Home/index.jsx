import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Container from '../../layout/Container'
import './Home.css'

import gift from '../../imgs/Gift.png'
import who from '../../imgs/who.png'
import logo from '../../imgs/logo.png'
import right from '../../imgs/right.png'
import left from '../../imgs/left.png'
import Validate from '../../Components/Validate'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <>
    <NavBar></NavBar>
    <Container>
        <div className='header__hero'>
        <h1 className='header__hero__title'>
          Biz bilan Biznes va IT ni birga bog’lang
        </h1>
        
            <a href="#" className='header__hero__btn'>Royhatdan otish</a>
        <div className='header__hero__gift'>
            <img src={gift} alt="" />
            <p>Sotuvni 3x ga oshiradigon mahsus kitob</p>
        </div>
        </div>
        <div className='header__hero__bottom'>
            <ul className='header__hero__bottom-box'>
                <li className='header__hero__bottom-box__item'>
                    <span>+36ta</span>
                    <p>Tadbirkorlarga IT orqali biznesidagi muommasiga yechim berilgan.</p>
                </li>
                <li className='header__hero__bottom-box__item'>
                    <span>90<span>NPS</span></span>
                    <p> Kerakli dasturiy taminot orqali xarajatlaringizni 25%gacha kamaytirasiz tadbirkorimiz 6 oy mobaynida 35% xarajatlarni tejashga muvofiq bo'lgann</p>
                </li>
                <li className='header__hero__bottom-box__item'>
                   <span>4Yil</span> 
                   <p>Shu vaqt davomida tadbirkorlarimiz bilan ishlab kelmoqdamiz.</p>
                </li>
            </ul>
        </div>
        <div className='who'>
            <h2 className='who__title'>PrimeTech IT kompaniyasi xizmatlari kimlar uchun?</h2>
            <div className='who__cards'>
                <div className='who__cards__item'>
                    <img src={who} alt="" />
                    <h4>Biznesni tizimlashtirmoqchi bolganlar uchun</h4>
                    <ul>
                        <li>Hodimlar ozlariga berilayotgan vazifani bajarmayaptimi</li>
                        <li>Jamoani boshqarishda muammo bormi?</li>
                    </ul>
                </div>
                <div className='who__cards__item'>
                    <img src={who} alt="" />
                    <h4>Biznesni tizimlashtirmoqchi bolganlar uchun</h4>
                    <ul>
                        <li>Hodimlar ozlariga berilayotgan vazifani bajarmayaptimi</li>
                        <li>Jamoani boshqarishda muammo bormi?</li>
                    </ul>
                </div>
                <div className='who__cards__item'>
                    <img src={who} alt="" />
                    <h4>Biznesni tizimlashtirmoqchi bolganlar uchun</h4>
                    <ul>
                        <li>Hodimlar ozlariga berilayotgan vazifani bajarmayaptimi</li>
                        <li>Jamoani boshqarishda muammo bormi?</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='about'>
           <h2>PrimeTech qanday kompaniya?</h2>
           <div className='about__box'>
            <div className='about__box__img'>
               <a href="#" className='about__box__logo'><img src={logo} alt="" /></a>
               <p>Prime Tech IT nilan shug’ullanadigon kompaniya</p>
            </div>
            <div className='about__box__info'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
           </div>
           <div className='about__btn__box'>
            <a href="#" className='about__btn'>Royhatdan otish</a>
           </div>
        </div>
        <div className='services'>
           <h2 className='services__title'>Xizmatlarimizdan foydalanish orqali siz nimalarga ega bòlasiz?</h2>
           <div className='services__cards'>
            <div className='services__cards__item'>
                <img src={who} alt="" />
                <h4>Web sayt</h4>
                <p>Doimiy patensial mijozlarga ega bòlasiz
                   Tóliq òqish qilish kk da malumot kiritamiz
                </p>
            </div>
            <div className='services__cards__item'>
                <img src={who} alt="" />
                <h4>Web sayt</h4>
                <p>Doimiy patensial mijozlarga ega bòlasiz
                   Tóliq òqish qilish kk da malumot kiritamiz
                </p>
            </div>
            <div className='services__cards__item'>
                <img src={who} alt="" />
                <h4>Web sayt</h4>
                <p>Doimiy patensial mijozlarga ega bòlasiz
                   Tóliq òqish qilish kk da malumot kiritamiz
                </p>
            </div>
            <div className='services__cards__item'>
                <img src={who} alt="" />
                <h4>Web sayt</h4>
                <p>Doimiy patensial mijozlarga ega bòlasiz
                   Tóliq òqish qilish kk da malumot kiritamiz
                </p>
            </div>
           </div>
        </div>
        <div className='shop'>
           <h2 className='shop__title'>+36 ta tadbirkor bizni xizmatlarimiz foydalangan</h2>
           <div className='shop__carusel'>
             <div className='shop__carusel__cards'>
                <div className='shop__carusel__cards__item'></div>
                <div className='shop__carusel__cards__item'></div>
                <div className='shop__carusel__cards__item'></div>
             </div>
             <div className='shop__carusel__vektor'>
               <img src={left} alt="" />
               <img src={right} alt="" />
             </div>
           </div>
        </div>
        <div className='biznes'>
          <h2 className='biznes__title'>Biznes va IT ni bir biriga boģlaymiz.</h2>
          <p>Tadbirkorlarni biznesini avtomatlashtirish orqali,biznesini bir bisqichdan ikkinchi bosqichga olib chiqishga,hamda muvaffaqiyatli biznes qurishga yordam beramiz.</p>
          <div className='biznes__cards'>
            <div className='biznes__cards__item'>
                <p>Web sayt orqali daromadni oshirish</p>
                <div></div>
            </div>
            <div className='biznes__cards__item'>
                <p>Web sayt orqali daromadni oshirish</p>
                <div></div>
            </div>
            <div className='biznes__cards__item'>
                <p>Web sayt orqali daromadni oshirish</p>
                <div></div>
            </div>
            <div className='biznes__cards__item'>
                <p>Web sayt orqali daromadni oshirish</p>
                <div></div>
            </div>
            <div className='biznes__cards__item'>
                <p>Web sayt orqali daromadni oshirish</p>
                <div></div>
            </div>
          </div>
        </div>
        <div className='biznes__bottom'>
            <div>
            <div className='biznes__box__img'>
               <a href="#" className='about__box__logo'><img src={logo} alt="" /></a>
               <p>biznesingiz bilan IT ni bir biriga boģlaymiz.</p>
            </div>
            <div className='about__btn__box'>
            <a href="#" className='about__btn'>Royhatdan otish</a>
           </div>
           <div className='biznes__bottom--gift'>
            <img src={gift} alt="" />
            <p>Sotuvni 3x ga oshiradigon mahsus kitob</p>
           </div>
           </div>
            <div className='biznes__bottom__info'>
               <h4>Xizmatlarimizdan foydalangandan sòng ushbu natijalarga erishasiz.</h4>    
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
        <div className='comments'>
           <h2>Buning isbotini tadbirkorlarniing fikrlaridan bilib oling</h2>
           <div className='comments__cards'>
            <div className='comments__cards__item'>
            <div className='comments__cards__img'>
            </div>
              <h4>Husan mamasaidov</h4>
              <p>Decos,Mfaktor</p>
              <div className='comments__cards__info'>
                <div className='comments__cards__info__text'>
                    <p>Soxa</p>
                    <p>Shahar</p>
                </div>
                <div className='comments__cards__info__text'>
                    <p>Kanzelyara</p>
                    <p>Toshkent</p>
                </div>
              </div>
           </div>
           <div className='comments__cards__item'>
            <div className='comments__cards__img'>
            </div>
              <h4>Husan mamasaidov</h4>
              <p>Decos,Mfaktor</p>
              <div className='comments__cards__info'>
                <div className='comments__cards__info__text'>
                    <p>Soxa</p>
                    <p>Shahar</p>
                </div>
                <div className='comments__cards__info__text'>
                    <p>Kanzelyara</p>
                    <p>Toshkent</p>
                </div>
              </div>
           </div>
           <div className='comments__cards__item'>
            <div className='comments__cards__img'>
            </div>
              <h4>Husan mamasaidov</h4>
              <p>Decos,Mfaktor</p>
              <div className='comments__cards__info'>
                <div className='comments__cards__info__text'>
                    <p>Soxa</p>
                    <p>Shahar</p>
                </div>
                <div className='comments__cards__info__text'>
                    <p>Kanzelyara</p>
                    <p>Toshkent</p>
                </div>
              </div>
           </div>
           <div className='comments__cards__item'>
            <div className='comments__cards__img'>
            </div>
              <h4>Husan mamasaidov</h4>
              <p>Decos,Mfaktor</p>
              <div className='comments__cards__info'>
                <div className='comments__cards__info__text'>
                    <p>Soxa</p>
                    <p>Shahar</p>
                </div>
                <div className='comments__cards__info__text'>
                    <p>Kanzelyara</p>
                    <p>Toshkent</p>
                </div>
              </div>
           </div>
           </div>
        </div>
        <div className='comments__bottom'>
            <h2>Mijozlarimiz fikrlari</h2>
        <div className='shop__carusel'>
             <div className='shop__carusel__cards'>
                <div className='shop__carusel__cards__item'></div>
                <div className='shop__carusel__cards__item'></div>
                <div className='shop__carusel__cards__item'></div>
             </div>
             <div className='shop__carusel__vektor'>
               <img src={left} alt="" />
               <img src={right} alt="" />
             </div>
           </div>
        </div>
        <div className="helper">
            <h2>Biz yordam bergan bizneslar</h2>
            <p>Xizmatlarimizdan turli soha egalari foydalanib,biznesini biz bilan yangi bosqichga olib chiqishdi.</p>
            <div className="helper__cards">
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
                <div className="helper__cards__item"></div>
            </div>
        </div>
        <Validate/>

        <div className="aksiya">
            <h2>Hoziroq ròyhatdan òting va sotuvni 3x ga oshiradigan maxsus kitobni bepul qòlga kiriting</h2>
            <p>Joylar soni va vaqtimiz chegaralangan</p>
            <div className='aksiya__cards'>
                <div className='aksiya__cards__item'>
                    <span>00</span>
                    <p>Kun</p>
                </div>
                <div className='aksiya__cards__item'>
                    <span>00</span>
                    <p>Kun</p>
                </div>
                <div className='aksiya__cards__item'>
                    <span>00</span>
                    <p>Kun</p>
                </div>
                <div className='aksiya__cards__item'>
                    <span>00</span>
                    <p>Kun</p>
                </div>
            </div>
            <button className='aksiya__btn'>Faqat bu taklif sizlaruchun</button>
        </div>
        <div className="aksiya__bottom">
            <div className='aksiya__bottom__info'>
                <h2>Xizmatlarimizdan foydalanish orqali yana ushbu narsalarga ega bòlasiz.</h2>
                <ul>
                    <li>1.1 Ma’lumot beruvchi bot</li>
                    <li>1.2 Domen va hosting 1 oylik</li>
                    <li>1.3 Call center bot</li>
                    <li>1.4 1 yillik texnik yordam</li>
                    <li>1.4 Har bir foydalanilgan Xizmatimizdan keshbek qaytarish</li>
                    <li>1.5 Maxsus sovg'aga ega bo'lasiz</li>
                </ul>
            </div>
            <div className='aksiya__bottom__img'>

            </div>
        </div>
        <Footer></Footer>
    </Container>
    </>
  )
}

export default Home