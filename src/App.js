import './styles/global.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import translation hook
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import './i18n'; // Ensure i18n is loaded

function App() {
  const { t, i18n } = useTranslation(); // Initialize translation functions

  // Language change function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <Link to="/">{t('home')}</Link> | 
          <Link to="/features">{t('features')}</Link> | 
          <Link to="/contact">{t('contact')}</Link>

          {/* Language Switch Button */}
          <div className="language-switch">
            <button className="language-button">{i18n.language.toUpperCase()}</button>
            <div className="language-options">
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('pl')}>PL</button>
              <button onClick={() => changeLanguage('el')}>GR</button>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
