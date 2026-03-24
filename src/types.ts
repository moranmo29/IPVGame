// ============================================================
// NetSim — Strict TypeScript Domain Types
// ============================================================

// ─── Network Primitives ────────────────────────────────────
export type Bit = 0 | 1;
export type OctetBits = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];
export type OctetDecimal = number; // 0–255

export interface IPv4Address {
  octets: [OctetDecimal, OctetDecimal, OctetDecimal, OctetDecimal];
}

export interface IPv6Group {
  hex: string; // 4-char hex string, e.g. "2001"
}

export interface IPv6Address {
  groups: [string, string, string, string, string, string, string, string];
}

export interface SubnetInfo {
  cidr: number;
  mask: IPv4Address;
  networkAddress: IPv4Address;
  broadcastAddress: IPv4Address;
  usableHosts: number;
  totalAddresses: number;
  maskBits: Bit[];
}

export interface PacketData {
  id: string;
  sourceIP: string;
  destIP: string;
  sourcePort: number;
  destPort: number;
  protocol: 'TCP' | 'UDP' | 'ICMP';
  encrypted: boolean;
  payload?: string;
}

export interface NATEntry {
  internal: string; // e.g. "192.168.1.5:54321"
  external: string; // e.g. "82.1.2.3:54321"
  destination: string;
  timestamp: number;
}

export interface IPIntelResult {
  ip: string;
  type: 'residential' | 'datacenter';
  isp: string;
  country: string;
  city: string;
  org: string;
  lat: number;
  lng: number;
}

// ─── Gamification / Progression ────────────────────────────
export type LevelId = 1 | 2 | 3 | 4 | 5 | 6;
export const ALL_LEVELS: LevelId[] = [1, 2, 3, 4, 5, 6];

export interface LevelObjective {
  id: string;
  completed: boolean;
}

export interface LevelState {
  id: LevelId;
  unlocked: boolean;
  completed: boolean;
  progress: number; // 0–100
  objectives: Record<string, boolean>;
}

export interface GameState {
  currentLevel: LevelId;
  levels: Record<LevelId, LevelState>;
  chaosEnabled: boolean;
  chaosAnomalies: ChaosAnomaly[];
  totalScore: number;
}

// ─── Chaos Mode ────────────────────────────────────────────
export type AnomalyType =
  | 'bit_flip'
  | 'subnet_mismatch'
  | 'gateway_down'
  | 'broken_nat'
  | 'routing_loop'
  | 'dns_poisoning';

export type ChaosSeverity = 'low' | 'medium' | 'high';

export interface ChaosAnomaly {
  id: string;
  type: AnomalyType;
  affectedLevel: LevelId;
  description: string;
  active: boolean;
  severity: ChaosSeverity;
}

export interface ChaosState {
  enabled: boolean;
  anomalies: ChaosAnomaly[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// ─── Reducer Actions ───────────────────────────────────────
export type GameAction =
  | { type: 'SET_LEVEL'; payload: LevelId }
  | { type: 'COMPLETE_OBJECTIVE'; payload: { level: LevelId; objectiveId: string } }
  | { type: 'COMPLETE_LEVEL'; payload: LevelId }
  | { type: 'UPDATE_PROGRESS'; payload: { level: LevelId; progress: number } }
  | { type: 'ADD_SCORE'; payload: number }
  | { type: 'TOGGLE_CHAOS' }
  | { type: 'SET_CHAOS_DIFFICULTY'; payload: ChaosState['difficulty'] }
  | { type: 'INJECT_ANOMALY'; payload: ChaosAnomaly }
  | { type: 'RESOLVE_ANOMALY'; payload: string }
  | { type: 'CLEAR_ANOMALIES' };

// ─── i18n ──────────────────────────────────────────────────
export type Language = 'en' | 'he';
export type Direction = 'ltr' | 'rtl';

// Level metadata for navigation
export interface LevelMeta {
  id: LevelId;
  iconName: string;
  colorToken: 'neon-blue' | 'amber' | 'electric-purple' | 'emerald';
}

export const LEVEL_META: LevelMeta[] = [
  { id: 1, iconName: 'Lightbulb',   colorToken: 'neon-blue' },
  { id: 2, iconName: 'Network',     colorToken: 'neon-blue' },
  { id: 3, iconName: 'Router',      colorToken: 'neon-blue' },
  { id: 4, iconName: 'RefreshCw',   colorToken: 'amber' },
  { id: 5, iconName: 'Search',      colorToken: 'electric-purple' },
  { id: 6, iconName: 'ShieldCheck', colorToken: 'emerald' },
];

// ─── Utility type helpers ──────────────────────────────────
export function bitsToDecimal(bits: OctetBits): OctetDecimal {
  return bits.reduce((acc, b, i) => acc + b * Math.pow(2, 7 - i), 0);
}

export function decimalToBits(dec: OctetDecimal): OctetBits {
  const bits: Bit[] = [];
  for (let i = 7; i >= 0; i--) {
    bits.push(((dec >> i) & 1) as Bit);
  }
  return bits as OctetBits;
}

export function computeSubnetInfo(baseIP: IPv4Address, cidr: number): SubnetInfo {
  const maskBits: Bit[] = Array(32).fill(0).map((_, i) => (i < cidr ? 1 : 0) as Bit);
  const maskOctets: number[] = [];
  for (let i = 0; i < 4; i++) {
    maskOctets.push(
      maskBits.slice(i * 8, (i + 1) * 8).reduce((a, b, j) => a + b * Math.pow(2, 7 - j), 0)
    );
  }
  const mask: IPv4Address = {
    octets: maskOctets as [number, number, number, number],
  };
  const netAddr: IPv4Address = {
    octets: baseIP.octets.map((o, i) => o & maskOctets[i]) as [number, number, number, number],
  };
  const broadcast: IPv4Address = {
    octets: netAddr.octets.map((o, i) => o | (255 - maskOctets[i])) as [number, number, number, number],
  };
  const totalAddresses = Math.pow(2, 32 - cidr);
  return {
    cidr,
    mask,
    networkAddress: netAddr,
    broadcastAddress: broadcast,
    usableHosts: Math.max(0, totalAddresses - 2),
    totalAddresses,
    maskBits: maskBits as Bit[],
  };
}
