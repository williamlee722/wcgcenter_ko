import './home.css';
import React from 'react'
import ImageSlider from '../components/imageslider';

function Home() {
    const slides = [
        { url: "http://localhost:3000/slider1.jpg"},
        { url: "http://localhost:3000/slider2.jpg"},
        { url: "http://localhost:3000/slider3.jpg"},
    ];
    const containerStyles = {
        width: "1550px",
        height: "460px",
        margin: "0 auto",
      };
    return (
        <div className='home'>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <div className='container'>
                <div className='row2'>
                    <div className='box1'>
                        <span className='box-title'>병원소개</span>
                        <p className='box-decs'>윌셔심장내과그룹은 심장내과 전문팀이 운영하는 심장내과 전문클리닉입니다. 윌셔심장내과그룹은 환자의 치료에 중점을 두며, 팀워크, 비전, 그리고 정확한 치료를 위해 학문적 탐구 및 연구의 실제 적용을 통해 달성할 수 있는 최상의 결과를 위해 노력합니다.</p>
                    </div>
                    <div className='box2'>
                        <span className='box-title'>의료진</span>
                        <p className='box-decs'>윌셔심장내과그룹은 심장내과 전문팀이 운영하는 심장내과 전문클리닉입니다. 윌셔심장내과그룹은 환자의 치료에 중점을 두며, 팀워크, 비전, 그리고 정확한 치료를 위해 학문적 탐구 및 연구의 실제 적용을 통해 달성할 수 있는 최상의 결과를 위해 노력합니다.</p>
                    </div>
                    <div className='box3'>
                        <span className='box-title'>하지정맥류</span>
                        <p className='box-decs'>윌셔심장내과그룹은 심장내과 전문팀이 운영하는 심장내과 전문클리닉입니다. 윌셔심장내과그룹은 환자의 치료에 중점을 두며, 팀워크, 비전, 그리고 정확한 치료를 위해 학문적 탐구 및 연구의 실제 적용을 통해 달성할 수 있는 최상의 결과를 위해 노력합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home