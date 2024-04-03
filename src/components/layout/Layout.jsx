import React from 'react'
import Header_block from '../header/Header_block'
import CoursesCard from '../course/Courses.card'
import Courses from '../course/Courses'
import Maps from '../maps/Maps'
import About from '../about/About'
import Form from '../form/Form'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header_block/>
        <CoursesCard/>
        <Courses/>
        <Maps/>
        <About/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Layout