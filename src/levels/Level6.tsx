import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Monitor, Wifi, Server, Globe2, Lock, Unlock, BookOpen, Eye, EyeOff } from 'lucide-react';
import { LevelShell } from '../components/LevelShell';
import { MicroLesson } from '../components/MicroLesson';
import { SuccessFeedback } from '../components/SuccessFeedback';
import { TermText, IPText } from '../components/Tooltip';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';

export default function Level6() {
  const { t, isRTL } = useI18n();
  const { completeObjective } = useGame();

  const [vpnOn, setVpnOn] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  useEffect(() => {
    if (hasToggled) {
      completeObjective(6, 'toggleVPN');
    }
  }, [hasToggled, completeObjective]);

  const handleToggle = useCallback(() => {
    setVpnOn(prev => !prev);
    setHasToggled(true);
  }, []);

  const objectiveLabels = useMemo(() => ({
    toggleVPN: t.l6Obj1,
  }), [t]);

  return (
    <LevelShell
      levelId={6}
      icon={ShieldCheck}
      color="emerald"
      title={t.l6Title}
      subtitle={t.l6Subtitle}
      description={<TermText text={t.l6Desc} t={t} />}
      objectiveLabels={objectiveLabels}
    >
      {/* MicroLesson: Secret Tunnel Analogy */}
      <MicroLesson icon={BookOpen} title={t.l6LessonVPNTitle} color="emerald">
        <p className="text-xs text-slate-300 leading-relaxed">{t.l6LessonVPNBody}</p>
      </MicroLesson>

      {/* VPN Flow Diagram */}
      <div className="glass rounded-2xl p-4 sm:p-6 overflow-hidden relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 relative z-10">
          {/* Your PC */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
              <Monitor className="text-neon-blue" size={24} />
            </div>
            <span className="text-[10px] text-slate-400">Your PC</span>
            <IPText>
              <span dir="ltr" className="text-[9px] font-mono text-neon-blue">192.168.1.5</span>
            </IPText>
          </div>

          {/* ISP */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={vpnOn ? { opacity: 0.5 } : { opacity: 1 }}
              className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-600 flex items-center justify-center"
            >
              <Wifi className="text-slate-400" size={24} />
            </motion.div>
            <span className="text-[10px] text-slate-400">ISP</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={vpnOn ? 'vpn-isp' : 'no-vpn-isp'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1 max-w-[100px] text-center"
              >
                {vpnOn ? (
                  <>
                    <EyeOff size={10} className="text-emerald flex-shrink-0" />
                    <span className="text-[9px] text-emerald leading-tight">{t.l6ISPSeesOn}</span>
                  </>
                ) : (
                  <>
                    <Eye size={10} className="text-rose flex-shrink-0" />
                    <span className="text-[9px] text-rose leading-tight">{t.l6ISPSees}</span>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* VPN Server */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={vpnOn ? {
                boxShadow: '0 0 20px rgba(16,185,129,0.3)',
              } : {
                boxShadow: '0 0 0px rgba(0,0,0,0)',
              }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                vpnOn
                  ? 'bg-emerald/20 border-2 border-emerald/60'
                  : 'bg-slate-800/50 border border-slate-600'
              }`}
            >
              <Server className={`transition-colors duration-500 ${vpnOn ? 'text-emerald' : 'text-slate-500'}`} size={24} />
            </motion.div>
            <span className="text-[10px] text-slate-400">VPN Server</span>
            <IPText>
              <span dir="ltr" className={`text-[9px] font-mono transition-colors duration-500 ${vpnOn ? 'text-emerald' : 'text-slate-600'}`}>
                45.76.128.22
              </span>
            </IPText>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-electric-purple/10 border border-electric-purple/30 flex items-center justify-center">
              <Globe2 className="text-electric-purple" size={24} />
            </div>
            <span className="text-[10px] text-slate-400">Website</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={vpnOn ? 'vpn-web' : 'no-vpn-web'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1 max-w-[100px] text-center"
              >
                {vpnOn ? (
                  <span className="text-[9px] text-emerald leading-tight">{t.l6WebsiteSeesOn}</span>
                ) : (
                  <span className="text-[9px] text-rose leading-tight">{t.l6WebsiteSees}</span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Connection line (desktop) */}
        <div className="hidden sm:block absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-0.5 bg-slate-800 z-0" />

        {/* Encrypted tunnel overlay (desktop) */}
        <AnimatePresence>
          {vpnOn && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="hidden sm:block absolute left-[8%] right-[26%] top-[35%] h-[30%] rounded-full border-2 border-emerald/25 bg-emerald/5 z-0"
              style={{ transformOrigin: 'left center' }}
            >
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ x: isRTL ? [100, -100] : [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="flex gap-3"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Lock key={i} size={10} className="text-emerald/30" />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle VPN Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
        className={`w-full rounded-xl p-4 flex items-center justify-center gap-3 transition-all duration-500 cursor-pointer ${
          vpnOn
            ? 'bg-emerald/10 border border-emerald/40 text-emerald hover:bg-emerald/15'
            : 'bg-rose/10 border border-rose/30 text-rose hover:bg-rose/15'
        }`}
      >
        {vpnOn ? <Lock size={20} /> : <Unlock size={20} />}
        <span className="text-sm font-medium">
          {t.l6ToggleVPN}: {vpnOn ? t.l6VPNOn : t.l6VPNOff}
        </span>
      </motion.button>

      {/* Side-by-side comparison */}
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          animate={{ opacity: vpnOn ? 0.4 : 1 }}
          className="glass rounded-xl p-4 text-center"
        >
          <Unlock className={`mx-auto mb-2 ${vpnOn ? 'text-slate-600' : 'text-rose'}`} size={24} />
          <p className={`text-xs font-medium ${vpnOn ? 'text-slate-600' : 'text-rose'}`}>{t.l6VPNOff}</p>
          <div className="mt-2 space-y-1">
            <p className="text-[10px] text-slate-500">{t.l6ISPSees}</p>
            <p className="text-[10px] text-slate-500">{t.l6WebsiteSees}</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: vpnOn ? 1 : 0.4 }}
          className={`rounded-xl p-4 text-center transition-all duration-500 ${
            vpnOn ? 'glass-emerald' : 'glass'
          }`}
        >
          <Lock className={`mx-auto mb-2 ${vpnOn ? 'text-emerald' : 'text-slate-600'}`} size={24} />
          <p className={`text-xs font-medium ${vpnOn ? 'text-emerald' : 'text-slate-600'}`}>{t.l6VPNOn}</p>
          <div className="mt-2 space-y-1">
            <p className="text-[10px] text-slate-500">{t.l6ISPSeesOn}</p>
            <p className="text-[10px] text-slate-500">{t.l6WebsiteSeesOn}</p>
          </div>
        </motion.div>
      </div>

      {/* Success Feedback */}
      <SuccessFeedback
        show={hasToggled}
        title={t.l6SuccessTitle}
        message={t.l6SuccessMsg}
        hint={t.l6SuccessHint}
      />
    </LevelShell>
  );
}
