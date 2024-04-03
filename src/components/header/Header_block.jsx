import React from 'react'
import Container from '../../Container'
import { TypeAnimation } from 'react-type-animation';


const Header_block = () => {


  return (
    <div className='head_block w-full h-[80vh]'>
            <Container>
            <div className='head_block_item w-full h-full flex flex-col justify-center'> 
                    <img className='w-[300px] ' src="./icons/logo.svg" alt="" />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Kurslar: Web Dasturlash',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Kurslar: Kompyuter Savotxonligi',
                            2000,
                            'Kurslar: Kompyuter Mutaxasisi',
                            2000,
                            
                        ]}
                        className='text-[#01fe87] font-bold uppercase'
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                        <h2 className='text-3xl text-white font-bold'>QUMQO'RG'ONDA</h2>
                        <p className='text-2xl text-white py-3'>Kelajag shu yerdan boshlanadi!</p>
                        <a href="#courses" className='w-[200px]'>
                           <button className='bg-[#01fe87] w-[200px] p-4 rounded-md mt-5 uppercase font-bold hover:bg-[#38f89e]'>Kursni tanlash</button>
                        </a>
                    </div>

            </Container>
    </div>
  )
}

export default Header_block