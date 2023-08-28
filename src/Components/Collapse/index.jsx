import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import booking from '../../imgs/booking.png'
import bot from '../../imgs/bot.png'
import internet from '../../imgs/internet.png'
import crm from '../../imgs/crm.png'
import './collapse.css'
const Collapse = () => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div className='services'>
            <h2 className='services__title'> <span>Xizmatlarimizdan</span>foydalanish orqali siz nimalarga ega bo`lasiz?</h2>
            <div className='services__cards'>
                <div className='services__cards__item'>
                    <input type="checkbox" name="" id='check' />
                    <div className='services__cards__item--img'>
                        <img src={internet} alt="" />
                    </div>
                    <h4>Veb sayt</h4>
                    <p>Siz veb-sayt orqali doimiy potinsial mijozlarga ega bo’lasiz.
                    </p>
                    <section className='collapse__text'>
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
                    <label for='check'>
                      Batafsil
                    </label>
                    
                </div>
                <div className='services__cards__item'>
                <input type="checkbox" name="" id='check1' />
                    <div className='services__cards__item--img'>
                        <img src={bot} alt="" />
                    </div>
                    <h4>Telegram bot</h4>
                    <p>Marketingni rivojlantiradigan bepul xodimga ega bo’lasiz.
                        Yana to’liq ma’luot uchun.
                    </p>

                    <section className='collapse__text'>
                    Telegram botning biznesdagi foydalari quyidagilardan iborat 
                        <br></br>
                        <span>1.</span> Avtomatlashtirish: Telegram botlarining asosiy afzalligi, ularni avtomatlashtirish imkoniyatini berishidir. Botlar sizning biznesingizga xizmat ko'rsatishda va mijozlar bilan aloqada bo'lishda sizni qo'lga kiritmasdan bir necha vazifalarni bajarishadi.
                        <br></br>
                        <span>2.</span>. Mijozlarga tezkor javob: Biznesingizning Telegram boti, mijozlarga tezkor javob berishi mumkin bo'lgan avtomatik xabarlar yuborishi orqali mijozlarga tez-tez savollarini yoki talablari uchun javob beradi. Bu, mijozlar bilan o'zaro munosabatni kuchaytiradi va ularning ko'nglini oshiradi.
                        <br />
                        <span>3.</span> Maxfiylik: Telegram kanal yoki guruhdagi botlar maxfiylikni ta'minlash uchun ishlatilishi mumkin. Bu, sizning biznesingizning maxfiyligini saqlash va faqat sizga majbur bo'lgan ma'lumotlarni ko'rsatish imkonini beradi.
                        <br />
                        <span>4.</span> To'lov jarayoni: Telegram botlar tomonidan o'tkazilayotgan to'lov jarayonlari shaffoflikka ega bo'ladi va foydalanuvchilar tomonidan amalga oshirilishi oson bo'ladi. Bu, mijozlarning to'lovni tez, qulay va xavfsiz amalga oshirishini ta'minlaydi
                        <br />
                        <span>5.</span>Ma'lumotlar analizi: Telegram botlarining ma'lumotlar analitikasi imkoniyati ham mavjud. Sizning botingiz tomonidan yuborilgan ma'lumotlarni tahlil qilib, mijozlar to'g'risidagi ko'proq tafsilotlarni olishingiz mumkin bo'ladi. Bu, sizning biznesingizni rivojlantirish va sifatli xizmat ko'rsatish uchun qo'llaniladi
                        <br />
                        <span>6.</span>Telegram botlarining biznesdagi foydalari bu kutilgan bo'lmagan, chunki ular sizga tezkor javob berish, mijozlarga doimiy aloqada bo'lish va avtomatlashtirish imkonini beradi. Bu esa sizning biznesingizni kuchaytirish va mijozlaringiz bilan yaqindan aloqada turish imkonini beradi.
                    </section>
                    <label for='check1'>
                      Batafsil
                    </label>
                </div>
                <div className='services__cards__item'>
                <input type="checkbox" name="" id='check2' />
                    <div className='services__cards__item--img'>
                        <img src={crm} alt="" />
                    </div>
                    <h4>CRM</h4>
                    <p>Kompaniyangiz ichki tizimini to’liq avtomatlashtirasiz.
                    </p>
                    <section className='collapse__text'>
                        Web saytning biznesingizdagi foydalari quyidagilardan  iborat
                        <br></br>
                        <span>1.</span>. Mijozlarga xizmat ko'rsatishni yaxshilash: CRM tizimi, mijozlar haqida ma'lumotlarni to'plab, saqlab qolish va barcha departamentlar bilan ulashingizni ta'minlaydi. Bu, mijozlarga shaxsiy qarorlar berishda yordam beradi va ularning talablariga tez va samarali javob berishga imkoniyat yaratadi
                        <br></br>
                        <span>2.</span> Sotish jarayonini optimallashtirish: CRM tizimi, sotuv amaliyotlarini boshqarishga yordam beradi. Sotuvchilar mijozlar bilan aloqani oshirib borishi, ularning talablari va istaklarini tushunish, mijozlarga maxsus takliflar kiritishi mumkin bo'ladi. Bu, sotuvchilar uchun mijozlardan kelib chiqadigan yangiliklardan foydalanish imkonini ochadi
                        <br />
                        <span>3.</span>  Mijozlar bilan aloqani kuchaytirish: CRM tizimi orqali, kompaniya sotuvchilari va xodimlari mijozlar bilan o'zaro aloqani kuchaytirishi mumkin bo'ladi. Bu aloqa salomlash uchun shart emas, balki rost maqsadli hamkorlik va uzluksizlikka asoslangan bo'lishi kerakdir.
                        <br />
                        <span>4.</span>. Marketing kampaniyalarini boshqarish: CRM tizimi, marketing kampaniyalarini boshqarishda muhim ahamiyatga ega. Mijozlardan to'plangan ma'lumotlar asosida, kompaniya xodimlari mijozlar bilan hamkorlik qiladigan maxsus takliflar va chegirmalar tuzishi mumkin. Bu, mijozlarni qo'llab-quvvatlash, ularga takliflar berish va yangi mahsulotlarni taklif qilish imkonini yaratadi.
                        <br />
                        <span>5.</span>  Kafolatli xizmat ko'rsatish: CRM tizimi, kompaniya xodimlariga kafolatli xizmat ko'rsatish uchun zarur bo'lgan ma'lumotlarni olishga yordam beradi. Mijozlar haqida to'plangan ma'lumotlar asosida, xodimlar mijozning talablari va istaklariga mos javob berishadi, shuningdek, ularning oldingi tarixini va talablari hisobga oladi.
                        
                    </section>
                    <label for='check2'>
                      Batafsil
                    </label>
                </div>
                <div className='services__cards__item'>
                <input type="checkbox" name="" id='check3' />
                    <div className='services__cards__item--img'>
                        <img src={booking} alt="" />
                    </div>
                    <h4>Mobile ilova</h4>
                    <p>Hamma ishlaringizni bir joyda jamlaysiz.</p>
                    
                    <section className='collapse__text'>
                    Mobile ilovaning biznesdagi foydalari quvidagilardan iborat
                        <br></br>
                        <span>1.</span> Mijozlarga yetarli va tezkor aloqa: Mobil ilovalar orqali kompaniyaga kiruvchi mijozlar bilan tezkor aloqa o'rnatilishi mumkin bo'ladi. Bu mobil ilovalar orqali kompaniya sotuvchilari mijozlargacha tez va samarali shaklda yetkazib berish imkoniyatiga ega bo'ladi.
                        <br></br>
                        <span>2.</span>  Hodisalarni kuzatish va boshqarish: Mobil ilovalar, kompaniyada yuz beruvchi hodisalarni kuzatish va boshqarishga imkon beradi. Hodisalardan to'plangan ma'lumotlar orqali, kompaniya xodimlari har bir mijozning holatini to'g'ri bilishadi va ularga tezlik bilan javob berishlari mumkin bo'ladi
                        <br />
                        <span>3.</span>  Marketing kampaniyalarini boshqarish: Mobil ilovalar, marketing kampaniyalarini boshqarishda muhim ahamiyatga ega bo'ladi. Mijozlar mobil ilovalar orqali reklama xabarlariga tez va samarali tarzda qo'shiladilar va kompaniya yangiliklari bilan ta'minlaydi
                        <br />
                        <span>4.</span>  Xizmat ko'rsatishni yaxshilash: Mobil ilovalar orqali kompaniya sotuvchilari mijozlarga yetkazib berishni tezkorlashtiradi. Bu, mijozlarga
                    </section>
                    <label for='check3'>
                      Batafsil
                    </label>
                </div> 
            </div>
        </div>
    )
}


export default Collapse