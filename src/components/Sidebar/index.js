import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/ani.png'
import LogoSubtitle from '../../assets/images/aniletter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faDiagramProject, faEnvelope, faHome,faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const Sidebar = () => {

     const [ showNav, setShowNav ] = useState(false);


     return (
    <div className='nav-bar'> 
        <Link className='logo' to='/' onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="Logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav className= {showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/Portfolio"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon  icon={faDiagramProject} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"   onClick={() => setShowNav(false)}>
                <FontAwesomeIcon  icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className= 'close-icon' />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href= "https://www.linkedin.com/in/anirban-paul-252870238" >
                   <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href= "https://github.com/anirbanpaulin">
                   <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href= "https://instagram.com/anirbanpaul.in?igshid=YmMyMTA2M2Y=">
                   <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon onClick={ () => setShowNav(true) } icon={faBars} color="#ffd700" size="3x" className= 'menu-icon' />
    </div>
  )

}

export default Sidebar