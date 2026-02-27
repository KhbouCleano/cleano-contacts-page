import React, { useEffect } from 'react';
import colors from '../styles/colors';

import BackgroundBlobs  from '../components/BackgroundBlobs';
import Header           from '../components/Header';
import ProfileCard      from '../components/ProfileCard';
import SocialIcons      from '../components/SocialIcons';
import LinksList        from '../components/LinksList';
import NewsletterBlock  from '../components/NewsletterBlock';
import MediaPlaceholder from '../components/MediaPlaceholder';
import SplashCursor     from '../components/SplashCursor';

/**
 * Page principale — assemble tous les blocs.
 */
function KhboucleanPage() {
  // Animation d'entrée en cascade (staggered)
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach((el) => {
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(() => el.classList.add('visible'), delay);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: colors.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: colors.blue,
        position: 'relative',
        paddingBottom: '4rem',
        overflowX: 'hidden',
      }}
    >
      {/* ── Fluid cursor effect (WebGL, arrière-plan interactif) ── */}
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.7}
        CURL={22}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />

      {/* ── Blobs doux d'arrière-plan (par-dessus le canvas) ── */}
      <BackgroundBlobs />

      {/* ── Contenu principal ── */}
      <main
        style={{
          width: '100%',
          maxWidth: 600,
          padding: '2rem 1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Header />
        <ProfileCard />
        <SocialIcons />
        <LinksList />
        <NewsletterBlock />
        <MediaPlaceholder />
      </main>
    </div>
  );
}

export default KhboucleanPage;
