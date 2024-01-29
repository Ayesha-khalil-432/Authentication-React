import './App.css';
import LandingPage from './landingPage/LandingPage';
import SuccessfulLoginPage from './SuccessfullLoginPage/SuccessfullLoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-successful" element={<SuccessfulLoginPage />} />
          <Route path="/logoout" element={<SuccessfulLoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
