import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'

const DressStyle = () => {
  return (
    <div className='font-secondary'>
      <Container>
        <div className='rounded-[40px] dressstyle py-[70px] md:px-[64px] px-[44px] bg-[#F0F0F0]'>
        <h2 className='text-black font-primary font-black text-subheading-sm  md:text-subheading text-center'>BROWSE BY DRESS STYLE</h2>
        <Flex className="gap-y-5 mt-[64px]">
          <div className='md:w-[39%] z-10  group after:absolute after:content-[""] after:z-[100] after:top- after:left-0 after:w-full after:h-full after:bg-black/5043 w-full bg-[url(assets/ds1.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title-sm md:text-title font-bold font-primary'>Casual</h3></div>
          <div className='md:w-[60%] w-full bg-[url(assets/ds2.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title-sm md:text-title font-bold font-primary'>Formal</h3></div>
          <div className='md:w-[60%] w-full bg-[url(assets/ds3.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title-sm md:text-title font-bold font-primary'>Party</h3></div>
          <div className='md:w-[39%] w-full bg-[url(assets/ds4.png)] bg-cover bg-center pt-[25px] pl-[36px] pb-[215px] rounded-[20px]'><h3 className='text-title-sm md:text-title font-bold font-primary'>Gym</h3></div>
        </Flex>

        </div>

      </Container>
    </div>
  )
}

export default DressStyle