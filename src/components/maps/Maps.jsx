import React from 'react'

const Maps = () => {
  return (
    <div className='relative h-[70vh] z-20'>
        <h1 className='text-3xl font-bold  text-center p-5 uppercase text-green-500'>Bizning Manzil Xarita Bo'yicha</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.6449849517658!2d67.58057756002127!3d37.83704855199938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b559ae078974b3%3A0x80261b021e468e13!2sUztelecom!5e1!3m2!1suz!2s!4v1711990400687!5m2!1suz!2s" width={"100%"} height={"500px"} allowFullScreen="" loading="lazy" ></iframe>
        <div className='absolute right-52 flex gap-4 justify-center flex-col items-center p-6 bottom-0 w-[400px] h-[80%] bg-green-600 rounded-3xl'>
                <img className='w-[300px]' src="./icons/logo.svg" alt="" />
                <h2 className='text-2xl text-white font-bold mt-9 uppercase'>IT CENTER Qumqo'rg'on</h2>

                <h2 className='flex items-center text-white text-[18px]'><img className='w-[32px] mr-4' src="./maps.svg" alt="" />Uztelecom binos 1-qavat</h2>
                <h2 className='flex items-center text-white text-[18px]'><img className='w-[32px] mr-4' src="./phone.svg" alt="" />+998 (33) 257-57-67</h2>
        </div>
    </div>
  )
}

export default Maps