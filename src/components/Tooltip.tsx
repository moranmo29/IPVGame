import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import type { TranslationStrings } from '../translations';

// ─── Single Tooltip ────────────────────────────────────────
interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block align-middle">
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="inline-flex items-center cursor-help"
      >
        <HelpCircle size={12} className="text-neon-blue/60 hover:text-neon-blue transition-colors" />
      </span>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-64 p-3 rounded-xl glass text-xs text-slate-300 leading-relaxed pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-800 border-r border-b border-neon-blue/15" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// ─── TermText: Auto-annotates technical terms with tooltips ─
const TERM_TOOLTIP_MAP: Record<string, keyof TranslationStrings> = {
  'BIT': 'tipBit',
  'BYTE': 'tipByte',
  'Octet': 'tipByte',
  'octet': 'tipByte',
  'IPv4': 'tipIPv4',
  'IPv6': 'tipIPv6',
  'CIDR': 'tipCIDR',
  'Gateway': 'tipGateway',
  'gateway': 'tipGateway',
  'NAT': 'tipNAT',
  'DHCP': 'tipDHCP',
  'TCP': 'tipTCP',
  'ICMP': 'tipICMP',
  'VPN': 'tipVPN',
  'ISP': 'tipISP',
  'DNS': 'tipDNS',
  'Hexadecimal': 'tipHex',
  'hexadecimal': 'tipHex',
  'Subnet Mask': 'tipSubnet',
  'subnet mask': 'tipSubnet',
  'Broadcast': 'tipBroadcast',
  'Proxy': 'tipProxy',
  'proxy': 'tipProxy',
  'Encryption': 'tipEncryption',
};

interface TermTextProps {
  text: string;
  t: TranslationStrings;
}

export function TermText({ text, t }: TermTextProps) {
  const escaped = Object.keys(TERM_TOOLTIP_MAP)
    .sort((a, b) => b.length - a.length) // longest first
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (escaped.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => {
        const tipKey = TERM_TOOLTIP_MAP[part];
        if (tipKey) {
          return (
            <span key={i} className="inline-flex items-center gap-0.5">
              <span className="border-b border-dashed border-neon-blue/30">{part}</span>
              <Tooltip text={t[tipKey]} />
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

// ─── IP Address (always LTR) ───────────────────────────────
export function IPText({ children }: { children: ReactNode }) {
  return (
    <span dir="ltr" className="inline-block font-mono">{children}</span>
  );
}
