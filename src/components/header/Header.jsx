import Container from '../../Container'
import { Link } from 'react-router-dom'


const Header = () => {
  
  return (
    <div className='w-full  bg-[#222840] h-[70px] fixed top-0 left-0 z-50'>
            <Container>
                    <div className='flex justify-between items-center h-full'>
                        <div className='flex items-center h-full'>
                            <Link to={"/"}><img className='w-[150px]' src="./icons/logo.svg" alt="" /></Link>
                        </div>

                        <div className='navigation flex justify-evenly items-center gap-10 text-white w-[800px]'>
                            <a  href="#">Bosh Sahifa</a>
                            <a href={"#courses"}>Kurslar</a>
                            <a href="#about">Biz Haqimizda</a>
                            <a href="/lists">Lists</a>
                            <a className='text-green-500 font-extrabold px-10' href={"#form"}>Kursga yozilish</a>
                           
                        </div>
                        <button className='w-[250px] p-2 text-white bg-green-500 rounded-lg'> <a href="#" >+998 33 257-57-67</a></button>
                    </div>
            </Container>
    </div>
  )
}

export default Header