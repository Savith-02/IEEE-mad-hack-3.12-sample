import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './views/Main/Main';

// Lazy load components
const Notfound = lazy(() => import('./components/NotFound/NotFound'));
const UnderDev = lazy(() => import('./components/underDev/UnderDev'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
