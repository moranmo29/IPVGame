import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { RefreshCw, Smartphone, Router, Server, ArrowRight, BookOpen, Package } from 'lucide-react';
import { LevelShell } from '../components/LevelShell';
import { MicroLesson } from '../components/MicroLesson';
import { SuccessFeedback } from '../components/SuccessFeedback';
import { TermText, IPText } from '../components/Tooltip';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';

const SPRING_SOFT: Transition = { type: 'spring', stiffness: 200, damping: 20 };

type NATState = 'idle' | 'sending' | 'rewriting' | 'delivered';

export default function Level4() {
  const { t, isRTL } = useI18n();
  const { completeObjective } = useGame();

  const [natState, setNATState] = useState<NATState>('idle');
  const [hasObserved, setHasObserved] = useState(false);

  useEffect(() => {
    if (hasObserved) {
      completeObjective(4, 'observeNAT');
    }
  }, [hasObserved, completeObjective]);

  const handleSendPacket = useCallback(() => {
    if (natState !== 'idle') return;
    setNATState('sending');
    setTimeout(() => setNATState('rewriting'), 800);
    setTimeout(() => {
      setNATState('delivered');
      setHasObserved(true);
    }, 2200);
    setTimeout(() => setNATState('idle'), 4500);
  }, [natState]);

  const objectiveLabels = useMemo(() => ({
    observeNAT: t.l4Obj1,
  }), [t]);

  return (
    <LevelShell
      levelId={4}
      icon={RefreshCw}
      color="amber"
      title={t.l4Title}
      subtitle={t.l4Subtitle}
      description={<TermText text={t.l4Desc} t={t} />}
      objectiveLabels={objectiveLabels}
    >
      {/* MicroLesson: NAT Home Name Analogy */}
      <MicroLesson icon={BookOpen} title={t.l4LessonNATTitle} color="amber">
        <p className="text-xs text-slate-300 leading-relaxed">{t.l4LessonNATBody}</p>
        <div className="bg-slate-800/50 rounded-lg p-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="text-center">
            <Smartphone size={20} className="text-neon-blue mx-auto mb-1" />
            <p className="text-[10px] text-slate-400">{t.l4PrivateIP}</p>
            <IPText><span dir="ltr" className="text-xs font-mono text-neon-blue">192.168.1.5</span></IPText>
          </div>
          <ArrowRight size={16} className="text-amber rotate-0 sm:rotate-0 hidden sm:block" />
          <div className="text-center">
            <Router size={20} className="text-amber mx-auto mb-1" />
            <p className="text-[10px] text-amber">NAT</p>
          </div>
          <ArrowRight size={16} className="text-amber hidden sm:block" />
          <div className="text-center">
            <Server size={20} className="text-electric-purple mx-auto mb-1" />
            <p className="text-[10px] text-slate-400">{t.l4PublicIP}</p>
            <IPText><span dir="ltr" className="text-xs font-mono text-electric-purple">82.1.2.3</span></IPText>
          </div>
        </div>
      </MicroLesson>

      {/* NAT Visualization Diagram */}
      <div className="glass rounded-2xl p-4 sm:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 relative">
          {/* Phone */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
              <Smartphone className="text-neon-blue" size={24} />
            </div>
            <span className="text-xs text-slate-400">Phone</span>
            <IPText><span dir="ltr" className="text-[10px] font-mono text-neon-blue">192.168.1.5</span></IPText>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
              Private
            </span>
          </div>

          {/* Arrow 1 */}
          <div className="z-10">
            <motion.div
              animate={{ x: isRTL ? [0, -6, 0] : [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-slate-600 hidden sm:block"
            >
              <Package size={16} className={isRTL ? 'scale-x-[-1]' : ''} />
            </motion.div>
          </div>

          {/* NAT Router */}
          <div className="flex flex-col items-center gap-2 z-10">
            <motion.div
              animate={natState === 'rewriting' ? {
                boxShadow: ['0 0 0px rgba(245,158,11,0)', '0 0 25px rgba(245,158,11,0.5)', '0 0 0px rgba(245,158,11,0)'],
              } : {}}
              transition={{ duration: 1.2, repeat: natState === 'rewriting' ? Infinity : 0 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber/10 border-2 border-amber/30 flex items-center justify-center"
            >
              <Router className="text-amber" size={28} />
            </motion.div>
            <span className="text-xs text-slate-400">NAT Router</span>

            {/* NAT rewrite animation */}
            <AnimatePresence mode="wait">
              {natState === 'rewriting' && (
                <motion.div
                  key="rewriting"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center"
                >
                  <p className="text-[10px] text-amber font-medium animate-pulse">{t.l4NATRewriting}</p>
                  <div className="mt-1 space-y-0.5">
                    <div className="flex items-center gap-1 justify-center">
                      <span className="text-[9px] text-slate-500">{t.l4OriginalSrc}:</span>
                      <IPText><span dir="ltr" className="text-[9px] font-mono text-neon-blue line-through">192.168.1.5</span></IPText>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <span className="text-[9px] text-slate-500">{t.l4RewrittenSrc}:</span>
                      <IPText><span dir="ltr" className="text-[9px] font-mono text-amber font-bold">82.1.2.3</span></IPText>
                    </div>
                  </div>
                </motion.div>
              )}
              {natState === 'delivered' && (
                <motion.div
                  key="delivered"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-[10px] text-emerald font-medium px-2 py-0.5 rounded-full bg-emerald/10 border border-emerald/20"
                >
                  ✓ NAT Complete
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Arrow 2 */}
          <div className="z-10">
            <motion.div
              animate={{ x: isRTL ? [0, -6, 0] : [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className={`text-slate-600 hidden sm:block transition-colors duration-500 ${natState === 'delivered' ? 'text-emerald' : ''}`}
            >
              <Package size={16} className={isRTL ? 'scale-x-[-1]' : ''} />
            </motion.div>
          </div>

          {/* Web Server */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-electric-purple/10 border border-electric-purple/30 flex items-center justify-center">
              <Server className="text-electric-purple" size={24} />
            </div>
            <span className="text-xs text-slate-400">Google</span>
            <IPText><span dir="ltr" className="text-[10px] font-mono text-electric-purple">142.250.80.46</span></IPText>
          </div>

          {/* Connection line (desktop) */}
          <div className="hidden sm:block absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-0.5 bg-slate-800 z-0 rounded-full" />
        </div>
      </div>

      {/* Send Packet Button */}
      <motion.button
        whileHover={natState === 'idle' ? { scale: 1.02 } : {}}
        whileTap={natState === 'idle' ? { scale: 0.98 } : {}}
        onClick={handleSendPacket}
        disabled={natState !== 'idle'}
        className={`w-full rounded-xl p-4 flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-wait ${
          natState === 'delivered'
            ? 'bg-emerald/10 border border-emerald/30 text-emerald'
            : 'bg-amber/10 border border-amber/30 text-amber hover:border-amber/50 hover:bg-amber/20'
        }`}
      >
        <Package size={20} className={natState === 'sending' || natState === 'rewriting' ? 'animate-pulse' : ''} />
        <span className="text-sm font-medium">{t.l4SendPacketBtn}</span>
      </motion.button>

      {/* Status feedback */}
      <AnimatePresence>
        {(natState === 'sending' || natState === 'rewriting') && (
          <motion.div
            key="nat-progress"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={SPRING_SOFT}
            className="rounded-xl p-4 bg-amber/10 border border-amber/30 flex items-center gap-3"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
              <RefreshCw size={18} className="text-amber" />
            </motion.div>
            <p className="text-sm text-amber font-medium">{t.l4PacketSent}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Feedback */}
      <SuccessFeedback
        show={hasObserved}
        title={t.l4SuccessTitle}
        message={t.l4SuccessMsg}
        hint={t.l4SuccessHint}
      />
    </LevelShell>
  );
}
