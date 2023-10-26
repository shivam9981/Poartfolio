import React from 'react'
import '../Styles/Project.css'
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <div className='Education-container1'>
      <div className='Inner-Education-container1'>
        <div className='contain-Education1'>
          <div className='School_name'>
            <p>INoteBook</p>
          </div>
          <div className='School_class'>
            <p>Technology</p>
            <p>React js , Node Js , Express js , MongoDB</p>
          </div>
          <div className='School_class'>
            <p>March 2022- April 2022 </p>
          </div>
          <Link to = 'https://github.com/shivam9981/INoteBook-ReactJS/tree/main/Inotebook' className='btn' target='_blank' >Source Code</Link>
        </div>


        <div className='contain-Education1'>
          <div className='School_name'>
            <p>Profile Information</p>
          </div>
          <div className='School_class'>
            <p>Technology</p>
            <p>React js , Node Js , Express js , MongoDB</p>
          </div>
          <div className='School_class'>
            <p>Jun 2022 - July 2022 </p>
          </div>
          <Link to = 'https://github.com/shivam9981/PROFILE' className='btn' target='_blank'>Source Code</Link>
        </div>

      </div>
    </div>
  )
}

export default Project