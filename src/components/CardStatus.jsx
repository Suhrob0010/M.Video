import React from 'react'

const CardStatus = (props) => {
  return (<>
    <div>
        <a href="#" className='text-[#007aff] font-medium text-[17px]'>{props.aCard}</a>
        <p className='text-[15px] text-[#333] mt-2'>{props.pCard}</p>
    </div>
  </> )
}

export default CardStatus