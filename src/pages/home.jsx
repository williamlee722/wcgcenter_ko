import './home.css';
import React from 'react'
import Carousel from '../components/carousel'

function Home() {
    return (
        <div className='home'>
            <div className='row1'>
                <Carousel/>
            </div>
            <div className='container'>
                <div className='row2'>
                    <div className='box1'>
                        <span className='box-title'>병원소개</span>
                        <p className='box-desc'><span>윌셔심장내과그룹은 심장내과</span><br/><span>전문팀이 운영하는 심장내과</span><br/><span>전문클리닉입니다.</span></p>
                        <a className='more-button' href=''>더보기</a>
                    </div>
                    <div className='box2'>
                        <span className='box-title'>검사안내</span>
                        <p className='box-desc'><span><a className='treat-link' href='/'>심도자&#40;카테타&#41;술/심혈관조영술</a></span><br/><span><a className='treat-link' href='/'>심장 검사/평가</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a className='treat-link' href='/'>경동맥 검사</a></span><br/><span><a className='treat-link' href='/'>심장초음파검사</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a className='treat-link' href='/'>심전도검사</a></span></p>
                        <a className='more-button' href=''>더보기</a>
                    </div>
                    <div className='box3'>
                        <span className='box-title'>보험안내</span>
                        <p className='box-desc'><span>진료 예약시 보험을 확인해주시면 감사하곘습니다.</span><br/><span>환자 동의서가 필요합니다.</span></p>
                        <a className='hmo-button' href=''>HMO</a>
                        <a className='ppo-button' href=''>PPO</a>
                    </div>
                    <div className='box4'>
                        <span className='box-title'>진료안내</span>
                        <p className='box-desc'>윌셔심장내과그룹은 심장</p>
                    </div>
                </div>
                <div className='row3'>
                    <div className='physician'>
                        <div className='physicianIntro'>
                            <span className='title'>의료진 소개</span>
                            <p className='desc'>정밀하고 정확한 진단으로<br/>환자의 건강을 치료 하겠습니다.</p>
                            <a className='steve-button' href=''>심장내과 전문의</a>
                            <a className='dohee-button' href=''>핵의학 전문의</a>
                        </div>
                    </div>
                    <div className='box5'>
                        <span className='box-title'>문의 안내</span>
                        <p className='box-num'><a href='tel:+12133878000'>&#40;213&#41; 387-8000</a></p>
                        <p className='box-mail'><a href='mailto:info@wcgcenter.com'>info@wcgcenter.com</a></p>
                        <p className='box-desc'>진료 예약 및 기타 문의 사항은 전화로 상담 해주시면 신속히<br/>답변해 드리겠습니다.</p>
                    </div>
                    <div className='box6'>
                        <span className='box-title'>오시는 길</span>
                        <div className='map-container'>
                            <a className='map-button' href='https://goo.gl/maps/TBGL2epcSmHcntdLA' target="_blank" rel="noopener noreferrer">Google Maps</a>
                        </div>
                    </div>
                </div>
                <div className='row4'></div>
            </div>
        </div>
    )
}

export default Home