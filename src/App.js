import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Steve from './pages/steve';
import Dohee from './pages/dohee';
import Angina from './pages/angina';
import Footer from './components/footer';
import AntiplateletTherapy from './pages/antiplatelet_therapy';
import NotFound from './pages/notfound';
import CardiacCatheterization from './pages/cardiac_catheterization';
import CardiacEvaluation from './pages/cardiac_evaluation';
import { useState } from 'react';
import totop from './images/totop.svg';

function App() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > .5){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className='App'>
      <div className='backtotop' onClick={scrollToTop} style={{display: visible ? 'block' : 'none', position: 'fixed', right:15, bottom: 10}}><img src={totop} style={{width:'40px', height:'auto', opacity:.2}} alt='backtotop'/></div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/physician/steve' element={<Steve/>} />
          <Route path='/physician/dohee' element={<Dohee/>} />
          <Route path='/symptom/angina' element={<Angina/>} />
          <Route path='/symptom/antiplatelet_therapy' element={<AntiplateletTherapy/>} />
          <Route path='/procedure/cardiac_catheterization' element={<CardiacCatheterization/>} />
          <Route path='/procedure/cardiac_evaluation' element={<CardiacEvaluation/>} />
          <Route path="/404" element={<NotFound/>} />
          <Route path="/*" element={<Navigate to="/404"/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
