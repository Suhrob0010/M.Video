import React from 'react'
import CardVseAksii from '../../components/CardVseAksii'
import { Link } from 'react-router-dom'

const VseAksii = () => {
  return (<>
    <div className='max-w-[1600px]'>
      <Link to={"/"}>
        <p className='text-[16px] mt-8 font-medium transition-[.3s] hover:text-[#6b6b6b]'>Главная</p>
      </Link>
      <p className='text-[#7e7e83] mt-1'>Все Акции | Скидки | Распродажи на сайте Мвидео</p>
      <div className='grid grid-cols-4 gap-y-10 my-10'>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg1.png" alt="" />
          <CardVseAksii aCard='Беспроцентная рассрочка и суперскидки!'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg2.png" alt="" />
          <CardVseAksii aCard='Плати частями с М.Деньгами'/>
          <CardVseAksii pCard='удобная оплата покупок'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg3.png" alt="" />
          <CardVseAksii aCard='Рассрочка до 30 месяцев'/>
          <CardVseAksii pCard='на всё'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg4.png" alt="" />
          <CardVseAksii aCard='Красная цена'/>
          <CardVseAksii pCard='Ограниченное предложение'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg5.avif" alt="" />
          <CardVseAksii aCard='Бытовая техника с выгодой'/>
          <CardVseAksii pCard='Скидка 20% на комплект'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg6.avif" alt="" />
          <CardVseAksii aCard='Успей купить товары по суперцене!'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg7.avif" alt="" />
          <CardVseAksii aCard='Виртуальный блогер Эм.Ви'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg8.avif" alt="" />
          <CardVseAksii aCard='Экотакси'/>
          <CardVseAksii pCard='демонтируем, вывозим и платим'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg9.avif" alt="" />
          <CardVseAksii aCard='М.Рассрочка + 20% кешбэк'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg10.png" alt="" />
          <CardVseAksii aCard='Предзаказ планшетов Apple'/>
          <CardVseAksii pCard='Wylsacom рекомендует'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg11.avif" alt="" />
          <CardVseAksii aCard='Пылесос DreameBot L10S Pro Ultra'/>
          <CardVseAksii pCard='безупречная чистота'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg12.png" alt="" />
          <CardVseAksii aCard='Умный телевизор Яндекса'/>
          <CardVseAksii pCard='покупай по суперцене!'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg13.png" alt="" />
          <CardVseAksii aCard='Уже в продаже'/>
          <CardVseAksii pCard='робот-пылесос Xiaomi Vacuum X20+'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg14.avif" alt="" />
          <CardVseAksii aCard='Сочные скидки 20%'/>
          <CardVseAksii pCard='промокод FRESH20'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg15.png" alt="" />
          <CardVseAksii aCard='Подарки от Philips'/>
          <CardVseAksii pCard='вторые наушники бесплатно'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg16.avif" alt="" />
          <CardVseAksii aCard='Кешбэк до 40% на роботы-пылесосы Tefal'/>
          <CardVseAksii pCard='до 27 мая'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg17.avif" alt="" />
          <CardVseAksii aCard='Уже в продаже'/>
          <CardVseAksii pCard='фитнес-браслет HUAWEI Band 9 с выгодой 500 ₽'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg18.png" alt="" />
          <CardVseAksii aCard='Серия HUAWEI Pura 70'/>
          <CardVseAksii pCard='наушники FreeBuds Pro 3 в подарок за предзаказ новинки'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg19.png" alt="" />
          <CardVseAksii aCard='Скидки на бытовую технику'/>
          <CardVseAksii pCard='из подборки для дачи до 31 августа'/>
        </div>
        <div>
          <img className='mb-4 rounded-[5px]' src="/images/CardVseAksiiImg20.avif" alt="" />
          <CardVseAksii aCard='Готовимся к лету!'/>
          <CardVseAksii pCard='Скидки на вентиляторы Tefal'/>
        </div>
      </div>
    </div>
  </>)
}

export default VseAksii