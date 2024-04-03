import './App.css'

import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import CourseInfo from './components/course_info/CourseInfo'
import List from './components/user_lists/List'
 
function App() {
  

  return (
    <div >
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/course_detail" element={<CourseInfo/>} />
          <Route path="/lists" element={<List/>} />
      </Routes>
      
    </div>
  )
}

export default App
