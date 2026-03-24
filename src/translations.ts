// ============================================================
// NetSim — i18n Translations (EN / HE)
// ============================================================

export interface TranslationStrings {
  // App shell
  appTitle: string;
  appSubtitle: string;
  levelLabel: string;
  nextLevel: string;
  prevLevel: string;
  language: string;
  chaosMode: string;
  chaosModeDesc: string;
  chaosLocked: string;
  locked: string;
  completed: string;
  objectives: string;
  score: string;

  // Level 1
  l1Title: string;
  l1Subtitle: string;
  l1Desc: string;
  l1Decimal: string;
  l1Binary: string;
  l1Octet: string;
  l1FullIPv4: string;
  l1Target: string;
  l1TargetHint: string;
  l1Matched: string;
  l1TimeTravel: string;
  l1BackToIPv4: string;
  l1IPv6Title: string;
  l1IPv6Desc: string;
  l1IPv6Groups: string;
  l1Exhaustion: string;
  l1ExhaustionDesc: string;
  l1IPv4Count: string;
  l1IPv6Count: string;
  l1Obj1: string;
  l1Obj2: string;
  l1CalcTitle: string;
  l1CalcDesc: string;
  l1CalcFormula: string;
  l1SelectTarget: string;
  l1TargetRouter: string;
  l1TargetDNS: string;
  l1TargetPrivate: string;
  l1TargetCustom: string;
  l1IPv6Target: string;
  l1HowItWorks: string;
  l1PowerLabel: string;
  // MicroLesson & SuccessFeedback — Level 1
  l1LessonBinaryTitle: string;
  l1LessonBinaryBody: string;
  l1LessonHexTitle: string;
  l1LessonHexBody: string;
  l1SuccessIPv4Title: string;
  l1SuccessIPv4Msg: string;
  l1SuccessIPv4Hint: string;
  l1SuccessIPv6Title: string;
  l1SuccessIPv6Msg: string;
  l1SuccessIPv6Hint: string;

  // Level 2
  l2Title: string;
  l2Subtitle: string;
  l2Desc: string;
  l2Mask: string;
  l2CIDR: string;
  l2Network: string;
  l2Host: string;
  l2Local: string;
  l2Internet: string;
  l2Hosts: string;
  l2NetworkAddr: string;
  l2Broadcast: string;
  l2Challenge: string;
  l2ChallengeHint: string;
  l2Solved: string;
  l2Obj1: string;
  // MicroLesson & SuccessFeedback — Level 2
  l2LessonSubnetTitle: string;
  l2LessonSubnetBody: string;
  l2SuccessTitle: string;
  l2SuccessMsg: string;
  l2SuccessHint: string;

  // Level 3
  l3Title: string;
  l3Subtitle: string;
  l3Desc: string;
  l3Obj1: string;
  l3Obj2: string;
  l3DeviceLabel: string;
  l3GatewayLabel: string;
  l3InternetLabel: string;
  l3NoGateway: string;
  l3SetGatewayBtn: string;
  l3GatewaySet: string;
  l3SendPacketBtn: string;
  l3PacketBlocked: string;
  l3PacketDelivered: string;
  l3RealWorld: string;
  l3RealWorldDesc: string;
  l3PhoneExample: string;
  l3LaptopExample: string;
  l3IoTExample: string;
  l3TryWithout: string;
  l3GatewayIP: string;
  // MicroLesson & SuccessFeedback — Level 3
  l3LessonGatewayTitle: string;
  l3LessonGatewayBody: string;
  l3SuccessTitle: string;
  l3SuccessMsg: string;
  l3SuccessHint: string;

  // Level 4
  l4Title: string;
  l4Subtitle: string;
  l4Desc: string;
  l4Obj1: string;
  l4LessonNATTitle: string;
  l4LessonNATBody: string;
  l4PrivateIP: string;
  l4PublicIP: string;
  l4SendPacketBtn: string;
  l4PacketSent: string;
  l4NATRewriting: string;
  l4OriginalSrc: string;
  l4RewrittenSrc: string;
  l4SuccessTitle: string;
  l4SuccessMsg: string;
  l4SuccessHint: string;

  // Level 5
  l5Title: string;
  l5Subtitle: string;
  l5Desc: string;
  l5Obj1: string;
  l5Obj2: string;
  l5LessonIPIntelTitle: string;
  l5LessonIPIntelBody: string;
  l5ClickToInvestigate: string;
  l5Residential: string;
  l5Datacenter: string;
  l5ResidentialDesc: string;
  l5DatacenterDesc: string;
  l5SuccessTitle: string;
  l5SuccessMsg: string;
  l5SuccessHint: string;

  // Level 6
  l6Title: string;
  l6Subtitle: string;
  l6Desc: string;
  l6Obj1: string;
  l6LessonVPNTitle: string;
  l6LessonVPNBody: string;
  l6VPNOff: string;
  l6VPNOn: string;
  l6ISPSees: string;
  l6ISPSeesOn: string;
  l6WebsiteSees: string;
  l6WebsiteSeesOn: string;
  l6ToggleVPN: string;
  l6SuccessTitle: string;
  l6SuccessMsg: string;
  l6SuccessHint: string;

  // Tooltips
  tipBit: string;
  tipByte: string;
  tipIPv4: string;
  tipIPv6: string;
  tipSubnet: string;
  tipCIDR: string;
  tipGateway: string;
  tipNAT: string;
  tipDHCP: string;
  tipTCP: string;
  tipICMP: string;
  tipVPN: string;
  tipISP: string;
  tipDNS: string;
  tipHex: string;
  tipEncryption: string;
  tipProxy: string;
  tipBroadcast: string;
}

export const translations: Record<'en' | 'he', TranslationStrings> = {
  en: {
    appTitle: 'NetSim',
    appSubtitle: 'Zero-to-Hero Networking Simulator',
    levelLabel: 'Level',
    nextLevel: 'Next Level',
    prevLevel: 'Previous Level',
    language: 'Language',
    chaosMode: 'Chaos Mode',
    chaosModeDesc: 'Inject random network anomalies to debug!',
    chaosLocked: 'Complete all 6 levels to unlock Chaos Mode',
    locked: 'Locked',
    completed: 'Completed',
    objectives: 'Objectives',
    score: 'Score',

    // Level 1
    l1Title: 'The Language of Light',
    l1Subtitle: 'Binary & IPv6',
    l1Desc: 'Computers don\'t see numbers \u2014 they see ON and OFF. Each lightbulb is one BIT. Eight bits make one BYTE (an octet). Click the bulbs to build a number!',
    l1Decimal: 'Decimal Value',
    l1Binary: 'Binary',
    l1Octet: 'Octet',
    l1FullIPv4: 'Your IPv4 Address',
    l1Target: 'Target IP',
    l1TargetHint: 'Toggle the bits to match this address!',
    l1Matched: 'Perfect match! You built the IP address!',
    l1TimeTravel: 'Time Travel to IPv6',
    l1BackToIPv4: 'Back to IPv4',
    l1IPv6Title: 'Welcome to IPv6!',
    l1IPv6Desc: 'IPv4 only has ~4.3 billion addresses \u2014 like a crowded city running out of house numbers. IPv6 has 340 undecillion addresses \u2014 enough to assign an IP to every grain of sand on Earth!',
    l1IPv6Groups: '8 Groups of Hexadecimal (128 bits total)',
    l1Exhaustion: 'Address Exhaustion',
    l1ExhaustionDesc: 'In 2011, the last blocks of IPv4 addresses were allocated. IPv6 was created to solve this crisis.',
    l1IPv4Count: '~4.3 Billion',
    l1IPv6Count: '~340 Undecillion',
    l1Obj1: 'Match the target IPv4 address',
    l1Obj2: 'Explore IPv6 addressing',
    l1CalcTitle: 'How Binary Works',
    l1CalcDesc: 'Each bit position has a value that is a power of 2. When a bit is ON (1), its value is added. When OFF (0), it contributes nothing.',
    l1CalcFormula: 'Sum of ON bits = Decimal number',
    l1SelectTarget: 'Select Target',
    l1TargetRouter: 'Home Router',
    l1TargetDNS: 'Google DNS',
    l1TargetPrivate: 'Private Network',
    l1TargetCustom: 'Custom',
    l1IPv6Target: 'IPv6 Target',
    l1HowItWorks: 'How does it work?',
    l1PowerLabel: 'Power of 2',
    l1LessonBinaryTitle: 'The 8-4-2-1 Rule of Light Switches',
    l1LessonBinaryBody: 'Think of 8 light switches on a wall. Each switch has a fixed value — 128, 64, 32, 16, 8, 4, 2, 1. When a switch is ON, you add its value. When OFF, you add nothing. For example, turning ON the "128" and "64" switches gives you 192. That\'s all binary is — adding up which switches are flipped ON!',
    l1LessonHexTitle: 'Hex: Compressing 4 Switches into 1 Letter',
    l1LessonHexBody: 'Writing long strings of 1s and 0s gets messy. Hexadecimal (Hex) is a shortcut: it takes 4 binary digits and squishes them into a single character (0-9 or A-F). For example, 1111 = F, 1010 = A. IPv6 uses hex so addresses stay short and readable.',
    l1SuccessIPv4Title: 'You Built an IP Address!',
    l1SuccessIPv4Msg: 'You just proved that every number in an IP address (0-255) is really just 8 light switches. Computers only understand ON/OFF — you now speak their language!',
    l1SuccessIPv4Hint: 'Next up: every IP address belongs to a "neighborhood" — that\'s subnetting!',
    l1SuccessIPv6Title: 'IPv6 Explorer!',
    l1SuccessIPv6Msg: 'You saw how IPv6 uses 128 bits (vs. IPv4\'s 32) to create practically unlimited addresses. Every smart device on Earth can now have its own unique address.',
    l1SuccessIPv6Hint: 'Fun fact: there are more IPv6 addresses than grains of sand on Earth!',

    // Level 2
    l2Title: 'The Neighborhood',
    l2Subtitle: 'Subnetting',
    l2Desc: 'A subnet mask tells your device: "These addresses are local neighbors; everything else is the wider Internet." Slide to move the boundary!',
    l2Mask: 'Subnet Mask',
    l2CIDR: 'CIDR Notation',
    l2Network: 'Network Part',
    l2Host: 'Host Part',
    l2Local: 'Local Network',
    l2Internet: 'Internet',
    l2Hosts: 'Usable Hosts',
    l2NetworkAddr: 'Network Address',
    l2Broadcast: 'Broadcast Address',
    l2Challenge: 'Challenge: Your office has 50 devices. Find the smallest subnet that fits them all!',
    l2ChallengeHint: 'You need at least 50 usable host addresses. Slide the CIDR until you find the tightest fit!',
    l2Solved: 'Solved! /26 gives 62 usable hosts \u2014 the tightest fit for 50 devices!',
    l2Obj1: 'Find the correct subnet for 50 devices',
    l2LessonSubnetTitle: 'The Fence Around Your Neighborhood',
    l2LessonSubnetBody: 'Imagine your neighborhood has a fence. Everyone inside the fence is a "local neighbor" — you can shout to them directly. Everyone outside needs a mailman (router). The subnet mask decides WHERE the fence goes. A bigger fence (/8) = huge neighborhood, fewer fences. A smaller fence (/28) = tiny neighborhood, many fences. Your job: find the right fence size for exactly 50 houses!',
    l2SuccessTitle: 'Perfect Fence Size!',
    l2SuccessMsg: 'You found /26 — that gives 62 usable addresses, which is the smallest "fence" that fits all 50 devices. Using /25 would waste 76 addresses. Efficient subnetting saves IP addresses for other networks!',
    l2SuccessHint: 'Now that you know how neighborhoods work, let\'s see how devices actually LEAVE the neighborhood — through the gateway!',

    // Level 3
    l3Title: 'The Exit Door',
    l3Subtitle: 'Default Gateway',
    l3Desc: 'Every device on your network \u2014 phone, laptop, smart thermostat \u2014 needs an exit door to reach the Internet. That door is the Default Gateway (your router). Without it, packets are trapped inside your local network!',
    l3Obj1: 'Configure the default gateway',
    l3Obj2: 'Successfully deliver a packet to the Internet',
    l3DeviceLabel: 'Your Devices',
    l3GatewayLabel: 'Gateway (Router)',
    l3InternetLabel: 'Internet',
    l3NoGateway: 'No gateway configured! Packets have nowhere to go.',
    l3SetGatewayBtn: 'Set Default Gateway',
    l3GatewaySet: 'Gateway configured! Packets now have an exit door.',
    l3SendPacketBtn: 'Send Packet to Internet',
    l3PacketBlocked: 'Packet blocked! No gateway to route through.',
    l3PacketDelivered: 'Packet delivered successfully via the gateway!',
    l3RealWorld: 'Real-World Examples',
    l3RealWorldDesc: 'Every device that connects to the Internet needs a default gateway \u2014 from your phone to smart home sensors.',
    l3PhoneExample: 'Your phone connects to a cell tower (gateway) to reach the Internet. Without it, you can only reach devices on the same local WiFi.',
    l3LaptopExample: 'Your laptop uses the home router (usually 192.168.1.1) as its gateway. All traffic to the outside world goes through it.',
    l3IoTExample: 'Smart thermostats, security cameras, and sensors all need a gateway. An IoT sensor without a gateway can only talk to nearby devices.',
    l3TryWithout: 'Try sending without a gateway first!',
    l3GatewayIP: 'Gateway IP',
    l3LessonGatewayTitle: 'The Front Door of Your House',
    l3LessonGatewayBody: 'Your home network is like an apartment building. Devices inside can talk to each other freely — but to send a letter to the outside world, everyone must go through the main entrance. That entrance is the Default Gateway (your router). Without it, your phone, laptop, and smart devices are trapped — they can only talk to each other, never to the Internet!',
    l3SuccessTitle: 'Packet Delivered!',
    l3SuccessMsg: 'Your packet traveled: Device → Gateway (Router) → Internet. The gateway knew where to forward the packet because it has two connections — one to your local network and one to the outside world.',
    l3SuccessHint: 'But wait — the Internet uses PUBLIC IPs, and your device has a PRIVATE IP. How does that work? That\'s NAT!',

    // Level 4
    l4Title: 'The Secret Identity',
    l4Subtitle: 'NAT & Private IPs',
    l4Desc: 'Your private IP is your name at home. When a packet leaves your network, the router rewrites the source IP with its own public IP.',
    l4Obj1: 'Observe NAT rewriting a packet\'s source IP',
    l4LessonNATTitle: 'Your Home Name vs. Your Street Address',
    l4LessonNATBody: 'At home, your family calls you by your first name (private IP like 192.168.1.5). But when you send mail outside, the return address uses the house street address (public IP like 82.1.2.3). NAT (Network Address Translation) is the router doing this swap automatically — it replaces your private IP with its public IP so the Internet can reply back.',
    l4PrivateIP: 'Private IP (Home Name)',
    l4PublicIP: 'Public IP (Street Address)',
    l4SendPacketBtn: 'Send a Packet to Google',
    l4PacketSent: 'Packet sent! Watch the router rewrite the source...',
    l4NATRewriting: 'NAT Rewriting',
    l4OriginalSrc: 'Original Source',
    l4RewrittenSrc: 'Rewritten Source',
    l4SuccessTitle: 'NAT in Action!',
    l4SuccessMsg: 'The router swapped your private IP (192.168.1.5) with its public IP (82.1.2.3). Google\'s server sees 82.1.2.3 — it has no idea your private address exists. When the reply comes back, NAT remembers the swap and delivers it to your device.',
    l4SuccessHint: 'This is why hundreds of devices in your home can share a single public IP address!',

    // Level 5
    l5Title: 'The Digital Private Eye',
    l5Subtitle: 'IP Intelligence',
    l5Desc: 'Every IP address has a physical home and a type. Investigate an IP to discover if it belongs to a residential user or a data center!',
    l5Obj1: 'Investigate a residential IP address',
    l5Obj2: 'Detect a data center (VPN/Proxy) IP',
    l5LessonIPIntelTitle: 'Every IP Has a Story',
    l5LessonIPIntelBody: 'Just like a phone number reveals your country and carrier, an IP address reveals information about its owner. Residential IPs belong to regular people at home (assigned by ISPs like Comcast or Bezeq). Data center IPs belong to server farms — and are often used by VPNs or proxies to hide someone\'s real location.',
    l5ClickToInvestigate: 'Click an IP to investigate it:',
    l5Residential: 'Residential',
    l5Datacenter: 'Data Center',
    l5ResidentialDesc: 'Real person at home, assigned by an ISP',
    l5DatacenterDesc: 'Server farm — likely a VPN or proxy',
    l5SuccessTitle: 'IP Detective!',
    l5SuccessMsg: 'You can now tell the difference between a real home user and a server pretending to be one. Websites use this exact technique to detect fraud, block bots, and identify suspicious traffic.',
    l5SuccessHint: 'But what if you WANT to hide your IP? That\'s where VPNs come in!',

    // Level 6
    l6Title: 'The Invisible Tunnel',
    l6Subtitle: 'VPN',
    l6Desc: 'A VPN creates an encrypted tunnel. Your ISP sees encrypted gibberish, and the destination sees the VPN server\'s IP \u2014 not yours.',
    l6Obj1: 'Toggle the VPN and observe the encrypted tunnel',
    l6LessonVPNTitle: 'A Secret Tunnel Through the Internet',
    l6LessonVPNBody: 'Imagine sending a sealed, locked box through the mail instead of a postcard. Your mail carrier (ISP) can carry it but CAN\'T read what\'s inside. And the return address on the box shows the VPN server — not your home. That\'s a VPN: it encrypts your data so no one in the middle can read it, and it hides your real IP address.',
    l6VPNOff: 'VPN OFF',
    l6VPNOn: 'VPN ON',
    l6ISPSees: 'ISP sees: your real IP + all your traffic',
    l6ISPSeesOn: 'ISP sees: encrypted gibberish',
    l6WebsiteSees: 'Website sees: your real IP',
    l6WebsiteSeesOn: 'Website sees: VPN server IP',
    l6ToggleVPN: 'Toggle VPN',
    l6SuccessTitle: 'Tunnel Activated!',
    l6SuccessMsg: 'With VPN on, your ISP only sees encrypted data going to the VPN server. The website only sees the VPN\'s IP — your real identity stays hidden. Your data travels through a private, encrypted tunnel.',
    l6SuccessHint: 'Congrats! You now understand the full journey of a packet — from binary bits to encrypted tunnels!',

    // Tooltips
    tipBit: 'BIT: The smallest unit of data \u2014 either 0 (OFF) or 1 (ON).',
    tipByte: 'BYTE (Octet): 8 bits grouped together. Can represent values 0\u2013255.',
    tipIPv4: 'IPv4: Internet Protocol version 4. Uses 32-bit addresses (e.g., 192.168.1.1).',
    tipIPv6: 'IPv6: Internet Protocol version 6. Uses 128-bit addresses to solve IPv4 exhaustion.',
    tipSubnet: 'Subnet Mask: Defines which part of an IP is the network vs. host portion.',
    tipCIDR: 'CIDR: Classless Inter-Domain Routing. The /24 notation means the first 24 bits are the network.',
    tipGateway: 'Default Gateway: The router IP that forwards traffic outside your local network.',
    tipNAT: 'NAT: Network Address Translation. Maps private IPs to a single public IP.',
    tipDHCP: 'DHCP: Dynamic Host Configuration Protocol. Automatically assigns IP addresses to devices.',
    tipTCP: 'TCP: Transmission Control Protocol. Ensures reliable, ordered data delivery.',
    tipICMP: 'ICMP: Internet Control Message Protocol. Used for diagnostic tools like ping.',
    tipVPN: 'VPN: Virtual Private Network. Encrypts traffic and masks your real IP address.',
    tipISP: 'ISP: Internet Service Provider. The company that connects you to the Internet.',
    tipDNS: 'DNS: Domain Name System. Translates domain names (google.com) to IP addresses.',
    tipHex: 'Hexadecimal: Base-16 numbering (0\u20139, A\u2013F). Used in IPv6 addresses.',
    tipEncryption: 'Encryption: Scrambling data so only authorized parties can read it.',
    tipProxy: 'Proxy: An intermediary server that forwards requests on your behalf.',
    tipBroadcast: 'Broadcast: A message sent to all devices on a network segment.',
  },

  he: {
    appTitle: 'NetSim',
    appSubtitle: '\u05E1\u05D9\u05DE\u05D5\u05DC\u05D8\u05D5\u05E8 \u05E8\u05E9\u05EA\u05D5\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05D8\u05D9\u05D1\u05D9',
    levelLabel: '\u05E9\u05DC\u05D1',
    nextLevel: '\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0',
    prevLevel: '\u05E9\u05DC\u05D1 \u05E7\u05D5\u05D3\u05DD',
    language: '\u05E9\u05E4\u05D4',
    chaosMode: '\u05DE\u05E6\u05D1 \u05DB\u05D0\u05D5\u05E1',
    chaosModeDesc: '\u05D4\u05D6\u05E8\u05D9\u05E7\u05D5 \u05EA\u05E7\u05DC\u05D5\u05EA \u05E8\u05E9\u05EA \u05D0\u05E7\u05E8\u05D0\u05D9\u05D5\u05EA \u05DC\u05D0\u05D9\u05EA\u05D5\u05E8 \u05D1\u05D0\u05D2\u05D9\u05DD!',
    chaosLocked: '\u05D4\u05E9\u05DC\u05D9\u05DE\u05D5 \u05D0\u05EA \u05DB\u05DC 6 \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05DE\u05E6\u05D1 \u05DB\u05D0\u05D5\u05E1',
    locked: '\u05E0\u05E2\u05D5\u05DC',
    completed: '\u05D4\u05D5\u05E9\u05DC\u05DD',
    objectives: '\u05DE\u05D8\u05E8\u05D5\u05EA',
    score: '\u05E0\u05D9\u05E7\u05D5\u05D3',

    l1Title: '\u05E9\u05E4\u05EA \u05D4\u05D0\u05D5\u05E8',
    l1Subtitle: '\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05D5-IPv6',
    l1Desc: '\u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05DC\u05D0 \u05E8\u05D5\u05D0\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u2014 \u05D4\u05DD \u05E8\u05D5\u05D0\u05D9\u05DD \u05D3\u05DC\u05D5\u05E7/\u05DB\u05D1\u05D5\u05D9. \u05DB\u05DC \u05E0\u05D5\u05E8\u05D4 \u05D4\u05D9\u05D0 BIT \u05D0\u05D7\u05D3. \u05E9\u05DE\u05D5\u05E0\u05D4 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D9\u05D5\u05E6\u05E8\u05D9\u05DD BYTE \u05D0\u05D7\u05D3 (\u05D0\u05D5\u05E7\u05D8\u05D8). \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05E0\u05D5\u05E8\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05D1\u05E0\u05D5\u05EA \u05DE\u05E1\u05E4\u05E8!',
    l1Decimal: '\u05E2\u05E8\u05DA \u05E2\u05E9\u05E8\u05D5\u05E0\u05D9',
    l1Binary: '\u05D1\u05D9\u05E0\u05D0\u05E8\u05D9',
    l1Octet: '\u05D0\u05D5\u05E7\u05D8\u05D8',
    l1FullIPv4: '\u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05E9\u05DC\u05DA',
    l1Target: '\u05DB\u05EA\u05D5\u05D1\u05EA \u05D9\u05E2\u05D3',
    l1TargetHint: '\u05D4\u05D7\u05DC\u05D9\u05E4\u05D5 \u05D0\u05EA \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D6\u05D5!',
    l1Matched: '\u05D4\u05EA\u05D0\u05DE\u05D4 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA! \u05D1\u05E0\u05D9\u05EA\u05DD \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4-IP!',
    l1TimeTravel: '\u05DE\u05E1\u05E2 \u05D1\u05D6\u05DE\u05DF \u05DC-IPv6',
    l1BackToIPv4: '\u05D7\u05D6\u05E8\u05D4 \u05DC-IPv4',
    l1IPv6Title: '!IPv6-\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC',
    l1IPv6Desc: 'IPv4 \u05DE\u05DB\u05D9\u05DC \u05E8\u05E7 ~4.3 \u05DE\u05D9\u05DC\u05D9\u05D0\u05E8\u05D3 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u2014 \u05DB\u05DE\u05D5 \u05E2\u05D9\u05E8 \u05E6\u05E4\u05D5\u05E4\u05D4 \u05E9\u05E0\u05D2\u05DE\u05E8\u05D9\u05DD \u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8\u05D9 \u05D4\u05D1\u05EA\u05D9\u05DD. IPv6 \u05DE\u05DB\u05D9\u05DC 340 \u05D0\u05D5\u05E0\u05D3\u05E6\u05D9\u05DC\u05D9\u05D5\u05DF \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u2014 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DC\u05DB\u05DC \u05D2\u05E8\u05D2\u05D9\u05E8 \u05D7\u05D5\u05DC \u05E2\u05DC \u05E4\u05E0\u05D9 \u05DB\u05D3\u05D5\u05E8 \u05D4\u05D0\u05E8\u05E5!',
    l1IPv6Groups: '8 \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D4\u05E7\u05E1\u05D3\u05E6\u05D9\u05DE\u05DC\u05D9\u05D5\u05EA (128 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D1\u05E1\u05DA \u05D4\u05DB\u05DC)',
    l1Exhaustion: '\u05DE\u05D9\u05E6\u05D5\u05D9 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA',
    l1ExhaustionDesc: '\u05D1-2011 \u05D4\u05D5\u05E7\u05E6\u05D5 \u05D1\u05DC\u05D5\u05E7\u05D9 IPv4 \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD. IPv6 \u05E0\u05D5\u05E6\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E9\u05D1\u05E8.',
    l1IPv4Count: '~4.3 \u05DE\u05D9\u05DC\u05D9\u05D0\u05E8\u05D3',
    l1IPv6Count: '~340 \u05D0\u05D5\u05E0\u05D3\u05E6\u05D9\u05DC\u05D9\u05D5\u05DF',
    l1Obj1: '\u05D4\u05EA\u05D0\u05D9\u05DE\u05D5 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA IPv4 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9\u05EA',
    l1Obj2: '\u05D7\u05E7\u05E8\u05D5 \u05D0\u05EA \u05E2\u05D5\u05DC\u05DD \u05D4-IPv6',
    l1CalcTitle: '\u05D0\u05D9\u05DA \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05E2\u05D5\u05D1\u05D3',
    l1CalcDesc: '\u05DC\u05DB\u05DC \u05DE\u05D9\u05E7\u05D5\u05DD \u05D1\u05D9\u05D8 \u05D9\u05E9 \u05E2\u05E8\u05DA \u05E9\u05D4\u05D5\u05D0 \u05D7\u05D6\u05E7\u05D4 \u05E9\u05DC 2. \u05DB\u05E9\u05D1\u05D9\u05D8 \u05D3\u05DC\u05D5\u05E7 (1), \u05D4\u05E2\u05E8\u05DA \u05E9\u05DC\u05D5 \u05DE\u05EA\u05D7\u05D1\u05E8. \u05DB\u05E9\u05D4\u05D5\u05D0 \u05DB\u05D1\u05D5\u05D9 (0) \u2014 \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05EA\u05D5\u05E8\u05DD.',
    l1CalcFormula: '\u05E1\u05DB\u05D5\u05DD \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05D4\u05D3\u05DC\u05D5\u05E7\u05D9\u05DD = \u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E2\u05E9\u05E8\u05D5\u05E0\u05D9',
    l1SelectTarget: '\u05D1\u05D7\u05E8\u05D5 \u05DE\u05D8\u05E8\u05D4',
    l1TargetRouter: '\u05E0\u05EA\u05D1 \u05D1\u05D9\u05EA\u05D9',
    l1TargetDNS: 'Google DNS',
    l1TargetPrivate: '\u05E8\u05E9\u05EA \u05E4\u05E8\u05D8\u05D9\u05EA',
    l1TargetCustom: '\u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA',
    l1IPv6Target: '\u05DE\u05D8\u05E8\u05EA IPv6',
    l1HowItWorks: '\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3?',
    l1PowerLabel: '\u05D7\u05D6\u05E7\u05D4 \u05E9\u05DC 2',
    l1LessonBinaryTitle: '\u05DB\u05DC\u05DC 8-4-2-1 \u05E9\u05DC \u05DE\u05EA\u05D2\u05D9 \u05D0\u05D5\u05E8',
    l1LessonBinaryBody: '\u05D3\u05DE\u05D9\u05D9\u05E0\u05D5 8 \u05DE\u05EA\u05D2\u05D9 \u05D0\u05D5\u05E8 \u05E2\u05DC \u05E7\u05D9\u05E8. \u05DC\u05DB\u05DC \u05DE\u05EA\u05D2 \u05D9\u05E9 \u05E2\u05E8\u05DA \u05E7\u05D1\u05D5\u05E2 \u2014 128, 64, 32, 16, 8, 4, 2, 1. \u05DB\u05E9\u05DE\u05EA\u05D2 \u05D3\u05DC\u05D5\u05E7, \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05E2\u05E8\u05DA \u05E9\u05DC\u05D5. \u05DB\u05E9\u05D4\u05D5\u05D0 \u05DB\u05D1\u05D5\u05D9 \u2014 \u05DC\u05D0 \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05DB\u05DC\u05D5\u05DD. \u05DC\u05DE\u05E9\u05DC: \u05D4\u05D3\u05DC\u05E7\u05EA "128" \u05D5-"64" \u05E0\u05D5\u05EA\u05E0\u05EA 192. \u05D6\u05D4 \u05D4\u05DB\u05DC \u2014 \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9 \u05D6\u05D4 \u05E4\u05E9\u05D5\u05D8 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05E9\u05DC \u05DE\u05EA\u05D2\u05D9\u05DD \u05D3\u05DC\u05D5\u05E7\u05D9\u05DD!',
    l1LessonHexTitle: 'Hex: \u05D3\u05D7\u05D9\u05E1\u05EA 4 \u05DE\u05EA\u05D2\u05D9\u05DD \u05DC\u05D0\u05D5\u05EA \u05D0\u05D7\u05EA',
    l1LessonHexBody: '\u05DC\u05DB\u05EA\u05D5\u05D1 \u05E9\u05E8\u05E9\u05E8\u05D5\u05EA \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05E9\u05DC 1 \u05D5-0 \u05D6\u05D4 \u05DE\u05D1\u05DC\u05D1\u05DC. \u05D4\u05E7\u05E1\u05D3\u05E6\u05D9\u05DE\u05DC\u05D9 (Hex) \u05D4\u05D5\u05D0 \u05E7\u05D9\u05E6\u05D5\u05E8: \u05D4\u05D5\u05D0 \u05DC\u05D5\u05E7\u05D7 4 \u05E1\u05E4\u05E8\u05D5\u05EA \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9\u05D5\u05EA \u05D5\u05D3\u05D5\u05D7\u05E1 \u05DC\u05EA\u05D5 \u05D0\u05D7\u05EA (0-9 \u05D0\u05D5 A-F). \u05DC\u05DE\u05E9\u05DC: 1111=F, 1010=A. \u05D1-IPv6 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1-Hex \u05DB\u05D3\u05D9 \u05E9\u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D9\u05D9\u05E9\u05D0\u05E8\u05D5 \u05E7\u05E6\u05E8\u05D5\u05EA.',
    l1SuccessIPv4Title: '\u05D1\u05E0\u05D9\u05EA\u05DD \u05DB\u05EA\u05D5\u05D1\u05EA IP!',
    l1SuccessIPv4Msg: '\u05D4\u05D5\u05DB\u05D7\u05EA\u05DD \u05E9\u05DB\u05DC \u05DE\u05E1\u05E4\u05E8 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA IP (\u05D1\u05D9\u05DF 0 \u05DC-255) \u05D4\u05D5\u05D0 \u05D1\u05E2\u05E6\u05DD 8 \u05DE\u05EA\u05D2\u05D9 \u05D0\u05D5\u05E8. \u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05E8\u05E7 \u05D3\u05DC\u05D5\u05E7/\u05DB\u05D1\u05D5\u05D9 \u2014 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05EA\u05DD \u05DE\u05D3\u05D1\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05E4\u05D4 \u05E9\u05DC\u05D4\u05DD!',
    l1SuccessIPv4Hint: '\u05D4\u05D1\u05D0: \u05DB\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05E9\u05D9\u05D9\u05DB\u05EA \u05DC"\u05E9\u05DB\u05D5\u05E0\u05D4" \u2014 \u05D6\u05D4 \u05EA\u05EA-\u05E8\u05E9\u05EA\u05D5\u05EA!',
    l1SuccessIPv6Title: '\u05D7\u05D5\u05E7\u05E8 IPv6!',
    l1SuccessIPv6Msg: '\u05E8\u05D0\u05D9\u05EA\u05DD \u05D0\u05D9\u05DA IPv6 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1-128 \u05D1\u05D9\u05D8\u05D9\u05DD (\u05DC\u05E2\u05D5\u05DE\u05EA 32 \u05D1-IPv4) \u05DB\u05D3\u05D9 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05DB\u05DE\u05D5\u05EA \u05D1\u05DC\u05EA\u05D9 \u05DE\u05D5\u05D2\u05D1\u05DC\u05EA \u05E9\u05DC \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA. \u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05DB\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05D1\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA.',
    l1SuccessIPv6Hint: '\u05E2\u05D5\u05D1\u05D3\u05D4 \u05DE\u05E2\u05E0\u05D9\u05D9\u05E0\u05EA: \u05D9\u05E9 \u05D9\u05D5\u05EA\u05E8 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IPv6 \u05DE\u05D2\u05E8\u05D2\u05D9\u05E8\u05D9 \u05D7\u05D5\u05DC \u05E2\u05DC \u05E4\u05E0\u05D9 \u05DB\u05D3\u05D5\u05E8 \u05D4\u05D0\u05E8\u05E5!',

    l2Title: '\u05D4\u05E9\u05DB\u05D5\u05E0\u05D4',
    l2Subtitle: '\u05EA\u05EA-\u05E8\u05E9\u05EA\u05D5\u05EA (Subnetting)',
    l2Desc: '\u05DE\u05E1\u05D9\u05DB\u05EA \u05EA\u05EA-\u05E8\u05E9\u05EA \u05D0\u05D5\u05DE\u05E8\u05EA \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8: "\u05D4\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D4\u05D0\u05DC\u05D4 \u05D4\u05DF \u05E9\u05DB\u05E0\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05D9\u05DD; \u05D4\u05E9\u05D0\u05E8 \u05D4\u05D5\u05D0 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D4\u05E8\u05D7\u05D1." \u05D4\u05D6\u05D9\u05D6\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D7\u05D5\u05D5\u05DF \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D6\u05D9\u05D6 \u05D0\u05EA \u05D4\u05D2\u05D1\u05D5\u05DC!',
    l2Mask: '\u05DE\u05E1\u05D9\u05DB\u05EA \u05EA\u05EA-\u05E8\u05E9\u05EA',
    l2CIDR: '\u05E1\u05D9\u05DE\u05D5\u05DF CIDR',
    l2Network: '\u05D7\u05DC\u05E7 \u05E8\u05E9\u05EA',
    l2Host: '\u05D7\u05DC\u05E7 \u05DE\u05D0\u05E8\u05D7',
    l2Local: '\u05E8\u05E9\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9\u05EA',
    l2Internet: '\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8',
    l2Hosts: '\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD',
    l2NetworkAddr: '\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA',
    l2Broadcast: '\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D9\u05D3\u05D5\u05E8',
    l2Challenge: '\u05D0\u05EA\u05D2\u05E8: \u05D1\u05DE\u05E9\u05E8\u05D3 \u05E9\u05DC\u05DA \u05D9\u05E9 50 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD. \u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05EA\u05EA-\u05D4\u05E8\u05E9\u05EA \u05D4\u05E7\u05D8\u05E0\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DE\u05DB\u05D9\u05DC\u05D4 \u05D0\u05EA \u05DB\u05D5\u05DC\u05DD!',
    l2ChallengeHint: '\u05D0\u05EA\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA 50 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05DE\u05D0\u05E8\u05D7 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA. \u05D4\u05D6\u05D9\u05D6\u05D5 \u05D0\u05EA \u05D4-CIDR \u05E2\u05D3 \u05E9\u05EA\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05D4\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7\u05EA!',
    l2Solved: '\u05E0\u05E4\u05EA\u05E8! /26 \u05E0\u05D5\u05EA\u05DF 62 \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u2014 \u05D4\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7\u05EA \u05DC-50 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD!',
    l2Obj1: '\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05EA\u05EA-\u05D4\u05E8\u05E9\u05EA \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4 \u05DC-50 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD',
    l2LessonSubnetTitle: '\u05D4\u05D2\u05D3\u05E8 \u05E1\u05D1\u05D9\u05D1 \u05D4\u05E9\u05DB\u05D5\u05E0\u05D4',
    l2LessonSubnetBody: '\u05D3\u05DE\u05D9\u05D9\u05E0\u05D5 \u05E9\u05DC\u05E9\u05DB\u05D5\u05E0\u05D4 \u05E9\u05DC\u05DB\u05DD \u05D9\u05E9 \u05D2\u05D3\u05E8. \u05DB\u05DC \u05DE\u05D9 \u05E9\u05D1\u05EA\u05D5\u05DA \u05D4\u05D2\u05D3\u05E8 \u05D4\u05D5\u05D0 "\u05E9\u05DB\u05DF \u05DE\u05E7\u05D5\u05DE\u05D9" \u2014 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E6\u05E2\u05D5\u05E7 \u05D0\u05DC\u05D9\u05D5 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA. \u05DB\u05DC \u05DE\u05D9 \u05E9\u05DE\u05D7\u05D5\u05E5 \u05DC\u05D2\u05D3\u05E8 \u05E6\u05E8\u05D9\u05DA \u05D3\u05D5\u05D5\u05E8 (\u05E0\u05EA\u05D1). \u05DE\u05E1\u05D9\u05DB\u05EA \u05D4\u05EA\u05EA-\u05E8\u05E9\u05EA \u05E7\u05D5\u05D1\u05E2\u05EA \u05D0\u05D9\u05E4\u05D4 \u05D4\u05D2\u05D3\u05E8 \u05E2\u05D5\u05D1\u05E8. \u05D2\u05D3\u05E8 \u05D2\u05D3\u05D5\u05DC (/8) = \u05E9\u05DB\u05D5\u05E0\u05D4 \u05E2\u05E0\u05E7\u05D9\u05EA. \u05D2\u05D3\u05E8 \u05E7\u05D8\u05DF (/28) = \u05E9\u05DB\u05D5\u05E0\u05D4 \u05D6\u05E2\u05D9\u05E8\u05D4. \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4: \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8 \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7 \u05DC-50 \u05D1\u05EA\u05D9\u05DD!',
    l2SuccessTitle: '\u05D2\u05D5\u05D3\u05DC \u05D2\u05D3\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD!',
    l2SuccessMsg: '\u05DE\u05E6\u05D0\u05EA\u05DD /26 \u2014 \u05E9\u05E0\u05D5\u05EA\u05DF 62 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA, \u05D4\u05D2\u05D3\u05E8 \u05D4\u05E7\u05D8\u05DF \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DE\u05DB\u05D9\u05DC 50 \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD. \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1-/25 \u05D4\u05D9\u05D4 \u05DE\u05D1\u05D6\u05D1\u05D6 76 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA. \u05EA\u05EA-\u05E8\u05E9\u05EA\u05D5\u05EA \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D7\u05D5\u05E1\u05DB\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IP!',
    l2SuccessHint: '\u05E2\u05DB\u05E9\u05D9\u05D5 \u05E9\u05D0\u05EA\u05DD \u05DE\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05D9\u05DA \u05E9\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05D5\u05D1\u05D3\u05D5\u05EA, \u05D1\u05D5\u05D0\u05D5 \u05E0\u05E8\u05D0\u05D4 \u05D0\u05D9\u05DA \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DE\u05D4\u05E9\u05DB\u05D5\u05E0\u05D4 \u2014 \u05D3\u05E8\u05DA \u05D4\u05E9\u05E2\u05E8!',

    l3Title: '\u05D3\u05DC\u05EA \u05D4\u05D9\u05E6\u05D9\u05D0\u05D4',
    l3Subtitle: '\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC',
    l3Desc: '\u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D1\u05E8\u05E9\u05EA \u2014 \u05D8\u05DC\u05E4\u05D5\u05DF, \u05DE\u05D7\u05E9\u05D1 \u05E0\u05D9\u05D9\u05D3, \u05EA\u05E8\u05DE\u05D5\u05E1\u05D8\u05D8 \u05D7\u05DB\u05DD \u2014 \u05E6\u05E8\u05D9\u05DA \u05D3\u05DC\u05EA \u05D9\u05E6\u05D9\u05D0\u05D4 \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8. \u05D4\u05D3\u05DC\u05EA \u05D4\u05D6\u05D5 \u05D4\u05D9\u05D0 \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC (\u05D4\u05E0\u05EA\u05D1). \u05D1\u05DC\u05D9 \u05E9\u05E2\u05E8 \u2014 \u05D4\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05DC\u05DB\u05D5\u05D3\u05D5\u05EA \u05D1\u05E8\u05E9\u05EA \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA!',
    l3Obj1: '\u05D4\u05D2\u05D3\u05D9\u05E8\u05D5 \u05D0\u05EA \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC',
    l3Obj2: '\u05E9\u05DC\u05D7\u05D5 \u05D7\u05D1\u05D9\u05DC\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8',
    l3DeviceLabel: '\u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD',
    l3GatewayLabel: '\u05E9\u05E2\u05E8 (\u05E0\u05EA\u05D1)',
    l3InternetLabel: '\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8',
    l3NoGateway: '\u05DC\u05D0 \u05D4\u05D5\u05D2\u05D3\u05E8 \u05E9\u05E2\u05E8! \u05DC\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05D0\u05D9\u05DF \u05DC\u05D0\u05DF \u05DC\u05DC\u05DB\u05EA.',
    l3SetGatewayBtn: '\u05D4\u05D2\u05D3\u05E8 \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC',
    l3GatewaySet: '\u05D4\u05E9\u05E2\u05E8 \u05D4\u05D5\u05D2\u05D3\u05E8! \u05DC\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05D9\u05E9 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D3\u05DC\u05EA \u05D9\u05E6\u05D9\u05D0\u05D4.',
    l3SendPacketBtn: '\u05E9\u05DC\u05D7 \u05D7\u05D1\u05D9\u05DC\u05D4 \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8',
    l3PacketBlocked: '\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4! \u05D0\u05D9\u05DF \u05E9\u05E2\u05E8 \u05DC\u05E0\u05D9\u05EA\u05D5\u05D1.',
    l3PacketDelivered: '\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05DE\u05E1\u05E8\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D3\u05E8\u05DA \u05D4\u05E9\u05E2\u05E8!',
    l3RealWorld: '\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05DE\u05D4\u05E2\u05D5\u05DC\u05DD \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9',
    l3RealWorldDesc: '\u05DB\u05DC \u05DE\u05DB\u05E9\u05D9\u05E8 \u05E9\u05DE\u05EA\u05D7\u05D1\u05E8 \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05E6\u05E8\u05D9\u05DA \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC \u2014 \u05DE\u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD \u05D5\u05E2\u05D3 \u05D7\u05D9\u05D9\u05E9\u05E0\u05D9\u05DD \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD \u05D7\u05DB\u05DE\u05D9\u05DD.',
    l3PhoneExample: '\u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD \u05DE\u05EA\u05D7\u05D1\u05E8 \u05DC\u05D0\u05E0\u05D8\u05E0\u05D4 \u05E1\u05DC\u05D5\u05DC\u05E8\u05D9\u05EA (\u05E9\u05E2\u05E8) \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8. \u05D1\u05DC\u05E2\u05D3\u05D9\u05D4, \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05E8\u05E7 \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05D5 WiFi.',
    l3LaptopExample: '\u05D4\u05DE\u05D7\u05E9\u05D1 \u05D4\u05E0\u05D9\u05D9\u05D3 \u05E9\u05DC\u05DB\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E0\u05EA\u05D1 \u05D4\u05D1\u05D9\u05EA\u05D9 (\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC 192.168.1.1) \u05DB\u05E9\u05E2\u05E8. \u05DB\u05DC \u05EA\u05E2\u05D1\u05D5\u05E8\u05D4 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4\u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 \u05E2\u05D5\u05D1\u05E8\u05EA \u05D3\u05E8\u05DB\u05D5.',
    l3IoTExample: '\u05EA\u05E8\u05DE\u05D5\u05E1\u05D8\u05D8\u05D9\u05DD \u05D7\u05DB\u05DE\u05D9\u05DD, \u05DE\u05E6\u05DC\u05DE\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05D4 \u05D5\u05D7\u05D9\u05D9\u05E9\u05E0\u05D9\u05DD \u2014 \u05DB\u05D5\u05DC\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05E9\u05E2\u05E8. \u05D7\u05D9\u05D9\u05E9\u05DF IoT \u05D1\u05DC\u05D9 \u05E9\u05E2\u05E8 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D3\u05D1\u05E8 \u05E8\u05E7 \u05E2\u05DD \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD.',
    l3TryWithout: '\u05E0\u05E1\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D1\u05DC\u05D9 \u05E9\u05E2\u05E8 \u05E7\u05D5\u05D3\u05DD!',
    l3GatewayIP: '\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E9\u05E2\u05E8',
    l3LessonGatewayTitle: '\u05D4\u05D3\u05DC\u05EA \u05D4\u05E8\u05D0\u05E9\u05D9\u05EA \u05E9\u05DC \u05D4\u05D1\u05D9\u05EA',
    l3LessonGatewayBody: '\u05D4\u05E8\u05E9\u05EA \u05D4\u05D1\u05D9\u05EA\u05D9\u05EA \u05E9\u05DC\u05DB\u05DD \u05D4\u05D9\u05D0 \u05DB\u05DE\u05D5 \u05D1\u05E0\u05D9\u05D9\u05DF \u05D3\u05D9\u05E8\u05D5\u05EA. \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E4\u05E0\u05D9\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D3\u05D1\u05E8 \u05D6\u05D4 \u05E2\u05DD \u05D6\u05D4 \u05D1\u05D7\u05D5\u05E4\u05E9\u05D9\u05D5\u05EA \u2014 \u05D0\u05D1\u05DC \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05DE\u05DB\u05EA\u05D1 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4\u05D7\u05D9\u05E6\u05D5\u05E0\u05D9, \u05DB\u05D5\u05DC\u05DD \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05E8 \u05D3\u05E8\u05DA \u05D4\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D9\u05EA. \u05D4\u05DB\u05E0\u05D9\u05E1\u05D4 \u05D4\u05D6\u05D5 \u05D4\u05D9\u05D0 \u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D3\u05DC (\u05D4\u05E0\u05EA\u05D1). \u05D1\u05DC\u05E2\u05D3\u05D9\u05D5 \u2014 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF, \u05D4\u05DE\u05D7\u05E9\u05D1 \u05D5\u05D4\u05D7\u05D9\u05D9\u05E9\u05E0\u05D9\u05DD \u05DC\u05DB\u05D5\u05D3\u05D9\u05DD \u2014 \u05D4\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D3\u05D1\u05E8 \u05E8\u05E7 \u05D6\u05D4 \u05E2\u05DD \u05D6\u05D4!',
    l3SuccessTitle: '\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05DE\u05E1\u05E8\u05D4!',
    l3SuccessMsg: '\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05E1\u05E2\u05D4: \u05DE\u05DB\u05E9\u05D9\u05E8 \u2192 \u05E9\u05E2\u05E8 (\u05E0\u05EA\u05D1) \u2192 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8. \u05D4\u05E9\u05E2\u05E8 \u05D9\u05D3\u05E2 \u05DC\u05D0\u05DF \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05DB\u05D9 \u05D9\u05E9 \u05DC\u05D5 \u05E9\u05EA\u05D9 \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u2014 \u05D0\u05D7\u05D3 \u05DC\u05E8\u05E9\u05EA \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA \u05D5\u05D0\u05D7\u05D3 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4\u05D7\u05D9\u05E6\u05D5\u05E0\u05D9.',
    l3SuccessHint: '\u05D0\u05D1\u05DC \u05E8\u05D2\u05E2 \u2014 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1-IP \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9, \u05D5\u05DC\u05DE\u05DB\u05E9\u05D9\u05E8 \u05E9\u05DC\u05DB\u05DD \u05D9\u05E9 IP \u05E4\u05E8\u05D8\u05D9. \u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3? \u05D6\u05D4 NAT!',

    l4Title: '\u05D4\u05D6\u05D4\u05D5\u05EA \u05D4\u05E1\u05D5\u05D3\u05D9\u05EA',
    l4Subtitle: 'NAT \u05D5\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA',
    l4Desc: '\u05D4-IP \u05D4\u05E4\u05E8\u05D8\u05D9 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0 \u05D4\u05E9\u05DD \u05E9\u05DC\u05DA \u05D1\u05D1\u05D9\u05EA. \u05DB\u05E9\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E2\u05D5\u05D6\u05D1\u05EA \u05D0\u05EA \u05D4\u05E8\u05E9\u05EA, \u05D4\u05E0\u05EA\u05D1 \u05DE\u05E9\u05DB\u05EA\u05D1 \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8 \u05DC-IP \u05D4\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05E9\u05DC\u05D5.',
    l4Obj1: '\u05E6\u05E4\u05D5 \u05D1-NAT \u05DE\u05E9\u05DB\u05EA\u05D1 \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8 \u05E9\u05DC \u05D7\u05D1\u05D9\u05DC\u05D4',
    l4LessonNATTitle: '\u05D4\u05E9\u05DD \u05D4\u05D1\u05D9\u05EA\u05D9 \u05DC\u05E2\u05D5\u05DE\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05D7\u05D5\u05D1',
    l4LessonNATBody: '\u05D1\u05D1\u05D9\u05EA, \u05D4\u05DE\u05E9\u05E4\u05D7\u05D4 \u05E7\u05D5\u05E8\u05D0\u05EA \u05DC\u05DA \u05D1\u05E9\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9 (IP \u05E4\u05E8\u05D8\u05D9 \u05DB\u05DE\u05D5 192.168.1.5). \u05D0\u05D1\u05DC \u05DB\u05E9\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05DE\u05DB\u05EA\u05D1 \u05D4\u05D7\u05D5\u05E6\u05D4, \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D7\u05D6\u05E8\u05D4 \u05D4\u05D9\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E8\u05D7\u05D5\u05D1 (IP \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05DE\u05D5 82.1.2.3). NAT \u05D4\u05D5\u05D0 \u05D4\u05E0\u05EA\u05D1 \u05E9\u05E2\u05D5\u05E9\u05D4 \u05D0\u05EA \u05D4\u05D4\u05D7\u05DC\u05E4\u05D4 \u05D4\u05D6\u05D5 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u2014 \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D0\u05EA \u05D4-IP \u05D4\u05E4\u05E8\u05D8\u05D9 \u05D1-IP \u05D4\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05DA \u05E9\u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D9\u05D5\u05DB\u05DC \u05DC\u05D4\u05E9\u05D9\u05D1.',
    l4PrivateIP: 'IP \u05E4\u05E8\u05D8\u05D9 (\u05E9\u05DD \u05D1\u05D9\u05EA\u05D9)',
    l4PublicIP: 'IP \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 (\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05D7\u05D5\u05D1)',
    l4SendPacketBtn: '\u05E9\u05DC\u05D7 \u05D7\u05D1\u05D9\u05DC\u05D4 \u05DC-Google',
    l4PacketSent: '\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4! \u05E6\u05E4\u05D5 \u05D1\u05E0\u05EA\u05D1 \u05DE\u05E9\u05DB\u05EA\u05D1 \u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8...',
    l4NATRewriting: '\u05E9\u05DB\u05EA\u05D5\u05D1 NAT',
    l4OriginalSrc: '\u05DE\u05E7\u05D5\u05E8 \u05DE\u05E7\u05D5\u05E8\u05D9',
    l4RewrittenSrc: '\u05DE\u05E7\u05D5\u05E8 \u05DE\u05E9\u05D5\u05DB\u05EA\u05D1',
    l4SuccessTitle: 'NAT \u05D1\u05E4\u05E2\u05D5\u05DC\u05D4!',
    l4SuccessMsg: '\u05D4\u05E0\u05EA\u05D1 \u05D4\u05D7\u05DC\u05D9\u05E3 \u05D0\u05EA \u05D4-IP \u05D4\u05E4\u05E8\u05D8\u05D9 (192.168.1.5) \u05D1-IP \u05D4\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 (82.1.2.3). \u05E9\u05E8\u05EA Google \u05E8\u05D5\u05D0\u05D4 82.1.2.3 \u2014 \u05D0\u05D9\u05DF \u05DC\u05D5 \u05DE\u05D5\u05E9\u05D2 \u05E9\u05D4\u05DB\u05EA\u05D5\u05D1\u05D4 \u05D4\u05E4\u05E8\u05D8\u05D9\u05EA \u05E7\u05D9\u05D9\u05DE\u05EA. \u05DB\u05E9\u05D4\u05EA\u05E9\u05D5\u05D1\u05D4 \u05D7\u05D5\u05D6\u05E8\u05EA, NAT \u05D6\u05D5\u05DB\u05E8 \u05D0\u05EA \u05D4\u05D4\u05D7\u05DC\u05E4\u05D4 \u05D5\u05DE\u05E2\u05D1\u05D9\u05E8 \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8.',
    l4SuccessHint: '\u05D6\u05D5 \u05D4\u05E1\u05D9\u05D1\u05D4 \u05E9\u05DE\u05D0\u05D5\u05EA \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05E9\u05DC\u05DA \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E9\u05EA\u05E3 IP \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05D0\u05D7\u05D3!',

    l5Title: '\u05D4\u05D1\u05DC\u05E9 \u05D4\u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9',
    l5Subtitle: '\u05DE\u05D5\u05D3\u05D9\u05E2\u05D9\u05DF IP',
    l5Desc: '\u05DC\u05DB\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D9\u05E9 \u05DE\u05D9\u05E7\u05D5\u05DD \u05E4\u05D9\u05D6\u05D9 \u05D5\u05E1\u05D5\u05D2. \u05D7\u05E7\u05E8\u05D5 IP \u05DB\u05D3\u05D9 \u05DC\u05D2\u05DC\u05D5\u05EA \u05D0\u05DD \u05D4\u05D5\u05D0 \u05E9\u05D9\u05D9\u05DA \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D9\u05EA\u05D9 \u05D0\u05D5 \u05DC\u05DE\u05E8\u05DB\u05D6 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD!',
    l5Obj1: '\u05D7\u05E7\u05E8\u05D5 \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05E8\u05D6\u05D9\u05D3\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9\u05EA',
    l5Obj2: '\u05D6\u05D4\u05D5 IP \u05E9\u05DC \u05DE\u05E8\u05DB\u05D6 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD (VPN/\u05E4\u05E8\u05D5\u05E7\u05E1\u05D9)',
    l5LessonIPIntelTitle: '\u05DC\u05DB\u05DC IP \u05D9\u05E9 \u05E1\u05D9\u05E4\u05D5\u05E8',
    l5LessonIPIntelBody: '\u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05DE\u05D5 \u05E9\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF \u05D7\u05D5\u05E9\u05E3 \u05DE\u05D3\u05D9\u05E0\u05D4 \u05D5\u05E1\u05E4\u05E7, \u05DB\u05EA\u05D5\u05D1\u05EA IP \u05D7\u05D5\u05E9\u05E4\u05EA \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DC \u05D4\u05D1\u05E2\u05DC\u05D9\u05DD. \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05D6\u05D9\u05D3\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9\u05D5\u05EA \u05E9\u05D9\u05D9\u05DB\u05D5\u05EA \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05E8\u05D2\u05D9\u05DC\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA (\u05DE\u05D5\u05E7\u05E6\u05D5\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E1\u05E4\u05E7\u05D9\u05DD \u05DB\u05DE\u05D5 \u05D1\u05D6\u05E7 \u05D0\u05D5 HOT). \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E9\u05DC \u05DE\u05E8\u05DB\u05D6\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E9\u05D9\u05D9\u05DB\u05D5\u05EA \u05DC\u05D7\u05D5\u05D5\u05EA \u05E9\u05E8\u05EA\u05D9\u05DD \u2014 \u05D5\u05DC\u05E8\u05D5\u05D1 \u05DE\u05E9\u05DE\u05E9\u05D5\u05EA \u05DC-VPN \u05D0\u05D5 \u05E4\u05E8\u05D5\u05E7\u05E1\u05D9 \u05DC\u05D4\u05E1\u05EA\u05E8\u05EA \u05DE\u05D9\u05E7\u05D5\u05DD.',
    l5ClickToInvestigate: '\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC IP \u05DB\u05D3\u05D9 \u05DC\u05D7\u05E7\u05D5\u05E8:',
    l5Residential: '\u05E8\u05D6\u05D9\u05D3\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9',
    l5Datacenter: '\u05DE\u05E8\u05DB\u05D6 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD',
    l5ResidentialDesc: '\u05D0\u05D3\u05DD \u05D0\u05DE\u05D9\u05EA\u05D9 \u05D1\u05D1\u05D9\u05EA, \u05DE\u05D5\u05E7\u05E6\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E1\u05E4\u05E7',
    l5DatacenterDesc: '\u05D7\u05D5\u05D5\u05EA \u05E9\u05E8\u05EA\u05D9\u05DD \u2014 \u05DB\u05E0\u05E8\u05D0\u05D4 VPN \u05D0\u05D5 \u05E4\u05E8\u05D5\u05E7\u05E1\u05D9',
    l5SuccessTitle: '\u05D1\u05DC\u05E9 IP!',
    l5SuccessMsg: '\u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D4\u05D1\u05D7\u05D9\u05DF \u05D1\u05D9\u05DF \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D9\u05EA\u05D9 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05DC\u05E9\u05E8\u05EA \u05E9\u05DE\u05EA\u05D7\u05D6\u05D4 \u05DC\u05D0\u05D7\u05D3. \u05D0\u05EA\u05E8\u05D9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D8\u05DB\u05E0\u05D9\u05E7\u05D4 \u05D4\u05D6\u05D5 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05D3\u05D9 \u05DC\u05D6\u05D4\u05D5\u05EA \u05D4\u05D5\u05E0\u05D0\u05D5\u05EA, \u05DC\u05D7\u05E1\u05D5\u05DD \u05D1\u05D5\u05D8\u05D9\u05DD \u05D5\u05DC\u05D6\u05D4\u05D5\u05EA \u05EA\u05E0\u05D5\u05E2\u05D4 \u05D7\u05E9\u05D5\u05D3\u05D4.',
    l5SuccessHint: '\u05D0\u05D1\u05DC \u05DE\u05D4 \u05D0\u05DD \u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05E1\u05EA\u05D9\u05E8 \u05D0\u05EA \u05D4-IP \u05E9\u05DC\u05DB\u05DD? \u05DC\u05E9\u05DD \u05DB\u05DA \u05D9\u05E9 VPN!',

    l6Title: '\u05D4\u05DE\u05E0\u05D4\u05E8\u05D4 \u05D4\u05E0\u05E1\u05EA\u05E8\u05EA',
    l6Subtitle: 'VPN',
    l6Desc: 'VPN \u05D9\u05D5\u05E6\u05E8 \u05DE\u05E0\u05D4\u05E8\u05D4 \u05DE\u05D5\u05E6\u05E4\u05E0\u05EA. \u05D4\u05E1\u05E4\u05E7 \u05E8\u05D5\u05D0\u05D4 \u05E9\u05D8\u05D5\u05D9\u05D5\u05EA \u05DE\u05D5\u05E6\u05E4\u05E0\u05D5\u05EA, \u05D5\u05D0\u05EA\u05E8 \u05D4\u05D9\u05E2\u05D3 \u05E8\u05D5\u05D0\u05D4 \u05D0\u05EA \u05D4-IP \u05E9\u05DC \u05E9\u05E8\u05EA \u05D4-VPN \u2014 \u05DC\u05D0 \u05E9\u05DC\u05DA.',
    l6Obj1: '\u05D4\u05E4\u05E2\u05D9\u05DC\u05D5 \u05D0\u05EA \u05D4-VPN \u05D5\u05E6\u05E4\u05D5 \u05D1\u05DE\u05E0\u05D4\u05E8\u05D4 \u05D4\u05DE\u05D5\u05E6\u05E4\u05E0\u05EA',
    l6LessonVPNTitle: '\u05DE\u05E0\u05D4\u05E8\u05D4 \u05E1\u05D5\u05D3\u05D9\u05EA \u05D3\u05E8\u05DA \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8',
    l6LessonVPNBody: '\u05D3\u05DE\u05D9\u05D9\u05E0\u05D5 \u05E9\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05E7\u05D5\u05E4\u05E1\u05D4 \u05E0\u05E2\u05D5\u05DC\u05D4 \u05D1\u05D3\u05D5\u05D0\u05E8 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D2\u05DC\u05D5\u05D9\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4. \u05D4\u05D3\u05D5\u05D5\u05E8 (\u05D4\u05E1\u05E4\u05E7) \u05D9\u05DB\u05D5\u05DC \u05DC\u05E9\u05D0\u05EA \u05D0\u05D5\u05EA\u05D4 \u05D0\u05D1\u05DC \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05E8\u05D5\u05D0 \u05DE\u05D4 \u05D1\u05E4\u05E0\u05D9\u05DD. \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D4\u05D7\u05D6\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E7\u05D5\u05E4\u05E1\u05D4 \u05DE\u05E8\u05D0\u05D4 \u05D0\u05EA \u05E9\u05E8\u05EA \u05D4-VPN \u2014 \u05DC\u05D0 \u05D0\u05EA \u05D4\u05D1\u05D9\u05EA \u05E9\u05DC\u05DB\u05DD. \u05D6\u05D4 VPN: \u05D4\u05D5\u05D0 \u05DE\u05E6\u05E4\u05D9\u05DF \u05D0\u05EA \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DB\u05DA \u05E9\u05D0\u05E3 \u05D0\u05D7\u05D3 \u05D1\u05D0\u05DE\u05E6\u05E2 \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05E8\u05D5\u05D0, \u05D5\u05DE\u05E1\u05EA\u05D9\u05E8 \u05D0\u05EA \u05D4-IP \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9.',
    l6VPNOff: 'VPN \u05DB\u05D1\u05D5\u05D9',
    l6VPNOn: 'VPN \u05D3\u05DC\u05D5\u05E7',
    l6ISPSees: '\u05D4\u05E1\u05E4\u05E7 \u05E8\u05D5\u05D0\u05D4: \u05D4-IP \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9 + \u05DB\u05DC \u05D4\u05EA\u05E0\u05D5\u05E2\u05D4',
    l6ISPSeesOn: '\u05D4\u05E1\u05E4\u05E7 \u05E8\u05D5\u05D0\u05D4: \u05E9\u05D8\u05D5\u05D9\u05D5\u05EA \u05DE\u05D5\u05E6\u05E4\u05E0\u05D5\u05EA',
    l6WebsiteSees: '\u05D4\u05D0\u05EA\u05E8 \u05E8\u05D5\u05D0\u05D4: \u05D4-IP \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9 \u05E9\u05DC\u05DA',
    l6WebsiteSeesOn: '\u05D4\u05D0\u05EA\u05E8 \u05E8\u05D5\u05D0\u05D4: IP \u05E9\u05DC \u05E9\u05E8\u05EA VPN',
    l6ToggleVPN: '\u05D4\u05E4\u05E2\u05DC VPN',
    l6SuccessTitle: '\u05D4\u05DE\u05E0\u05D4\u05E8\u05D4 \u05D4\u05D5\u05E4\u05E2\u05DC\u05D4!',
    l6SuccessMsg: '\u05E2\u05DD VPN \u05D3\u05DC\u05D5\u05E7, \u05D4\u05E1\u05E4\u05E7 \u05E8\u05D5\u05D0\u05D4 \u05E8\u05E7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05D5\u05E6\u05E4\u05E0\u05D9\u05DD \u05E9\u05D4\u05D5\u05DC\u05DB\u05D9\u05DD \u05DC\u05E9\u05E8\u05EA VPN. \u05D4\u05D0\u05EA\u05E8 \u05E8\u05D5\u05D0\u05D4 \u05E8\u05E7 \u05D0\u05EA \u05D4-IP \u05E9\u05DC \u05D4-VPN \u2014 \u05D4\u05D6\u05D4\u05D5\u05EA \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05E9\u05DC\u05DB\u05DD \u05E0\u05E9\u05D0\u05E8\u05EA \u05E0\u05E1\u05EA\u05E8\u05EA.',
    l6SuccessHint: '\u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05EA\u05DD \u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E1\u05E2 \u05D4\u05DE\u05DC\u05D0 \u05E9\u05DC \u05D7\u05D1\u05D9\u05DC\u05D4 \u2014 \u05DE\u05D1\u05D9\u05D8\u05D9\u05DD \u05D1\u05D9\u05E0\u05D0\u05E8\u05D9\u05D9\u05DD \u05D5\u05E2\u05D3 \u05DE\u05E0\u05D4\u05E8\u05D5\u05EA \u05DE\u05D5\u05E6\u05E4\u05E0\u05D5\u05EA!',

    tipBit: 'BIT: \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D4\u05E7\u05D8\u05E0\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05DE\u05D9\u05D3\u05E2 \u2014 0 (\u05DB\u05D1\u05D5\u05D9) \u05D0\u05D5 1 (\u05D3\u05DC\u05D5\u05E7).',
    tipByte: 'BYTE (\u05D0\u05D5\u05E7\u05D8\u05D8): 8 \u05D1\u05D9\u05D8\u05D9\u05DD \u05D9\u05D7\u05D3. \u05D9\u05DB\u05D5\u05DC \u05DC\u05D9\u05D9\u05E6\u05D2 \u05E2\u05E8\u05DB\u05D9\u05DD 0\u2013255.',
    tipIPv4: 'IPv4: \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D2\u05E8\u05E1\u05D4 4. \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA 32-\u05D1\u05D9\u05D8.',
    tipIPv6: 'IPv6: \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D2\u05E8\u05E1\u05D4 6. \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA 128-\u05D1\u05D9\u05D8.',
    tipSubnet: '\u05DE\u05E1\u05D9\u05DB\u05EA \u05EA\u05EA-\u05E8\u05E9\u05EA: \u05DE\u05D2\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D9\u05D6\u05D4 \u05D7\u05DC\u05E7 \u05DE\u05D4-IP \u05D4\u05D5\u05D0 \u05D4\u05E8\u05E9\u05EA \u05D5\u05D0\u05D9\u05D6\u05D4 \u05D4\u05DE\u05D0\u05E8\u05D7.',
    tipCIDR: 'CIDR: \u05E0\u05D9\u05EA\u05D5\u05D1 \u05D1\u05D9\u05DF-\u05D3\u05D5\u05DE\u05D9\u05D9\u05E0\u05D9 \u05DC\u05DC\u05D0 \u05DE\u05D7\u05DC\u05E7\u05D5\u05EA. /24 \u05D0\u05D5\u05DE\u05E8 \u05E9-24 \u05D4\u05D1\u05D9\u05D8\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05D4\u05DD \u05D4\u05E8\u05E9\u05EA.',
    tipGateway: '\u05E9\u05E2\u05E8 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC: \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05E0\u05EA\u05D1 \u05E9\u05DE\u05E2\u05D1\u05D9\u05E8\u05D4 \u05EA\u05E0\u05D5\u05E2\u05D4 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E8\u05E9\u05EA.',
    tipNAT: 'NAT: \u05EA\u05E8\u05D2\u05D5\u05DD \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA. \u05DE\u05DE\u05E4\u05D4 \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05DC\u05DB\u05EA\u05D5\u05D1\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05EA \u05D0\u05D7\u05EA.',
    tipDHCP: 'DHCP: \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05D4\u05E7\u05E6\u05D0\u05D4 \u05D3\u05D9\u05E0\u05DE\u05D9\u05EA. \u05DE\u05E7\u05E6\u05D4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IP.',
    tipTCP: 'TCP: \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05D1\u05E7\u05E8\u05EA \u05E9\u05D9\u05D3\u05D5\u05E8. \u05DE\u05D1\u05D8\u05D9\u05D7 \u05DE\u05E9\u05DC\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D0\u05DE\u05D9\u05DF.',
    tipICMP: 'ICMP: \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA \u05D1\u05E7\u05E8\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8. \u05DE\u05E9\u05DE\u05E9 \u05DC\u05DB\u05DC\u05D9 \u05D0\u05D1\u05D7\u05D5\u05DF \u05DB\u05DE\u05D5 ping.',
    tipVPN: 'VPN: \u05E8\u05E9\u05EA \u05E4\u05E8\u05D8\u05D9\u05EA \u05D5\u05D9\u05E8\u05D8\u05D5\u05D0\u05DC\u05D9\u05EA. \u05DE\u05E6\u05E4\u05D9\u05E0\u05D4 \u05EA\u05E0\u05D5\u05E2\u05D4 \u05D5\u05DE\u05E1\u05EA\u05D9\u05E8\u05D4 \u05D0\u05EA \u05D4-IP.',
    tipISP: 'ISP: \u05E1\u05E4\u05E7 \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8. \u05D4\u05D7\u05D1\u05E8\u05D4 \u05E9\u05DE\u05D7\u05D1\u05E8\u05EA \u05D0\u05D5\u05EA\u05DA \u05DC\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8.',
    tipDNS: 'DNS: \u05DE\u05E2\u05E8\u05DB\u05EA \u05E9\u05DE\u05D5\u05EA \u05D4\u05D3\u05D5\u05DE\u05D9\u05D9\u05DF. \u05DE\u05EA\u05E8\u05D2\u05DE\u05EA \u05E9\u05DE\u05D5\u05EA \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IP.',
    tipHex: '\u05D4\u05E7\u05E1\u05D3\u05E6\u05D9\u05DE\u05DC\u05D9: \u05E1\u05E4\u05D9\u05E8\u05D4 \u05D1\u05D1\u05E1\u05D9\u05E1 16 (0\u20139, A\u2013F). \u05DE\u05E9\u05DE\u05E9 \u05D1\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA IPv6.',
    tipEncryption: '\u05D4\u05E6\u05E4\u05E0\u05D4: \u05E2\u05E8\u05D1\u05D5\u05DC \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DB\u05DA \u05E9\u05E8\u05E7 \u05D2\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D5\u05E8\u05E9\u05D9\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E7\u05E8\u05D5\u05D0.',
    tipProxy: '\u05E4\u05E8\u05D5\u05E7\u05E1\u05D9: \u05E9\u05E8\u05EA \u05DE\u05EA\u05D5\u05D5\u05DA \u05E9\u05DE\u05E2\u05D1\u05D9\u05E8 \u05D1\u05E7\u05E9\u05D5\u05EA \u05D1\u05E9\u05DE\u05DA.',
    tipBroadcast: '\u05E9\u05D9\u05D3\u05D5\u05E8: \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D4\u05E0\u05E9\u05DC\u05D7\u05EA \u05DC\u05DB\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05E7\u05D8\u05E2 \u05E8\u05E9\u05EA.',
  },
};
