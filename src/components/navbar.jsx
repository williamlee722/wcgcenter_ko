import './navbar.css';
import React from 'react'
import AppLogo from '../images/app_logo.svg'

function NavBar() {
  return (
    <div>
        <nav>
            <a href='/'><img className='applogo' src={AppLogo}></img></a>
            <div>
              <ul className='navbar'>
                <li><a href='/'>병원소개</a></li>
                <li><a href='/'>의료진정보</a></li>
                <li><a href='/'>질환 및 검사</a></li>
                <li><a href='/'>진료 및 보험</a></li>
                <li><a href='/'>연락처</a></li>
              </ul>
            </div>
        </nav>
        <div className='sub'>
          <ul>
            <li><a href='/'>Sitemap</a></li>
            <li><a href='/'>English</a></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar