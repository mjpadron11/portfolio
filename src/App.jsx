import React from 'react'
import './styles.css'
import About from "/src/components/About"
import Contact from '/src/components/Contact'
import Navbar from "/src/components/Navbar"
import Presentation from '/src/components/Presentation'
import Recentwork from "/src/components/Recentwork"
import Social from "/src/components/Social"
import MainWrapper from '/src/components/MainWrapper'
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
