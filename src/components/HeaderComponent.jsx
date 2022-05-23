import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderComponent() {
  return (
    <div>
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <a className='navbar-brand' href='https://www.linkedin.com/in/mya-amos-1305291bb/'>Mya Amos</a>

            <div>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/experience'>Experience</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/education'>Education</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/aboutme'>About Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default HeaderComponent