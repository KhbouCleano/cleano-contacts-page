import React from 'react';
import LinkCard from './LinkCard';
import { getMainLinks } from '../data/links';
import { useLang } from '../context/LanguageContext';

function LinksList() {
    const { lang } = useLang();
    const mainLinks = getMainLinks(lang);

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rx = ((y - cy) / cy) * -2;
        const ry = ((x - cx) / cx) * 2;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {mainLinks.map(({ id, icon, label, href }, index) => (
                <LinkCard
                    key={id}
                    icon={icon}
                    label={label}
                    href={href}
                    delay={(index + 3) * 100}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
}

export default LinksList;