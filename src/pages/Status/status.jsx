import React, { useState } from 'react'
import CardStatus from '../../components/CardStatus'

const status = () => {

  const [modalStatus, setModalStatus] = useState(true)

  return (<>
    <div>
      {modalStatus ? (<>
        <div className='modal'>
          <div className='w-[20%] bg-[#fff] px-8 pb-10 pt-8 rounded-[5px] mt-[10%] relative'>
            <span onClick={()=> setModalStatus(false)} className='text-[30px] text-[#c5c5c5] hover:text-[#5a5a5a] absolute top-1 right-5 cursor-pointer'>&times;</span>
            <h2 className='text-[23px]'>Статус заказа</h2>
            <p className='text-[15px] mt-3 mb-4'>Где вы делали заказ?</p>
            <div className='flex items-center'>
              <div className='flex items-center gap-3 ml-0'>
                <input className='size-5 cursor-pointer' type="radio" name='radio' />
                <p className='text-[#333] text-[17px]'>Онлайн</p>
              </div>
              <div className='flex items-center gap-3 ml-0'>
                <input className='size-5 cursor-pointer' type="radio" name='radio' />
                <p className='text-[#333] text-[17px]'>В магазине</p>
              </div>
            </div>
            <p className='text-[15px] mt-6 mb-2'>Мобильный номер получателя, указанный в <br /> заказе </p>
            <input className='w-[100%] pl-5 outline-none m-auto h-[48px] border border-[#BABAC0] rounded-[5px]' type="text" placeholder='+7 ___ _______' />
            <p className='text-[15px] mt-4 mb-2'>Введите 8 или 10 цифр номера заказа из SMS</p>
            <input className='w-[100%] pl-5 outline-none m-auto h-[48px] border border-[#BABAC0] rounded-[5px]' type="text" placeholder='Введите данные' />
            <button className='bg-[#e31235] hover:bg-[#b42f45] w-[100%] h-[48px] flex items-center mt-6 
            justify-center text-[17px] font-medium text-[#fff] rounded-[5px]'>Смотреть</button>
          </div>
        </div>
      </>) : null}

      <div className='grid grid-cols-4 px-56 gap-y-12 gap-x-10 py-10'>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg1.png" alt="" />
            <CardStatus aCard="White Friday" />
            <CardStatus pCard="Скидки + кешбэк" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg2.png" alt="" />
            <CardStatus aCard="Получи промокод на скидку!" />
            <CardStatus pCard="До 4 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg3.png" alt="" />
            <CardStatus aCard="500 Бонусных рублей" />
            <CardStatus pCard="в подарок в приложении" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg4.png" alt="" />
            <CardStatus aCard="Плати частями с М.Деньгами" />
            <CardStatus pCard="удобная оплата покупок" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg5.png" alt="" />
            <CardStatus aCard="Рассрочка до 30 месяцев" />
            <CardStatus pCard="на всё" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg6.png" alt="" />
            <CardStatus aCard="Красная цена" />
            <CardStatus pCard="Ограниченное предложение" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg7.avif" alt="" />
            <CardStatus aCard="Скидки до 50% на климатическую технику" />
            <CardStatus pCard="до 31 августа" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg8.avif" alt="" />
            <CardStatus aCard="Скидки на холодильники" />
            <CardStatus pCard="известных брендов" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg8.png" alt="" />
            <CardStatus aCard="Выгода в комплекте" />
            <CardStatus pCard="скидка 50% на второй товар" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg10.avif" alt="" />
            <CardStatus aCard="Бытовая техника с выгодой" />
            <CardStatus pCard="Скидка 20% на комплект" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg11.avif" alt="" />
            <CardStatus aCard="Успей купить товары по суперцене!" />
            <CardStatus pCard="" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg12.png" alt="" />
            <CardStatus aCard="Виртуальный блогер Эм.Ви" />
            <CardStatus pCard="" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg13.avif" alt="" />
            <CardStatus aCard="Виртуальный блогер Эм.Ви" />
            <CardStatus pCard="демонтируем, вывозим и платим" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg14.avif" alt="" />
            <CardStatus aCard="М.Рассрочка + 20% кешбэк" />
            <CardStatus pCard="" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg15.avif" alt="" />
            <CardStatus aCard="Скидки на электроинструменты" />
            <CardStatus pCard="" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg16.png" alt="" />
            <CardStatus aCard="Поймай кешбэк 30% на ТВ" />
            <CardStatus pCard="" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg17.png" alt="" />
            <CardStatus aCard="Робот-газонокосилка Dreame" />
            <CardStatus pCard="Подарок за предзаказ" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg18.png" alt="" />
            <CardStatus aCard="Игры Белой Пятницы" />
            <CardStatus pCard="играй и получай бонусные баллы до 14 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg19.avif" alt="" />
            <CardStatus aCard="Выгода до 9 000 ₽" />
            <CardStatus pCard="при покупке смартфона HONOR 90|90 Lite до 17 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg20.png" alt="" />
            <CardStatus aCard="Телевизоры Grundig Nano QLED " />
            <CardStatus pCard="уже в М.Видео" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg21.png" alt="" />
            <CardStatus aCard="HONOR Magic V2" />
            <CardStatus pCard="выгода 40 000 ₽ и рассрочка 0-0-30" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg22.png" alt="" />
            <CardStatus aCard="Спрей Argan в подарок " />
            <CardStatus pCard="при покупке GA.MA до 30 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg23.png" alt="" />
            <CardStatus aCard="Скидка 50% на второй товар" />
            <CardStatus pCard="при покупке техники для кухни Kuppersberg до 17 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg24.avif" alt="" />
            <CardStatus aCard="Выгода 1 000 ₽ на фитнес-браслет" />
            <CardStatus pCard="Xiaomi Smart Band 8 до 3 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg25.png" alt="" />
            <CardStatus aCard="Скидка на умную колонку VK Капсула Нео" />
            <CardStatus pCard="до 3 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg26.png" alt="" />
            <CardStatus aCard="Белая Пятница" />
            <CardStatus pCard="скидки до 22% на умные колонки Sber до 24 июня" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg27.avif" alt="" />
            <CardStatus aCard="Умная лампочка Sber в подарок" />
            <CardStatus pCard="при покупке гаджетов и устройств Sber" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg28.avif" alt="" />
            <CardStatus aCard="Предзаказ планшетов Apple" />
            <CardStatus pCard="Wylsacom рекомендует" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg29.png" alt="" />
            <CardStatus aCard="Infinix Note 40 Pro" />
            <CardStatus pCard="Покупай с выгодой!" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg30.png" alt="" />
            <CardStatus aCard="Кешбэк 100%" />
            <CardStatus pCard="на установку кондиционера" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg31.png" alt="" />
            <CardStatus aCard="Купи смартфон" />
            <CardStatus pCard="Получи планшет в подарок" />
          </div>
          <div>
            <img className='rounded-[6px] mb-5' src="/images/StatusImg32.png" alt="" />
            <CardStatus aCard="Уже в продаже" />
            <CardStatus pCard="смартфоны realme 12 Pro Series подписка ИВИ на 3 года в подарок" />
          </div>
      </div>
    </div>
  </>)
}

export default status