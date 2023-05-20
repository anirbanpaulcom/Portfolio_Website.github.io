import { useState } from 'react'
import { faNodeJs, faCss3, faHtml5,faReact, faGithub, } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faC } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useState(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am an ambitious web developer, determined to excel in the IT industry by leveraging my skills to tackle complex projects using the latest technologies.          </p>
          <p align="LEFT">
          My expertise spans across a wide range of FullStack development technologies, including HTML, CSS, JavaScript, React, Node.JS, Express, and MongoDB. Additionally, I possess a solid understanding of other crucial concepts such as Operating Systems, Object-Oriented Programming, Database Management Systems, Data Structures, Algorithms, as well as version control with Git and GitHub. In addition, I have acquired considerable knowledge in programming languages such as C and C++. Furthermore, I am proficient in various Microsoft Office applications like MS Word, MS Excel, and PowerPoint.
          </p>
          <p>
          As an individual, I pride myself on being hardworking, possessing excellent communication skills, and being adaptable to different environments. I quickly adapt to new challenges and consider myself a fast learner, consistently seeking opportunities to expand my knowledge and skill set.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faC} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About