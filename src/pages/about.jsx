import React from 'react';
import './about.css';
import './sidebar.css';
import aboutWCG from '../images/about.jpg';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
  return (
    <div className='about'>
        <div className='container'>
            <div className='body'>
                <div className='sidebar'>
                    <div className='sidebar-container'>
                        <div className='sidebar-body'>
                            <div className='topline'></div>
                            <p className='title'>{t('about.title')}</p>
                        </div>
                        <div className='item'>
                            <ul>
                                <li className='active'>{t('nav.aboutus')}</li>
                                <li><a href='/physician/steve'>{t('nav.physician')}</a></li>
                                <li><a href='/'>{t('nav.service')}</a></li>
                                <li><a href='/'>{t('nav.patient')}</a></li>
                                <li><a href='/'>{t('nav.contact')}</a></li>
                            </ul>
                        </div>
                        <div className='info-box'>
                                <p className='box-title'>{t('sidebar.infoBox')}</p>
                                <p className='box-num'><a href='tel:+12133878000'>&#40;213&#41; 387-8000</a></p>
                                <p className='box-mail'><a href='mailto:info@wcgcenter.com'>info@wcgcenter.com</a></p>
                        </div>  
                    </div>
                </div>
                <div className='body-main'>
                    <div className='main-container'>
                        <div className='main-body'>
                            <img src={aboutWCG} alt='aboutWCG'/>
                            <p className='about-title'><span className='about-title-wcg' style={{fontWeight: 700}}><span style={{color: "rgb(238, 63, 51)"}}>{t('about.title1')}</span><span style={{color: "rgb(2,69,124)"}}>{t('about.title2')}</span></span><br/><span style={{fontSize: "1.4em", fontWeight: 100}}>{t('about.title3')}</span></p>
                            <div className='about-text' style={{lineHeight: 1.5}}>
                                <p><span>{t('about.text1')}</span></p>
                                <p><span>{t('about.text2')}</span></p>
                                <p><span>{t('about.text3')}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About