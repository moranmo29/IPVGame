import { AnimatePresence, motion } from 'framer-motion';
import { Navigation, LevelFooter } from './components/Navigation';
import { useGame } from './hooks';
import { useI18n } from './hooks';
import type { LevelId } from './types';

import Level1 from './levels/Level1';
import Level2 from './levels/Level2';
import Level3 from './levels/Level3';
import Level4 from './levels/Level4';
import Level5 from './levels/Level5';
import Level6 from './levels/Level6';

const LEVEL_COMPONENTS: Record<LevelId, React.FC> = {
  1: Level1,
  2: Level2,
  3: Level3,
  4: Level4,
  5: Level5,
  6: Level6,
};

export default function App() {
  const { state } = useGame();
  const { dir, t } = useI18n();

  const CurrentLevel = LEVEL_COMPONENTS[state.currentLevel];

  return (
    <div dir={dir} className="min-h-screen bg-slate-950 text-slate-200">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Level indicator */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/30 text-xs font-mono text-slate-500">
            {t.levelLabel} {state.currentLevel}/6
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <CurrentLevel />
          </motion.div>
        </AnimatePresence>

        <LevelFooter />
      </main>
    </div>
  );
}
