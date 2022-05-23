import React from 'react'

function HeaderComponent() {
  return (
    <div>
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <a className='navbar-brand' href='#'>Mya Amos</a>

            <div>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>About Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default HeaderComponent