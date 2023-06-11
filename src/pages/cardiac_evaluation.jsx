import React from 'react';
import './sidebar.css';
import './procedure.css';
import cadiacCatheterizationImg from '../images/cadiacCatheterization.JPG';
import { useTranslation, Trans } from 'react-i18next';

function CardiacEvaluation() {
    const { t } = useTranslation(); 
  return (
    <div className='procedure'>
        <div className='container'>
            <div className='body'>
                <div className='sidebar'>
                    <div className='sidebar-container'>
                        <div className='sidebar-body'>
                            <div className='topline'></div>
                            <p className='title'>{t('sidebar.procedure.name')}</p>
                        </div>
                        <div className='item'>
                            <ul>
                                <li><a href='/procedure/cardiac_catheterization'><Trans i18nKey='sidebar.procedure.angiogram' components={{1:<br/>}}/></a></li>
                                <li className='active'>{t('sidebar.procedure.cardiacEvaluation')}</li>
                                <li><a href='/procedure/carotid_duplex_scan'>{t('sidebar.procedure.carotidDuplexScan')}</a></li>
                                <li><a href='/procedure/echocardiogram'>{t('sidebar.procedure.echocardiogram')}</a></li>
                                <li><a href='/procedure/electrocardiogram'>{t('sidebar.procedure.electrocardiogram')}</a></li>
                                <li><a href='/procedure/exercise_treadmill_test'>{t('sidebar.procedure.exerciseTreadmillTest')}</a></li>
                                <li><a href='/procedure/holter_monitor_study'>{t('sidebar.procedure.holterMonitorStudy')}</a></li>
                                <li><a href='/procedure/nuclear_stress_test'>{t('sidebar.procedure.nuclearStressTest')}</a></li>
                                <li><a href='/procedure/stent'>{t('sidebar.procedure.stent')}</a></li>                               
                            </ul>
                        </div>
                        <div className='info-box'>
                            <p className='box-title'>{t('sidebar.title')}</p>
                            <p className='box-num'><a href='tel:+12133878000'>&#40;213&#41; 387-8000</a></p>
                            <p className='box-mail'><a href='mailto:info@wcgcenter.com'>info@wcgcenter.com</a></p>
                        </div>
                    </div>
                </div>
                <div className='body-main'>
                    <div className='main-container'>
                        <div className='main-body'>
                            <p><span className='title'>{t('sidebar.procedure.name')}</span></p>
                            <div className='encyclopedia'>
                                <p className='encyclopedia-title'><span>{t('procedure.cardiacEvaluation.ko')}</span><br/><span>{t('procedure.cardiacEvaluation.en')}</span></p>
                                <div className='encyclopedia-body'>
                                    <img className='procedure-img' src={cadiacCatheterizationImg} alt='cardiac catheterization procedure'/>
                                    <p><span>{t('procedure.cardiacEvaluation.desc1')}</span><br/><span>{t('procedure.cardiacEvaluation.desc2')}</span></p>
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

export default CardiacEvaluation