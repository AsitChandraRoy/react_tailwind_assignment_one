import React from 'react'
import { Container } from './container'

function Hero(props) {
  return (
    <>
    <Container className="md:h-32 sm:h-28 h-32">
        <div className='flex justify-between items-center px-1
             sm:px-7 md:px-10 xl:px-12 pt-5 gap-3'>
            <div>
                <p className='text-lowLight text-[10px] md:text-xs'>{props.direction}</p>
                <div className='flex justify-start items-center'>
                    <img className={props.wm} src={props.tree} alt="" />
                    <h1 className='font-bold  md:text-xl xl:text-2xl'>{props.itemName}</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 space-y-2 sm:space-y-1 md:w-[473px] sm:w-96 w-52 justify-end items-center text-xs text-lowLight mr-40 md:mr-[120px] mt-1 '>
                <div className='col-span-12 md:col-span-6 flex justify-start ps-2 pr-48 py-[5px] rounded-sm bg-[#ffffff] w-[291px] gap-1'>
                    <img className='' src="/search.png" alt="" />
                    <input className='w-24 md:w-32 border-none' type="text" placeholder='Search incident' />
                </div>
                <div className='col-span-12 md:col-span-6 flex justify-center items-center space-x-3 -mr-[104px]'>
                <p className='bg-[#ffffff] p-1.5 mr-[68px] -mt-1 rounded-sm'>{props.sort}</p>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Hero