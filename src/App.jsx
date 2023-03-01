import React from 'react'
import './styles.css'
import About from "./components/About"
// import Contact from './components/Contact'
// import Name from './components/Name'
import Navbar from "./components/Navbar"
import Presentation from './components/Presentation'
// import Recentwork from "./components/Recentwork"
// import Social from "./components/Social"

export default function App() {

  return (
    <main>
      <Navbar/>
      <Presentation/>
      <About/>
      {/* <Recentwork/> */}
      {/* <Contact/> */}
      {/* <Social/> */}
    </main>
  )
}
