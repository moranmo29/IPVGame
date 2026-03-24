import { createContext, useState, useCallback, type ReactNode } from 'react';
import type { ChaosState, ChaosAnomaly, AnomalyType, LevelId, ChaosSeverity } from '../types';

export interface ChaosContextValue {
  chaos: ChaosState;
  setDifficulty: (d: ChaosState['difficulty']) => void;
  injectAnomaly: (anomaly: ChaosAnomaly) => void;
  resolveAnomaly: (id: string) => void;
  clearAll: () => void;
  getAnomaliesForLevel: (level: LevelId) => ChaosAnomaly[];
  /** Generate a random anomaly for a given level */
  generateAnomaly: (level: LevelId) => ChaosAnomaly;
}

export const ChaosContext = createContext<ChaosContextValue | null>(null);

// ─── Anomaly Templates ─────────────────────────────────────
const ANOMALY_TEMPLATES: Record<AnomalyType, { description: string; severity: ChaosSeverity }> = {
  bit_flip: { description: 'Random bit flipped in an octet!', severity: 'low' },
  subnet_mismatch: { description: 'Subnet mask doesn\'t match the network!', severity: 'medium' },
  gateway_down: { description: 'Default gateway is unreachable!', severity: 'high' },
  broken_nat: { description: 'NAT table entry is corrupted!', severity: 'medium' },
  routing_loop: { description: 'Packets caught in a routing loop!', severity: 'high' },
  dns_poisoning: { description: 'DNS response has been poisoned!', severity: 'high' },
};

const ANOMALY_TYPES: AnomalyType[] = Object.keys(ANOMALY_TEMPLATES) as AnomalyType[];

let anomalyCounter = 0;

export function ChaosProvider({ children }: { children: ReactNode }) {
  const [chaos, setChaos] = useState<ChaosState>({
    enabled: false,
    anomalies: [],
    difficulty: 'easy',
  });

  const setDifficulty = useCallback((d: ChaosState['difficulty']) => {
    setChaos(prev => ({ ...prev, difficulty: d }));
  }, []);

  const injectAnomaly = useCallback((anomaly: ChaosAnomaly) => {
    setChaos(prev => ({
      ...prev,
      anomalies: [...prev.anomalies, anomaly],
    }));
  }, []);

  const resolveAnomaly = useCallback((id: string) => {
    setChaos(prev => ({
      ...prev,
      anomalies: prev.anomalies.filter(a => a.id !== id),
    }));
  }, []);

  const clearAll = useCallback(() => {
    setChaos(prev => ({ ...prev, anomalies: [] }));
  }, []);

  const getAnomaliesForLevel = useCallback(
    (level: LevelId) => chaos.anomalies.filter(a => a.affectedLevel === level && a.active),
    [chaos.anomalies]
  );

  const generateAnomaly = useCallback(
    (level: LevelId): ChaosAnomaly => {
      const type = ANOMALY_TYPES[Math.floor(Math.random() * ANOMALY_TYPES.length)];
      const template = ANOMALY_TEMPLATES[type];
      anomalyCounter++;
      return {
        id: `anomaly-${anomalyCounter}-${Date.now()}`,
        type,
        affectedLevel: level,
        description: template.description,
        active: true,
        severity: template.severity,
      };
    },
    []
  );

  return (
    <ChaosContext.Provider
      value={{ chaos, setDifficulty, injectAnomaly, resolveAnomaly, clearAll, getAnomaliesForLevel, generateAnomaly }}
    >
      {children}
    </ChaosContext.Provider>
  );
}
