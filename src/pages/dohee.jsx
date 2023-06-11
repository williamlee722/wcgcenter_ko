import React from 'react'
import './physician.css'
import './sidebar.css';
import { useTranslation } from 'react-i18next';

function Dohee() {
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
                                <li><a href='/physician/steve'>{t('sidebar.physician.steve')}</a></li>
                                <li className='active'>{t('sidebar.physician.dohee')}</li>
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
                            <p><span className='name'>{t('physician.dohee.name')}</span><span className='title'>{t('physician.dohee.title')}</span><span className='dept'>{t('physician.dohee.position')}</span></p>
                            <div className='biography'>
                                <div className='dohee'/>
                                <div className='portfolio'>
                                <table>
                                    <thead><tr><td colSpan={2}>{t('physician.row1')}</td></tr></thead>
                                    <tbody>
                                        <tr><td>{t('physician.dohee.bio1')}</td></tr>
                                        <tr><td>{t('physician.dohee.bio2')}</td></tr>
                                        <tr><td>{t('physician.dohee.bio3')}</td></tr>
                                        <tr><td>{t('physician.dohee.bio4')}</td></tr>
                                        <tr><td>{t('physician.dohee.bio5')}</td></tr>
                                    </tbody>
                                    <thead><tr><td colSpan={2}>{t('physician.row2')}</td></tr></thead>
                                    <tbody>
                                        <tr><td>The clinical impact of intravenous contrast enhanced diagnostic CT scan in patients with neoplastic disease in comparison with PET/CT imaging</td></tr>
                                        <tr><td>Use of SPECT vs STECT/CT in the evaulation of parathyroid adenomas</td></tr>
                                        <tr><td>The effects of chemotherapy in the brain metabolism of F18-FDG in patients with head and neck cancers</td></tr>
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

export default Dohee