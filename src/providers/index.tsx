import type { ReactNode } from 'react';
import { GameProvider } from './GameProvider';
import { I18nProvider } from './I18nProvider';
import { ChaosProvider } from './ChaosProvider';

/**
 * Composite provider that wraps the app in all required contexts.
 * Order: I18n (outermost) > Game > Chaos (innermost)
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <GameProvider>
        <ChaosProvider>
          {children}
        </ChaosProvider>
      </GameProvider>
    </I18nProvider>
  );
}

// Re-export contexts for direct access if needed
export { GameContext, GameProvider } from './GameProvider';
export { I18nContext, I18nProvider } from './I18nProvider';
export { ChaosContext, ChaosProvider } from './ChaosProvider';
