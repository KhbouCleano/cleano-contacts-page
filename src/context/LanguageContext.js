import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('fr');
    const toggleLang = () => setLang(l => l === 'fr' ? 'ar' : 'fr');
    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            <div
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                style={{
                    fontFamily: lang === 'ar' ? "'Rubik', sans-serif" : "'Raleway', sans-serif"
                }}
            >
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}