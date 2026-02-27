import React from 'react';
import colors from '../styles/colors';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

function Header() {
    const { lang, toggleLang } = useLang();
    const t = translations[lang];

    return (
        <header
            className="fade-in-up"
            data-delay="0"
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
            }}
        >
            {/* Bouton langue FR / AR */}
            <button
                onClick={toggleLang}
                style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'white',
                    background: `linear-gradient(to right, ${colors.pinkLight}, ${colors.pinkDark})`,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: lang === 'ar' ? "'Rubik', sans-serif" :"'Outfit', sans-serif",
                    boxShadow: '0 2px 8px rgba(231,57,139,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.3s ease',
                }}
            >
        <span style={{ fontSize: '1rem' }}>
          {lang === 'fr' ? '🇹🇳' : '🇫🇷'}
        </span>
                <span style={{
                    fontFamily: lang === 'fr' ? "'Rubik', sans-serif" : "'Raleway', sans-serif"
                }}>
                  {lang === 'fr' ? 'عربي' : 'Français'}
                </span>
            </button>

            {/* Bouton partage */}
            <button
                className="glass-panel"
                onClick={() => {
                    if (navigator.share) {
                        navigator.share({
                            title: 'Cleano',
                            text: 'Découvrez Cleano !',
                            url: 'https://cleano.tn/',
                        });
                    } else {
                        navigator.clipboard.writeText('https://cleano.tn/');
                        alert('Lien copié !');
                    }
                }}
                style={{
                    width: 40, height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.blue,
                    border: '1px solid rgba(255,255,255,0.8)',
                    background: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
            >
                <i className="fa-solid fa-arrow-up-from-bracket" />
            </button>
        </header>
    );
}

export default Header;