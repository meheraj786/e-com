import React from 'react'

import logo1 from './../../assets/logo1.png'
import logo2 from './../../assets/logo2.png'
import logo3 from './../../assets/logo3.png'
import logo4 from './../../assets/logo4.png'
import logo5 from './../../assets/logo5.png'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'

const Logos = () => {
  return (
    <div className='py-[44px] bg-black'>
      <Container>
        <Flex className="gap-8 md:gap-0">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </Flex>
      </Container>
    </div>
  )
}

export default Logos