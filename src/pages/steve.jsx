import React from 'react'
import './physician.css'
import './sidebar.css';
import { useTranslation } from 'react-i18next';

function Steve() {
    const { t } = useTranslation();
  return (
    <div className='physician'>
        <div className='container'>
            <div className='body'>
                <div className='sidebar'>
                    <div className='sidebar-container'>
                        <div className='sidebar-body'>
                            <div className='topline'></div>
                            <p className='title'>{t('nav.physician')}</p>
                        </div>
                        <div className='item'>
                            <ul>
                                <li className='active'>{t('sidebar.physician.steve')}</li>
                                <li><a href='/physician/dohee'>{t('sidebar.physician.dohee')}</a></li>
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
                            <p><span className='name'>{t('physician.steve.name')}</span><span className='title'>{t('physician.steve.title')}</span><span className='dept'>{t('physician.steve.position')}</span></p>
                            <div className='biography'>
                                <div className='steve'/>
                                <div className='portfolio'>
                                <table>
                                    <thead><tr><td colSpan={2}>{t('physician.row1')}</td></tr></thead>
                                    <tbody>
                                        <tr><td>{t('physician.steve.bio1')}</td></tr>
                                        <tr><td>{t('physician.steve.bio2')}</td></tr>
                                        <tr><td>{t('physician.steve.bio3')}</td></tr>
                                        <tr><td>{t('physician.steve.bio4')}</td></tr>
                                        <tr><td>{t('physician.steve.bio5')}</td></tr>
                                        <tr><td>{t('physician.steve.bio6')}</td></tr>
                                    </tbody>
                                    <thead><tr><td colSpan={2}>{t('physician.row2')}</td></tr></thead>
                                    <tbody>
                                        <tr><td>Use of Dipyridamole in assessing the presence and severity of myocardial ischemia, a double-blind, randomized, placebo-controlled assessment of SOULUTROBAN in prevention of restenosis following coronary angioplasty</td></tr>
                                        <tr><td>Total ischemia awareness program</td></tr>
                                        <tr><td>Acute M.I. Study: Eminase vs. TPA</td></tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steve