import React from 'react'
import HeroImg from "../assets/Thesis-pana.svg"
const Hero = () => {
  return (
   
        <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                <h1>制作物一覧</h1>
                    <h4>
                        作ったものを紹介しています。
                    </h4>
                </div>
                <div className="img-container">
                    <img src={HeroImg} alt="hero" className="hero-img" />
                </div>
            </div>
        </section>
    
  )
}

export default Hero