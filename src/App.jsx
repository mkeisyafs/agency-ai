import React, { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/teams'
import ContactUs from './components/ContactUs'
export const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative '>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  )
}

export default App