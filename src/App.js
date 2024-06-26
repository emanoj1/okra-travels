import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Plan from './pages/Plan';
import Books from './pages/Books';
import Pricing from './pages/Pricing';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie" element={<CookiePolicy />} />
          </Routes>
        </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


