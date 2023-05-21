import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import Footer from './pages/footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
            {/* <Route path='/about' element={<About/>} />
            <Route path='/physicians/stevep' element={<StevePark/>} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/sitemap" element={<Sitemap/>}/>
            <Route path="/404" element={<NotFound/>} />
            <Route path="*" element={<Navigate to="/404"/>}/> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
