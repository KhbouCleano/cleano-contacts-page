import { translations } from './translations';

export const profile = {
  name: 'Cleano',
  avatarUrl: 'https://ui-avatars.com/api/?name=Cleano&background=fff&color=273067&size=200&bold=true',
  avatarAlt: 'Cleano Logo',
};

export const getSocialLinks = (lang) => {
  const t = translations[lang];
  return [
    { id: 's-facebook',  icon: 'fa-brands fa-facebook',    label: t.link_facebook,  href: 'https://www.facebook.com/profile.php?id=61565405105731' },
    { id: 's-instagram', icon: 'fa-brands fa-instagram',   label: t.link_instagram, href: 'https://www.instagram.com/cleano.tn/' },
    { id: 's-tiktok',    icon: 'fa-brands fa-tiktok',      label: t.link_tiktok,    href: 'https://www.tiktok.com/@cleano.tn' },
    { id: 's-youtube',   icon: 'fa-brands fa-youtube',     label: t.link_youtube,   href: 'https://www.youtube.com/@khboucleano' },
    { id: 's-whatsapp',  icon: 'fa-brands fa-whatsapp',    label: t.link_whatsapp,  href: 'https://wa.me/21655777400' },
    { id: 's-website',   icon: 'fa-solid fa-globe',        label: t.link_website,   href: 'https://cleano.tn/' },
  ];
};

export const getMainLinks = (lang) => {
  const t = translations[lang];
  return [
    { id: 'm-instagram', icon: 'fa-brands fa-instagram', label: t.link_instagram, href: 'https://www.instagram.com/cleano.tn/' },
    { id: 'm-tiktok',    icon: 'fa-brands fa-tiktok',    label: t.link_tiktok,    href: 'https://www.tiktok.com/@cleano.tn' },
    { id: 'm-youtube',   icon: 'fa-brands fa-youtube',   label: t.link_youtube,   href: 'https://www.youtube.com/@khboucleano' },
    { id: 'm-facebook',  icon: 'fa-brands fa-facebook',  label: t.link_facebook,  href: 'https://www.facebook.com/profile.php?id=61565405105731' },
    { id: 'm-whatsapp',  icon: 'fa-brands fa-whatsapp',  label: t.link_whatsapp,  href: 'https://wa.me/21655777400' },
    { id: 'm-website',   icon: 'fa-solid fa-globe',      label: t.link_website,   href: 'https://cleano.tn/' },
  ];
};

export const newsletter = {
  title: 'Subscribe to khbouclean',
  subtitle: 'Sign up to get exclusive email updates directly from me.',
};