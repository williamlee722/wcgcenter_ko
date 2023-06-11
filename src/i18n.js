import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
            aboutus: 'About WCG',
            physician: 'Physicians',
            service: 'Services',
            patient: 'For Patients',
            contact: 'Contact Us',
            steve: {
              name: 'Steve S. Park',
              title: 'M.D.',
              position: 'Interventional Cardiologist',
              bio1: 'WCG Director',
              bio2: 'Teaching staff White Memorial Heart Institute',
              bio3: 'Fellowship at Loma Linda University Medical Center',
              bio4: 'University of Minnesota'
            },
            dohee: {
              name: 'Do Hee Kim',
              title: 'M.D.',
              position: 'Nuclear Physician',
              bio1: 'WCG Clinical and Laboratory Nuclear Medicine Specialist',
              bio2: 'American Board of Nuclear Medicine (ABNM)',
              bio3: 'UCLA Ronald Reagan Medical Center',
              bio4: ''
            },
            symptom: {
              name: 'Symptoms',
              angina: 'Angina',
              antiplateletTherapy: 'Antiplatelet Therapy',
              arrhythmia: 'Arrhythmia',
              congestiveHeartFailure: 'Congestive Heart Failure',
              coronaryArteryDisease: 'Coronary Artery Disease',
              hypertensionHypotension: 'Hypertension/Hypotension',
              hypercholesterolemia: 'Hypercholesterolemia',
              syncope: 'Syncope',
              varicoseVein: 'Varicose Vein'
            },
            procedure: {
              name: 'Procedures',
              angiogram: 'Cardiac Catherization/Angiogram',
              cardiacEvaluation: 'Cardiac Evaluation',
              carotidDuplexScan: 'Carotid Duplex Scan',
              echocardiogram: 'Echocardiogram',
              electrocardiogram: 'Electrocardiogram (EKG)',
              exerciseTreadmillTest: 'Exercise Treadmill Test (ETT)',
              holterMonitorStudy: 'Holter Monitor Study',
              nuclearStressTest: 'Nuclear Stress Test',
              stent: 'Stent'
            },
            firstVisit: {
              name: 'First Visit',
              item1: 'Making Appointment',
              item2: 'What to Bring'
            },
            prescription: {
              name: 'Prescription',
              item1: 'Prescription Guide'
            },
            hmoPatient: {
              name: 'HMO Patients',
              item1: 'Authorization',
              item2: 'Processing authorization for next visit',
            }
          },
          sidebar: {
            infoBox: 'Contact WCG',
            physician:{
              steve: 'Cardiologist',
              dohee: 'Nuclear Physician'
            },
            symptom: {
              name: 'Symptoms',
              angina: 'Angina',
              antiplateletTherapy: 'Antiplatelet Therapy',
              arrhythmia: 'Arrhythmia',
              congestiveHeartFailure: 'Congestive Heart Failure',
              coronaryArteryDisease: 'Coronary Artery Disease',
              hypertensionHypotension: 'Hypertension/Hypotension',
              hypercholesterolemia: 'Hypercholesterolemia',
              syncope: 'Syncope',
              varicoseVein: 'Varicose Vein'
            },
            procedure: {
              name: 'Procedures',
              angiogram: 'Cardiac Catherization/<1/>Angiogram',
              cardiacEvaluation: 'Cardiac Evaluation',
              carotidDuplexScan: 'Carotid Duplex Scan',
              echocardiogram: 'Echocardiogram',
              electrocardiogram: 'Electrocardiogram (EKG)',
              exerciseTreadmillTest: 'Exercise Treadmill Test (ETT)',
              holterMonitorStudy: 'Holter Monitor Study',
              nuclearStressTest: 'Nuclear Stress Test',
              stent: 'Stent'
            },
          },
          home: {
            box1: {
              title: 'About WCG',
              description1: 'A dedicated heart clinic',
              description2: 'run by a multi-disciplinary',
              description3: 'team of cardiac professionals',
              button: 'More'
            }
          },
          about: {
            title: 'About WCG',
            title1: 'WELCOME TO ',
            title2: 'WILSHIRE CARDIOLOGY GROUP',
            title3: 'A dedicated heart clinic run by cardiac professionals',
            text1: 'Wilshire Cardiology Group offers a comprehensive cardiology assessment including treatments of a full range of cardiovascular disorders and diseases such as angina, antiplatelet therapy, arrhythmia, congestive heart failure, lipid disorders, coronary artery disease, hypertension, hypercholesterolemia, and syncope. We use the latest innovations in the health care industry.',
            text2: 'Wilshire Cardiology Group is equipped with state-of-the-art cardiac diagnostic technologies in order to provide the best medial care to the patients. The staff is regularly updated and trained in the latest developments in cardiac care. The services rendered by WCG include Cardiac Cathetherization / Angiogram, Cardiac Evaluation, Carotid Duplex Scan, Echocardiogram, Electrocardiogram (EKG), Electrophysiology Study, Exercise Treadmill Test (ETT/Stress Test), Holter Monitor Study, Event Monitor, Nuclear Stress Test, and Stent.',
            text3: 'Our team is comprised of eminent cardiology specialists: Dr. Steve S. Park, interventional cardiologist; and Dr. Do Hee Kim, nuclear physician.'
          },
          physician: {
            row1: 'Education/Experiences',
            row2: 'Dissertation',
            steve: {
              name: 'Steve S. Park',
              title: 'M.D.',
              position: 'Interventional Cardiologist',
              bio1: 'Director, Wilshire Cardiology Group',
              bio2: 'Teaching staff, White Memorial Heart Institute',
              bio3: 'Fellowship, Loma Linda University Medical Center',
              bio4: "Fellowship, St. Vincent's Medical Center",
              bio5: 'Internship and Residency, Northwestern University',
              bio6: 'Doctor of Medicine, University of Minnesota'
            },
            dohee: {
              name: 'Do Hee Kim',
              title: 'M.D.',
              position: 'Specialist in Clinical and Laboratory Nuclear Medicine',
              bio1: 'Nuclear Medicine Specialist, Wilshire Cardiology Group',
              bio2: 'American Board of Nuclear Medicine (ABNM)',
              bio3: 'Nuclear Medicine Training, UCLA Ronald Reagan Medical Center',
              bio4: 'Residency, USC Los Angeles County Hospital',
              bio5: 'Doctor of Medicine, Universidad de Buenos Aires, Argentina',
            }
          },
          procedure: {
            cardiacCatheterization: {
              ko: 'Cardiac Catheterization/Angiogram',
              en: '',
              desc1: 'The cardiac catheterization procedure allows the cardiologist to get direct information about blood pressure and patterns of blood flow within the heart.',
              desc2: 'An angiogram is an X-ray movie of the procedure. At the time, special contrast fluid visible by X-ray is injected into a cardiac chamber or major blood vessel.'
            }
          }
        }
      },
      ko: {
        translation: {
          nav: {
            aboutus: '병원소개',
            physician: '의료진정보',
            service: '질환 및 검사',
            patient: '진료 및 보험',
            contact: '연락처',
            steve: {
              name: '스티브 박',
              title: '전문의',
              position: '심장내과',
              bio1: '윌셔심장내과그룹 원장',
              bio2: '화이트메모리얼하트대 교직',
              bio3: '로마린다대학메디컬센터 펠로우',
              bio4: '미네소타주립대 의대졸업'
            },
            dohee: {
              name: '김도희',
              title: '전문의',
              position: '핵의학',
              bio1: '윌셔심장내과그룹 핵의학 전문의',
              bio2: '美 핵의학 보드(ABNM) 멤버',
              bio3: 'UCLA 로날드 레이건 메디컬센터',
              bio4: '핵의학 수료'
            },
            symptom: {
              name: '질환백과',
              angina: '협심증',
              antiplateletTherapy: '항혈소판요법',
              arrhythmia: '부정맥',
              congestiveHeartFailure: '울혈성 심부전',
              coronaryArteryDisease: '관상동맥질환',
              hypertensionHypotension: '고혈압/저혈압',
              hypercholesterolemia: '고콜레스테롤혈증',
              syncope: '심장신경성 실신',
              varicoseVein: '하지정맥류',
            },
            procedure: {
              name: '검사소개',
              angiogram: '심도자(카테타)술/심혈관조영술',
              cardiacEvaluation: '심장 검사/평가',
              carotidDuplexScan: '경동맥 검사',
              echocardiogram: '심장초음파검사',
              electrocardiogram: '심전도 검사',
              exerciseTreadmillTest: '운동 부하 검사',
              holterMonitorStudy: '순환기내과 검사',
              nuclearStressTest: '핵의학 스트레스 검사',
              stent: '스텐트 시술'
            }
          },
          sidebar: {
            infoBox: '진료문의',
            physician: {
              steve: '심장내과 전문의',
              dohee: '핵의학 전문의'
            },
            symptom:{
              name: '질환백과',
              angina: '협심증',
              antiplateletTherapy: '항혈소판요법',
              arrhythmia: '부정맥',
              congestiveHeartFailure: '울혈성 심부전',
              coronaryArteryDisease: '관상동맥질환',
              hypertensionHypotension: '고혈압/저혈압',
              hypercholesterolemia: '고콜레스테롤혈증',
              syncope: '심장신경성 실신',
              varicoseVein: '하지정맥류',
            },
            procedure: {
              name: '검사소개',
              angiogram: '심도자(카테타)술/<1/>심혈관조영술',
              cardiacEvaluation: '심장 검사/평가',
              carotidDuplexScan: '경동맥 검사',
              echocardiogram: '심장초음파검사',
              electrocardiogram: '심전도 검사',
              exerciseTreadmillTest: '운동 부하 검사',
              holterMonitorStudy: '순환기내과 검사',
              nuclearStressTest: '핵의학 스트레스 검사',
              stent: '스텐트 시술'
            }
          },
          home: {
            box1: {
              title: '병원소개',
              description1: '윌셔심장내과그룹은 심장내과',
              description2: '전문팀이 운영하는 심장내과',
              description3: '전문클리닉입니다.',
              button: '더보기'
            }
          },
          about: {
            title: '병원소개',
            title1: '윌셔심장내과그룹',
            title2: '에 오신걸 환영합니다',
            title3: '저명한 심장내과 전문팀이 운영하는 심장내과 전문클리닉',
            text1: '윌셔심장내과그룹은 협심증, 항혈소판 요법, 부정맥, 울혈성 심부전, 지질 장애, 관상 동맥 질환, 고혈압, 고콜레스테롤혈증 및 실신과 같은 모든 범위의 심혈관 질환 및 질병의 치료를 포함하는 포괄적인 심장학 평가를 제공합니다. 우리는 의료 산업의 최신 혁신 기술을 사용합니다.',
            text2: 'Wilshire Cardiology Group은 환자에게 최상의 의료 서비스를 제공하기 위해 최첨단 심장 진단 기술을 갖추고 있습니다. 직원은 심장 관리의 최신 개발에 대해 정기적으로 업데이트되고 교육을 받습니다. WCG에서 제공하는 서비스에는 심장 도관/혈관 조영술, 심장 평가, 경동맥 듀플렉스 스캔, 심초음파, 심전도(EKG), 전기생리학 연구, 운동 트레드밀 테스트(ETT/스트레스 테스트), 홀터 모니터 연구, 이벤트 모니터, 핵 스트레스 테스트 및 스텐트.',
            text3: '우리 팀은 저명한 심장 전문의들로 구성되어 있습니다: Dr. Steve S. Park, 중재적 심장 전문의; 핵의사 김도희 박사.'
          },
          physician: {
            row1: '학력/경력',
            row2: '학술 활동',
            steve: {
              name: '스티브 박',
              title: '전문의',
              position: '심장내과',
              bio1: '윌셔심장내과그룹 원장',
              bio2: '화이트메모리얼하트대 교직',
              bio3: '로마린다대학메디컬센터 펠로우',
              bio4: '세인트빈센트메디컬센터 팰로우',
              bio5: '노스웨스턴대학교 인턴쉽/레지던트',
              bio6: '미네소타주립대 의대졸업'
            },
            dohee: {
              name: '김도희',
              title: '전문의',
              position: '핵의학',
              bio1: '윌셔심장내과그룹 핵의학 전문의',
              bio2: '美 핵의학 보드(ABNM) 멤버',
              bio3: 'UCLA 로날드 레이건 메디컬센터 핵의학 수료',
              bio4: '남가주대학교 레지던트',
              bio5: '아르헨티나 부에노스아이레스 국립대학교 의대 졸업',
            }
          },
          procedure: {
            cardiacCatheterization: {
              ko: '심도자(카테타)술/심혈관조영술',
              en: '[Cardiac Catheterization/Angiogram]',
              desc1: '심도자(카테타)술/심혈관조영술은 환자의 혈압, 혈류 양상 등, 심장에 대한 정보를 확인할 수 있는 검사 입니다.',
              desc2: '심도자술은 얇은 튜브관을 삽입하는 과정이며, 심혈관조영술은 특수 조영제를 주입하여 X선 촬영을 통하여 관찰하는 시술 입니다.'
            },
            cardiacEvaluation: {
              ko: '심장 검사/평가',
              en: '[Cardiac Evaluation]',
              desc1: '심장 검사는 환자의 진료기록확인 및 심장검진으로 진행 됩니다. 심장검진',
              desc2: '심도자술은 얇은 튜브관을 삽입하는 과정이며, 심혈관조영술은 특수 조영제를 주입하여 X선 촬영을 통하여 관찰하는 시술 입니다.'
            }
          }
        }
      }
    }
  });

export default i18n;