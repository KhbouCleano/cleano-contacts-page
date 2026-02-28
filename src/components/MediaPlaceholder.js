import React from 'react';

function MediaPlaceholder() {
    return (
        <div
            className="fade-in-up"
            data-delay="800"
            style={{
                width: '100%',
                marginBottom: '2rem',
                position: 'relative',
                borderRadius: '2.5rem',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(39,48,103,0.08)',
            }}
        >
            {/* Fondu HAUT */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '80px',
                background: 'linear-gradient(to bottom, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Fondu BAS */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '80px',
                background: 'linear-gradient(to top, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Fondu GAUCHE */}
            <div style={{
                position: 'absolute', top: 0, left: 0, bottom: 0,
                width: '80px',
                background: 'linear-gradient(to right, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Fondu DROITE */}
            <div style={{
                position: 'absolute', top: 0, right: 0, bottom: 0,
                width: '80px',
                background: 'linear-gradient(to left, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Lien cliquable */}
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}

            href="https://www.google.com/maps?q=35.8591099,10.5995836&z=17&hl=fr"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir sur Google Maps"
            style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            cursor: 'pointer',
        }}
            />

            {/* Google Maps */}
            <iframe
                title="Cleano Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d500!2d10.5995836!3d35.8591099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDUxJzMyLjgiTiAxMMKwMzUnNTguNSJF!5e0!3m2!1sfr!2stn!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default MediaPlaceholder;