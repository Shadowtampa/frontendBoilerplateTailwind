import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimationRevealPage from './helpers/AnimationRevealPage'
import Hero from './components/hero/FullWidthWithImage'

function App() {

  return (
    <>
      <AnimationRevealPage>
        <Hero />

      </AnimationRevealPage>
    </>
  )
}

export default App
