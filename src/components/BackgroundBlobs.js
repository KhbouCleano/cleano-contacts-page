import React from 'react';
import colors from '../styles/colors';

/**
 * Trois cercles flous animés en arrière-plan (effet "abstract lights").
 */
function BackgroundBlobs() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {/* Rose — haut gauche */}
      <div
        className="blob"
        style={{
          backgroundColor: colors.pinkLight,
          width: 384,
          height: 384,
          top: '-10%',
          left: '-10%',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Bleu lavande — bas droite */}
      <div
        className="blob"
        style={{
          backgroundColor: '#E0E7FF',
          width: 480,
          height: 480,
          bottom: '-10%',
          right: '-10%',
          mixBlendMode: 'multiply',
          animationDelay: '2s',
        }}
      />

      {/* Bleu marine — centre */}
      <div
        className="blob"
        style={{
          backgroundColor: colors.blue,
          width: 256,
          height: 256,
          top: '40%',
          left: '60%',
          mixBlendMode: 'multiply',
          opacity: 0.2,
          animationDelay: '4s',
        }}
      />
    </div>
  );
}

export default BackgroundBlobs;
