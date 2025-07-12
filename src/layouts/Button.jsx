import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={` px-[67px] rounded-[62px] py-[15px] text-white border hover:border-black hover:bg-transparent hover:text-black cursor-pointer bg-black font-secondary text-body ${className}`}>{children}</button>
  )
}

export default Button