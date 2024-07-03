import React,{useState} from 'react'
import Header from './HeaderComp/Header'
import Home from './HomeComp/Home'
import VideoPlayer from './VideoplayerComp/VideoPlayer'
import { Route,Routes } from 'react-router-dom'

function App() {

  const [sidebarActive,setSidebarActive] = useState(true)

  return (
    <>
      <Header sidebarMenuBtn={setSidebarActive}/>
      <Routes>
        <Route path='/' element={<Home 
            sidebarState={sidebarActive}/>}/>
        <Route path="/video/:category/:id" element={<VideoPlayer />}/>
      </Routes>
    </>
  )
}
export default App
