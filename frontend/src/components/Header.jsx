import React from 'react'
import bgImage from '../assets/banner.png'

const Header = () => {
  return (
    <header className='header'>
        <div className="bgOverlay"   
            style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="content container">
            <h1>WATCH. READ. LEARN.</h1>
            <p>Resources that help you understand, implement, and elevate every aspect of the MODJAW experience.</p>
        </div>
    </header>
  )
}

export default Header