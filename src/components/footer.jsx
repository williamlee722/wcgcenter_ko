import './footer.css';
import React from 'react'
import ACR from '../images/ACR.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='title'>
        <span className='logo'>wilshire caridiology group</span>
          <ul>
            <li><a href='/'>Location</a></li>
            <li><a href='/'>Sitemap</a></li>
            <li><a href='/'>English</a></li>
          </ul>
      </div>
      <div className='container'>
        <div className='creditation'>
          <img src={ACR} alt='acr accreditation'></img>
        </div>
        <div className='info'>
          <span className='address'>주소: <a href='https://goo.gl/maps/TBGL2epcSmHcntdLA' target="_blank" rel="noreferrer">500 S. Virgil Ave. Suite 200, Los Angeles, CA 90020</a></span>
          <span className='number'>전화: <a href='tel:+12133878000'>+1 &#40;213&#41; 387-8000</a></span>
        </div>
        <p><span className='copyright'>&copy; Copyright 2023 Wilshire Cardiology Group.</span>&nbsp;<span className='allrights'>All Rights Reserved.</span></p>
      </div>
    </div>
  )
}

export default Footer