import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[1400px]  mx-auto h-full'>
        {children}
    </div>
  )
}

export default Container