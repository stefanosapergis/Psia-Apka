import React from 'react';
import { useTranslation } from 'react-i18next'; // For translations
import appStoreBadgeEN from '../assets/app-store-badge-en.png'; // English Badge PNG
import appStoreBadgePL from '../assets/app-store-badge-pl.png'; // Polish Badge PNG
import appStoreBadgeGR from '../assets/app-store-badge-gr.png'; // Greek Badge PNG
import './HeroSection.css';

function HeroSection() {
  const { t, i18n } = useTranslation(); // Initialize translation function

  // Dynamically choose the Apple Store Badge based on the selected language
  let appStoreBadge;
  switch (i18n.language) {
    case 'pl':
      appStoreBadge = appStoreBadgePL;  // Polish Badge PNG
      break;
    case 'el':
      appStoreBadge = appStoreBadgeGR;  // Greek Badge PNG
      break;
    default:
      appStoreBadge = appStoreBadgeEN;  // Default to English Badge PNG
  }

  // Dynamically set the App Store link based on the selected language
  const badgeLink = i18n.language === 'pl' 
    ? 'https://apps.apple.com/pl/app/psia-apka/id1534499644' 
    : i18n.language === 'el' 
    ? 'https://apps.apple.com/gr/app/psia-apka/id1534499644' 
    : 'https://apps.apple.com/us/app/psia-apka/id1534499644';

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src={require('../assets/hero-background-vid.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>{t('Welcome to Psia Apka!')}</h1>
        <p>{t('Your one-stop app for everything dog-related.')}</p>
        {/* Dynamically rendered Apple Store Badge */}
        <a href={badgeLink} target="_blank" rel="noopener noreferrer">
          <img src={appStoreBadge} alt="App Store Badge" className="app-store-badge" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
