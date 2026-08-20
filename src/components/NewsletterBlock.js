import React, { useState } from 'react';
import colors from '../styles/colors';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

function NewsletterBlock() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const { lang } = useLang();
    const t = translations[lang];
    const font = lang === 'ar' ? "'Rubik', sans-serif" : "'Raleway', sans-serif";

    // URL de votre Google Apps Script déployé
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/VOTRE_ID_ICI/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status !== 'idle') return;

        setStatus('loading');

        try {
            // Envoyer les données à Google Sheets
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important pour CORS
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    email: email,
                    lang: lang
                })
            });

            // Ouvrir le site Cleano après 1.5 secondes
            setTimeout(() => {
                window.open('https://cleano-tn.com/', '_blank');
                setStatus('success');

                // Réinitialiser après 2 secondes
                setTimeout(() => {
                    setStatus('idle');
                    setFirstName('');
                    setEmail('');
                }, 2000);
            }, 1500);

        } catch (error) {
            console.error('Erreur:', error);
            setStatus('idle');
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    const buttonLabel = {
        idle: t.newsletter_send,
        loading: t.newsletter_sending,
        success: t.newsletter_sent,
    }[status];

    return (
        <div
            className="fade-in-up"
            data-delay="700"
            style={{
                width: '100%',
                backgroundColor: colors.blue,
                borderRadius: '2rem',
                padding: '2rem',
                boxShadow: '0 25px 50px rgba(39,48,103,0.25)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '3rem',
            }}
        >
            <div style={{
                position: 'absolute',
                top: -80,
                right: -80,
                width: 192,
                height: 192,
                backgroundColor: colors.pinkDark,
                borderRadius: '50%',
                filter: 'blur(80px)',
                opacity: 0.4
            }} />
            <div style={{
                position: 'absolute',
                bottom: -80,
                left: -80,
                width: 192,
                height: 192,
                backgroundColor: colors.pinkLight,
                borderRadius: '50%',
                filter: 'blur(80px)',
                opacity: 0.3
            }} />

            <div style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>

                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontFamily: font,
                }}>
                    {t.newsletter_title}
                </h2>

                <p style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.875rem',
                    marginBottom: '1.5rem',
                    fontWeight: 300,
                    fontFamily: font,
                }}>
                    {t.newsletter_subtitle}
                </p>

                <form onSubmit={handleSubmit} style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>

                    <input
                        type="text"
                        placeholder={t.newsletter_firstname}
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input"
                        style={{
                            fontFamily: font,
                            textAlign: lang === 'ar' ? 'right' : 'left',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            fontSize: '1rem'
                        }}
                    />

                    <input
                        type="email"
                        placeholder={t.newsletter_email}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        style={{
                            fontFamily: font,
                            textAlign: lang === 'ar' ? 'right' : 'left',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            fontSize: '1rem'
                        }}
                    />

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        style={{
                            marginTop: '0.5rem',
                            color: 'white',
                            fontWeight: 600,
                            padding: '0.875rem 1.5rem',
                            borderRadius: '0.75rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            opacity: status === 'loading' ? 0.8 : 1,
                            cursor: status === 'loading' ? 'wait' : 'pointer',
                            fontFamily: font,
                            fontSize: '1rem',
                            backgroundColor: colors.pinkDark,
                            border: 'none',
                            transition: 'all 0.3s ease',
                            transform: status === 'loading' ? 'scale(0.98)' : 'scale(1)',
                            width: '100%'
                        }}
                        onMouseEnter={(e) => {
                            if (status === 'idle') {
                                e.target.style.backgroundColor = colors.pinkLight;
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (status === 'idle') {
                                e.target.style.backgroundColor = colors.pinkDark;
                            }
                        }}
                    >
                        <span>{buttonLabel}</span>
                        {status === 'success' && (
                            <i className="fa-solid fa-check" style={{ fontSize: '0.875rem' }} />
                        )}
                    </button>

                    {status === 'success' && (
                        <p style={{
                            color: 'white',
                            fontSize: '0.875rem',
                            marginTop: '0.5rem',
                            opacity: 0.9
                        }}>
                            ✓ Inscription réussie ! Redirection vers Cleano...
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default NewsletterBlock;