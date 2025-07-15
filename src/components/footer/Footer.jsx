import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import Container from '../../layouts/Container';
import Flex from '../../layouts/Flex';



const Footer = () => {
  const company=[
    {
      text: 'About',
      link:'#'
    },
    {
      text: 'Features',
      link:'#'
    },
    {
      text: 'Works',
      link:'#'
    },
    {
      text: 'Career',
      link:'#'
    },
  ]
  const help=[
    {
      text: 'Customer Support',
      link:'#'
    },
    {
      text: 'Delivery Details',
      link:'#'
    },
    {
      text: 'Terms & Conditions',
      link:'#'
    },
    {
      text: 'Privacy Policy',
      link:'#'
    },
  ]
  const faq=[
    {
      text: 'Account',
      link:'#'
    },
    {
      text: 'Manage Deliveries',
      link:'#'
    },
    {
      text: 'Orders',
      link:'#'
    },
    {
      text: 'Payments',
      link:'#'
    },
  ]
  const resources=[
    {
      text: 'Free eBooks',
      link:'#'
    },
    {
      text: 'Development Tutorial',
      link:'#'
    },
    {
      text: 'How to -Blog',
      link:'#'
    },
    {
      text: 'Youtube Playlist',
      link:'#'
    },
  ]

  return (
    <div className='py-[88px] text-center md:text-left font-secondary bg-[#F0F0F0]'>
      <Container>
        <Flex className="items-start justify-center md:justify-between gap-10 px-8 md:px-0 md:gap-0">
          <div className='w-full md:w-auto'>
            E-com
            <p className='mt-[25px] mx-auto md:mx-0 opacity-60 w-[248px] mb-[35px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="icons mx-auto md:mx-0 w-[148px]">
              <Flex>
                <span className='p-[9px] border border-gray-200 text-black hover:bg-black hover:text-white rounded-full cursor-pointer'><FaTwitter />
                </span>
              <span className='p-[9px] border border-gray-200 text-black hover:bg-black hover:text-white rounded-full cursor-pointer'><FaFacebookF />
              </span>
              <span className='p-[9px] border border-gray-200 text-black hover:bg-black hover:text-white rounded-full cursor-pointer'><FaInstagram />
              </span>
                <span className='p-[9px] border border-gray-200 text-black hover:bg-black hover:text-white rounded-full cursor-pointer'><FaGithub />
                </span>
              </Flex>
            </div>
          </div>
          <div>
            <h3 className='text-subtitle-sm md:text-subtitle font-bold mb-[26px] '>COMPANY</h3>
            <ul>
            {
              company.map((item)=>(
                <li className='my-[15px] text-body-sm md:text-body opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>
          </div>
          <div>
          <h3 className='text-subtitle-sm md:text-subtitle font-bold mb-[26px] '>HELP</h3>
          <ul>
            {
              help.map((item)=>(
                <li className='my-[15px] text-body-sm md:text-body opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>

          </div>
          <div>
          <h3 className='text-subtitle-sm md:text-subtitle font-bold mb-[26px] '>FAQ</h3>
          <ul>
            {
              faq.map((item)=>(
                <li className='my-[15px] text-body-sm md:text-body opacity-60'><a href={item.link}>{item.text}</a></li>

              ))
            }

            </ul>
          </div>
          <div>
          <h3 className='text-subtitle-sm md:text-subtitle font-bold mb-[26px] '>RESOURCES</h3>
          <ul>
            {
              resources.map((item)=>(
                <li className='my-[15px] text-body-sm md:text-body opacity-60'><a href={item.link}>{item.text}1</a></li>

              ))
            }

            </ul>
          </div>
        </Flex>
        <hr className='mt-[50px] mb-[25px] opacity-10' />
        <Flex className="justify-center flex-col md:flex-row md:justify-between gap-y-5 md:gap-y-0">
          <p className='opacity-60 text-body-sm md:text-body'>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="cards">
            <Flex className='justify-end gap-x-3'>
              <FaCcVisa className='text-[26px]'/>
              <RiMastercardFill className='text-[26px]'/>
              <FaCcPaypal className='text-[26px]'/>
              <FaApplePay className='text-[26px]'/>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer