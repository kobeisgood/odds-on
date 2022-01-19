import './css/OddsOn.css';
import { HowToPlay } from './pages/HowToPlay.js';
import { OddsOn } from './pages/OddsOn.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function OddsOnApp() {

  return (
    <Router>
      <div >        
        <Routes>
          <Route path='/' exact element = {<OddsOn/>} />
          <Route path='/howtoplay' element = {<HowToPlay/>} />
        </Routes> 
      </div>
    </Router>
   
  );
}

export default OddsOnApp;
