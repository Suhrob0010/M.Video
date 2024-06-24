import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletIzb, fetchIzb } from '../../reducer/CounterIzbranoe/izbranoe'
import { Link } from 'react-router-dom'
import { addBusket } from '../../reducer/CounterBusket/counterBusket'
import { Box, TextField } from '@mui/material'

const izobranoe = () => {

  const dispatch = useDispatch()
  const dataIzb = useSelector((store) => store.izbranoe.izbranoe)

  const [ modalReg, setModalReg ] = useState(false)

  const onclickAdd = (item) => {
    dispatch(addBusket(item))
  }

  useEffect(() => {
    dispatch(fetchIzb())
  }, [dispatch])

  return (<>
    <div className='max-w-[1600px] mb-14 px-2'><hr />
      <div>
        <p className='mt-5 mb-5 text-[#8e8e93]'>
          <Link to={"/"} className='cursor-pointer'>
            Главная - 
          </Link> 
          - Избранное</p>
        <h1 className='text-[30px] font-bold'>Избранное</h1>
      </div>

      <div className='bg-[#ebf5ff] py-4 px-6 rounded-[8px] mt-5'>
        <div className='flex'>
          <p onClick={()=> setModalReg(true)} className='cursor-pointer font-medium text-[#1484ff] mr-1'>Авторизуйтесь, </p>
          чтобы сохранить список избранного для просмотра
        </div>
      </div>

      {modalReg ? (<>
          <div className='modalReg'>
            <div className='bg-[#fff] flex flex-col items-center relative mt-[10%] rounded-[1.2rem] w-[400px] py-[3rem] px-[3.2rem]'>
              <span onClick={()=> setModalReg(false)} className='cursor-pointer hover:text-[#666666] transition-[2s] absolute top-1 right-6 text-[#b5b5b9] text-[40px]'>&times;</span>
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
              <button className='w-[304px] h-[48px] text-[18px] hover:bg-[#E21235] hover:text-[#fff] transition-[2s] rounded-[4px] bg-[#F1F1F5] text-[#b5b5b9] font-medium'>Продолжить</button>
              <a className='text-[#8E8E93] text-[15px] mt-6 font-medium hover:text-[#0053ae] transition-[2s]' href="#">Для юридических лиц</a>
            </div>
          </div>
        </>) : null}

      <div className='grid grid-cols-6 mt-10 gap-x-10 gap-y-16'>
        {dataIzb.map((e) => {
          return (<>
            <div key={e.id} className="w-[233px]">
              <div>
                <img className="mt-2 cursor-pointer" src={e.img} alt="" />
                <div className='mt-2 flex items-center gap-2'>
                  <h2 className="text-[20px] font-medium">{e.summa} ₽</h2>
                  <h2 className="text-[20px] font-medium">{e.rubl}</h2>
                </div>
              <div className="flex items-center">
                <div className="flex items-center ml-0 my-2 gap-1">
                  <img className="w-[15px] pb-[2px]"  src={e.otzivImg} alt=""
                  />
                  <p className="text-[#e21235] text-[15px] font-bold">
                    {e.otziv1}
                  </p>
                  <p className="text-[#8e8e93] text-[15px] ml-2">
                    {e.otziv2}
                  </p>
                </div>
              </div>
              <p className="text-[14.5px] cursor-pointer">
                {e.pCard}
              </p>
              <div className='flex mt-1'>
                <div className='flex ml-0'>
                  <img className='w-[17px]' src={e.ImgKeshbek} alt="" />
                  <p className='text-[#86868a] ml-2 text-[15px] font-medium'>{e.textKeshbek}</p>
                  <p className='text-[#e21235] text-[15px] font-medium ml-2'>{e.summaKeshbek}</p>
                </div>
              </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <button
                  onClick={() => onclickAdd(e)}
                  className="bg-[#e21235] hover:bg-[#bd0f2c] text-[#fff] text-[17px] font-medium w-[125px] h-[40px] rounded-[4px]" >
                    В корзину
                </button>
                <button onClick={()=> dispatch(deletIzb(e.id))}>
                  <img className="w-[22px]" src="/images/LikeIzbr.png" alt="" />
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
  </>)
}

export default izobranoe