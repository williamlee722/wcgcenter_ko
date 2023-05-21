import './footer.css';
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='info'>
                <span className='address'>주소: <a href='https://goo.gl/maps/TBGL2epcSmHcntdLA' target="_blank" rel="noreferrer">500 S. Virgil Ave. Suite 200, Los Angeles, CA 90020</a></span>
                <span className='number'>전화: <a href='tel:+12133878000'>+1 &#40;213&#41; 387-8000</a></span>
            </div>
            <p className='copyright'>&copy; Copyright 2023 Wilshire Cardiology Group. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer