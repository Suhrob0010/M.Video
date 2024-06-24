import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';

const Layout = () => {

  const [ modalReg, setModalReg ] = useState(false)
  const [ textSearch, setTextSearch ] = useState("")

  const {t, i18n} = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event, index) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link to={"/"}>{t("home")}</Link>, <Link to={"VseAksii"}>{t("aksii")}</Link>,
        <Link to={"/NoutBook"}>{t("Noutbook")}</Link>,<Link to={"/UspeyKupit"}>УСПЕЙ КУПИТЬ</Link>,
        <Link to={"/Holodilnik"}>ХОЛОДИЛЬНИКИ</Link>,<Link to={"/Konditsioner"}>КОНДИЦИОНЕР</Link>,
        <Link to={"/Televizior"}>ТЕЛЕВИЗИОРЫ</Link>,<Link to={"/Premium"}>PREMIUM</Link>,
        <Link to={"/Carrera"}>CARRERA</Link>,<Link to={"/StiralnieMashini"}>СТИРАЛЬНЫЕ МАШИНЫ</Link>,
        <Link to={"/Merch"}>М.МЕРЧ</Link>].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (<>
      <div>
        <div className='bg-[#fff] w-[1600px] m-auto conatinerLayout'>
          <div className='navbar bg-[#fff] z-10 pt-6 pb-3 flex items-center justify-between border-b'>
            <div>
              <Link to={"/"}>
                <img src="/images/Logo.svg" alt="" />
              </Link>
            </div>
            <div className='katalog bg-[#e21235] hover:bg-[#bd0f2c] rounded-[4px] 
            cursor-pointer flex items-center justify-center gap-3 p-[24px] w-[142px] h-[48px] text-[#fff]'>
              <img className='w-[23px]' id='imgKatalog' src="/images/MenuSearch.png" alt="" />
                {['Каталог'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><h1 className='text-white'>Kotalog</h1></Button>
                   <Drawer
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
            </div>
            <div className='flex items-center gap-2 h-[48px] border hover:border w-[678px]
             hover:border-[#878792] border-[#dfdee2] rounded-[4px]'>
              <input value={textSearch} onChange={(event) => useDispatch(setTextSearch(event.target.value))} 
              className='h-[46px] text-[17px] w-[95%] text-[#535353] outline-none pl-4 rounded-[4px]' type="text" 
              placeholder={t('inpSearch')}/>
              <div className='bg-[#e21235] w-[40px] h-[40px] flex items-center justify-center rounded-[.4rem] mr-1 cursor-pointer'>
                <img className='w-[20px]' src="/images/SearchHeader.png" alt="" />
              </div>
            </div>
            <Link to={"/Status"}>
              <div className='cursor-pointer'>
                <img className='w-[24px]' src="/images/ClockHeader.png" alt="" />
                <p className='text-[14px] font-medium hover:text-[#535353] transition-[.2s]'>{t("status")}</p>
              </div>
            </Link>
            <div onClick={()=> setModalReg(true)} className='hover:text-[#535353] cursor-pointer'>
              <img className='w-[24px]' src="/images/ManHeader.png" alt="" />
              <p className='text-[14px] font-medium hover:text-[#535353] transition-[.2s]'>{t("Voyti")}</p>
            </div>
            <div className='text-[#7e7e83]'>
              <img className='w-[24px]' src="/images/StaticHeader.png" alt="" />
              <p className='text-[14px] font-medium'>{t("Sravnenie")}</p>
            </div>
            <Link to={"/Izbranoe"}>
              <div className='text-[#535353] cursor-pointer'>
                <img className='w-[24px]' src="/images/LikeHeader.png" alt="" />
                <p className='text-[14px] font-medium'>{t("izbranoe")}</p>
              </div>
            </Link>
            <Link to={"/Busket"}>
              <div className='hover:text-[#535353] cursor-pointer'>
                <img className='w-[24px]' src="/images/KorzinaHeader.png" alt="" />
                <p className='text-[14px] font-medium hover:text-[#535353] transition-[.2s]'>{t("Basket")}</p>
              </div>
            </Link>
            <div>
              <select onChange={(event) => changeLanguage(event.target.value)} className='w-[48px] font-medium'>
                <option value="ru" className='font-medium'>RU</option>
                <option value="en" className='font-medium'>EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='header border-[#DFDEE2] max-w-[1600px]'>
        {modalReg ? (<>
          <div className='modalReg'>
            <div className='bg-[#fff] flex flex-col items-center relative mt-[10%] rounded-[1.2rem] w-[400px] py-[3rem] px-[3.2rem]'>
              <span onClick={()=> setModalReg(false)} className='cursor-pointer hover:text-[#666666] transition-[2s] 
              absolute top-1 right-6 text-[#b5b5b9] text-[40px]'>&times;</span>
              <h2 className='text-[24px] font-medium'>Вход или регистрация</h2>
              <Box
                component="form"
                className='my-3'
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField label="Телефон" variant="outlined" />
              </Box>
              <button className='w-[304px] h-[48px] text-[18px] hover:bg-[#E21235] hover:text-[#fff] transition-[2s] 
              rounded-[4px] bg-[#F1F1F5] text-[#b5b5b9] font-medium'>Продолжить</button>
              <a className='text-[#8E8E93] text-[15px] mt-6 font-medium hover:text-[#0053ae] transition-[2s]' href="#">Для юридических лиц</a>
            </div>
          </div>
        </>) : null}

      <div className='mt-24 mb-4 links'>
        <ul className='flex items-center gap-5 justify-center text-[#333]'>
          <Link to={"/"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>{t("home")}</li>
          </Link>
          <Link to={"/VseAksii"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>{t("aksii")}</li>
          </Link>
          <Link to={"/NoutBook"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>{t("Noutbook")}</li>
          </Link>
          <Link to={"/UspeyKupit"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>УСПЕЙ КУПИТЬ</li>
          </Link>
          <Link to={"/Holodilnik"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>ХОЛОДИЛЬНИКИ</li>
          </Link>
          <Link to={"/Konditsioner"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>КОНДИЦИОНЕР</li>
          </Link>
          <Link to={"/Televizior"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>ТЕЛЕВИЗИОРЫ</li>
          </Link>
          <Link to={"/Premium"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>PREMIUM</li>
          </Link>
          <Link to={"/Carrera"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>CARRERA</li>
          </Link>
          <Link to={"/StiralnieMashini"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>СТИРАЛЬНЫЕ МАШИНЫ</li>
          </Link>
          <Link to={"/Merch"}>
            <li className='text-[14px] font-medium transition-[.3s] hover:text-[#6b6b6b]'>М.МЕРЧ</li>
          </Link>
        </ul>
      </div>
    </div>

    <Outlet/>

    <div className='footer'>
      <div className='flex items-center justify-between max-w-[1600px] pt-6'>
        <div className='w-[33%] rounded-[8px] overflow-hidden z-0 bg-[#f3f3f7] pt-[63px] flex items-center px-[32px] pb-[58px] relative'>
          <div className='z-10 w-[45%] ml-0'>
            <h3 className='text-[20px] font-medium'>Не нашли ничего интересного?</h3>
            <p className='text-[15px] my-2'>Возможно, вы найдёте что-то среди наших акций!</p>
            <a className='text-[17px] text-[#007aff] font-medium' href="#">Все акции</a>
          </div>
          <div>
            <img className='absolute left-[16rem] top-[20%]' src="/images/n_interesting_desktop.svg" alt="" />
          </div>
        </div>

        <div className='bg-[#f3f3f7] w-[60%] rounded-[8px] pt-[32px] pl-[32px] pb-[10px] flex'>
          <div className='w-[42%]'>
            <h3 className='text-[20px] font-medium'>Получайте самые интересные предложения первыми!</h3>
            <div className='w-[300px] hover:border-[#7e7e83] transition-[.175s] py-[8px] pl-[20px] my-5 pr-[8px] flex 
            items-center justify-between bg-[#fff] rounded-[.3rem] border border-[#dfdee2]'>
              <input className='footerInp outline-none overflow-hidden' type="text" placeholder='Email' />
              <button type='submit' className='w-[72px] h-[40px] rounded-[.3rem] bg-[#e21235] hover:bg-[#bd0f2c]'>
                <img className='w-[20px]' src="/images/FooterBtnImg.png" alt="" />
              </button>
            </div>
            <div className='text-[15px]'>
              <p>Нажимая стрелку «Далее», я даю согласие на получение рекламной рассылки и обработку 
                <a className='text-[#1484ff]' href="#"> персональных данных</a></p>
            </div>
          </div>
          <div>
            <img src="/images/subscribe.svg" alt="" />
          </div>
        </div>
      </div>

      <div className='bg-[#333] rounded-t-[1.6rem] mt-8'>
        <div className='max-w-[1600px]'>
          <div className='flex items-center justify-between p-8 border-b border-[#474747]'>
            <Link to={"/"} className='ml-0'>
              <img src="/images/M.svg" alt="" />
            </Link>
            <button className='bg-[#474747] hover:bg-[#646467] rounded-[4px] px-[24px] py-[13px] text-[18px] font-medium text-[#fff]'>Карта магазинов</button>
          </div>
          <div className='py-10 flex justify-between pr-10 border-b border-[#474747]'>
            <div className='text-[15px] flex flex-col gap-4'>
              <a className='text-[#fff] font-medium ml-0 hover:text-[#949499] transition-[.4s]' href="#">Покупателям</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s] mt-1' href="#">Подарочные карты</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Заберите товар через 15 минут <br /> после заказа</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Гарантия лучшей цены</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Хранение покупок</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Публичная оферта</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Безопасность в Интернете</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Частые вопросы</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Акции и скидки</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">M.Club – кешбэк и Бонусные рубли</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Доставка</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Обмен и возврат</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">М.Сервис – ремонт, страховка</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Кредит и рассрочка</a>
            </div>
            <div className='text-[15px] flex flex-col gap-4'>
              <a className='text-[#fff] font-medium hover:text-[#949499] ml-0 transition-[.4s]' href="#">Бизнесу</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s] mt-1' href="#">Тендеры</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Поставщикам</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Аренда торговых помещений</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Электронный документооборот</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">For international suppliers</a>
            </div>
            <div className='text-[15px] flex flex-col gap-4'>
              <a className='text-[#fff] font-medium hover:text-[#949499] ml-0 transition-[.4s]' href="#">О компании</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s] mt-1' href="#">Партнёрская программа</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Инвесторам и акционерам</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#"> Ребрендинг</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Политика компании</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Рекомендательные технологии</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Пресс-центр</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Благотворительный фонд</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Экологические инициативы</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Осознанное потребление</a>
            </div>
            <div className='text-[15px] flex flex-col gap-4'>
              <a className='text-[#fff] font-medium hover:text-[#949499] ml-0 transition-[.4s]' href="#">Блог «М.Клик»</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s] mt-1' href="#">Как установить <br /> «Сбербанк Онлайн» и приложения <br /> других банков на iPhone</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Что известно об iPhone 16: <br /> характеристики, дизайн, фото, <br /> дата выхода, цены</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">25 лучших холодильников на <br /> сегодняшний день</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Рейтинг лучших стиральных <br /> машин в 2024 году</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">«Сёгун» — что за сериал, где <br /> посмотреть, даты выхода серий</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Лучшие роботы-пылесосы для <br /> дома в 2024 году</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Кто такой скуф: разбираем <br /> важнейшее слово в современном сленге</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">25 лучших пылесосов для сбора <br /> шерсти животных</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Обзор HUAWEI Pura 70 Ultra: <br /> уникальная камера и <br /> сверхбыстрая </a>
            </div>
            <div className='text-[15px] flex flex-col gap-4'>
              <a className='text-[#fff] font-medium hover:text-[#949499] ml-0 transition-[.4s]' href="#">КОНТАКТЫ</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s] mt-1' href="#">Канал Viber</a>
              <a className='text-[#b5b5b9] hover:text-[#fff] ml-0 transition-[.4s]' href="#">Telegram</a>
            </div>
          </div>
          <div className='flex items-center justify-between border-b px-3 border-[#474747]'>
            <div className='py-9 ml-0'>
              <p className='text-[#fff] text-[15px] font-medium'>Скачайте мобильное приложение</p>
              <div className='flex items-center gap-5 mt-4'>
                <a className='bg-[#474747] flex items-center justify-center transition-[.3s] hover:bg-[#535353] rounded-[.4rem] w-[134px] h-[42px]' href='#'>
                  <img src="/images/googlePlay.svg" alt="" />
                </a>
                <a className='bg-[#474747] flex items-center justify-center transition-[.3s] hover:bg-[#535353] rounded-[.4rem] w-[134px] h-[42px]' href='#'>
                  <img src="/images/appStore.svg" alt="" />
                </a>
                <a className='bg-[#474747] flex items-center justify-center transition-[.3s] hover:bg-[#535353] rounded-[.4rem] w-[134px] h-[42px]' href='#'>
                  <img src="/images/appGallery.svg" alt="" />
                </a>
                <a className='bg-[#474747] flex items-center justify-center transition-[.3s] hover:bg-[#535353] rounded-[.4rem] w-[134px] h-[42px]' href='#'>
                  <img src="/images/ruStore.svg" alt="" />
                </a>
              </div>
            </div>
            <div className='mr-0'>
              <p className='text-[15px] text-[#fff] font-medium'>М.Видео в соцсетях</p>
              <div className='flex items-center gap-4 mt-4'>
                <a href="#"><img src="/images/__.svg" alt="" /></a>
                <a href="#"><img src="/images/_____________.svg" alt="" /></a>
                <a href="#"><img src="/images/YouTube.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between px-3 py-8'>
            <div className='ml-0'>
              <p className='text-[15px] text-[#b5b5b9]'>Copyright М.Видео</p>
              <div className='flex items-center gap-4 mt-2'>
                <a className='text-[15px] ml-0 font-medium text-[#b5b5b9] hover:text-[#fff] transition-[.5s]' href="#">Официальная информация</a>
                <a className='text-[15px] ml-0 font-medium text-[#b5b5b9] hover:text-[#fff] transition-[.5s]' href="#">Раскрытие информации</a>
              </div>
            </div>
            <div className='mr-0'>
              <a href="#">
                <img src="/images/logo_akit.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Layout