import React from 'react';
import colors from '../styles/colors';
import { useLang } from '../context/LanguageContext';

function LinkCard({ icon, label, href, delay, onMouseMove, onMouseLeave }) {
    const { lang } = useLang();

    return (
<a
        href={href}
    target="_blank"
    rel="noreferrer"
    className="link-card fade-in-up"
    data-delay={delay}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
        >
        <div style={{
        width: 40, height: 40,
            borderRadius: '2rem',
            background: 'rgba(238,129,177,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: colors.pinkDark, flexShrink: 0,
    }}>
<i className={icon} style={{ fontSize: '1.2rem' }} />
</div>

    <span style={{
        fontWeight: 600,
        fontSize: '1.05rem',
        flex: 1,
        textAlign: 'center',
        fontFamily: lang === 'ar' ? "'Rubik', sans-serif" : "'Raleway', sans-serif",
    }}>
        {label}
      </span>

    <div style={{
        width: 32, height: 32,
        borderRadius: '2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#9ca3af', flexShrink: 0,
    }}>
        <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.8rem' }} />
    </div>
</a>
);
}

export default LinkCard;