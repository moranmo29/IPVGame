import { createContext, useState, useCallback, type ReactNode } from 'react';
import type { Language, Direction } from '../types';
import { translations, type TranslationStrings } from '../translations';

export interface I18nContextValue {
  lang: Language;
  dir: Direction;
  t: TranslationStrings;
  isRTL: boolean;
  toggleLang: () => void;
  /** Returns +val for LTR, -val for RTL. Use for directional animations. */
  motionX: (val: number) => number;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const dir: Direction = lang === 'he' ? 'rtl' : 'ltr';
  const isRTL = lang === 'he';
  const t = translations[lang];

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'en' ? 'he' : 'en'));
  }, []);

  const motionX = useCallback(
    (val: number) => (isRTL ? -val : val),
    [isRTL]
  );

  return (
    <I18nContext.Provider value={{ lang, dir, t, isRTL, toggleLang, motionX }}>
      {children}
    </I18nContext.Provider>
  );
}
