import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import '../styles/FeaturesPage.css';
import videoFile from '../assets/psia-apka-newvid.mp4';

function FeaturesPage() {
  const { t } = useTranslation(); // Initialize translation functions

  return (
    <div className="features-page">
      <div className="video-container">
        <video className="features-video" autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <a href="https://testflight.apple.com/join/LzIw4ASS" target="_blank" rel="noopener noreferrer">
            {/* Translate the button text */}
            <button className="signup-button">{t('Request Access to iOS Alpha Testing')}</button>
          </a>
        </div>
      </div>

      {/* Exciting News Section */}
      <div className="exciting-news">
        <p>{t('Exciting News!')}</p>
        <p>{t('Thrilled to unveil the latest features of our beloved canine adventure app - Psia Apka!')}</p>
        <p>{t('In this update, we\'re introducing Dogspots — exciting new locations for you and your furry friends to explore!')}</p>
        <p>{t('Plus, get ready to embark on a sparkling journey with the introduction of Diamonds — collect them along the way to unlock special rewards!')}</p>
      </div>
    </div>
  );
}

export default FeaturesPage;
