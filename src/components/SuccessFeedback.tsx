import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SuccessFeedbackProps {
  show: boolean;
  title: string;
  message: string;
  hint?: string;
}

/**
 * SuccessFeedback — Celebratory "Why it worked" summary card.
 * Appears with a spring animation after a puzzle is solved.
 * Provides encouragement AND reinforces the mental model.
 */
export function SuccessFeedback({ show, title, message, hint }: SuccessFeedbackProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 12 }}
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          className="rounded-xl border border-emerald/30 bg-emerald/5 p-4 space-y-2"
        >
          {/* Header */}
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 12, delay: 0.1 }}
            >
              <Sparkles size={18} className="text-emerald" />
            </motion.div>
            <span className="text-sm font-bold text-emerald">{title}</span>
          </div>

          {/* Why it worked */}
          <p className="text-xs text-slate-300 leading-relaxed">{message}</p>

          {/* Next-step hint */}
          {hint && (
            <div className="flex items-center gap-1.5 pt-1">
              <ArrowRight size={12} className="text-slate-500 flex-shrink-0" />
              <p className="text-[11px] text-slate-500 leading-relaxed italic">{hint}</p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
