import React from 'react'
import './notfound.css'

function NotFound() {
  return (
    <div className='notfound'>
        <div className='notfound-container'>
            <div className='notfound-logo'/>
            <div className='notfound-body'>
                <div className='warning'/>
                <p className='title'><span>Page Not Found</span><br/><span style={{fontSize: ".8em"}}>패이지를 찾을 수 없습니다</span></p>
                <p className='title-body'><span>The page you are looking for does not exist.</span><br/><span>페이지가 존재하지 않거나 찾을 수 없습니다.</span></p>
            </div>
        </div>
        <a className='notfound-home' href='/'>BACK TO HOME</a>
    </div>
  )
}

export default NotFound