import React from 'react'
import '../Styles/Home.css'
import photo from '../shivam.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home-conatiner'>
      <div className='Inner-About-container'>
        <div className='skil-box1'>
          <img src={photo} className='myphoto' />
          <div className='NameDiv'>
            <p className='demo'>
              Hii
            </p>
            <p className='names'>My name is shivam gupta</p>
            <p className='name'> Full stack developer</p>
          <p className='intro'> seeking roles to utilise my in-depth knowledge of MERN development
            and responsive designing to create exceptional interfaces and user experiences.</p>
            <div>
              <Link to="/" className='socalLink'>Linkedin</Link>
              <Link to="/" className='socalLink'>GitHub</Link>
              <Link to="/" className='socalLink'>Instragram</Link>
              <Link to="/" className='socalLink'>Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home