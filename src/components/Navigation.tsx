import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb, Network, Router, RefreshCw, Search, ShieldCheck,
  ChevronLeft, ChevronRight, Languages, Menu, X, Zap, Trophy,
} from 'lucide-react';
import { useGame } from '../hooks';
import { useI18n } from '../hooks';
import type { LevelId } from '../types';
import { LEVEL_META } from '../types';
import { useState } from 'react';

// Icon lookup
const ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Lightbulb, Network, Router, RefreshCw, Search, ShieldCheck,
};

const COLOR_CLASSES: Record<string, { active: string; text: string }> = {
  'neon-blue':       { active: 'bg-neon-blue/30 border-neon-blue/50 text-neon-blue', text: 'text-neon-blue' },
  'amber':           { active: 'bg-amber/30 border-amber/50 text-amber', text: 'text-amber' },
  'electric-purple': { active: 'bg-electric-purple/30 border-electric-purple/50 text-electric-purple', text: 'text-electric-purple' },
  'emerald':         { active: 'bg-emerald/30 border-emerald/50 text-emerald', text: 'text-emerald' },
};

export function Navigation() {
  const { state, goToLevel, canEnableChaos, dispatch } = useGame();
  const { t, isRTL, toggleLang, lang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const levelTitles: Record<LevelId, string> = {
    1: t.l1Title,
    2: t.l2Title,
    3: t.l3Title,
    4: t.l4Title,
    5: t.l5Title,
    6: t.l6Title,
  };

  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <>
      <nav className="sticky top-0 z-50 glass border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo — click to go home (Level 1) */}
          <button
            onClick={() => goToLevel(1)}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center">
              <Network className="text-neon-blue" size={18} />
            </div>
            <div className="text-start">
              <h1 className="text-sm font-bold text-white leading-tight">{t.appTitle}</h1>
              <p className="text-[10px] text-slate-500">{t.appSubtitle}</p>
            </div>
          </button>

          {/* Desktop Level Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {LEVEL_META.map((meta) => {
              const Icon = ICONS[meta.iconName];
              const colors = COLOR_CLASSES[meta.colorToken];
              const isActive = state.currentLevel === meta.id;
              const lvl = state.levels[meta.id];

              return (
                <motion.button
                  key={meta.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToLevel(meta.id)}
                  disabled={!lvl.unlocked}
                  className={`relative px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                    isActive ? `${colors.active} border` : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {Icon && <Icon size={14} />}
                  <span className="hidden lg:inline">{levelTitles[meta.id]}</span>
                  <span className="lg:hidden">{meta.id}</span>
                  {lvl.completed && (
                    <span className="absolute -top-1 -end-1 w-2 h-2 rounded-full bg-emerald" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Score */}
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-amber/10 border border-amber/20 text-xs text-amber">
              <Trophy size={12} />
              <span className="font-mono">{state.totalScore}</span>
            </div>

            {/* Chaos Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch({ type: 'TOGGLE_CHAOS' })}
              disabled={!canEnableChaos}
              title={canEnableChaos ? t.chaosMode : t.chaosLocked}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-all disabled:opacity-20 disabled:cursor-not-allowed ${
                state.chaosEnabled
                  ? 'bg-rose/20 border border-rose/40 text-rose'
                  : 'bg-slate-800/50 border border-slate-700/50 text-slate-500'
              }`}
            >
              <Zap size={12} />
              <span className="hidden lg:inline">{t.chaosMode}</span>
            </motion.button>

            {/* Language toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              <Languages size={14} />
              {lang === 'en' ? 'HE' : 'EN'}
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 cursor-pointer"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-800/50"
            >
              <div className="p-3 grid grid-cols-3 gap-2">
                {LEVEL_META.map((meta) => {
                  const Icon = ICONS[meta.iconName];
                  const colors = COLOR_CLASSES[meta.colorToken];
                  const isActive = state.currentLevel === meta.id;
                  const lvl = state.levels[meta.id];

                  return (
                    <button
                      key={meta.id}
                      onClick={() => { goToLevel(meta.id); setMenuOpen(false); }}
                      disabled={!lvl.unlocked}
                      className={`p-3 rounded-xl flex flex-col items-center gap-1.5 text-xs cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                        isActive
                          ? `${colors.active} border`
                          : 'bg-slate-800/30 text-slate-500 border border-slate-700/30'
                      }`}
                    >
                      {Icon && <Icon size={18} />}
                      <span className="text-[10px] text-center leading-tight">
                        {levelTitles[meta.id]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Progress bar */}
      <div className="w-full h-1 bg-slate-900">
        <motion.div
          animate={{ width: `${(state.currentLevel / 6) * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="h-full bg-gradient-to-r from-neon-blue via-electric-purple to-emerald rounded-e-full"
        />
      </div>
    </>
  );
}

// ─── Bottom level navigation (prev / dots / next) ──────────
export function LevelFooter() {
  const { state, goToLevel } = useGame();
  const { t, isRTL } = useI18n();

  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-800/50">
      <button
        onClick={() => goToLevel(Math.max(1, state.currentLevel - 1) as LevelId)}
        disabled={state.currentLevel === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
      >
        <PrevIcon size={16} />
        {t.prevLevel}
      </button>

      <div className="flex gap-1.5">
        {([1, 2, 3, 4, 5, 6] as LevelId[]).map((id) => (
          <button
            key={id}
            onClick={() => goToLevel(id)}
            disabled={!state.levels[id].unlocked}
            className={`rounded-full cursor-pointer transition-all disabled:cursor-not-allowed ${
              state.currentLevel === id
                ? 'bg-neon-blue w-6 h-2'
                : state.levels[id].completed
                  ? 'bg-neon-blue/40 w-2 h-2'
                  : state.levels[id].unlocked
                    ? 'bg-slate-600 w-2 h-2'
                    : 'bg-slate-800 w-2 h-2'
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => goToLevel(Math.min(6, state.currentLevel + 1) as LevelId)}
        disabled={state.currentLevel === 6 || !state.levels[Math.min(6, state.currentLevel + 1) as LevelId].unlocked}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
      >
        {t.nextLevel}
        <NextIcon size={16} />
      </button>
    </div>
  );
}
