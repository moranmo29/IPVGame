import { useState, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { Lightbulb, Clock, ArrowLeft, Zap, Globe, CheckCircle2, Target, BookOpen } from 'lucide-react';
import { LevelShell } from '../components/LevelShell';
import { MicroLesson } from '../components/MicroLesson';
import { SuccessFeedback } from '../components/SuccessFeedback';
import { TermText, IPText } from '../components/Tooltip';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';
import { type Bit, type OctetBits, bitsToDecimal, decimalToBits } from '../types';

// ─── Constants ─────────────────────────────────────────────
const POWERS = [128, 64, 32, 16, 8, 4, 2, 1] as const;
const POWER_EXPONENTS = [7, 6, 5, 4, 3, 2, 1, 0] as const;

interface TargetPreset {
  label: string;
  ip: readonly [number, number, number, number];
}

const SPRING_TOGGLE: Transition = { type: 'spring', stiffness: 500, damping: 22 };
const SPRING_SOFT: Transition = { type: 'spring', stiffness: 200, damping: 20 };

// ─── OctetRow Component ────────────────────────────────────
interface OctetRowProps {
  bits: OctetBits;
  targetDecimal: number;
  label: string;
  onToggle: (bitIndex: number) => void;
}

function OctetRow({ bits, targetDecimal, label, onToggle }: OctetRowProps) {
  const decimal = bitsToDecimal(bits);
  const isMatched = decimal === targetDecimal;

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-slate-400 font-mono">{label}</span>

      {/* Bit buttons in a single row — using flex-nowrap + shrink to fit */}
      <div className="flex gap-1 flex-nowrap">
        {bits.map((bit, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.08 }}
            transition={SPRING_TOGGLE}
            onClick={() => onToggle(i)}
            className={`
              relative w-9 h-12 sm:w-10 sm:h-14 rounded-lg flex flex-col items-center justify-center
              cursor-pointer transition-colors duration-200
              ${bit
                ? 'bg-neon-blue/20 border border-neon-blue/60 glow-blue'
                : 'bg-slate-800/60 border border-slate-700/40 hover:border-slate-600'
              }
            `}
          >
            <motion.div
              animate={{
                filter: bit
                  ? 'drop-shadow(0 0 8px rgba(56,189,248,0.8))'
                  : 'drop-shadow(0 0 0px rgba(0,0,0,0))',
              }}
              transition={SPRING_TOGGLE}
            >
              <Lightbulb
                size={16}
                className={`transition-colors duration-200 ${
                  bit ? 'text-neon-blue' : 'text-slate-600'
                }`}
              />
            </motion.div>
            <span className={`text-[10px] font-mono mt-0.5 ${bit ? 'text-neon-blue' : 'text-slate-500'}`}>
              {bit}
            </span>
            <span className="absolute -top-4 text-[9px] text-slate-500 font-mono">
              {POWERS[i]}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Decimal value with animated counter */}
      <motion.div
        key={decimal}
        initial={{ scale: 1.3, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={SPRING_SOFT}
        className={`text-xl font-bold font-mono ${
          isMatched ? 'text-emerald' : 'text-white'
        }`}
      >
        {decimal}
        {isMatched && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={SPRING_TOGGLE}
            className="inline-block ms-1"
          >
            <CheckCircle2 size={14} className="text-emerald inline" />
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}

// ─── IPv6 Panel ────────────────────────────────────────────
interface IPv6PanelProps {
  onExplored: () => void;
}

function IPv6Panel({ onExplored }: IPv6PanelProps) {
  const { t, motionX } = useI18n();
  const [groups, setGroups] = useState([
    '2001', '0db8', '85a3', '0000', '0000', '8a2e', '0370', '7334',
  ]);

  // Mark as explored on mount
  useEffect(() => {
    onExplored();
  }, [onExplored]);

  return (
    <motion.div
      initial={{ opacity: 0, x: motionX(30) }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: motionX(30) }}
      transition={SPRING_SOFT}
      className="space-y-6"
    >
      <div className="glass-purple rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="w-10 h-10 rounded-xl bg-electric-purple/20 flex items-center justify-center"
          >
            <Globe className="text-electric-purple" size={20} />
          </motion.div>
          <h3 className="text-lg font-bold text-white">{t.l1IPv6Title}</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          <TermText text={t.l1IPv6Desc} t={t} />
        </p>

        {/* MicroLesson: Hex cheat sheet */}
        <MicroLesson icon={BookOpen} title={t.l1LessonHexTitle} color="purple" defaultOpen={true}>
          <p className="text-xs text-slate-300 leading-relaxed">{t.l1LessonHexBody}</p>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div dir="ltr" className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              {[
                { bin: '0000', hex: '0' }, { bin: '0001', hex: '1' },
                { bin: '0010', hex: '2' }, { bin: '0011', hex: '3' },
                { bin: '0100', hex: '4' }, { bin: '0101', hex: '5' },
                { bin: '0110', hex: '6' }, { bin: '0111', hex: '7' },
                { bin: '1000', hex: '8' }, { bin: '1001', hex: '9' },
                { bin: '1010', hex: 'A' }, { bin: '1011', hex: 'B' },
                { bin: '1100', hex: 'C' }, { bin: '1101', hex: 'D' },
                { bin: '1110', hex: 'E' }, { bin: '1111', hex: 'F' },
              ].map(({ bin, hex }) => (
                <div key={hex} className="flex items-center justify-center gap-1">
                  <span className="text-slate-500">{bin}</span>
                  <span className="text-slate-600">=</span>
                  <span className="text-electric-purple font-bold">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </MicroLesson>

        {/* Editable IPv6 groups */}
        <div className="bg-slate-800/50 rounded-xl p-4">
          <p className="text-xs text-slate-400 mb-3">{t.l1IPv6Groups}</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {groups.map((group, i) => (
              <div key={i} className="flex items-center gap-1">
                <input
                  type="text"
                  dir="ltr"
                  value={group}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9a-fA-F]/g, '').slice(0, 4);
                    setGroups(prev => {
                      const next = [...prev];
                      next[i] = val;
                      return next;
                    });
                  }}
                  className="w-16 bg-slate-900/80 border border-electric-purple/30 rounded-lg px-2 py-2 text-center font-mono text-sm text-electric-purple focus:outline-none focus:border-electric-purple/60"
                  maxLength={4}
                />
                {i < 7 && <span className="text-slate-600 font-mono">:</span>}
              </div>
            ))}
          </div>
          <p dir="ltr" className="text-center mt-3 text-xs font-mono text-electric-purple/70 select-all">
            {groups.join(':')}
          </p>
        </div>
      </div>

      {/* IPv4 vs IPv6 comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-4 text-center"
        >
          <p className="text-xs text-slate-400 mb-1">IPv4</p>
          <p className="text-2xl font-bold text-neon-blue">{t.l1IPv4Count}</p>
          <p className="text-xs text-slate-500 mt-1">32 bits</p>
          {/* Visual bar */}
          <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '3%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-full bg-neon-blue rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-purple rounded-xl p-4 text-center"
        >
          <p className="text-xs text-slate-400 mb-1">IPv6</p>
          <p className="text-2xl font-bold text-electric-purple">{t.l1IPv6Count}</p>
          <p className="text-xs text-slate-500 mt-1">128 bits</p>
          {/* Visual bar */}
          <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-full bg-electric-purple rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Exhaustion callout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-5"
      >
        <h4 className="text-sm font-semibold text-amber mb-2 flex items-center gap-2">
          <Zap size={14} />
          {t.l1Exhaustion}
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">{t.l1ExhaustionDesc}</p>
      </motion.div>

      {/* IPv6 Success Feedback */}
      <SuccessFeedback
        show={true}
        title={t.l1SuccessIPv6Title}
        message={t.l1SuccessIPv6Msg}
        hint={t.l1SuccessIPv6Hint}
      />
    </motion.div>
  );
}

// ─── Level 1 Main ──────────────────────────────────────────
export default function Level1() {
  const { t, motionX } = useI18n();
  const { completeObjective, state } = useGame();

  // Target presets
  const targetPresets: TargetPreset[] = useMemo(() => [
    { label: t.l1TargetRouter, ip: [192, 168, 1, 1] as const },
    { label: t.l1TargetDNS, ip: [8, 8, 8, 8] as const },
    { label: t.l1TargetPrivate, ip: [10, 0, 0, 1] as const },
  ], [t]);

  const [selectedTarget, setSelectedTarget] = useState(0);
  const targetIP = targetPresets[selectedTarget].ip;

  // 4 octets of bits (start at 0.0.0.0)
  const [octets, setOctets] = useState<OctetBits[]>([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [showIPv6, setShowIPv6] = useState(false);

  // Computed IPv4 string
  const decimals = octets.map(bitsToDecimal);
  const ipv4String = decimals.join('.');
  const matchedCount = decimals.filter((d, i) => d === targetIP[i]).length;
  const fullMatch = matchedCount === 4;

  // Check for objective completion
  useEffect(() => {
    if (fullMatch) {
      completeObjective(1, 'matchIPv4');
    }
  }, [fullMatch, completeObjective]);

  // Reset octets when target changes
  const handleTargetChange = useCallback((index: number) => {
    setSelectedTarget(index);
    setOctets([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  }, []);

  const toggleBit = useCallback((octetIdx: number, bitIdx: number) => {
    setOctets(prev => {
      const next = prev.map(o => [...o] as OctetBits);
      next[octetIdx][bitIdx] = (next[octetIdx][bitIdx] ? 0 : 1) as Bit;
      return next;
    });
  }, []);

  const handleIPv6Explored = useCallback(() => {
    completeObjective(1, 'exploreIPv6');
  }, [completeObjective]);

  const objectiveLabels = useMemo(() => ({
    matchIPv4: t.l1Obj1,
    exploreIPv6: t.l1Obj2,
  }), [t]);

  return (
    <LevelShell
      levelId={1}
      icon={Lightbulb}
      color="neon-blue"
      title={t.l1Title}
      subtitle={t.l1Subtitle}
      description={<TermText text={t.l1Desc} t={t} />}
      objectiveLabels={objectiveLabels}
    >
      <AnimatePresence mode="wait">
        {!showIPv6 ? (
          <motion.div
            key="ipv4"
            initial={{ opacity: 0, x: motionX(-20) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: motionX(-20) }}
            transition={SPRING_SOFT}
            className="space-y-6"
          >
            {/* MicroLesson: The 8-4-2-1 Rule */}
            <MicroLesson icon={BookOpen} title={t.l1LessonBinaryTitle} color="blue">
              <p className="text-xs text-slate-300 leading-relaxed">{t.l1LessonBinaryBody}</p>
              {/* Powers of 2 cheat sheet */}
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-[10px] text-slate-500 mb-2 font-medium">{t.l1PowerLabel}</p>
                <div className="grid grid-cols-8 gap-1">
                  {POWER_EXPONENTS.map((exp) => (
                    <div key={exp} className="flex flex-col items-center gap-0.5">
                      <span className="text-[10px] font-mono text-electric-purple">
                        2<sup>{exp}</sup>
                      </span>
                      <span className="text-[10px] text-slate-600">=</span>
                      <span className="text-xs font-mono font-bold text-neon-blue">
                        {Math.pow(2, exp)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Example */}
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-[10px] text-slate-500 mb-2">{t.l1CalcFormula}</p>
                <div dir="ltr" className="flex items-center gap-1 flex-wrap justify-center text-xs font-mono">
                  <span className="text-neon-blue font-bold">1</span>
                  <span className="text-slate-600">×128 +</span>
                  <span className="text-neon-blue font-bold">1</span>
                  <span className="text-slate-600">×64 +</span>
                  <span className="text-slate-600">0×32 +</span>
                  <span className="text-slate-600">0×16 +</span>
                  <span className="text-slate-600">0×8 +</span>
                  <span className="text-slate-600">0×4 +</span>
                  <span className="text-slate-600">0×2 +</span>
                  <span className="text-slate-600">0×1</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-emerald font-bold">192</span>
                </div>
              </div>
            </MicroLesson>

            {/* Target selector */}
            <div className="glass rounded-xl p-4">
              <p className="text-xs text-slate-400 mb-3">{t.l1SelectTarget}</p>
              <div className="flex flex-wrap gap-2">
                {targetPresets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => handleTargetChange(i)}
                    className={`
                      text-xs font-mono px-3 py-2 rounded-lg cursor-pointer border transition-colors
                      ${i === selectedTarget
                        ? 'bg-neon-blue/20 border-neon-blue/60 text-neon-blue'
                        : 'bg-slate-800/50 border-slate-700/30 text-slate-400 hover:border-slate-600'
                      }
                    `}
                  >
                    <span className="block text-[10px] opacity-70 mb-0.5">{preset.label}</span>
                    <IPText>
                      <span dir="ltr">{preset.ip.join('.')}</span>
                    </IPText>
                  </button>
                ))}
              </div>
            </div>

            {/* Target IP challenge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl p-4 flex items-center gap-3 ${
                fullMatch
                  ? 'bg-emerald/10 border border-emerald/30'
                  : 'bg-amber/10 border border-amber/30'
              }`}
            >
              <Target size={20} className={fullMatch ? 'text-emerald' : 'text-amber'} />
              <div className="flex-1">
                <p className="text-xs text-slate-400">{t.l1Target}</p>
                <IPText>
                  <span className={`text-lg font-bold ${fullMatch ? 'text-emerald' : 'text-amber'}`}>
                    {targetIP.join('.')}
                  </span>
                </IPText>
                {!fullMatch && (
                  <p className="text-[10px] text-slate-500 mt-0.5">{t.l1TargetHint}</p>
                )}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {matchedCount}/4
              </div>
              {fullMatch && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <CheckCircle2 size={24} className="text-emerald" />
                </motion.div>
              )}
            </motion.div>

            {/* Octet grid — 2 columns max to prevent overflow */}
            <div className="glass rounded-2xl p-4 sm:p-6 pt-8 sm:pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {octets.map((bits, idx) => (
                  <OctetRow
                    key={idx}
                    bits={bits}
                    targetDecimal={targetIP[idx]}
                    label={`${t.l1Octet} ${idx + 1}`}
                    onToggle={(bitIdx) => toggleBit(idx, bitIdx)}
                  />
                ))}
              </div>
            </div>

            {/* Composed IPv4 address */}
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-2">{t.l1FullIPv4}</p>
              <IPText>
                <motion.span
                  key={ipv4String}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={SPRING_SOFT}
                  className={`text-3xl font-bold ${fullMatch ? 'text-emerald' : 'text-neon-blue'}`}
                >
                  {ipv4String}
                </motion.span>
              </IPText>
              {/* Binary representation */}
              <div dir="ltr" className="flex justify-center gap-1 mt-3 flex-wrap">
                {octets.map((o, i) => (
                  <span key={i} className="flex items-center gap-1">
                    <span className="text-xs font-mono text-slate-500">
                      {o.join('')}
                    </span>
                    {i < 3 && <span className="text-slate-600">.</span>}
                  </span>
                ))}
              </div>

              {fullMatch && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-emerald mt-3 font-medium"
                >
                  {t.l1Matched}
                </motion.p>
              )}
            </div>

            {/* Success Feedback — shows when IPv4 matched */}
            <SuccessFeedback
              show={fullMatch}
              title={t.l1SuccessIPv4Title}
              message={t.l1SuccessIPv4Msg}
              hint={t.l1SuccessIPv4Hint}
            />

            {/* Time travel button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowIPv6(true)}
              className="w-full glass-purple rounded-xl p-4 flex items-center justify-center gap-3 text-electric-purple hover:border-electric-purple/40 transition-colors cursor-pointer"
            >
              <Clock size={20} />
              <span className="font-medium">{t.l1TimeTravel}</span>
              <Zap size={16} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div key="ipv6" className="space-y-6">
            <IPv6Panel onExplored={handleIPv6Explored} />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowIPv6(false)}
              className="w-full glass rounded-xl p-4 flex items-center justify-center gap-3 text-neon-blue hover:border-neon-blue/40 transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">{t.l1BackToIPv4}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </LevelShell>
  );
}
