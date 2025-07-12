import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:w-[1240px] px-2 md:px-0 mx-auto'>{children}</div>
  )
}

export default Container