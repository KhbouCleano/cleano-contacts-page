import React from 'react';
import colors from '../styles/colors';
import { getSocialLinks } from '../data/links';
import { useLang } from '../context/LanguageContext';

function SocialIcons() {
  const { lang } = useLang();
  const socialLinks = getSocialLinks(lang);

  return (
      <div
          className="fade-in-up"
          data-delay="200"
          style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}      >
        {socialLinks.map(({ id, icon, label, href }) => (
        <a
            key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="social-icon"
          style={{
          fontSize: '1.4rem',
          color: colors.blue,
          background: 'white',
          width: 48, height: 48,
          borderRadius: '50%',
          border: '1px solid #f3f4f6',
          boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
        }}
          >
          <i className={icon} />
          </a>
          ))}
</div>
);
}

export default SocialIcons;