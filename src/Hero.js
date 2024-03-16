import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return <section className='hero'>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>Payments infrastructure for the internet</h1>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt="phone" />
      </article>
    </div>
  </section>
}

export default Hero
