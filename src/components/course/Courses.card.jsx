import React from 'react'
import Container from '../../Container'

const CoursesCard = () => {
  return (
    <div className=''>
            <Container>
                <div className='cards grid grid-cols-3 p-5 gap-4'>
                    <div  className='h-[350px] shadow-xl rounded-md p-4'>
                        <img src="./icons/frontend.jpg" alt="" />
                        <h2 className='text-2xl font-bold'>Web Dasturlash</h2>
                        <p className='font-bold text-[14px]'>Kurs davomiyligi 8-10 Oy</p>
                    </div>
                    <div  className='h-[350px] shadow-xl rounded-md p-4'>
                     <img src="./icons/computer_learn.jpg" alt="" />
                     <h2 className='text-2xl font-bold'>Kompyuter Savotxonligi</h2>
                     <p className='font-bold text-[14px]'>Kurs davomiyligi 1-2 Oy</p>
                    </div>
                    <div  className='h-[350px] shadow-xl rounded-md p-4'>
                        <img src="./icons/computer_master.jpg" alt="" />
                        <h2 className='text-2xl font-bold '>Kompyuter Mutaxasisi</h2>
                        <p className='font-bold text-[14px]'>Kurs davomiyligi 1-2 Oy</p>
                    </div>
                   
                </div>
            </Container>
    </div>
  )
}

export default CoursesCard