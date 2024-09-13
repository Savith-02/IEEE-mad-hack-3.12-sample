import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notfound from './components/NotFound/NotFound';
import UnderDev from './components/underDev/UnderDev';
import Main from './views/Main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/student-requests" element={<UnderDev />} />
          <Route path="/create-assistant" element={<UnderDev />} />
          <Route path="/prizes" element={<UnderDev />} />
          <Route path="/faq" element={<UnderDev />} />
          <Route path="/contact-us" element={<UnderDev />} />
          <Route path="/task" element={<UnderDev />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
