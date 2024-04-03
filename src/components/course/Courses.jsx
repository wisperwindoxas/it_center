import React from 'react'
import Container from '../../Container'
import Video from './Video'
import { Link } from 'react-router-dom'

const Courses = () => {



  return (
    <div className='my-[50px]' id='courses'>
          <Container>
                <div className='w-full p-5 gap-4'>
                    <Link to={"/course_detail"}>
                    <div className='w-full h-[300px] shadow-2xl flex p-5 cursor-pointer'>
                        <Video video={"./video/codeing.mp4"}/>
                        <div className='w-full h-full  flex flex-col items-center p-5'>
                            <h2 className='text-2xl font-bold text-green-500 uppercase'>Web Dasturlash</h2>
                            <p className='font-bold text-[14px] text-gray-500'>Kurs davomiyligi 8-10 Oy</p>
                            <div className='images flex gap-5 p-5'>
                                    <img  src="./courses_icons/coding/html.svg" alt="" />
                                    <img  src="./courses_icons/coding/css.svg" alt="" />
                                    <img  src="./courses_icons/coding/js.svg" alt="" />
                                    <img  src="./courses_icons/coding/sass.svg" alt="" />
                                    <img  src="./courses_icons/coding/figma.svg" alt="" />
                                    <img  src="./courses_icons/coding/nodejs.svg" alt="" />
                                    <img  src="./courses_icons/coding/react.svg" alt="" />
                                    <img  src="./courses_icons/coding/typescript.svg" alt="" />
                                    <img  src="./courses_icons/coding/nextjs.svg" alt="" />
                                    
                            </div>
                            <div className='w-full flex justify-between p-5'>
                                <button className='bg-green-500 p-3 text-white rounded-lg'>Kurs Narxi: 450-min so'm/oy</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={"/course_detail"}>
                    <div className='w-full h-[300px] shadow-2xl flex p-5 cursor-pointer'>
                    <Video video={"./video/learn.mp4"}/>
                        <div className='w-full h-full  flex flex-col items-center p-5'>
                            <h2 className='text-2xl font-bold text-green-500 uppercase'>Kompyuter Savotxonligi</h2>
                            <p className='font-bold text-[14px] text-gray-500'>Kurs davomiyligi 1-2 Oy</p>
                            <div className='images flex gap-5 p-5'>
                                    <img  src="./courses_icons/learn/keyboard.svg" alt="" />
                                    <img  src="./courses_icons/learn/word.svg" alt="" />
                                    <img  src="./courses_icons/learn/excel.svg" alt="" />
                                    <img  src="./courses_icons/learn/powerpoint.svg" alt="" />
                            </div>
                            <div className='w-full flex justify-between p-5'>
                                <button className='bg-green-500 p-3 text-white rounded-lg'>Kurs Narxi: 300-min so'm/oy</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={"/course_detail"}>
                    <div className='w-full h-[300px] shadow-2xl flex p-5 cursor-pointer'>
                    <Video video={"./video/master.mp4"}/>
                        <div className='w-full h-full  flex flex-col items-center p-5'>
                            <h2 className='text-2xl font-bold text-green-500 uppercase'>Kompyuter Mutaxasis</h2>
                            <p className='font-bold text-[14px] text-gray-500'>Kurs davomiyligi 1-2 Oy</p>
                            <div className='images flex gap-5 p-5'>
                                    <img  src="./courses_icons/master/computer.svg" alt="" />
                                    <img  src="./courses_icons/master/setting.svg" alt="" />
                                    <img  src="./courses_icons/master/motherboard.svg" alt="" />
                                    <img  src="./courses_icons/master/pass.svg" alt="" />
                                    <img  src="./courses_icons/master/driver.svg" alt="" />
                                    <img  src="./courses_icons/master/ssd.svg" alt="" />
                                    <img  src="./courses_icons/master/windows.svg" alt="" />
                                    
                            </div>
                            <div className=' w-full flex justify-between p-5'>
                                <button className='bg-green-500 p-3 text-white rounded-lg'>Kurs Narxi: 600-min so'm/oy</button>
                                
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </Container>  
    </div>
  )
}

export default Courses