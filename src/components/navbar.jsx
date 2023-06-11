import './navbar.css';
import React from 'react'
import { useEffect, useState } from 'react';
import AppLogo from '../images/app_logo.svg';
import AppLogoM from '../images/app_logo_mobile.svg';
import steve from '../images/steveProfile.png';
import dohee from '../images/doheeProfile.png';
import hand from '../images/hand.jpg';
import {Fade as Hamburger} from 'hamburger-react';

import { useTranslation } from 'react-i18next';

var style_nav;

function NavBar() {
  const { t, i18n } = useTranslation();

  const [isOpen, setOpen] = useState(false);
  
  if(isOpen === false){
    style_nav ="hide-nav mobile-nav-area";
  }else{
    style_nav ="show-nav mobile-nav-area";
  }

  const [style1, setStyle1] = useState("hide");
  const changeStyle1 = () => {  
    if(style1==="hide"){
      setStyle1("show");
    } else{
      setStyle1("hide");
    }
  };

  const [style2, setStyle2] = useState("hide");
  const changeStyle2 = () => {  
    if(style2==="hide"){
      setStyle2("show");
    } else{
      setStyle2("hide");
    }
  };

  const [style3, setStyle3] = useState("hide");
  const changeStyle3 = () => {  
    if(style3==="hide"){
      setStyle3("show");
    } else{
      setStyle3("hide");
    }
  };

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
              <li><a href='/sitemap'>Sitemap</a></li>
              {/* <li><button type='submit' onClick={() => i18n.changeLanguage('ko')}>hi</button></li> */}
              <li><div className='lang-dropdown-button'>Language &#x25BE;
                <div className='lang-dropdown-area'>
                  <ul>
                    <li onClick={() => i18n.changeLanguage('en')}>English</li>
                    <li onClick={() => i18n.changeLanguage('ko')}>Korean</li>
                  </ul>
                </div>
              </div></li>
            </ul>
        </div>
        <div className={`main ${show && 'main_show'}`}>
          <a href='/'><img className='applogo' alt='WCG logo' src={AppLogo}></img></a>
          <div>
            <ul className='navbar'>
              <li><a className='navlink' href='/about'>{t('nav.aboutus')}</a></li>
              <div className='dropdown'>
                <li><div className='dropdown-button'>{t('nav.physician')}
                  <div className={`dropdown-container ${show && 'dropdown-container_show'}`}>
                    <div className={`dropdown-area ${show && 'dropdown-area_show'}`}>
                      <div className='dropdown-col'>
                        <div className='description'>
                          <a className='avatar' href='/physician/steve'>
                            <p><img src={steve} alt='steve'></img><br/><span className='name'>{t('nav.steve.name')} </span><span className='title'>{t('nav.steve.title')}</span><br/><span className='position'>{t('nav.steve.position')}</span></p>
                          </a>
                          <p className='biography'><span>{t('nav.steve.bio1')}</span><br/><span>{t('nav.steve.bio2')}</span><br/>{t('nav.steve.bio3')}<br/>{t('nav.steve.bio4')}</p>
                          <a className='avatar' href='/physician/dohee'>
                            <p><img style={{height: 235, marginTop: -6}} src={dohee} alt='dohee'></img><br/><span className='name'>{t('nav.dohee.name')} </span><span className='title'>{t('nav.dohee.title')}</span><br/><span className='position'>{t('nav.dohee.position')}</span></p>
                          </a>
                          <p className='biography'><span>{t('nav.dohee.bio1')}</span><br/><span>{t('nav.dohee.bio2')}</span><br/>{t('nav.dohee.bio3')}<br/>{t('nav.dohee.bio4')}</p>
                        </div></div></div></div></div>              
                </li>
              </div>
              <div className='dropdown'>
                <li><div className='dropdown-button'>{t('nav.service')}
                <div className={`dropdown-container ${show && 'dropdown-container_show'}`}>
                    <div className={`dropdown-area ${show && 'dropdown-area_show'}`}>
                      <div className='dropdown-col'>
                        <div className='description'>
                          <div className='treat-ad'>
                            <img src={hand} alt='ad'></img>
                          </div>
                          <div className='treat'>
                            <p>{t('nav.symptom.name')}</p>
                            <ul>
                              <li><a href='/symptom/angina'>{t('nav.symptom.angina')}</a></li>
                              <li><a href='/symptom/antiplatelet_therapy'>{t('nav.symptom.antiplateletTherapy')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.arrhythmia')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.congestiveHeartFailure')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.coronaryArteryDisease')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.hypertensionHypotension')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.hypercholesterolemia')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.syncope')}</a></li>
                              <li><a href='/symptom/'>{t('nav.symptom.varicoseVein')}</a></li>
                            </ul>
                          </div>
                          <div className='test'>
                            <p>{t('nav.procedure.name')}</p>
                            <ul>
                              <li><a href='/procedure/cardiac_catheterization'>{t('nav.procedure.angiogram')}</a></li>
                              <li><a href='/'>{t('nav.procedure.cardiacEvaluation')}</a></li>
                              <li><a href='/'>{t('nav.procedure.carotidDuplexScan')}</a></li>
                              <li><a href='/'>{t('nav.procedure.echocardiogram')}</a></li>
                              <li><a href='/'>{t('nav.procedure.electrocardiogram')}</a></li>
                              <li><a href='/'>{t('nav.procedure.exerciseTreadmillTest')}</a></li>
                              <li><a href='/'>{t('nav.procedure.holterMonitorStudy')}</a></li>
                              <li><a href='/'>{t('nav.procedure.nuclearStressTest')}</a></li>
                              <li><a href='/'>{t('nav.procedure.stent')}</a></li>
                            </ul>
                          </div></div></div></div></div></div>              
                </li>
              </div>
              <div className='dropdown'>
                <li><div className='dropdown-button'>{t('nav.patient')}
                <div className={`dropdown-container ${show && 'dropdown-container_show'}`}>
                    <div className={`dropdown-area ${show && 'dropdown-area_show'}`}>
                      <div className='dropdown-col'>
                        <div className='description'>
                          <div className='new'>
                            <p>초기방문</p>
                            <ul>
                              <li><a href='/'>예약 안내</a></li>
                              <li><a href='/'>준비물</a></li>
                            </ul>
                            <p>처방안내</p>
                            <ul>
                              <li><a href='/'>처방 안내</a></li>
                            </ul>
                          </div>
                          <div className='contract'>
                            <p>접수가능보험</p>
                            <ul>
                              <li><a href='/'>메디케어</a></li>
                              <li><a href='/'>HMO보험</a></li>
                              <li><a href='/'>PPO보험</a></li>
                            </ul>
                            <p>HMO보험</p>
                            <ul>
                              <li><a href='/'>초기진료승인절차</a></li>
                              <li><a href='/'>다음진료승인절차</a></li>
                            </ul>
                          </div>
                          <div className='consent'>
                            <p>동의서/안내서</p>
                            <ul>
                              <li><a href='/'>핵의학 검사 안내서</a></li>
                              <li><a href='/'>정맥 항혈소판요법 동의서</a></li>
                              <li><a href='/'>운동 부하 검사 안내서</a></li>
                              <li><a href='/'>초음파 검사 안내</a></li>
                              <li><a href='/'>순환기내과 검사 안내</a></li>
                              <li><a href='/'>심도자(카테타)술 안내</a></li>
                            </ul>
                          </div>
                          <div className='patient-ad'>
                            <img src={hand} alt='ad'></img>
                          </div></div></div></div></div></div>              
                </li>
              </div>
              <li><a className='navlink' href='/'>{t('nav.contact')}</a></li>
            </ul>
          </div>
        </div>
      </nav>


      <div className='mobile'>
        <div className='mobile-nav'>
          <a className='mobile-logo' href='/'><img src={AppLogoM} alt='app-logo'/></a>
          <div className='hamburger'><Hamburger color='white' direction='left' size={25} toggled={isOpen} toggle={setOpen} /></div>
        </div>
        <div className={style_nav}>
          <ul>
          <li><a href='/about'>{t('nav.aboutus')}</a></li>
            <li className='mobile-nav-header1' onClick={changeStyle1}>{t('nav.physician')}</li>
            <div className={style1}>
              <ol>
                <li><a href='/physician/steve'>스티브 박 전문의 | 심장내과</a></li>
                <li><a href='/physician/dohee'>김도희 전문의 | 핵의학</a></li>
              </ol>
            </div>
            <li className='mobile-nav-header2' onClick={changeStyle2}>질환 및 검사</li>
            <div className={style2}>
              <div className='nav-group2'>
              <ol>
                <li style={{fontSize:"1.2em", fontWeight:700, paddingBottom:"10px"}}>질환</li>
                <li><a href='/symptom/angina'>협심증</a></li>
                <li><a href='/'>항혈소판요법</a></li>
                <li><a href='/'>부정맥</a></li>
                <li><a href='/'>울혈성 심부전</a></li>
                <li><a href='/'>관상동맥질환</a></li>
                <li><a href='/'>고혈압/저혈압</a></li>
                <li><a href='/'>고콜레스테롤혈증</a></li>
                <li><a href='/'>심장신경성 실신</a></li>
                <li><a href='/'>하지정맥류</a></li>
              </ol>
              <ol>
              <li style={{fontSize:"1.2em", fontWeight:700, paddingBottom:"10px"}}>검사</li>
                <li><a href='/procedure/cardiac_catheterization'>심도자(카테타)술/심혈관조영술</a></li>
                              <li><a href='/'>심장 검사/평가</a></li>
                              <li><a href='/'>경동맥 검사</a></li>
                              <li><a href='/'>심장초음파검사</a></li>
                              <li><a href='/'>심전도 검사</a></li>
                              <li><a href='/'>운동 부하 검사</a></li>
                              <li><a href='/'>순환기내과 검사</a></li>
                              <li><a href='/'>스텐트 시술</a></li>
              </ol>          
              </div>
            </div>
            <li className='mobile-nav-header2' onClick={changeStyle3}>진료 및 보험</li>
            <div className={style3}>
              <div className='nav-group2'>
              <ol>
                <li style={{fontSize:"1.2em", fontWeight:700, padding:"10px 20px"}}>초기방문</li>
                  <li><a href='/'>예약 안내</a></li>
                  <li><a href='/'>준비물</a></li>
                <li style={{fontSize:"1.2em", fontWeight:700, padding:"10px 20px"}}>HMO보험</li>
                  <li><a href='/'>초기진료승인절차</a></li>
                  <li><a href='/'>다음진료승인절차</a></li>
                  <li><a href='/'>HMO 접수가능보험</a></li>
                <li style={{fontSize:"1.2em", fontWeight:700, padding:"10px 20px"}}>접수가능보험</li>
                  <li><a href='/'>메디케어</a></li>
                  <li><a href='/'>HMO보험</a></li>
                  <li><a href='/'>PPO보험</a></li>
              </ol>
              <ol>
                <li style={{fontSize:"1.2em", fontWeight:700, padding:"10px 20px"}}>처방안내</li>
                  <li><a href='/'>처방 안내</a></li>
                <li style={{fontSize:"1.2em", fontWeight:700, padding:"10px 20px"}}>동의서/안내서</li>
                  <li><a href='/'>핵의학 검사 안내서</a></li>
                  <li><a href='/'>정맥 항혈소판요법 동의서</a></li>
                  <li><a href='/'>운동 부하 검사 안내서</a></li>
                  <li><a href='/'>초음파 검사 안내</a></li>
                  <li><a href='/'>순환기내과 검사 안내</a></li>
                  <li><a href='/'>심도자(카테타)술 안내</a></li>
              </ol>          
              </div>
            </div>
            <li><a href='/'>연락처</a></li>
          </ul>
          <ul className='mobile-footer-nav'>
            <li><a onClick={() => i18n.changeLanguage('en')}>English</a></li>
            <li><a onClick={() => i18n.changeLanguage('ko')}>Korean</a></li>
            <li><a href='/'>Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar