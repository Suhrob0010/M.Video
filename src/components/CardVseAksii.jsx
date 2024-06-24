import React from 'react'

const CardVseAksii = (props) => {
  return (<>
    <div className='w-[300px]'>
        <a className='text-[16.5px] font-medium text-[#007aff]' href="#">{props.aCard}</a>
        <p className='text-[15px] text-[#333] mt-5'>{props.pCard}</p>
    </div>
  </>)
}

export default CardVseAksii