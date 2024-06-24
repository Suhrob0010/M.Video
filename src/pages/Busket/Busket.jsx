import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletTovar, fetchBusket, setDecrement, setIncrement } from '../../reducer/CounterBusket/counterBusket'
import { addIzb } from '../../reducer/CounterIzbranoe/izbranoe'
import { Button, message, Space } from 'antd';
import { Box, TextField } from '@mui/material';

const Busket = () => {

  const dispatch = useDispatch()
  const dataBusket = useSelector((store) => store.busket.busket)

  const [ modalReg, setModalReg ] = useState(false)


  const onDecrease = (item) => {
    dispatch(
      setDecrement({
        id: item.id,
        pCard: item.pCard,
        img: item.img,
        summa: item.summa,
        CartQuentity: item.CartQuentity
      })
    )
    minusCart()
  }

  const onIncrease = (item) => {
    dispatch(
      setIncrement({
        id: item.id,
        pCard: item.pCard,
        img: item.img,
        summa: item.summa,
        CartQuentity: item.CartQuentity
      })
    )
    success()
  }


  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'plus',
    });
  };
  const minusCart = () => {
    messageApi.open({
      type: 'error',
      content: 'Minus',
    });
  };

  let totalQuantity = 0
  let quentity = 0
  
  useEffect(() => {
    dispatch(fetchBusket())
  }, [dispatch])

  return (<>
  <div className='bg-[#f3f3f7]'>
    <div className='max-w-[1550px] pt-10'>

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

      <div>
        <h2 className='text-[36px] font-bold'>Корзина</h2>
      </div>
      <div className='flex justify-between gap-16'>
        <div className='py-12 grid gap-y-5'>
        {dataBusket.map((e)=> {
          totalQuantity+= e.summa * e.CartQuentity
          quentity += e.CartQuentity
          return (<>
            <div key={e.id} className="w-[1050px] py-10 bg-[#fff] rounded-[16px]">
              <div className='flex items-center mx-12 border-b pb-4 border-[#dfdee2]'>
                <div className='flex items-center gap-3 ml-0'>
                  <img className="mt-2 cursor-pointer w-[160px]" src={e.img} alt="" />
                </div>
                <div className='flex flex-col items-start justify-between ml-0 h-[128px] w-[400px]'>
                  <p className="mt-6 cursor-pointer text-[20px] font-medium">
                    {e.pCard}
                  </p>
                  <a href="#" className='text-[14.5px] ml-0 text-[#007aff] hover:text-[#0053ae] font-medium'>Показать все аксессуары</a>
                </div>
                <div>
                  <div className='flex items-center gap-4 mb-4'>
                    <Space>
                    {contextHolder}
                    <Button onClick={() => onDecrease(e)} 
                    className='px-[14px] py-1 text-[25px] rounded-[4px] bg-[#ededed]'>-</Button>
                    </Space>
                    <p className='text-[20px]'>{e.CartQuentity}</p>
                    <Space>
                    {contextHolder}
                    <Button type='primary' onClick={() => onIncrease(e)} 
                    className='px-3 py-1 text-[25px] rounded-[4px] bg-[#e0dfdf]'>+</Button>
                    </Space>
                  </div>
                  <div className='flex flex-col gap-y-3 mr-10'>
                    <span onClick={()=> dispatch(deletTovar(e.id))} className='text-[#8e8e93] ml-0 hover:text-[#333] cursor-pointer'>Удалить</span>
                    <Space>
                    {contextHolder}
                    <span onClick={()=> dispatch(addIzb(e))} className='text-[#8e8e93] hover:text-[#333] cursor-pointer'>В избранное</span>
                    </Space>
                  </div>
                </div>
                <div className="text-[20px] font-medium flex items-center gap-2">
                  <h1>{e.summa * e.CartQuentity} ₽</h1>
                </div>
              </div>
              <div>
              </div>
            </div>
          </>)
        })}
      </div>
      <div className='bg-[#fff] w-[25%] rounded-t-[18px] h-[450px] mt-14 p-9'>
        <h2 className='text-[22px] font-medium'>Детали заказа</h2>
        <div className='flex items-center justify-between font-medium mt-6'>
          <p className='text-[17px]'>{quentity} товара</p>
          <p>______________________</p>
          <h1 className='text-[18px]'>{totalQuantity} ₽</h1>
        </div>
        <div className='flex items-center justify-between font-medium mt-5'>
          <p className='text-[17px]'>Скидка</p>
          <p>____________________________</p>
          <h1 className='text-[18px]'>0 ₽</h1>
        </div>
        <div className='flex items-center justify-between font-medium mt-5'>
          <p className='text-[21px]'>Итого</p>
          <p>_____________________</p>
          <h1 className='text-[21px]'>{totalQuantity} ₽</h1>
        </div>
        <button onClick={()=> setModalReg(true)} className='w-[100%] h-[48px] rounded-[4px] mt-14 hover:bg-[#BD0F2C] bg-[#E21235] text-[#fff] font-medium text-[17px]'>Перейти к оформлению</button>
        <button onClick={()=> setModalReg(true)} className='w-[100%] h-[48px] rounded-[4px] border-[1px] border-[#E21235] mt-8 bg-[#fff] text-[#E21235] font-medium text-[17px]'>В рассрочку или кредит</button>
      </div>
      </div>
      </div>
  </div>
  </>)
}

export default Busket