import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Flex from '../../layouts/Flex';
import Container from '../../layouts/Container';





const Navbar = () => {
  const [show, setShow]= useState(false)
  const [showBar, setShowBar]= useState(true)
  const navItems=["Shop", 'On Sale', 'New Arrivals', 'Brands']
  return (
    <>
    {
      showBar && (
        <div className="bar py-[9px] font-secondary text-white bg-black text-center">
        <Container>
        <Flex className='md:w-[66%] ms-auto'>
          <p className='text-body-sm md:text-body'>Sign up and get 20% off to your first order. <span className='font-medium border-b'>Sign Up Now</span></p>
          <span><RxCross2 onClick={()=>setShowBar(false)} />
          </span>
        </Flex>
  
        </Container>
  
      </div>
      )
    }

    <div className="navbar sticky top-0 left-0 z-[9999] font-secondary py-[24px] text-black bg-white shadow-2xl">
      <Container>
        <Flex className='gap-x-10'>
          <div className="logo">
            E-Com
          </div>
          <ul className=' hidden md:block'>
            <Flex className="gap-x-6">
              {
                navItems.map((item)=>(
                  <li>{item}</li>
                ))
              }
            </Flex>
          </ul>
          <div className="input hidden md:block relative md:w-[45%]">
            <input type="text" className='py-3 px-[52px] w-full rounded-[62px] bg-[#F0F0F0]' placeholder='Search for products...' />
            <IoMdSearch className='absolute left-[16px] top-1/2 -translate-y-1/2 opacity-40 text-[24px]' />
          </div>
          <div className="icons hidden md:block">
            <Flex className="gap-x-[15px]">
            <FiShoppingCart className='text-[24px]' />
            <RxAvatar className='text-[24px]' />
            </Flex>
          </div>

        


          
          {show ? <IoMdClose onClick={()=>setShow(false)} className='text-[26px]'/> : <IoMdMenu onClick={()=>setShow(true)} className='text-[26px] md:hidden'/>}
          

          {
            show && (
              <>
              
<Flex className="flex-col gap-y-5 mx-auto text-center">
<ul className=' md:hidden'>
              <Flex className="gap-y-3 mt-7 flex-col">
                {
                  navItems.map((item)=>(
                    <li>{item}</li>
                  ))
                }
              </Flex>
            </ul>
            <div className="input md:hidden relative">
              <input type="text" className='py-3 px-[52px] w-full rounded-[62px] bg-[#F0F0F0]' placeholder='Search for products...' />
              <IoMdSearch className='absolute left-[16px] top-1/2 -translate-y-1/2 opacity-40 text-[24px]' />
            </div>
            <div className="icons md:hidden">
              <Flex className="gap-x-[15px]">
              <FiShoppingCart className='text-[24px]' />
              <RxAvatar className='text-[24px]' />
              </Flex>
            </div>
</Flex>
              </>
            )
          }
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Navbar