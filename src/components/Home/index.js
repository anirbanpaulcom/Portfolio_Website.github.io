import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
      const [letterClass, setLetterClass] = useState('text-animate')
      
      const nameArray = ['','A','n', 'i','r','b','a','n','','P','a','u','l','.']
    

      useState(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, []) 
      
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>Hello;</span>
                <span className={letterClass}></span>
                </h1>
                <h2>
                <span className={letterClass}>I’m,</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                </h2>
                <h3>developer / programmer  / designer </h3>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
           
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home