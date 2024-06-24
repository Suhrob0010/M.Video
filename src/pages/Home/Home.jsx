import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../reducer/Counter/counter";
import { addBusket } from "../../reducer/CounterBusket/counterBusket";
import Premium, { TovariDnya } from "../../Data/data";
import { addIzb } from "../../reducer/CounterIzbranoe/izbranoe";
import { Space, message } from "antd";

const Home = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const dispatch = useDispatch();
  const dataMap = useSelector((state) => state.counter.list)
  const [textSearch, setTextSearch] = useState("")

  const onclickAdd = (item) => {
    dispatch(addBusket(item));
    busket()
  };

  const onclickAddIzb = (item) => {
    dispatch(addIzb(item))
    izb()
  }

  const [messageApi, contextHolder] = message.useMessage();
  const busket = () => {
    messageApi.open({
      type: 'success',
      content: 'Добавлено в Корзину',
    });
  };

  const izb = () => {
    messageApi.open({
      type: 'success',
      content: 'Добавлено в Избранное',
    });
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="bg-[#f3f3f7]">
          <div className="max-w-[1600px]">
            <div>
              <div className="pb-5">
                <div>
                  <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper w-[70%] py-10"
                  >
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader8.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader1.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader2.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader3.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader4.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader6.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader5.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader7.webp" alt="" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#">
                        <img className="rounded-[10px]" src="/images/SwiperHeader10.webp" alt="" />
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div>Hello</div> */}
              </div>

            {/* <div className='w-[450px]'>
              <div className='bg-[#fff] p-7'>
                <h3 className='text-[24px] font-medium'>Товары дня</h3>
              </div>
              <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper w-[70%] py-10 "
                >
                    {TovariDnya.map((e)=> {
                      return (<>
                  <SwiperSlide>
                        <div key={e.id}>
                          <div>
                            <img src={e.img} alt="" />
                          </div>
                          <div>
                            <img src={e.skidki} alt="" />
                            <h5>{e.summa}</h5>
                            <div>
                              <div>
                                <img src="/images/Swiper2imgOtzivi.png" alt="" />
                                <p>{e.otziv1}</p>
                              </div>
                              <p>{e.otziv2}</p>
                            </div>
                            <p>{e.nameTovar}</p>
                            <button></button>
                          </div>
                        </div>
                  </SwiperSlide>
                      </>)
                    })}
                </Swiper>
            </div> */}

              <div className="pb-8">
                <Swiper
                  onSwiper={setSwiperRef}
                  slidesPerView={5}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="bg-[#fff] w-[280px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard1.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">
                        Авторизуйтесь, чтобы применить Бонусные рубли
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard2.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">
                        Открытые магазины в вашем городе
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard3.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">
                        Работа в М.Видео
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard4.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">
                        Экспресс-доставка от 2 часов
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard5.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">
                        30 дней на обмен или возврат товара
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard6.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">
                        Система быстрых платежей
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard7.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">Пункты выдачи</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="bg-[#fff] w-[272px] h-[72px] flex items-center justify-center px-6 rounded-[8px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px]"
                        src="/images/IconCard8.png"
                        alt=""
                      />
                      <p className="text-[14.5px] font-medium">Кредит</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1600px] py-11">
          <div>
            <h2 className="text-[28px] font-bold">Хиты продаж</h2>
          </div>
          <div className="my-7 flex flex-wrap m-auto gap-x-8 gap-y-16">
            {dataMap
            .filter((e)=> {
              return textSearch.toLowerCase() === ""
              ? e 
              : e.pCard.toLowerCase().includes(textSearch)
            })
            .map((e) => {
              return (
                <>
                  <div key={e.id} className="w-[200px]">
                    <span className="py-[5px] px-4 hover:bg-[#5d5d5d] rounded-[.3rem] cursor-pointer text-[14.5px] font-medium bg-[#333] text-[#fff]">
                      {e.titleTovar}
                    </span>
                    <div>
                      <img className="mt-2 cursor-pointer" src={e.img} alt="" />
                      <p className="text-[14.5px] mt-6 cursor-pointer">
                        {e.pCard}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center ml-0 my-2 gap-1">
                        <img className="w-[15px] pb-[2px]"  src={e.otzivImg} alt=""
                        />
                        <p className="text-[#e21235] text-[15px] font-bold">
                          {e.otziv1}
                        </p>
                        <p className="text-[#8e8e93] ml-2 text-[15px] font-medium">
                          {e.otziv2}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-[20px] font-medium">{e.summa} ₽</h2>
                    <div className="mt-3 flex items-center gap-5">
                      <Space className="ml-0">
                        {contextHolder}
                        <button
                          onClick={() => onclickAdd(e)}
                          className="bg-[#e21235] hover:bg-[#bd0f2c] w-[75px] h-[40px] flex items-center justify-center rounded-[4px]" >
                            <img className="w-[20px]" src="/images/CorzinaTovariImg.png" alt="" />
                        </button>
                      </Space>
                      <Space>
                        {contextHolder}
                        <button className="ml-0" onClick={()=> onclickAddIzb(e)}>
                          <img className="w-[22px]" src="/images/LikeTovariImg.png" alt="" />
                        </button>
                      </Space>
                      <button className="mr-8">
                        <img
                          className="w-[22px]"
                          src="/images/StaticTovariImg.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="max-w-[1600px]">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper pb-12"
            >
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg1.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg2.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg4.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg5.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg6.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg7.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg8.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg9.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg10.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-[12px] cursor-pointer" src="/images/SwiperMainImg3.webp" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="max-w-[1600px] mt-4">
          <div>
              <h2 className="text-[28px] font-bold ml-2">Premium</h2>
          </div>

          <div className="flex items-center mt-8">
            {Premium.map((e) => {
              return (<>
                <div key={e.id} className="w-[200px]">
                  <span className="py-[5px] px-4 hover:bg-[#5d5d5d] rounded-[.3rem] cursor-pointer text-[14.5px] font-medium bg-[#333] text-[#fff]">
                    {e.titleTovar}
                  </span>
                  <div>
                    <img className="mt-2 cursor-pointer" src={e.img} alt="" />
                    <p className="text-[14.5px] mt-6 cursor-pointer">
                      {e.pCard}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center ml-0 my-2 gap-1">
                      <img className="w-[15px] pb-[2px]"  src={e.otzivImg} alt=""
                      />
                      <p className="text-[#e21235] text-[15px] font-bold">
                        {e.otziv1}
                      </p>
                    </div>
                    <p className="text-[#8e8e93] text-[15px] font-medium">
                      {e.otziv2}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-[20px] font-medium">{e.summa} ₽</h2>
                  </div>
                  <div className="mt-3 flex items-center gap-5">
                    <button
                      onClick={() => onclickAdd(e)}
                      className="bg-[#e21235] hover:bg-[#bd0f2c] w-[75px] h-[40px] flex items-center justify-center rounded-[4px]" >
                        <img className="w-[20px]" src="/images/CorzinaTovariImg.png" alt="" />
                    </button>
                    <button onClick={()=> onclickAddIzb(e)}>
                      <img className="w-[22px]" src="/images/LikeTovariImg.png" alt="" />
                    </button>
                    <button>
                      <img
                        className="w-[22px]"
                        src="/images/StaticTovariImg.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </>)
            })}
          </div>
        </div>

        <div className="max-w-[1600px] mt-16">
          <div>
            <h2 className="text-[28px] font-bold ml-2">Популярные бренды</h2>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-6 my-10">
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[17px]" src="/images/ImgBrands1.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[17px]" src="/images/ImgBrands2.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[26px]" src="/images/ImgBrands3.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[18px]" src="/images/ImgBrands4.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[16px]" src="/images/ImgBrands5.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[24px]" src="/images/ImgBrands6.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[26px]" src="/images/ImgBrands7.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[35px]" src="/images/ImgBrands8.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[25px]" src="/images/ImgBrands9.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[18px]" src="/images/ImgBrands10.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[18px]" src="/images/ImgBrands11.gif" alt="" />
            </div>
            <div className="w-[245px] h-[70px] bg-[#f3f3f7] rounded-[8px] flex items-center justify-center cursor-pointer">
              <img className="h-[18px]" src="/images/ImgBrands12.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
