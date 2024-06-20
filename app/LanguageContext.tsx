import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  changeLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "Bahasa Indonesia",
  changeLanguage: () => {},
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("Bahasa Indonesia");

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
