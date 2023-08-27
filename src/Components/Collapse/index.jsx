import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import booking from '../../imgs/booking.png'
import bot from '../../imgs/bot.png'
import internet from '../../imgs/internet.png'
import crm from '../../imgs/crm.png'
const Collapse = () => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className='services'>
    <h2 className='services__title'> <span>Xizmatlarimizdan</span>  foydalanish orqali siz nimalarga ega bo`lasiz?</h2>
    <div className='services__cards'>
        <div className='services__cards__item'>
            <div className='services__cards__item--img'>
                <img src={internet} alt="" />
            </div>
            <h4>Veb sayt</h4>
            <p>Doimiy patensial mijozlarga ega bòlasiz
            </p>
        <section  className='collapse__text' {... getCollapseProps()}>
                Web saytning biznesingizdagi foydalari quyidagilardan  iborat
                <br></br>
                <span>1.</span> Onlayn ko'rsatish va marketing: Web saytni biznesingiz uchun bir marketing vositasi sifatida ishlatishingiz mumkin. Sayt orqali sizning mahsulotingiz yoki xizmatlaringiz haqida ma'lumot berishingiz, yangiliklarni tarqatishingiz va potensial mijozlarga reklama qilishingiz mumkin.
                 <br></br>
                 <span>2.</span> Oson kommunikatsiya: Web sayt orqali siz mijozlarga osonlik bilan aloqa o'rnatishingiz mumkin. Mijozlar sizning mahsulotingiz yoki xizmatlar haqida savollar yoki takliflar uchun veb-saytingizga murojaat qila oladilar va siz ham ularga tez va aniq javob berish imkoniyatini topasiz.
                  <br />
                  <span>3.</span> Mijoz tomonidan qidiruv: Potensial mijozlar internetda nima qidirayotganligini bilib, ularni mavjud bo'lgan hujjatlarga muvofiq topishadi. Agar sizning biznesingizning web sayti bo'lsa, bu potensial mijozlarning sizga yetib kelish imkoniyati ortadi.
                 <br />
                 <span>4.</span> Biznesning ishga tushirish imkoniyati: Bir nechta onlayn platformalarda (masalan, Google) ro'yhatdan o'tgan bo'lsangiz, web saytingizda mahsulotlaringiz yoki xizmatlaringizni ko'rsating va mijozlar sizni topishlari osonlashadi. Bu sizning biznesingizni yoqimli ishga tushirishga yordam beradi.
                    <br />
                    <span>5.</span> 24/7 xizmat: Web saytning eng buyuk foydasi shundaki, u 24 soat davomida faol bo'lishidir. Mijozlar sizning web saytingizga har doim murojaat qila oladilar va siz ham ularga har doim ma'lumot berishingiz mumkin.
                    <br />
                    <span>6.</span> Mahsulot sotuvini oshirish: Web saytni biznesingiz uchun bir savdo platformasi sifatida ishlatishingiz mumkin. Mijozlar onlayn xarid qilish orqali sizning mahsulotingizni sotib olishlari mumkin bo'ladi.
                 <br />
                 <span>7.</span> Keng doimiy reklama: Web saytining SEO (sayt optimallashi) qilinishi yordamida, sizning biznesingiz internetda keng tarqalganligini his etadi va bu orqali reklama xarajatlaringizi kamaytirishingiz mumkin.
                  <br />
                <span>8.</span> Saytdagi ma'lumotlar analizi: Web sayt orqali mijozlar tomonidan berilgan ma'lumotlarni to'plashing va analitikani oshirishingiz mumkin. Bu, mijozlar haqidagi ma'lumotingizni tahlil qilib, marketing strategiyalaringizi yangilash imkoniyatini beradi.
                 <br />
                Bular faqat bir nechta web saytning biznesdagi foydalari hisoblanadi va boshqa foydalarni ham o'z ichiga oladi. Web saytni biznesingizga qo'shishni ko'rishning va o'zining foydalarningi tahlil qilishning asosiy yo'llaridan biri, sizning maxsus biznesingizga qarab asoslangan bo'ladi.
            </section>
            <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Orqaga' : 'Batafsil'}
            </button>

        </div>
        <div className='services__cards__item'>
            <div className='services__cards__item--img'>
                <img src={bot} alt="" />
            </div>
            <h4>Telegram bot</h4>
            <p>Marketingni rivojlantiradigan bepul xodimga ega bo‘lasiz
            </p>

            <section  className='collapse__text' {... getCollapseProps()}>
                Web saytning biznesingizdagi foydalari quyidagilardan  iborat
                <br></br>
                <span>1.</span> Onlayn ko'rsatish va marketing: Web saytni biznesingiz uchun bir marketing vositasi sifatida ishlatishingiz mumkin. Sayt orqali sizning mahsulotingiz yoki xizmatlaringiz haqida ma'lumot berishingiz, yangiliklarni tarqatishingiz va potensial mijozlarga reklama qilishingiz mumkin.
                 <br></br>
                 <span>2.</span> Oson kommunikatsiya: Web sayt orqali siz mijozlarga osonlik bilan aloqa o'rnatishingiz mumkin. Mijozlar sizning mahsulotingiz yoki xizmatlar haqida savollar yoki takliflar uchun veb-saytingizga murojaat qila oladilar va siz ham ularga tez va aniq javob berish imkoniyatini topasiz.
                  <br />
                  <span>3.</span> Mijoz tomonidan qidiruv: Potensial mijozlar internetda nima qidirayotganligini bilib, ularni mavjud bo'lgan hujjatlarga muvofiq topishadi. Agar sizning biznesingizning web sayti bo'lsa, bu potensial mijozlarning sizga yetib kelish imkoniyati ortadi.
                 <br />
                 <span>4.</span> Biznesning ishga tushirish imkoniyati: Bir nechta onlayn platformalarda (masalan, Google) ro'yhatdan o'tgan bo'lsangiz, web saytingizda mahsulotlaringiz yoki xizmatlaringizni ko'rsating va mijozlar sizni topishlari osonlashadi. Bu sizning biznesingizni yoqimli ishga tushirishga yordam beradi.
                    <br />
                    <span>5.</span> 24/7 xizmat: Web saytning eng buyuk foydasi shundaki, u 24 soat davomida faol bo'lishidir. Mijozlar sizning web saytingizga har doim murojaat qila oladilar va siz ham ularga har doim ma'lumot berishingiz mumkin.
                    <br />
                    <span>6.</span> Mahsulot sotuvini oshirish: Web saytni biznesingiz uchun bir savdo platformasi sifatida ishlatishingiz mumkin. Mijozlar onlayn xarid qilish orqali sizning mahsulotingizni sotib olishlari mumkin bo'ladi.
                 <br />
                 <span>7.</span> Keng doimiy reklama: Web saytining SEO (sayt optimallashi) qilinishi yordamida, sizning biznesingiz internetda keng tarqalganligini his etadi va bu orqali reklama xarajatlaringizi kamaytirishingiz mumkin.
                  <br />
                <span>8.</span> Saytdagi ma'lumotlar analizi: Web sayt orqali mijozlar tomonidan berilgan ma'lumotlarni to'plashing va analitikani oshirishingiz mumkin. Bu, mijozlar haqidagi ma'lumotingizni tahlil qilib, marketing strategiyalaringizi yangilash imkoniyatini beradi.
                 <br />
                Bular faqat bir nechta web saytning biznesdagi foydalari hisoblanadi va boshqa foydalarni ham o'z ichiga oladi. Web saytni biznesingizga qo'shishni ko'rishning va o'zining foydalarningi tahlil qilishning asosiy yo'llaridan biri, sizning maxsus biznesingizga qarab asoslangan bo'ladi.
            </section>
            <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Orqaga' : 'Batafsil'}
            </button>
        </div>
        <div className='services__cards__item'>
            <div className='services__cards__item--img'>
                <img src={crm} alt="" />
            </div>

            <h4>CRM</h4>
            <p>Kompaniyangiz ichki tizimini to‘liq avtomatlashtirasiz
            </p>
            <section  className='collapse__text' {... getCollapseProps()}>
                Web saytning biznesingizdagi foydalari quyidagilardan  iborat
                <br></br>
                <span>1.</span> Onlayn ko'rsatish va marketing: Web saytni biznesingiz uchun bir marketing vositasi sifatida ishlatishingiz mumkin. Sayt orqali sizning mahsulotingiz yoki xizmatlaringiz haqida ma'lumot berishingiz, yangiliklarni tarqatishingiz va potensial mijozlarga reklama qilishingiz mumkin.
                 <br></br>
                 <span>2.</span> Oson kommunikatsiya: Web sayt orqali siz mijozlarga osonlik bilan aloqa o'rnatishingiz mumkin. Mijozlar sizning mahsulotingiz yoki xizmatlar haqida savollar yoki takliflar uchun veb-saytingizga murojaat qila oladilar va siz ham ularga tez va aniq javob berish imkoniyatini topasiz.
                  <br />
                  <span>3.</span> Mijoz tomonidan qidiruv: Potensial mijozlar internetda nima qidirayotganligini bilib, ularni mavjud bo'lgan hujjatlarga muvofiq topishadi. Agar sizning biznesingizning web sayti bo'lsa, bu potensial mijozlarning sizga yetib kelish imkoniyati ortadi.
                 <br />
                 <span>4.</span> Biznesning ishga tushirish imkoniyati: Bir nechta onlayn platformalarda (masalan, Google) ro'yhatdan o'tgan bo'lsangiz, web saytingizda mahsulotlaringiz yoki xizmatlaringizni ko'rsating va mijozlar sizni topishlari osonlashadi. Bu sizning biznesingizni yoqimli ishga tushirishga yordam beradi.
                    <br />
                    <span>5.</span> 24/7 xizmat: Web saytning eng buyuk foydasi shundaki, u 24 soat davomida faol bo'lishidir. Mijozlar sizning web saytingizga har doim murojaat qila oladilar va siz ham ularga har doim ma'lumot berishingiz mumkin.
                    <br />
                    <span>6.</span> Mahsulot sotuvini oshirish: Web saytni biznesingiz uchun bir savdo platformasi sifatida ishlatishingiz mumkin. Mijozlar onlayn xarid qilish orqali sizning mahsulotingizni sotib olishlari mumkin bo'ladi.
                 <br />
                 <span>7.</span> Keng doimiy reklama: Web saytining SEO (sayt optimallashi) qilinishi yordamida, sizning biznesingiz internetda keng tarqalganligini his etadi va bu orqali reklama xarajatlaringizi kamaytirishingiz mumkin.
                  <br />
                <span>8.</span> Saytdagi ma'lumotlar analizi: Web sayt orqali mijozlar tomonidan berilgan ma'lumotlarni to'plashing va analitikani oshirishingiz mumkin. Bu, mijozlar haqidagi ma'lumotingizni tahlil qilib, marketing strategiyalaringizi yangilash imkoniyatini beradi.
                 <br />
                Bular faqat bir nechta web saytning biznesdagi foydalari hisoblanadi va boshqa foydalarni ham o'z ichiga oladi. Web saytni biznesingizga qo'shishni ko'rishning va o'zining foydalarningi tahlil qilishning asosiy yo'llaridan biri, sizning maxsus biznesingizga qarab asoslangan bo'ladi.
            </section>
            <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Orqaga' : 'Batafsil'}
            </button>
        </div>
        <div className='services__cards__item'>

            <div className='services__cards__item--img'>
                <img src={booking} alt="" />
            </div>
            <h4>Mobile ilova</h4>
            <p>Doimiy patensial mijozlarga ega bòlasiz
            </p>
            <section  className='collapse__text' {... getCollapseProps()}>
                Web saytning biznesingizdagi foydalari quyidagilardan  iborat
                <br></br>
                <span>1.</span> Onlayn ko'rsatish va marketing: Web saytni biznesingiz uchun bir marketing vositasi sifatida ishlatishingiz mumkin. Sayt orqali sizning mahsulotingiz yoki xizmatlaringiz haqida ma'lumot berishingiz, yangiliklarni tarqatishingiz va potensial mijozlarga reklama qilishingiz mumkin.
                 <br></br>
                 <span>2.</span> Oson kommunikatsiya: Web sayt orqali siz mijozlarga osonlik bilan aloqa o'rnatishingiz mumkin. Mijozlar sizning mahsulotingiz yoki xizmatlar haqida savollar yoki takliflar uchun veb-saytingizga murojaat qila oladilar va siz ham ularga tez va aniq javob berish imkoniyatini topasiz.
                  <br />
                  <span>3.</span> Mijoz tomonidan qidiruv: Potensial mijozlar internetda nima qidirayotganligini bilib, ularni mavjud bo'lgan hujjatlarga muvofiq topishadi. Agar sizning biznesingizning web sayti bo'lsa, bu potensial mijozlarning sizga yetib kelish imkoniyati ortadi.
                 <br />
                 <span>4.</span> Biznesning ishga tushirish imkoniyati: Bir nechta onlayn platformalarda (masalan, Google) ro'yhatdan o'tgan bo'lsangiz, web saytingizda mahsulotlaringiz yoki xizmatlaringizni ko'rsating va mijozlar sizni topishlari osonlashadi. Bu sizning biznesingizni yoqimli ishga tushirishga yordam beradi.
                    <br />
                    <span>5.</span> 24/7 xizmat: Web saytning eng buyuk foydasi shundaki, u 24 soat davomida faol bo'lishidir. Mijozlar sizning web saytingizga har doim murojaat qila oladilar va siz ham ularga har doim ma'lumot berishingiz mumkin.
                    <br />
                    <span>6.</span> Mahsulot sotuvini oshirish: Web saytni biznesingiz uchun bir savdo platformasi sifatida ishlatishingiz mumkin. Mijozlar onlayn xarid qilish orqali sizning mahsulotingizni sotib olishlari mumkin bo'ladi.
                 <br />
                 <span>7.</span> Keng doimiy reklama: Web saytining SEO (sayt optimallashi) qilinishi yordamida, sizning biznesingiz internetda keng tarqalganligini his etadi va bu orqali reklama xarajatlaringizi kamaytirishingiz mumkin.
                  <br />
                <span>8.</span> Saytdagi ma'lumotlar analizi: Web sayt orqali mijozlar tomonidan berilgan ma'lumotlarni to'plashing va analitikani oshirishingiz mumkin. Bu, mijozlar haqidagi ma'lumotingizni tahlil qilib, marketing strategiyalaringizi yangilash imkoniyatini beradi.
                 <br />
                Bular faqat bir nechta web saytning biznesdagi foydalari hisoblanadi va boshqa foydalarni ham o'z ichiga oladi. Web saytni biznesingizga qo'shishni ko'rishning va o'zining foydalarningi tahlil qilishning asosiy yo'llaridan biri, sizning maxsus biznesingizga qarab asoslangan bo'ladi.
            </section>
            <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Orqaga' : 'Batafsil'}
            </button>
        </div>
    </div>
</div>
  )
}


export default Collapse