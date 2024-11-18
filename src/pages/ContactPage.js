import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import '../styles/ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation(); // Initialize translation functions
  const email = "konrad.hanus@gmail.com";
  const subject = "Inquiry from Psia Apka";
  const body = "Hi, I'm reaching out because...";

  // Construct mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-page">
      <h1>{t('Contact Us')}</h1>
      <p>{t('If you have any questions or feedback, feel free to reach out by clicking the button below.')}</p>
      
      <a href={mailtoLink} className="email-button">
        {t('Send an Email')}
      </a>
    </div>
  );
};

export default ContactPage;
