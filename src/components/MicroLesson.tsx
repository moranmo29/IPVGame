import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, type LucideIcon } from 'lucide-react';

// ─── Color Variants ────────────────────────────────────────
const ACCENT_COLORS: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  blue: {
    border: 'border-t-neon-blue/50',
    bg: 'bg-neon-blue/5',
    text: 'text-neon-blue',
    iconBg: 'bg-neon-blue/15',
  },
  purple: {
    border: 'border-t-electric-purple/50',
    bg: 'bg-electric-purple/5',
    text: 'text-electric-purple',
    iconBg: 'bg-electric-purple/15',
  },
  amber: {
    border: 'border-t-amber/50',
    bg: 'bg-amber/5',
    text: 'text-amber',
    iconBg: 'bg-amber/15',
  },
  emerald: {
    border: 'border-t-emerald/50',
    bg: 'bg-emerald/5',
    text: 'text-emerald',
    iconBg: 'bg-emerald/15',
  },
};

// ─── Props ─────────────────────────────────────────────────
interface MicroLessonProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  color?: 'blue' | 'purple' | 'amber' | 'emerald';
  defaultOpen?: boolean;
}

/**
 * MicroLesson — Just-in-time visual explainer shown BEFORE each puzzle.
 * Uses analogy-first approach: friendly language, zero jargon.
 * Defaults to open so absolute beginners see the lesson immediately.
 */
export function MicroLesson({
  icon: Icon,
  title,
  children,
  color = 'blue',
  defaultOpen = true,
}: MicroLessonProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const accent = ACCENT_COLORS[color] ?? ACCENT_COLORS.blue;

  return (
    <div className={`rounded-xl border border-slate-700/40 border-t-2 ${accent.border} ${accent.bg} overflow-hidden`}>
      {/* Header — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-800/20 transition-colors"
      >
        <div className={`w-8 h-8 rounded-lg ${accent.iconBg} flex items-center justify-center flex-shrink-0`}>
          <Icon size={16} className={accent.text} />
        </div>
        <span className={`text-sm font-semibold ${accent.text} flex-1 text-start`}>
          {title}
        </span>
        {isOpen
          ? <ChevronUp size={16} className="text-slate-400 flex-shrink-0" />
          : <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />
        }
      </button>

      {/* Collapsible body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
