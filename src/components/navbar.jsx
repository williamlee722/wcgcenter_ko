import './navbar.css';
import React from 'react'
import { useEffect, useState } from 'react';
import AppLogo from '../images/app_logo.svg';

function NavBar() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 26) {
      setShow(false);
    } else {
      setShow(true);
    }
  };  

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  return (
    <div>
      <nav>
        <div className={`sub ${show && 'sub_show'}`}>
            <ul>
              <li><a href='/'>Sitemap</a></li>
              <li><a href='/'>English</a></li>
            </ul>
        </div>
        <div className={`main ${show && 'main_show'}`}>
          <a href='/'><img className='applogo' alt='WCG logo' src={AppLogo}></img></a>
          <div>
            <ul className='navbar'>
              <li><a href='/'>병원소개</a></li>
              <li><a href='/'>의료진정보</a></li>
              <li><a href='/'>질환 및 검사</a></li>
              <li><a href='/'>진료 및 보험</a></li>
              <li><a href='/'>연락처</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar