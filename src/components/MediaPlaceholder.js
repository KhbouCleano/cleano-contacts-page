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
            }}
        >
            {/* Fondu HAUT */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '100px',
                background: 'linear-gradient(to bottom, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Fondu BAS */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '100px',
                background: 'linear-gradient(to top, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Fondu GAUCHE */}
            <div style={{
                position: 'absolute', top: 0, left: 0, bottom: 0,
                width: '100px',
                background: 'linear-gradient(to right, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Fondu DROITE */}
            <div style={{
                position: 'absolute', top: 0, right: 0, bottom: 0,
                width: '100px',
                background: 'linear-gradient(to left, #FAFAFD, transparent)',
                zIndex: 2, pointerEvents: 'none',
            }} />

            {/* Vidéo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                }}
            >
                <source src="/mavideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default MediaPlaceholder;