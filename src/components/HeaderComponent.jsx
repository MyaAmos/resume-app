import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <div>
        <nav className='navbar navbar-expand navbar-light navi-bar'>
            <a className='navbar-brand brand' href='https://www.linkedin.com/in/mya-amos-1305291bb/' target="_blank" rel="noopener noreferrer">Mya Amos</a>

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