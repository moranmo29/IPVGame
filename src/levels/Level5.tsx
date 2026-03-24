import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { Search, Home, ShieldAlert, BookOpen, MapPin, Globe2 } from 'lucide-react';
import { LevelShell } from '../components/LevelShell';
import { MicroLesson } from '../components/MicroLesson';
import { SuccessFeedback } from '../components/SuccessFeedback';
import { TermText, IPText } from '../components/Tooltip';
import { useI18n } from '../hooks';
import { useGame } from '../hooks';

const SPRING_SOFT: Transition = { type: 'spring', stiffness: 200, damping: 20 };

interface IPRecord {
  ip: string;
  type: 'residential' | 'datacenter';
  isp: string;
  country: string;
  city: string;
}

const IP_DATABASE: IPRecord[] = [
  { ip: '82.102.16.9', type: 'residential', isp: 'Bezeq', country: 'Israel', city: 'Tel Aviv' },
  { ip: '104.26.10.78', type: 'datacenter', isp: 'Cloudflare', country: 'USA', city: 'San Francisco' },
  { ip: '185.199.108.153', type: 'datacenter', isp: 'GitHub/Fastly', country: 'USA', city: 'San Jose' },
  { ip: '176.12.106.73', type: 'residential', isp: 'HOT', country: 'Israel', city: 'Haifa' },
];

export default function Level5() {
  const { t } = useI18n();
  const { completeObjective } = useGame();

  const [selectedIP, setSelectedIP] = useState<IPRecord | null>(null);
  const [investigating, setInvestigating] = useState(false);
  const [foundResidential, setFoundResidential] = useState(false);
  const [foundDatacenter, setFoundDatacenter] = useState(false);

  useEffect(() => {
    if (foundResidential) completeObjective(5, 'inspectResidential');
  }, [foundResidential, completeObjective]);

  useEffect(() => {
    if (foundDatacenter) completeObjective(5, 'inspectDatacenter');
  }, [foundDatacenter, completeObjective]);

  const handleInvestigate = useCallback((record: IPRecord) => {
    if (investigating) return;
    setInvestigating(true);
    setSelectedIP(null);
    setTimeout(() => {
      setSelectedIP(record);
      setInvestigating(false);
      if (record.type === 'residential') setFoundResidential(true);
      if (record.type === 'datacenter') setFoundDatacenter(true);
    }, 1200);
  }, [investigating]);

  const objectiveLabels = useMemo(() => ({
    inspectResidential: t.l5Obj1,
    inspectDatacenter: t.l5Obj2,
  }), [t]);

  const bothFound = foundResidential && foundDatacenter;

  return (
    <LevelShell
      levelId={5}
      icon={Search}
      color="electric-purple"
      title={t.l5Title}
      subtitle={t.l5Subtitle}
      description={<TermText text={t.l5Desc} t={t} />}
      objectiveLabels={objectiveLabels}
    >
      {/* MicroLesson: Every IP Has a Story */}
      <MicroLesson icon={BookOpen} title={t.l5LessonIPIntelTitle} color="purple">
        <p className="text-xs text-slate-300 leading-relaxed">{t.l5LessonIPIntelBody}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-neon-blue/5 border border-neon-blue/20 rounded-lg p-2 text-center">
            <Home size={18} className="text-neon-blue mx-auto mb-1" />
            <p className="text-[10px] font-medium text-neon-blue">{t.l5Residential}</p>
            <p className="text-[9px] text-slate-500">{t.l5ResidentialDesc}</p>
          </div>
          <div className="bg-electric-purple/5 border border-electric-purple/20 rounded-lg p-2 text-center">
            <ShieldAlert size={18} className="text-electric-purple mx-auto mb-1" />
            <p className="text-[10px] font-medium text-electric-purple">{t.l5Datacenter}</p>
            <p className="text-[9px] text-slate-500">{t.l5DatacenterDesc}</p>
          </div>
        </div>
      </MicroLesson>

      {/* IP Selection */}
      <div className="glass rounded-2xl p-4 sm:p-6">
        <p className="text-xs text-slate-400 mb-4">{t.l5ClickToInvestigate}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {IP_DATABASE.map((record) => {
            const isSelected = selectedIP?.ip === record.ip;
            const isRes = record.type === 'residential';
            return (
              <motion.button
                key={record.ip}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleInvestigate(record)}
                disabled={investigating}
                className={`text-xs font-mono px-3 py-3 rounded-xl cursor-pointer border transition-all disabled:opacity-50 ${
                  isSelected
                    ? isRes
                      ? 'bg-neon-blue/20 border-neon-blue/60 text-neon-blue ring-2 ring-neon-blue/30'
                      : 'bg-electric-purple/20 border-electric-purple/60 text-electric-purple ring-2 ring-electric-purple/30'
                    : 'bg-slate-800/50 border-slate-700/30 text-slate-400 hover:border-slate-500'
                }`}
              >
                <Search size={14} className="mx-auto mb-1 opacity-50" />
                <IPText><span dir="ltr">{record.ip}</span></IPText>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Investigation Loading */}
      <AnimatePresence>
        {investigating && (
          <motion.div
            key="investigating"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={SPRING_SOFT}
            className="rounded-xl p-4 bg-electric-purple/10 border border-electric-purple/30 flex items-center gap-3"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
              <Search size={18} className="text-electric-purple" />
            </motion.div>
            <p className="text-sm text-electric-purple animate-pulse">Investigating...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Card */}
      <AnimatePresence>
        {selectedIP && !investigating && (
          <motion.div
            key={selectedIP.ip}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={SPRING_SOFT}
            className={`rounded-xl p-5 border ${
              selectedIP.type === 'residential'
                ? 'bg-neon-blue/5 border-neon-blue/30'
                : 'bg-electric-purple/5 border-electric-purple/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                selectedIP.type === 'residential'
                  ? 'bg-neon-blue/20'
                  : 'bg-electric-purple/20'
              }`}>
                {selectedIP.type === 'residential'
                  ? <Home size={20} className="text-neon-blue" />
                  : <ShieldAlert size={20} className="text-electric-purple" />
                }
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <IPText><span dir="ltr" className="font-mono font-bold text-sm">{selectedIP.ip}</span></IPText>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    selectedIP.type === 'residential'
                      ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20'
                      : 'bg-electric-purple/10 text-electric-purple border border-electric-purple/20'
                  }`}>
                    {selectedIP.type === 'residential' ? t.l5Residential : t.l5Datacenter}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-500">ISP: </span>
                    <span className="text-slate-300">{selectedIP.isp}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Country: </span>
                    <span className="text-slate-300">{selectedIP.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-slate-500" />
                    <span className="text-slate-300">{selectedIP.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe2 size={10} className="text-slate-500" />
                    <span className="text-slate-300">{selectedIP.type === 'residential' ? 'Home User' : 'Server Farm'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress badges */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`glass rounded-xl p-4 text-center transition-all ${foundResidential ? 'ring-2 ring-neon-blue/30' : ''}`}>
          <Home className={`mx-auto mb-2 ${foundResidential ? 'text-neon-blue' : 'text-slate-600'}`} size={24} />
          <p className={`text-xs ${foundResidential ? 'text-neon-blue' : 'text-slate-500'}`}>{t.l5Residential}</p>
          <p className="text-[10px] text-slate-600">{foundResidential ? '✓' : '?'}</p>
        </div>
        <div className={`glass rounded-xl p-4 text-center transition-all ${foundDatacenter ? 'ring-2 ring-electric-purple/30' : ''}`}>
          <ShieldAlert className={`mx-auto mb-2 ${foundDatacenter ? 'text-electric-purple' : 'text-slate-600'}`} size={24} />
          <p className={`text-xs ${foundDatacenter ? 'text-electric-purple' : 'text-slate-500'}`}>{t.l5Datacenter}</p>
          <p className="text-[10px] text-slate-600">{foundDatacenter ? '✓' : '?'}</p>
        </div>
      </div>

      {/* Success Feedback */}
      <SuccessFeedback
        show={bothFound}
        title={t.l5SuccessTitle}
        message={t.l5SuccessMsg}
        hint={t.l5SuccessHint}
      />
    </LevelShell>
  );
}
