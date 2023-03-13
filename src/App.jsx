import React from 'react'
import './styles.css'
import About from "./components/About"
import Contact from './components/Contact'
import Navbar from "./components/Navbar"
import Presentation from './components/Presentation'
import Recentwork from "./components/Recentwork"
import Social from "./components/Social"
import MainWrapper from './components/MainWrapper'
import Wrapper from './components/Wrapper'

export default function App() {

  return (
    <MainWrapper>
      <Navbar />
      <Presentation />
      <About />
      <Recentwork />
      <Contact />
      <Social />
    </MainWrapper>
  )
}
