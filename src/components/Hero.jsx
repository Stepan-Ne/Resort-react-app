import React from 'react';

const Hero = ({children, hero}) => {
  return (
    <header className={hero}>
      
    </header>
  )
};

Hero.defaultProps = {
  hero: 'defaultHero'
}

export default Hero
