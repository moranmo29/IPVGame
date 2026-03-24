import { useContext } from 'react';
import { GameContext, type GameContextValue } from '../providers/GameProvider';
import { I18nContext, type I18nContextValue } from '../providers/I18nProvider';
import { ChaosContext, type ChaosContextValue } from '../providers/ChaosProvider';

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within <GameProvider>');
  return ctx;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}

export function useChaos(): ChaosContextValue {
  const ctx = useContext(ChaosContext);
  if (!ctx) throw new Error('useChaos must be used within <ChaosProvider>');
  return ctx;
}
