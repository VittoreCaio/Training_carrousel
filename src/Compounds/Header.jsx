import React from 'react'
// @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

const Header = () => {
  return (
    <>
    <div className='Header'>

    <a href="/"><div className='Header__leftSide'> MyCarousel</div></a>
    <div className='Header__rightSide'> 
      <a href="/"><div className='Header__rightSide__home'>Home</div></a>
      <a href="/"><div className='Header__rightSide__contact'>Contact</div></a>
      <a href="/"><div className='Header__rightSide__info'>Info</div></a>
        
    </div>
    </div>
    </>
  )
}

export default Header