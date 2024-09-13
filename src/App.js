import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Main from './views/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Lazy load components
const Notfound = lazy(() => import('./components/NotFound/NotFound'));
const UnderDev = lazy(() => import('./components/underDev/UnderDev'));

const App = () => {
  const location = useLocation();
  const hideFooterRoutes = [
    '/about',
    '/timeline',
    '/prizes',
    '/faq',
    '/contact',
    '/task',
  ];

  const shouldShowFooter = () => {
    return (
      !hideFooterRoutes.includes(location.pathname) && location.pathname === '/'
    );
  };

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<UnderDev />} />
          <Route path="/timeline" element={<UnderDev />} />
          <Route path="/prizes" element={<UnderDev />} />
          <Route path="/faq" element={<UnderDev />} />
          <Route path="/contact" element={<UnderDev />} />
          <Route path="/task" element={<UnderDev />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
      {shouldShowFooter() && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
