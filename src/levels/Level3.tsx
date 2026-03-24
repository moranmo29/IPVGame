import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import {
  Router, Monitor, Globe2, Smartphone, Cpu, Package,
  CheckCircle2, XCircle, BookOpen,
} from 'lucide-react';
import { LevelShell } from '../components/LevelShell';
import { MicroLesson } from '../components/MicroLesson';
import { SuccessFeedback } from '../components/SuccessFeedback';
import { TermText, IPText } from '../components/Tooltip';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';

// ─── Constants ─────────────────────────────────────────────
const SPRING_SOFT: Transition = { type: 'spring', stiffness: 200, damping: 20 };

type PacketState = 'idle' | 'sending' | 'blocked' | 'delivered';

// ─── Network Diagram ───────────────────────────────────────
interface DiagramProps {
  gatewayConfigured: boolean;
  packetState: PacketState;
  t: Record<string, string>;
}

function NetworkDiagram({ gatewayConfigured, packetState, t }: DiagramProps) {
  const { isRTL } = useI18n();

  const devices = [
    { icon: Smartphone, label: 'Phone', ip: '192.168.1.10', color: 'text-neon-blue' },
    { icon: Monitor, label: 'Laptop', ip: '192.168.1.20', color: 'text-neon-blue' },
    { icon: Cpu, label: 'IoT', ip: '192.168.1.30', color: 'text-neon-blue' },
  ];

  return (
    <div className="glass rounded-2xl p-4 sm:p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 relative">

        {/* Devices column */}
        <div className="flex flex-col items-center gap-2 z-10">
          <p className="text-[10px] text-slate-400 font-medium mb-1">{t.l3DeviceLabel}</p>
          <div className="flex gap-2 sm:flex-col sm:gap-2">
            {devices.map(({ icon: Icon, label, ip, color }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
                  <Icon className={color} size={18} />
                </div>
                <span className="text-[9px] text-slate-500">{label}</span>
                <IPText>
                  <span dir="ltr" className="text-[8px] font-mono text-neon-blue/60">{ip}</span>
                </IPText>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow: Devices → Gateway */}
        <div className="z-10 flex items-center">
          <div className="hidden sm:block">
            <motion.div
              animate={{ x: isRTL ? [0, -6, 0] : [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-slate-600"
            >
              <Package size={16} className={isRTL ? 'scale-x-[-1]' : ''} />
            </motion.div>
          </div>
          <div className="block sm:hidden">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-slate-600"
            >
              <Package size={16} />
            </motion.div>
          </div>
        </div>

        {/* Gateway column */}
        <div className="flex flex-col items-center gap-2 z-10">
          <p className="text-[10px] text-slate-400 font-medium mb-1">{t.l3GatewayLabel}</p>
          <motion.div
            animate={gatewayConfigured ? {
              boxShadow: '0 0 20px rgba(56,189,248,0.3)',
            } : {
              boxShadow: '0 0 0px rgba(0,0,0,0)',
            }}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              gatewayConfigured
                ? 'bg-neon-blue/20 border-2 border-neon-blue/60'
                : 'bg-slate-800/50 border-2 border-dashed border-slate-600'
            }`}
          >
            <Router
              size={28}
              className={`transition-colors duration-500 ${
                gatewayConfigured ? 'text-neon-blue' : 'text-slate-600'
              }`}
            />
          </motion.div>
          <IPText>
            <span dir="ltr" className={`text-[10px] font-mono transition-colors duration-500 ${
              gatewayConfigured ? 'text-neon-blue' : 'text-slate-600'
            }`}>
              192.168.1.1
            </span>
          </IPText>
          {gatewayConfigured && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-[9px] px-2 py-0.5 rounded-full bg-emerald/10 text-emerald border border-emerald/20"
            >
              Active
            </motion.span>
          )}
        </div>

        {/* Arrow: Gateway → Internet */}
        <div className="z-10 flex items-center">
          <div className="hidden sm:block">
            <motion.div
              animate={{ x: isRTL ? [0, -6, 0] : [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className={`transition-colors duration-500 ${gatewayConfigured ? 'text-emerald' : 'text-slate-700'}`}
            >
              <Package size={16} className={isRTL ? 'scale-x-[-1]' : ''} />
            </motion.div>
          </div>
          <div className="block sm:hidden">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className={`transition-colors duration-500 ${gatewayConfigured ? 'text-emerald' : 'text-slate-700'}`}
            >
              <Package size={16} />
            </motion.div>
          </div>
        </div>

        {/* Internet column */}
        <div className="flex flex-col items-center gap-2 z-10">
          <p className="text-[10px] text-slate-400 font-medium mb-1">{t.l3InternetLabel}</p>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-electric-purple/10 border border-electric-purple/30 flex items-center justify-center">
            <Globe2 className="text-electric-purple" size={28} />
          </div>
          <IPText>
            <span dir="ltr" className="text-[10px] font-mono text-electric-purple/60">8.8.8.8</span>
          </IPText>
        </div>

        {/* Background connection line (desktop only) */}
        <div className="hidden sm:block absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-0.5 bg-slate-800 z-0 rounded-full" />

        {/* Packet animation overlay */}
        <AnimatePresence>
          {packetState === 'sending' && !gatewayConfigured && (
            <motion.div
              key="packet-blocked"
              initial={{ [isRTL ? 'right' : 'left']: '5%', top: '45%' }}
              animate={{ [isRTL ? 'right' : 'left']: '35%', top: '45%' }}
              exit={{ [isRTL ? 'right' : 'left']: '5%', top: '45%', opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden sm:block absolute z-20"
            >
              <Package size={20} className="text-amber" />
            </motion.div>
          )}
          {packetState === 'blocked' && (
            <motion.div
              key="blocked-x"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0 }}
              className="hidden sm:block absolute z-20"
              style={{ [isRTL ? 'right' : 'left']: '38%', top: '38%' }}
            >
              <XCircle size={28} className="text-rose" />
            </motion.div>
          )}
          {packetState === 'sending' && gatewayConfigured && (
            <motion.div
              key="packet-success"
              initial={{ [isRTL ? 'right' : 'left']: '5%', top: '45%' }}
              animate={{ [isRTL ? 'right' : 'left']: '85%', top: '45%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="hidden sm:block absolute z-20"
            >
              <Package size={20} className="text-emerald" />
            </motion.div>
          )}
          {packetState === 'delivered' && (
            <motion.div
              key="delivered-check"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0 }}
              className="hidden sm:block absolute z-20"
              style={{ [isRTL ? 'right' : 'left']: '82%', top: '38%' }}
            >
              <CheckCircle2 size={28} className="text-emerald" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Level 3 Main ──────────────────────────────────────────
export default function Level3() {
  const { t } = useI18n();
  const { completeObjective } = useGame();

  const [gatewayConfigured, setGatewayConfigured] = useState(false);
  const [packetState, setPacketState] = useState<PacketState>('idle');
  const [hasDelivered, setHasDelivered] = useState(false);

  // Objective completion
  useEffect(() => {
    if (gatewayConfigured) {
      completeObjective(3, 'setGateway');
    }
  }, [gatewayConfigured, completeObjective]);

  const handleSetGateway = useCallback(() => {
    if (gatewayConfigured) return;
    setGatewayConfigured(true);
  }, [gatewayConfigured]);

  const handleSendPacket = useCallback(() => {
    if (packetState !== 'idle') return;

    setPacketState('sending');

    if (!gatewayConfigured) {
      setTimeout(() => setPacketState('blocked'), 700);
      setTimeout(() => setPacketState('idle'), 2500);
    } else {
      setTimeout(() => {
        setPacketState('delivered');
        setHasDelivered(true);
        completeObjective(3, 'deliverPacket');
      }, 1100);
      setTimeout(() => setPacketState('idle'), 3000);
    }
  }, [packetState, gatewayConfigured, completeObjective]);

  const objectiveLabels = useMemo(() => ({
    setGateway: t.l3Obj1,
    deliverPacket: t.l3Obj2,
  }), [t]);

  return (
    <LevelShell
      levelId={3}
      icon={Router}
      color="neon-blue"
      title={t.l3Title}
      subtitle={t.l3Subtitle}
      description={<TermText text={t.l3Desc} t={t} />}
      objectiveLabels={objectiveLabels}
    >
      {/* MicroLesson: Front Door Analogy + Real World Examples */}
      <MicroLesson icon={BookOpen} title={t.l3LessonGatewayTitle} color="blue">
        <p className="text-xs text-slate-300 leading-relaxed">{t.l3LessonGatewayBody}</p>
        {/* Real-world device examples inside the lesson */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { icon: Smartphone, title: 'Phone', desc: t.l3PhoneExample, color: 'text-neon-blue', bg: 'bg-neon-blue/10 border-neon-blue/30' },
            { icon: Monitor, title: 'Laptop', desc: t.l3LaptopExample, color: 'text-electric-purple', bg: 'bg-electric-purple/10 border-electric-purple/30' },
            { icon: Cpu, title: 'IoT', desc: t.l3IoTExample, color: 'text-emerald', bg: 'bg-emerald/10 border-emerald/30' },
          ].map(({ icon: DevIcon, title, desc, color, bg }) => (
            <div key={title} className={`rounded-xl border p-3 ${bg}`}>
              <div className="flex items-center gap-2 mb-1">
                <DevIcon size={14} className={color} />
                <span className={`text-xs font-medium ${color}`}>{title}</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </MicroLesson>

      {/* Network Diagram */}
      <NetworkDiagram
        gatewayConfigured={gatewayConfigured}
        packetState={packetState}
        t={t}
      />

      {/* Gateway Status Banner */}
      <AnimatePresence mode="wait">
        {!gatewayConfigured ? (
          <motion.div
            key="no-gw"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl p-4 bg-amber/10 border border-amber/30 flex items-center gap-3"
          >
            <XCircle size={18} className="text-amber flex-shrink-0" />
            <div>
              <p className="text-xs text-amber font-medium">{t.l3NoGateway}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{t.l3TryWithout}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="gw-set"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl p-4 bg-emerald/10 border border-emerald/30 flex items-center gap-3"
          >
            <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
            <div>
              <p className="text-xs text-emerald font-medium">{t.l3GatewaySet}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-slate-500">{t.l3GatewayIP}:</span>
                <IPText>
                  <span dir="ltr" className="text-[10px] font-mono text-neon-blue">192.168.1.1</span>
                </IPText>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Set Gateway Button */}
        <motion.button
          whileHover={!gatewayConfigured ? { scale: 1.02 } : {}}
          whileTap={!gatewayConfigured ? { scale: 0.98 } : {}}
          onClick={handleSetGateway}
          disabled={gatewayConfigured}
          className={`rounded-xl p-4 flex items-center justify-center gap-3 transition-all cursor-pointer disabled:cursor-default ${
            gatewayConfigured
              ? 'bg-emerald/10 border border-emerald/30 text-emerald'
              : 'bg-neon-blue/10 border border-neon-blue/30 text-neon-blue hover:border-neon-blue/50 hover:bg-neon-blue/20'
          }`}
        >
          {gatewayConfigured ? (
            <CheckCircle2 size={20} />
          ) : (
            <Router size={20} />
          )}
          <span className="text-sm font-medium">{t.l3SetGatewayBtn}</span>
        </motion.button>

        {/* Send Packet Button */}
        <motion.button
          whileHover={packetState === 'idle' ? { scale: 1.02 } : {}}
          whileTap={packetState === 'idle' ? { scale: 0.98 } : {}}
          onClick={handleSendPacket}
          disabled={packetState !== 'idle'}
          className={`rounded-xl p-4 flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-wait ${
            packetState === 'delivered'
              ? 'bg-emerald/10 border border-emerald/30 text-emerald'
              : packetState === 'blocked'
                ? 'bg-rose/10 border border-rose/30 text-rose'
                : 'bg-electric-purple/10 border border-electric-purple/30 text-electric-purple hover:border-electric-purple/50 hover:bg-electric-purple/20'
          }`}
        >
          <Package size={20} className={packetState === 'sending' ? 'animate-pulse' : ''} />
          <span className="text-sm font-medium">{t.l3SendPacketBtn}</span>
        </motion.button>
      </div>

      {/* Feedback Toast */}
      <AnimatePresence>
        {packetState === 'blocked' && (
          <motion.div
            key="feedback-blocked"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={SPRING_SOFT}
            className="rounded-xl p-4 bg-rose/10 border border-rose/30 flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <XCircle size={20} className="text-rose" />
            </motion.div>
            <p className="text-sm text-rose font-medium">{t.l3PacketBlocked}</p>
          </motion.div>
        )}
        {packetState === 'delivered' && (
          <motion.div
            key="feedback-delivered"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={SPRING_SOFT}
            className="rounded-xl p-4 bg-emerald/10 border border-emerald/30 flex items-center gap-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <CheckCircle2 size={20} className="text-emerald" />
            </motion.div>
            <p className="text-sm text-emerald font-medium">{t.l3PacketDelivered}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Feedback — persists after first delivery */}
      <SuccessFeedback
        show={hasDelivered}
        title={t.l3SuccessTitle}
        message={t.l3SuccessMsg}
        hint={t.l3SuccessHint}
      />
    </LevelShell>
  );
}
