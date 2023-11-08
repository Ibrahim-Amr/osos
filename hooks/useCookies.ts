'use client';
import { useState, useEffect } from 'react';

function useCookies() {
  const getDefaultLanguage = () => {
    return 'ar'; // Return the default language code if the cookie doesn't exist.
  };

  const [language, setLanguage] = useState(getDefaultLanguage());

  useEffect(() => {
    // Get the "lang" cookie value
    const langCookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('lang='));

    if (langCookie) {
      const [, langValue] = langCookie.split('=');
      setLanguage(langValue);
    }
  }, []);

  const updateLanguage = (newLanguage: any) => {
    // Set the "lang" cookie with the new language value
    document.cookie = `lang=${newLanguage}`;
    setLanguage(newLanguage);
  };

  return { language, updateLanguage };
}

export default useCookies;
