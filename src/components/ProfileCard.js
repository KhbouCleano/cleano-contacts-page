import React from 'react';
import colors from '../styles/colors';

function ProfileCard() {
    return (
        <div
            className="fade-in-up"
            data-delay="100"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem',
            }}
        >
            {/* Anneau avatar */}
            <div style={{ position: 'relative' }}>
                {/* Glow derrière l'avatar */}
                <div
                    style={{
                        position: 'absolute',
                        inset: -4,
                        borderRadius: '50%',
                        background: `linear-gradient(to top right, ${colors.pinkLight}, ${colors.blue})`,
                        filter: 'blur(12px)',
                        opacity: 0.4,
                    }}
                />

                {/* Cadre dégradé + image */}
                <div
                    style={{
                        position: 'relative',
                        width: 230,
                        height: 230,
                        borderRadius: '50%',
                        padding:4,
                        background: `linear-gradient(135deg, ${colors.pinkLight}, #ffffff, ${colors.blue})`,
                        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                    }}
                >
                    <img
                        src="/clea.png"
                        alt="Cleano Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            borderRadius: '50%',
                            border: '3px solid white',
                            backgroundColor: 'white',
                        }}
                    />
                </div>
            </div>

            {/* Texte du profil avec polices personnalisées */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <h1
                    style={{
                        fontSize: '2.3rem', // Taille agrandie
                        fontWeight: 700,
                        letterSpacing: '-0.025em',
                        color: colors.blue,
                        marginBottom: '0.5rem',
                        lineHeight: 1.2,
                    }}
                >
                    <span style={{
                        fontFamily: "'Rubik', sans-serif", // Police pour l'arabe
                        fontWeight: 500,
                        marginRight: '0.5rem',
                        display: 'inline-block',
                    }}>
                        خليك
                    </span>
                    <span style={{
                        fontFamily: "'Raleway', sans-serif", // Police pour le français
                        fontWeight: 700,
                        display: 'inline-block',
                        marginRight: '0.5rem',
                    }}>
                        Cleano
                    </span>
                </h1>
            </div>

            {/* Lien pour importer les polices dans votre index.html */}
            {/* Ajoutez ceci dans public/index.html dans la balise <head> */}
            {/*
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">
            */}
        </div>
    );
}

export default ProfileCard;