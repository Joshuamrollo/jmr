import { FullPage, Slide } from 'react-full-page';
import { nav, projects } from './items';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="app">
      <Helmet><title>Joshua Rollo</title></Helmet>
    <FullPage>
      <navbar className='nav'>
        {nav.map((item, idx) => {
          return <Link className='nav-item hover-underline-animation' activeClass='active' to={item.path} spy={true} smooth={true} offset={0} duration={500} key={idx}>{item.name}</Link>
        })}
      </navbar>
      <Slide>
      <section className='page-1'>
        <div className='container'>
          <div className='page-1-content'>
            <h10>Hey, my name is</h10>
            <h1>Joshua Rollo.</h1>
            <p className='page-1-p'>I am a software developer that is passionate about creating quality websites, applications, and everything in between.</p>
          </div>
        </div>
      </section>
      </Slide>
      <Slide>
      <section className='page-2'>
        <div className='container'>
          <div className='page-2-content'>
            <h2>About Me</h2>
            <p> 
              Hello, my name is Joshua Rollo. After being introduced to programming in college I have fallen in love with it. As a soon to be graduate in May of 2022 I am now looking for employement as a software developer.
            </p>
            <p><br/>
              Along with programming, I also love to ski and climb. Skiing is my favorite activity to do when on a break, I go whenever I get the opportunity. Rock climbing is my way of having fun while also being active, and with outdoor climbing you can get some amazing views.
            </p>
          </div>
        </div>
      </section>
      </Slide>
      <Slide>
      <section className='page-3'>
        <div className='container'>
          <div className='page-3-content'>
            <h2 className='project-title'>Projects</h2>
            <div className='projects-wrapper'>
              {projects.map((project, idx) => {
                return (
                  <div className={'project ' + project.class}  key={idx}>
                    <h3 className='project-title'>{project.name}</h3>
                    <img src={project.img} alt='gif of project' className='gif' />
                    <a href={project.github}>Github</a>
                    <a href={project.url}>Website</a>
                    <p>{project.description}</p>
                  </div>
                )
              })}
              </div>
          </div>
        </div>
      </section>
      </Slide>
      <Slide>
      <section className='page-4'>
        <div className='container'>
          <div className='page-4-content'>
            <h2 className='contact-title'>Contact</h2>
              <div className='contacts'>
                <a className='contact-item' href='https://github.com/Joshuamrollo'>
                    <div className='item'><FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon></div>
                </a>
                <a className='contact-item' href='https://www.linkedin.com/in/joshua-r-25b0b5102/'>
                    <div className='item'><FontAwesomeIcon className='icon' href='#' icon={faLinkedin}></FontAwesomeIcon></div>
                </a>
                <a className='contact-item' href='mailto: joshuamrollo@gmail.com'>
                    <div className='item'><FontAwesomeIcon className='icon' href='#' icon={faEnvelope}></FontAwesomeIcon></div>
                </a>
              </div>
          </div>
        </div>
      </section>
      </Slide>
    </FullPage>
    </div>
  );
}

export default App;
