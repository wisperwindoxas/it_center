import React from 'react'
import Container from '../../Container'

const About = () => {
  return (
    <div className='w-full  py-5' id='about'>
            <Container>
                <div className='w-full h-[500px]'>
                        <h1 className='text-3xl text-green-500 font-bold text-center uppercase'>Bizinig Komanda Haqida</h1>

                        <div className='grid grid-cols-3 p-10 gap-10'>
                                <div className='h-[300px] w-[300px] '><img className='rounded-full object-cover h-[300px] w-[300px]' src="./me.jpg" alt="" />
                                <div className=' flex items-center flex-col p-4 gap-2'>
                                    <h2 className='text-[20px] font-extrabold'>Soatov Xurshid</h2>
                                    <p className='text-gray-500'>Frontend Dasturchi</p>
                                </div>
                                </div>
                                <div className='h-[300px] w-[300px] '><img className='rounded-full object-cover h-[300px] w-[300px]' src="./me.jpg" alt="" />
                                <div className=' flex items-center flex-col p-4 gap-2'>
                                    <h2 className='text-[20px] font-extrabold'>Choriev Azizi</h2>
                                    <p className='text-gray-500'>Proekt Menejer</p>
                                </div>
                                </div>
                                <div className='h-[300px] w-[300px] '><img className='rounded-full object-cover h-[300px] w-[300px]' src="./me.jpg" alt="" />
                                <div className=' flex items-center flex-col p-4 gap-2'>
                                    <h2 className='text-[20px] font-extrabold'>Qurbonnazorov Baxtiyor</h2>
                                    <p className='text-gray-500'>Web dasturchi</p>
                                </div>
                                </div>
                        </div>

                        
                </div>
            </Container>
            <div className='w-full  border flex justify-center bg-green-500 items-center gap-10 h-[300px]'>
                <img className='h-full' src="./man.png" alt="" />
                            <div>
                                <h2 className='font-bold text-3xl text-white py-5'>Biz A'lo bilim olish tarafdorimiz!</h2>
                                <p className='text-white font-bold'>Bizda hamisha guruxga 10-12 ta odam qabul qilamiz shu bilan biz ularga yuzma-yuz bo'lgan xolda ularga yaxshi va sifatli ta'lim berishga xarakat qilamiz! </p>
                            </div>
            </div>
    </div>
  )
}

export default About