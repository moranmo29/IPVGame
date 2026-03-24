import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { Home, Globe2, Network, Target, CheckCircle2, Info, BookOpen } from 'lucide-react';
import { LevelShell } from '../components/LevelShell';
import { MicroLesson } from '../components/MicroLesson';
import { SuccessFeedback } from '../components/SuccessFeedback';
import { TermText, IPText } from '../components/Tooltip';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';
import { computeSubnetInfo, type Bit, type IPv4Address } from '../types';

// ─── Constants ─────────────────────────────────────────────
const BASE_IP: IPv4Address = { octets: [192, 168, 1, 0] };
const CHALLENGE_TARGET_HOSTS = 50;
const CORRECT_CIDR = 26; // /26 = 62 usable hosts (smallest that fits 50)
const HOUSE_COUNT = 16;

const SPRING_BOUNDARY: Transition = { type: 'spring', stiffness: 300, damping: 30 };
const SPRING_SOFT: Transition = { type: 'spring', stiffness: 200, damping: 25 };

// ─── Level 2 Main ──────────────────────────────────────────
export default function Level2() {
  const { t } = useI18n();
  const { completeObjective } = useGame();

  const [cidr, setCidr] = useState(24);
  const [showHint, setShowHint] = useState(false);

  const info = useMemo(() => computeSubnetInfo(BASE_IP, cidr), [cidr]);

  const isSolved = cidr === CORRECT_CIDR;
  const localCount = Math.min(HOUSE_COUNT, Math.max(1, Math.round((info.usableHosts / 254) * HOUSE_COUNT)));

  // Determine challenge status
  const challengeStatus: 'under' | 'over' | 'solved' = isSolved
    ? 'solved'
    : info.usableHosts < CHALLENGE_TARGET_HOSTS
      ? 'under'
      : 'over';

  // Complete objective when solved
  useEffect(() => {
    if (isSolved) {
      completeObjective(2, 'findSubnet');
    }
  }, [isSolved, completeObjective]);

  const objectiveLabels = useMemo(() => ({
    findSubnet: t.l2Obj1,
  }), [t]);

  return (
    <LevelShell
      levelId={2}
      icon={Network}
      color="neon-blue"
      title={t.l2Title}
      subtitle={t.l2Subtitle}
      description={<TermText text={t.l2Desc} t={t} />}
      objectiveLabels={objectiveLabels}
    >
      {/* MicroLesson: Fence Analogy */}
      <MicroLesson icon={BookOpen} title={t.l2LessonSubnetTitle} color="blue">
        <p className="text-xs text-slate-300 leading-relaxed">{t.l2LessonSubnetBody}</p>
        {/* Visual analogy: houses inside vs outside fence */}
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center gap-0.5 border-2 border-dashed border-neon-blue/40 rounded-lg px-2 py-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Home key={i} size={14} className="text-neon-blue" />
              ))}
              <span className="text-[9px] text-neon-blue ms-1">{t.l2Local}</span>
            </div>
            <div className="w-0.5 h-8 bg-rose/60 mx-1" />
            <div className="flex items-center gap-0.5 px-2 py-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Globe2 key={i} size={14} className="text-slate-600" />
              ))}
              <span className="text-[9px] text-slate-500 ms-1">{t.l2Internet}</span>
            </div>
          </div>
          <p className="text-[10px] text-center text-rose/60 mt-1">← {t.l2Mask} →</p>
        </div>
      </MicroLesson>

      {/* Challenge Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl p-4 ${
          isSolved
            ? 'bg-emerald/10 border border-emerald/30'
            : 'bg-amber/10 border border-amber/30'
        }`}
      >
        <div className="flex items-start gap-3">
          <Target size={20} className={`flex-shrink-0 mt-0.5 ${isSolved ? 'text-emerald' : 'text-amber'}`} />
          <div className="flex-1">
            <p className={`text-sm font-medium ${isSolved ? 'text-emerald' : 'text-amber'}`}>
              {isSolved ? t.l2Solved : t.l2Challenge}
            </p>
            {!isSolved && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-[10px] text-slate-500 hover:text-slate-300 mt-1 flex items-center gap-1 cursor-pointer"
              >
                <Info size={10} />
                {showHint ? t.l2ChallengeHint : 'Hint'}
              </button>
            )}
            <AnimatePresence>
              {showHint && !isSolved && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-slate-400 mt-1"
                >
                  {t.l2ChallengeHint}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          {!isSolved && (
            <div className={`text-xs font-mono px-2 py-1 rounded ${
              challengeStatus === 'under'
                ? 'bg-rose/10 text-rose'
                : 'bg-amber/10 text-amber'
            }`}>
              {info.usableHosts} / {CHALLENGE_TARGET_HOSTS}
              {challengeStatus === 'under' ? ' (too few)' : ' (too many)'}
            </div>
          )}
          {isSolved && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <CheckCircle2 size={24} className="text-emerald" />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* CIDR Slider */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">{t.l2CIDR}</span>
          <IPText>
            <motion.span
              key={cidr}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={SPRING_SOFT}
              className={`text-lg font-bold ${isSolved ? 'text-emerald' : 'text-neon-blue'}`}
            >
              /{cidr}
            </motion.span>
          </IPText>
        </div>
        <input
          type="range"
          min={8}
          max={30}
          value={cidr}
          onChange={(e) => setCidr(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-700 accent-sky-400"
          dir="ltr"
        />
        <div dir="ltr" className="flex justify-between mt-2 text-xs text-slate-500 font-mono">
          <span>/8</span>
          <span>/16</span>
          <span>/24</span>
          <span>/30</span>
        </div>
      </div>

      {/* Neighborhood Visualization */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-center gap-0 mb-4 relative">
          {Array.from({ length: HOUSE_COUNT }, (_, i) => {
            const isLocal = i < localCount;
            return (
              <motion.div
                key={i}
                animate={{ scale: isLocal ? 1 : 0.8, opacity: isLocal ? 1 : 0.35 }}
                transition={{ ...SPRING_BOUNDARY, delay: i * 0.015 }}
                className="flex flex-col items-center mx-0.5"
              >
                <Home
                  size={24}
                  className={`transition-colors duration-300 ${
                    isLocal
                      ? 'text-neon-blue drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]'
                      : 'text-slate-600'
                  }`}
                />
                <motion.div
                  animate={{ backgroundColor: isLocal ? 'rgba(56,189,248,0.4)' : 'rgba(51,65,85,0.3)' }}
                  className="h-1 w-6 rounded-full mt-1"
                />
              </motion.div>
            );
          })}

          {/* Boundary line */}
          <motion.div
            animate={{ left: `${(localCount / HOUSE_COUNT) * 100}%` }}
            transition={SPRING_BOUNDARY}
            className="absolute top-0 bottom-0 w-0.5 bg-rose z-10"
            style={{ boxShadow: '0 0 12px rgba(244,63,94,0.6)' }}
          >
            <motion.div
              key={cidr}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] text-rose whitespace-nowrap font-mono bg-rose/10 px-1.5 py-0.5 rounded"
            >
              /{cidr}
            </motion.div>
          </motion.div>
        </div>

        <div className="flex justify-between text-xs mt-3">
          <span className="text-neon-blue flex items-center gap-1">
            <Home size={12} /> {t.l2Local}
          </span>
          <span className="text-slate-500 flex items-center gap-1">
            <Globe2 size={12} /> {t.l2Internet}
          </span>
        </div>
      </div>

      {/* Binary Mask Visualization */}
      <div className="glass rounded-2xl p-6">
        <div dir="ltr" className="flex flex-wrap justify-center gap-0.5 mb-4">
          {info.maskBits.map((bit, i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor: bit ? 'rgba(56,189,248,0.3)' : 'rgba(30,41,59,0.6)',
                borderColor: bit ? 'rgba(56,189,248,0.5)' : 'rgba(51,65,85,0.3)',
              }}
              transition={{ duration: 0.15, delay: i * 0.008 }}
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border flex items-center justify-center"
            >
              <span
                className="text-[8px] font-mono"
                style={{ color: bit ? '#38bdf8' : '#475569' }}
              >
                {bit}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-neon-blue/30 border border-neon-blue/50" />
            {t.l2Network} ({cidr} bits)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-slate-800 border border-slate-700" />
            {t.l2Host} ({32 - cidr} bits)
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {([
          { label: t.l2Mask, value: info.mask.octets.join('.') },
          {
            label: t.l2Hosts,
            value: info.usableHosts.toLocaleString(),
            highlight: isSolved,
          },
          { label: t.l2NetworkAddr, value: info.networkAddress.octets.join('.') },
          { label: t.l2Broadcast, value: info.broadcastAddress.octets.join('.') },
        ] as const).map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-xl p-3 text-center ${
              'highlight' in item && item.highlight
                ? 'glass-emerald'
                : 'glass'
            }`}
          >
            <p className="text-[10px] text-slate-500 mb-1">{item.label}</p>
            <IPText>
              <motion.span
                key={item.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={SPRING_SOFT}
                className={`text-sm font-bold ${
                  'highlight' in item && item.highlight ? 'text-emerald' : 'text-neon-blue'
                }`}
              >
                {item.value}
              </motion.span>
            </IPText>
          </motion.div>
        ))}
      </div>

      {/* Success Feedback */}
      <SuccessFeedback
        show={isSolved}
        title={t.l2SuccessTitle}
        message={t.l2SuccessMsg}
        hint={t.l2SuccessHint}
      />
    </LevelShell>
  );
}
