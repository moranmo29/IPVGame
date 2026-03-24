import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, AlertTriangle, type LucideIcon } from 'lucide-react';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';
import { useChaos } from '../hooks';
import type { LevelId } from '../types';

interface LevelShellProps {
  levelId: LevelId;
  icon: LucideIcon;
  color: string; // 'neon-blue' | 'amber' | 'electric-purple' | 'emerald'
  title: string;
  subtitle: string;
  description: ReactNode;
  objectiveLabels: Record<string, string>;
  children: ReactNode;
}

const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  'neon-blue': {
    bg: 'bg-neon-blue/20',
    text: 'text-neon-blue',
    border: 'border-neon-blue/30',
    glow: 'glow-blue',
  },
  amber: {
    bg: 'bg-amber/20',
    text: 'text-amber',
    border: 'border-amber/30',
    glow: '',
  },
  'electric-purple': {
    bg: 'bg-electric-purple/20',
    text: 'text-electric-purple',
    border: 'border-electric-purple/30',
    glow: 'glow-purple',
  },
  emerald: {
    bg: 'bg-emerald/20',
    text: 'text-emerald',
    border: 'border-emerald/30',
    glow: 'glow-emerald',
  },
};

export function LevelShell({
  levelId,
  icon: Icon,
  color,
  title,
  subtitle,
  description,
  objectiveLabels,
  children,
}: LevelShellProps) {
  const { t } = useI18n();
  const { state } = useGame();
  const { getAnomaliesForLevel } = useChaos();

  const levelState = state.levels[levelId];
  const anomalies = getAnomaliesForLevel(levelId);
  const classes = COLOR_CLASSES[color] ?? COLOR_CLASSES['neon-blue'];

  // Locked overlay
  if (!levelState.unlocked) {
    return (
      <div className="space-y-6">
        <div className="glass rounded-2xl p-8 text-center">
          <Lock className="mx-auto text-slate-600 mb-4" size={48} />
          <h2 className="text-xl font-bold text-slate-500">{title}</h2>
          <p className="text-sm text-slate-600 mt-2">{t.locked}</p>
          <p className="text-xs text-slate-700 mt-1">
            {t.levelLabel} {levelId - 1} {t.objectives}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="glass rounded-2xl p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`w-10 h-10 rounded-xl ${classes.bg} flex items-center justify-center`}
          >
            <Icon className={classes.text} size={20} />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              {levelState.completed && (
                <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-slate-400">{subtitle}</p>
          </div>
        </div>
        <div className="text-sm text-slate-300 leading-relaxed">{description}</div>
      </div>

      {/* Objectives Tracker */}
      <div className="glass rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {t.objectives}
          </span>
          <span className="text-xs font-mono text-slate-500">
            {levelState.progress}%
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
          <motion.div
            animate={{ width: `${levelState.progress}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className={`h-full rounded-full ${
              levelState.completed
                ? 'bg-emerald'
                : color === 'neon-blue'
                  ? 'bg-neon-blue'
                  : color === 'amber'
                    ? 'bg-amber'
                    : color === 'electric-purple'
                      ? 'bg-electric-purple'
                      : 'bg-emerald'
            }`}
          />
        </div>
        {/* Objective list */}
        <div className="space-y-1.5">
          {Object.entries(objectiveLabels).map(([key, label]) => {
            const done = levelState.objectives[key] ?? false;
            return (
              <div key={key} className="flex items-center gap-2 text-xs">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    done ? 'bg-emerald/20 border-emerald/50' : 'border-slate-700'
                  }`}
                >
                  {done && <CheckCircle2 size={10} className="text-emerald" />}
                </div>
                <span className={done ? 'text-slate-400 line-through' : 'text-slate-300'}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chaos Anomaly Banner */}
      {anomalies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl p-3 bg-rose/10 border border-rose/30"
        >
          {anomalies.map((a) => (
            <div key={a.id} className="flex items-center gap-2 text-xs text-rose">
              <AlertTriangle size={14} />
              <span>{a.description}</span>
              <span className="px-1.5 py-0.5 rounded bg-rose/20 text-[10px] uppercase">
                {a.severity}
              </span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Level Content */}
      {children}
    </div>
  );
}
