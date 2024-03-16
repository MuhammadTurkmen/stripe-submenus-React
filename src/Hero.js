import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return <section className='hero'>
    <div className="hero-center">
      <article></article>
    </div>
  </section>
}

export default Hero
