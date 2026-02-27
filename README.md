# khbouclean — Linktree Moderne (React)

Page "Link in Bio" moderne convertie en projet React structuré.

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm start

# 3. Build de production
npm run build
```

## 📁 Structure du projet

```
src/
├── index.js                 # Point d'entrée React
├── index.css                # Styles globaux (animations, glassmorphism…)
├── App.js                   # Composant racine
│
├── data/
│   └── links.js             # ✏️  CONFIGURATION : profil, liens, newsletter
│
├── styles/
│   └── colors.js            # Palette de couleurs de la marque
│
├── components/
│   ├── BackgroundBlobs.js   # Cercles animés en arrière-plan
│   ├── Header.js            # Barre supérieure (Subscribe + Share)
│   ├── ProfileCard.js       # Avatar + nom
│   ├── SocialIcons.js       # Icônes sociales rondes
│   ├── LinkCard.js          # Bouton de lien individuel (avec effet 3D)
│   ├── LinksList.js         # Liste des boutons de liens
│   ├── NewsletterBlock.js   # Formulaire d'inscription
│   └── MediaPlaceholder.js  # Zone média 9/16
│
└── pages/
    └── KhboucleanPage.js    # Page principale (assemble tous les blocs)
```

## ✏️ Personnalisation

Tout le contenu configurable se trouve dans **`src/data/links.js`** :
- `profile` — nom et URL de l'avatar
- `socialLinks` — icônes sociales (Instagram, TikTok, YouTube, LinkedIn…)
- `mainLinks` — boutons de liens principaux
- `newsletter` — titre et sous-titre du bloc newsletter

La palette de couleurs est dans **`src/styles/colors.js`**.

## 🎨 Technologies

- React 18
- CSS pur (glassmorphism, animations CSS)
- FontAwesome 6 (CDN)
- Google Fonts — Outfit
