import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import HeroSection from '../components/HeroSection';
import '../styles/HomePage.css';

function HomePage() {
  const { t } = useTranslation(); // Get the translation function

  return (
    <>
      <HeroSection />
      <div className="homepage-content">
        <h2>{t('Why Download the Psia Apka App?')}</h2>
        <p>{t('We offer unique features that will make your virtual walks unforgettable.')}</p>
        
        <div className="feature">
          <h3>{t('Interactive Walks')}</h3>
          <p>{t('Take your virtual dog on a walk in the real world. Explore new places and earn unique rewards.')}</p>
        </div>

        <div className="feature">
          <h3>{t('Dogspots and DoggyM')}</h3>
          <p>{t('Visit special locations – DogSpots, and train at DogGyms to improve your dog\'s skills.')}</p>
        </div>

        <div className="feature">
          <h3>{t('Fun and Care')}</h3>
          <p>{t('Feed your dog, play with it, and take care of its needs to keep it happy and healthy.')}</p>
        </div>

        <div className="feature">
          <h3>{t('Dog Lovers Community')}</h3>
          <p>{t('Join our growing community, share experiences with others.')}</p>
        </div>

        {/* Video Section */}
        <div className="video-container">
          <div className="phone-frame">
            <video className="mobile-video" autoPlay loop muted>
              <source src={require('../assets/mobile-vid.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <a href="https://www.youtube.com/@PsiaApka-kc1wj" target="_blank" rel="noopener noreferrer">
            <button className="youtube-button">{t('Visit Our YouTube Channel')}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
