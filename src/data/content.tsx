export const PALETTE = [
  {
    key: 'teal',
    tab: 'bg-teal-500 text-black shadow-teal-500/30',
    tabInactive: 'text-teal-400 border-teal-500/20 hover:border-teal-500/50',
    accent: 'text-teal-400',
    glow: 'bg-teal-500/10',
    cardBorder: 'border-teal-500/30',
    progressColor: 'bg-teal-500',
  },
  {
    key: 'blue',
    tab: 'bg-blue-600 text-white shadow-blue-600/30',
    tabInactive: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50',
    accent: 'text-blue-400',
    glow: 'bg-blue-500/10',
    cardBorder: 'border-blue-500/30',
    progressColor: 'bg-blue-500',
  },
  {
    key: 'amber',
    tab: 'bg-amber-500 text-black shadow-amber-500/30',
    tabInactive: 'text-amber-400 border-amber-500/20 hover:border-amber-500/50',
    accent: 'text-amber-400',
    glow: 'bg-amber-500/10',
    cardBorder: 'border-amber-500/30',
    progressColor: 'bg-amber-500',
  },
  {
    key: 'rose',
    tab: 'bg-rose-600 text-white shadow-rose-600/30',
    tabInactive: 'text-rose-400 border-rose-500/20 hover:border-rose-500/50',
    accent: 'text-rose-400',
    glow: 'bg-rose-500/10',
    cardBorder: 'border-rose-500/30',
    progressColor: 'bg-rose-500',
  },
  {
    key: 'cyan',
    tab: 'bg-cyan-600 text-white shadow-cyan-600/30',
    tabInactive: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
    accent: 'text-cyan-400',
    glow: 'bg-cyan-500/10',
    cardBorder: 'border-cyan-500/30',
    progressColor: 'bg-cyan-500',
  },
  {
    key: 'violet',
    tab: 'bg-violet-600 text-white shadow-violet-600/30',
    tabInactive: 'text-violet-400 border-violet-500/20 hover:border-violet-500/50',
    accent: 'text-violet-400',
    glow: 'bg-violet-500/10',
    cardBorder: 'border-violet-500/30',
    progressColor: 'bg-violet-500',
  },
  {
    key: 'emerald',
    tab: 'bg-emerald-600 text-white shadow-emerald-600/30',
    tabInactive: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50',
    accent: 'text-emerald-400',
    glow: 'bg-emerald-500/10',
    cardBorder: 'border-emerald-500/30',
    progressColor: 'bg-emerald-500',
  },
]

export type CarouselItem = {
  key: string
  label: string
  icon: string
  heading: string
  tagline: string
  description: string
  bullets: string[]
  images?: { url: string; caption: string }[]
  art?: string
  highlights: { label: string; value: string }[]
  ctaText: string
}

export const NAV_GROUPS = [
  { title: 'Platforms', subtitle: 'Browse All Platforms', href: '#platforms', seeAll: 'All Platforms' },
  { title: 'Industries', subtitle: 'Explore All Industries', href: '#industries', seeAll: 'All Industries' },
]

export const TICKER_ITEMS = [
  ['VFD Monitoring', 'telemetry & energy analytics'],
  ['Seal Pot Monitoring', 'health & pressure intelligence'],
  ['Conveyor Belt Intelligence', 'AI predictive maintenance'],
  ['Substation & DG Monitoring', 'fault detection'],
  ['Enerlytics', 'AI energy intelligence'],
  ['Fire & Industrial Safety', 'computer vision'],
  ['Workforce Monitoring', 'zone & productivity analytics'],
  ['IOTA™ Industrial IoT Hub', 'multi-plant dashboards'],
]

export const HERO_STATS = [
  { target: 8, label: 'Solution platforms' },
  { target: 9, label: 'Industries served' },
  { target: 7, label: 'Step delivery model' },
  { target: 24, label: 'Support coverage, hrs' },
]

export const PLATFORMS: CarouselItem[] = [
  {
    key: 'vfd',
    label: 'VFD Monitoring',
    icon: '<path d="M3 12h5l2-6 4 12 2-6h5"/>',
    heading: 'VFD Monitoring & Analytics',
    tagline: 'Real-time drive intelligence',
    description:
      'Real-time drive telemetry with anomaly detection and predictive alerts, plus energy optimization analytics — keeping every variable frequency drive visible and efficient.',
    bullets: ['Real-time drive telemetry', 'Anomaly detection & predictive alerts', 'Energy optimization analytics'],
    images: [{ url: '/assets/synoquant/platform-vfd.jpg', caption: 'VFD drive & motor telemetry' }],
    highlights: [
      { label: 'Telemetry', value: 'Real-time' },
      { label: 'Alerts', value: 'Predictive' },
      { label: 'Energy', value: 'Optimized' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'sealpot',
    label: 'Seal Pot Monitoring',
    icon: '<path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/><line x1="12" y1="8" x2="12" y2="12"/>',
    heading: 'Seal Pot Monitoring System',
    tagline: 'Health & pressure intelligence',
    description:
      'Pressure and temperature tracking with seal pot health analytics, delivered through centralized dashboards and alerting across every plant.',
    bullets: ['Pressure & temperature tracking', 'Seal pot health analytics', 'Centralized dashboards & alerting'],
    images: [{ url: '/assets/synoquant/platform-sealpot.jpg', caption: 'Pressure & health monitoring' }],
    highlights: [
      { label: 'Tracking', value: 'Live' },
      { label: 'Health', value: 'Analytics' },
      { label: 'Dashboards', value: 'Central' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'conveyor',
    label: 'Conveyor Belt Intelligence',
    icon: '<rect x="3" y="16" width="18" height="3" rx="1"/><rect x="6" y="9" width="5" height="5" rx="0.8"/><rect x="13" y="9" width="5" height="5" rx="0.8"/>',
    heading: 'Conveyor Belt Intelligence',
    tagline: 'AI predictive maintenance',
    description:
      'Bearing temperature monitoring and chain elongation analysis with predictive maintenance and failure prevention for uninterrupted material movement.',
    bullets: ['Bearing temperature monitoring', 'Chain elongation analysis', 'Predictive maintenance & failure prevention'],
    images: [{ url: '/assets/synoquant/platform-conveyor.jpg', caption: 'Belt health & material flow' }],
    highlights: [
      { label: 'Bearings', value: 'Monitored' },
      { label: 'Chains', value: 'Analyzed' },
      { label: 'Downtime', value: 'Prevented' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'substation',
    label: 'Substation & DG',
    icon: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>',
    heading: 'Substation & DG Monitoring',
    tagline: 'Fault detection & diagnostics',
    description:
      'Unified substation and generator telemetry with fault detection, diagnostics, and energy analytics — one operational intelligence view for critical power assets.',
    bullets: ['Unified substation & generator telemetry', 'Fault detection & diagnostics', 'Energy analytics & operational intelligence'],
    images: [{ url: '/assets/synoquant/platform-substation.jpg', caption: 'Power asset intelligence' }],
    highlights: [
      { label: 'Assets', value: 'Unified' },
      { label: 'Faults', value: 'Detected' },
      { label: 'Energy', value: 'Analytics' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'enerlytics',
    label: 'Enerlytics',
    icon: '<line x1="5" y1="20" x2="5" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="19" y1="20" x2="19" y2="15"/><line x1="3" y1="20" x2="21" y2="20"/>',
    heading: 'Enerlytics — Energy Intelligence',
    tagline: 'AI energy analytics',
    description:
      'AI-powered energy analytics with consumption and demand prediction, plus actionable optimization recommendations that cut cost and carbon together.',
    bullets: ['AI-powered energy analytics', 'Consumption & demand prediction', 'Optimization recommendations'],
    images: [{ url: '/assets/synoquant/platform-enerlytics.jpg', caption: 'Enerlytics — Energy Intelligence' }],
    highlights: [
      { label: 'Analytics', value: 'AI' },
      { label: 'Demand', value: 'Predicted' },
      { label: 'Cost', value: 'Optimized' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'safety',
    label: 'Fire & Safety',
    icon: '<path d="M12 3l7 3v6c0 4.8-3 7.9-7 9-4-1.1-7-4.2-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    heading: 'Fire & Industrial Safety',
    tagline: 'Computer vision at the edge',
    description:
      'Computer-vision fire detection, PPE and unsafe-activity monitoring with hazard alerts and automated emergency response — safety that never blinks.',
    bullets: ['Computer-vision fire detection', 'PPE & unsafe-activity monitoring', 'Hazard alerts & emergency response'],
    images: [{ url: '/assets/synoquant/platform-safety.jpg', caption: 'Vision safety & fire detection' }],
    highlights: [
      { label: 'Detection', value: 'Vision' },
      { label: 'Compliance', value: 'PPE' },
      { label: 'Response', value: 'Automated' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'workforce',
    label: 'Workforce Monitoring',
    icon: '<circle cx="9" cy="8" r="2.6"/><circle cx="17" cy="9.5" r="2.1"/><path d="M4 19c0-2.8 2.2-5 6-5s6 2.2 6 5"/><path d="M15.5 14.3c2.6.3 4.5 2.1 4.5 4.7"/>',
    heading: 'Workforce Monitoring & Intelligence',
    tagline: 'Zone & productivity analytics',
    description:
      'Attendance and movement tracking, zone monitoring with safety compliance, and productivity analytics — visibility into every person and process.',
    bullets: ['Attendance & movement tracking', 'Zone monitoring & safety compliance', 'Productivity analytics'],
    images: [{ url: '/assets/synoquant/platform-workforce.jpg', caption: 'People, zones & productivity' }],
    highlights: [
      { label: 'Tracking', value: 'Live' },
      { label: 'Zones', value: 'Safe' },
      { label: 'Productivity', value: 'Analytics' },
    ],
    ctaText: 'Book a consult',
  },
  {
    key: 'iota',
    label: 'IOTA™ IoT Hub',
    icon: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="4" r="1.6"/><circle cx="12" cy="20" r="1.6"/><circle cx="4" cy="12" r="1.6"/><circle cx="20" cy="12" r="1.6"/><line x1="12" y1="9" x2="12" y2="5.6"/><line x1="12" y1="15" x2="12" y2="18.4"/><line x1="9" y1="12" x2="5.6" y2="12"/><line x1="15" y1="12" x2="18.4" y2="12"/>',
    heading: 'IOTA™ Industrial IoT Hub',
    tagline: 'Multi-plant dashboards',
    description:
      'Device, sensor and telemetry integration with digital twins and AI analytics — one IOTA™ hub unifying every plant into multi-plant operational dashboards.',
    bullets: ['Device, sensor & telemetry integration', 'Digital twins & AI analytics', 'Multi-plant operational dashboards'],
    images: [{ url: '/assets/synoquant/platform-iota.jpg', caption: 'IOTA™ Industrial IoT Hub' }],
    highlights: [
      { label: 'Devices', value: 'Unified' },
      { label: 'Twins', value: 'Digital' },
      { label: 'Plants', value: 'One View' },
    ],
    ctaText: 'Book a consult',
  },
]

export type VerticalItem = CarouselItem & { uses: string[] }

export const VERTICALS: VerticalItem[] = [
  {
    key: 'ai',
    label: 'AI & GenAI',
    icon: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="4" r="1.6"/><circle cx="12" cy="20" r="1.6"/><circle cx="4" cy="12" r="1.6"/><circle cx="20" cy="12" r="1.6"/><line x1="12" y1="9" x2="12" y2="5.6"/><line x1="12" y1="15" x2="12" y2="18.4"/><line x1="9" y1="12" x2="5.6" y2="12"/><line x1="15" y1="12" x2="18.4" y2="12"/>',
    heading: 'AI & GenAI',
    tagline: 'Agentic AI, copilots & intelligent automation',
    description:
      'Generative and agentic AI systems that automate knowledge work, document processing, and complex multi-step tasks across the enterprise.',
    bullets: ['Generative & agentic AI systems', 'Conversational AI & copilots', 'AI workflow automation'],
    images: [{ url: '/assets/synoquant/vertical-ai.jpg', caption: 'Agentic AI copilots & automation' }],
    highlights: [
      { label: 'Agents', value: 'Autonomous' },
      { label: 'Copilots', value: 'Everywhere' },
      { label: 'Automation', value: 'Agentic' },
    ],
    uses: ['Enterprise document intelligence', 'Agentic workflow automation', 'Operator and analyst copilots', 'Code generation and review', 'Conversational support and knowledge assistants'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'indai',
    label: 'Industrial AI',
    icon: '<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/>',
    heading: 'Industrial AI',
    tagline: 'Vision, predictive maintenance & digital twins',
    description:
      'Machine learning and computer vision applied to plant operations — predicting failures, digitizing inspections, and turning sensor data into decisions.',
    bullets: ['Computer vision for safety', 'Predictive maintenance', 'Digital twins'],
    images: [{ url: '/assets/synoquant/vertical-indai.jpg', caption: 'Vision, prediction & digital twins' }],
    highlights: [
      { label: 'Vision', value: 'Edge' },
      { label: 'Failures', value: 'Predicted' },
      { label: 'Twins', value: 'Digital' },
    ],
    uses: ['Predictive maintenance', 'Vision-based safety monitoring', 'Digital twins and simulation', 'Quality inspection', 'Telemetry anomaly detection'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'entauto',
    label: 'Enterprise Automation',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6"/>',
    heading: 'Enterprise Automation',
    tagline: 'Workflows that run themselves',
    description:
      'Workflow and document automation for finance, compliance, HR, and operations — eliminating manual, repetitive processes across the enterprise.',
    bullets: ['Workflow & document processing', 'Compliance automation', 'Decision-support systems'],
    images: [{ url: '/assets/synoquant/vertical-entauto.jpg', caption: 'Workflows that run themselves' }],
    highlights: [
      { label: 'Workflows', value: 'Automated' },
      { label: 'Documents', value: 'AI Read' },
      { label: 'Cycle Time', value: 'Cut' },
    ],
    uses: ['Document and invoice processing', 'Compliance automation', 'Decision-support systems', 'Workflow orchestration', 'Legacy system integration'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'data',
    label: 'Data & Intelligence',
    icon: '<line x1="5" y1="20" x2="5" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="19" y1="20" x2="19" y2="15"/><line x1="3" y1="20" x2="21" y2="20"/>',
    heading: 'Data & Intelligence',
    tagline: 'From raw data to live decisions',
    description:
      'Data engineering, business intelligence, and predictive analytics that turn raw operational data into dashboards and forecasts.',
    bullets: ['Data engineering & BI', 'Predictive analytics', 'Real-time dashboards'],
    images: [{ url: '/assets/synoquant/vertical-data.jpg', caption: 'Raw data to live decisions' }],
    highlights: [
      { label: 'Pipelines', value: 'Streaming' },
      { label: 'Forecasts', value: 'ML' },
      { label: 'Dashboards', value: 'Live' },
    ],
    uses: ['Data engineering & pipelines', 'Predictive analytics', 'Real-time dashboards', 'Self-serve BI', 'Forecasting and scenario planning'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'cloud',
    label: 'Cloud & Platform',
    icon: '<path d="M7 18h11a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 8.1 8.6 4.5 4.5 0 0 0 7 18z"/>',
    heading: 'Cloud & Platform',
    tagline: 'Elastic, secure, cloud-native platforms',
    description:
      'Cloud-native platforms, APIs, and secure DevOps — the foundation for reliable, scalable enterprise systems.',
    bullets: ['Enterprise platforms', 'API integration', 'Secure deployment & ops'],
    images: [{ url: '/assets/synoquant/vertical-cloud.jpg', caption: 'Elastic, secure, cloud-native' }],
    highlights: [
      { label: 'Cloud', value: 'Native' },
      { label: 'Scale', value: 'Elastic' },
      { label: 'Ops', value: 'Secure' },
    ],
    uses: ['Enterprise platform engineering', 'API integration', 'Secure deployment & ops', 'Cloud migration', 'Resilience and scaling'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'iot',
    label: 'IoT & Edge AI',
    icon: '<circle cx="12" cy="18" r="1.4"/><path d="M8 14.5a5.6 5.6 0 0 1 8 0"/><path d="M4.8 11.3a10 10 0 0 1 14.4 0"/>',
    heading: 'IoT & Edge AI',
    tagline: 'Sensors to dashboards, edge to cloud',
    description:
      'End-to-end IoT and edge AI — from sensor integration and telemetry pipelines to remote monitoring dashboards.',
    bullets: ['Sensor integration', 'Remote monitoring', 'Industrial IoT platforms'],
    images: [{ url: '/assets/synoquant/vertical-iot.jpg', caption: 'Sensors to dashboards, edge to cloud' }],
    highlights: [
      { label: 'Sensors', value: 'Connected' },
      { label: 'Edge', value: 'Inference' },
      { label: 'MODBUS', value: 'Native' },
    ],
    uses: ['Sensor & MODBUS integration', 'Remote asset monitoring', 'Industrial IoT platforms', 'Edge inference and filtering', 'Multi-site telemetry'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'cyber',
    label: 'Cybersecurity',
    icon: '<path d="M12 3l7 3v6c0 4.8-3 7.9-7 9-4-1.1-7-4.2-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    heading: 'Cybersecurity',
    tagline: 'Secure by design, monitored always',
    description:
      'Security monitoring, access control, and compliance-ready builds for industrial and enterprise environments.',
    bullets: ['Monitoring & alerting', 'Access & audit controls', 'Compliance-ready builds'],
    images: [{ url: '/assets/synoquant/vertical-cyber.jpg', caption: 'Secure by design, monitored always' }],
    highlights: [
      { label: 'Defense', value: 'In-Depth' },
      { label: 'Access', value: 'Least-Privilege' },
      { label: 'Compliance', value: 'Ready' },
    ],
    uses: ['Monitoring & alerting', 'Access & audit controls', 'Compliance-ready builds', 'Vulnerability management', 'Incident response'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'lnd',
    label: 'Learning & Development',
    icon: '<path d="M12 5 2 9l10 4 10-4-10-4z"/><path d="M6 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5"/>',
    heading: 'Learning & Development',
    tagline: 'Building skills that ship solutions',
    description:
      'Corporate and academic training programs that build AI, IoT, and data skills inside your organization.',
    bullets: ['Corporate & faculty training', 'Technical workshops', 'Industry-academia models'],
    images: [{ url: '/assets/synoquant/vertical-lnd.jpg', caption: 'Building skills that ship solutions' }],
    highlights: [
      { label: 'Training', value: 'Role-Based' },
      { label: 'Labs', value: 'Hands-On' },
      { label: 'Academia', value: 'Connected' },
    ],
    uses: ['Corporate & faculty training', 'Technical workshops', 'Industry-academia programs', 'Capability roadmaps', 'Hands-on labs & PoCs'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'staffing',
    label: 'Staffing & Talent',
    icon: '<circle cx="9" cy="8" r="2.6"/><circle cx="17" cy="9.5" r="2.1"/><path d="M4 19c0-2.8 2.2-5 6-5s6 2.2 6 5"/><path d="M15.5 14.3c2.6.3 4.5 2.1 4.5 4.7"/>',
    heading: 'Staffing & Talent',
    tagline: 'The right specialists, on demand',
    description:
      'Niche technology staffing and project-based hiring for AI, IoT, cloud, and data roles.',
    bullets: ['Niche technology staffing', 'Project-based hiring', 'Skill-based deployment'],
    images: [{ url: '/assets/synoquant/vertical-staffing.jpg', caption: 'The right specialists, on demand' }],
    highlights: [
      { label: 'Staffing', value: 'Niche' },
      { label: 'Hiring', value: 'Project' },
      { label: 'Deployment', value: 'Skill-Based' },
    ],
    uses: ['Niche technology staffing', 'Project-based hiring', 'Skill-based deployment', 'Team augmentation', 'Talent pipelining'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'managed',
    label: 'Managed Services',
    icon: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="5" rx="1.2"/><rect x="17" y="13" width="4" height="5" rx="1.2"/><path d="M20 18v1a3 3 0 0 1-3 3h-3"/>',
    heading: 'Managed Services',
    tagline: 'Support, monitoring & uptime',
    description:
      'L1—L3 support, monitoring, and long-term operations for platforms we build and run.',
    bullets: ['L1, L2, L3 support', 'Monitoring & maintenance', 'Long-term operations'],
    images: [{ url: '/assets/synoquant/vertical-managed.jpg', caption: 'Support, monitoring & uptime' }],
    highlights: [
      { label: 'Support', value: 'L1–L3' },
      { label: 'Uptime', value: 'Monitored' },
      { label: 'Operations', value: 'Long-Term' },
    ],
    uses: ['L1, L2, L3 support', 'Monitoring & maintenance', 'Incident management', 'Long-term operations', 'Continuous improvement'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'consult',
    label: 'Consulting & Advisory',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z"/>',
    heading: 'Consulting & Advisory',
    tagline: 'Roadmaps that turn intent into ROI',
    description:
      'AI adoption roadmaps, discovery, and solution architecture for organizations planning their next move.',
    bullets: ['AI adoption roadmaps', 'Discovery & assessment', 'Solution architecture'],
    images: [{ url: '/assets/synoquant/vertical-consult.jpg', caption: 'Roadmaps that turn intent into ROI' }],
    highlights: [
      { label: 'Roadmaps', value: 'Phased' },
      { label: 'Discovery', value: 'Structured' },
      { label: 'Advisory', value: 'Vendor-Neutral' },
    ],
    uses: ['AI adoption roadmaps', 'Discovery & assessment', 'Solution architecture', 'Feasibility & ROI analysis', 'Vendor-neutral advisory'],
    ctaText: 'Discuss this capability',
  },
  {
    key: 'coe',
    label: 'Research & CoE',
    icon: '<path d="M10 3h4"/><path d="M10 3v6l-5.5 9.5A1.8 1.8 0 0 0 6 21h12a1.8 1.8 0 0 0 1.5-2.5L14 9V3"/><path d="M8.5 15h7"/>',
    heading: 'Research & CoE',
    tagline: 'Prototype, prove, productionize',
    description:
      'Innovation labs, academic partnerships, and pilot/PoC design for emerging technology initiatives.',
    bullets: ['Innovation labs', 'Academic partnerships', 'Pilot & PoC design'],
    images: [{ url: '/assets/synoquant/vertical-coe.jpg', caption: 'Prototype, prove, productionize' }],
    highlights: [
      { label: 'Labs', value: 'Innovation' },
      { label: 'Partnerships', value: 'Academic' },
      { label: 'PoCs', value: 'Maturing' },
    ],
    uses: ['Innovation labs', 'Academic partnerships', 'Pilot & PoC design', 'Prototype development', 'Technology scouting'],
    ctaText: 'Discuss this capability',
  },
]

export const INDUSTRIES: { key: string; name: string; desc: string; icon: string }[] = [
  {
    key: 'power',
    name: 'Power & Utilities',
    icon: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>',
    desc: 'Surveillance dashboards, grid anomaly detection, and transformer health monitoring.',
  },
  {
    key: 'gas',
    name: 'Gas & Pipelines',
    icon: '<path d="M12 2c1 3-3 4-3 7.5A3.5 3.5 0 0 0 12 13a3.5 3.5 0 0 0 3-5c1.5 1 2.5 3 2.5 5a5.5 5.5 0 1 1-11 0C6.5 8 9 6 12 2z"/>',
    desc: 'Leakage detection, pressure monitoring, and GIS-enabled pipeline surveillance.',
  },
  {
    key: 'safety',
    name: 'Industrial Safety',
    icon: '<path d="M12 3 22 20H2L12 3z"/><line x1="12" y1="9" x2="12" y2="14"/><circle cx="12" cy="17" r="0.9"/>',
    desc: 'Furnace and hazardous-container monitoring with automated emergency escalation.',
  },
  {
    key: 'water',
    name: 'Water & Pump Systems',
    icon: '<path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/>',
    desc: 'Overheating alerts, vibration monitoring, and predictive maintenance scheduling.',
  },
  {
    key: 'conveyor',
    name: 'Plant & Conveyor',
    icon: '<rect x="3" y="16" width="18" height="3" rx="1"/><rect x="6" y="9" width="5" height="5" rx="0.8"/><rect x="13" y="9" width="5" height="5" rx="0.8"/>',
    desc: 'Bearing health, belt tear detection, jam alerts, and production-line efficiency dashboards.',
  },
  {
    key: 'retail',
    name: 'Retail & Consumer',
    icon: '<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    desc: 'Footfall analytics, shelf availability, and demand forecasting.',
  },
  {
    key: 'healthcare',
    name: 'Healthcare',
    icon: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
    desc: 'Patient monitoring, bed occupancy analytics, and clinical workflow support.',
  },
  {
    key: 'steel',
    name: 'Steel Manufacturing',
    icon: '<path d="M3 21V11l5 3v-3l5 3V8l5 3v10H3z"/>',
    desc: 'Furnace monitoring, quality inspection, and energy efficiency tracking.',
  },
  {
    key: 'banking',
    name: 'Banking & Finance',
    icon: '<path d="M3 9 12 4l9 5"/><path d="M5 9v9M9 9v9M15 9v9M19 9v9"/><path d="M3 21h18"/>',
    desc: 'Fraud detection, KYC support, and transaction anomaly monitoring.',
  },
]

export const INDUSTRY_DATA: Record<string, { title: string; desc: string; uses: string[] }> = {
  power: {
    title: 'Power & utilities',
    desc: 'Telemetry-driven monitoring for substations, transformers, and distribution networks — with fault detection and operational intelligence.',
    uses: ['Substation & DG telemetry visualization', 'Transformer health and temperature monitoring', 'Grid anomaly and fault detection', 'Energy analytics and optimization', 'Equipment failure prediction', 'Remote asset monitoring', 'Unauthorized access detection', 'Command center analytics'],
  },
  gas: {
    title: 'Gas supply & pipeline monitoring',
    desc: 'Monitoring gas lines, detecting possible leakage, and reducing operational risk through AI and sensor-driven systems.',
    uses: ['Leakage detection in gas pipelines', 'Pressure variation monitoring', 'Thermal anomaly detection', 'Edge-based alert systems', 'GIS-enabled pipeline monitoring', 'Automatic emergency notifications', 'Smart shutdown triggers', 'Safety compliance dashboards'],
  },
  safety: {
    title: 'Fire & industrial safety',
    desc: 'Computer vision and IoT-enabled monitoring for fire detection, PPE compliance, unsafe activity, and emergency response.',
    uses: ['Computer-vision fire detection', 'PPE compliance monitoring', 'Unsafe activity detection', 'Furnace temperature and hotspot detection', 'Hazardous container leakage detection', 'Restricted-zone monitoring', 'Hazard alert automation', 'Emergency escalation systems'],
  },
  water: {
    title: 'Water pumps & river extraction operations',
    desc: 'Monitoring overheating, sand-related wear, and abnormal performance in pump systems used in river extraction and related operations.',
    uses: ['Pump overheating alerts', 'Automatic shutdown on unsafe temperature thresholds', 'Vibration and load monitoring', 'Dry-run detection', 'Sand-induced wear monitoring', 'Flow irregularity analysis', 'Predictive maintenance scheduling', 'Energy usage optimization'],
  },
  conveyor: {
    title: 'Conveyor belt & plant monitoring',
    desc: 'Continuous monitoring of material movement and machine health for steel, mining, manufacturing, logistics, and process plants.',
    uses: ['Bearing temperature monitoring', 'Chain elongation analysis', 'Conveyor belt tear and misalignment detection', 'Jam detection and automatic alerts', 'Material flow analysis', 'Predictive maintenance & failure prevention', 'Production line efficiency dashboards', 'Safety zone monitoring'],
  },
  retail: {
    title: 'Consumer products & retail',
    desc: 'AI-enabled business intelligence and automation for startups and established retail companies.',
    uses: ['Smart inventory monitoring', 'Demand forecasting', 'Store footfall analytics', 'Shelf availability detection', 'Customer behavior insights', 'AI recommendation engines', 'Checkout and queue analytics', 'Retail fraud and shrinkage detection'],
  },
  healthcare: {
    title: 'Healthcare',
    desc: 'Technology solutions that improve patient care, hospital operations, and healthcare delivery efficiency.',
    uses: ['Patient monitoring systems', 'AI-assisted diagnostics', 'Medical imaging support', 'Hospital asset tracking', 'Bed occupancy analytics', 'Pharmacy automation', 'Clinical workflow support', 'Operational dashboards for hospitals'],
  },
  steel: {
    title: 'Steel industry',
    desc: 'A core focus area where Synoquant adds value through industrial AI, process intelligence, and platform-based monitoring.',
    uses: ['Furnace monitoring', 'Conveyor belt intelligence', 'VFD & drive monitoring', 'Predictive maintenance', 'Quality inspection through vision systems', 'Safety zone compliance', 'Energy efficiency monitoring', 'Equipment health dashboards'],
  },
  banking: {
    title: 'Banking & finance',
    desc: 'Automation, analytics, and intelligence-driven customer and risk operations for financial institutions.',
    uses: ['Fraud detection', 'Risk analytics', 'Intelligent KYC support', 'Document automation', 'Customer service copilots', 'Compliance monitoring', 'Transaction anomaly detection', 'Decision-support dashboards'],
  },
}

export const PROCESS_STEPS = [
  { num: '1', title: 'Discover', desc: 'Understand the problem, environment, and technical context.' },
  { num: '2', title: 'Design', desc: 'Solution architecture, use-case plan, implementation roadmap.' },
  { num: '3', title: 'Build', desc: 'Develop the platform, analytics, or automation solution.' },
  { num: '4', title: 'Test', desc: 'Validate for performance, reliability, and usability.' },
  { num: '5', title: 'Deploy', desc: 'Implement in the real environment with proper controls.' },
  { num: '6', title: 'Support', desc: 'Ongoing monitoring, maintenance, and enhancement.' },
  { num: '7', title: 'Improve', desc: 'Refine using feedback, analytics, and evolving needs.' },
]

export const ENGAGE_CHIPS = [
  'Consulting & advisory',
  'Discovery & assessment',
  'Proof of concept',
  'Pilot implementation',
  'Full-scale deployment',
  'Subscription services',
  'Managed services',
  'Training & enablement',
  'Strategic partnerships',
]

export const WHY_ITEMS: { title: string; desc: string }[] = [
  { title: 'Real-time telemetry & monitoring', desc: 'Continuous visibility across every connected asset.' },
  { title: 'AI-driven predictive analytics', desc: 'Predict failures before they impact production.' },
  { title: 'Computer vision & video intelligence', desc: 'Safety and quality monitoring at the edge.' },
  { title: 'Multi-site operational visibility', desc: 'One command view across every plant.' },
  { title: 'Cloud-native scalable architecture', desc: 'Platforms that grow with your operation.' },
  { title: 'Secure enterprise-grade deployment', desc: 'Compliance and data integrity from day one.' },
  { title: 'Integration with existing systems', desc: 'MODBUS, telemetry, and legacy plant equipment.' },
  { title: 'Faster incident detection & response', desc: 'Alerts and escalation when every minute matters.' },
]

export const LEADERS = [
  {
    key: 'ceo',
    name: 'Rajanikant Prasad',
    role: 'Director & CEO · 28+ years',
    summary: 'Business direction, growth, partnerships, and strategic positioning.',
    initials: 'RP',
  },
  {
    key: 'cto',
    name: 'Dr. Manas Kumar Rath',
    role: 'Director & CTO · 25+ years',
    summary: 'Technology vision, architecture, AI research, and platform innovation.',
    initials: 'MR',
  },
  {
    key: 'coo',
    name: 'Devashish Pattanayak',
    role: 'Director & COO · 19+ years',
    summary: 'End-to-end delivery, operational governance, and customer success.',
    initials: 'DP',
  },
  {
    key: 'clipo',
    name: 'Dr. Tanmaya Swain',
    role: 'Director & CLIPO · 15+ years',
    summary: 'Training, academic partnerships, CoEs, and talent development.',
    initials: 'TS',
  },
]

export const LEADER_DATA: Record<string, { title: string; role: string; desc: string; focus: string }> = {
  ceo: {
    title: 'Rajanikant Prasad',
    role: 'Director & Chief Executive Officer · 28+ years experience',
    desc: 'A seasoned business and technology leader with nearly three decades of experience in enterprise technology, digital transformation, business development, and strategic partnerships across leading IT and consulting organizations. He has successfully led large-scale transformation initiatives, built high-performing teams, managed multi-million-dollar business portfolios, and developed long-term relationships with global enterprises and public sector organizations.',
    focus: 'Defining the company\u2019s vision and growth strategy, driving business expansion, investor and government relations, corporate partnerships, market positioning, and overall organizational performance — with a strong focus on establishing Synoquant as a trusted technology enablement and industrial AI transformation partner.',
  },
  cto: {
    title: 'Dr. Manas Kumar Rath',
    role: 'Director & Chief Technology Officer · 25+ years experience',
    desc: 'An accomplished technology architect and innovation leader with deep expertise in Artificial Intelligence, Industrial IoT, cloud platforms, enterprise architecture, data engineering, and scalable software product development. He has extensive experience in designing and delivering mission-critical enterprise solutions, AI-driven platforms, and digital transformation programs for large organizations across manufacturing, industrial, and technology sectors.',
    focus: 'Leading the technology vision, product engineering, AI research, platform architecture, cybersecurity, and intellectual property development — building next-generation industrial automation, computer vision, and intelligent analytics solutions that form the company\u2019s core technology portfolio.',
  },
  coo: {
    title: 'Devashish Pattanayak',
    role: 'Director & Chief Operating Officer · 19+ years experience',
    desc: 'A highly experienced operations and delivery executive with a strong background in program management, industrial automation, engineering execution, quality assurance, customer delivery, and operational excellence. He has successfully managed complex technology implementations, cross-functional engineering teams, and large-scale client engagements across industrial and enterprise environments.',
    focus: 'Responsible for end-to-end execution of projects, operational governance, delivery management, customer success, resource optimization, process excellence, and scaling the organization\u2019s industrial AI and IoT implementation capabilities — ensuring predictable execution and superior client outcomes.',
  },
  clipo: {
    title: 'Dr. Tanmaya Swain',
    role: 'Director & Chief Learning & Industry Partnerships Officer · 15+ years experience',
    desc: 'An experienced academic, skilling, and industry engagement leader with extensive expertise in technology education, workforce transformation, corporate learning, institutional partnerships, and talent development. He has worked closely with universities, engineering institutions, government agencies, and corporate organizations to design industry-relevant curricula, certification programs, faculty development initiatives, and innovation ecosystems that enhance employability and technical excellence.',
    focus: 'Leading the company\u2019s technology training and workforce transformation vertical, academic collaborations, corporate learning programs, Centers of Excellence, certification initiatives, internship and research partnerships, and strategic alliances that strengthen Synoquant\u2019s position as a premier technology and industrial skilling organization.',
  },
}

export const OFFICES = ['Corporate Office — Bengaluru', 'Regd Office — Jharkhand', 'Branch Office — Bhubaneswar']
export const EMAILS = ['info@synoquant.in', 'raj@synoquant.in', 'tanmay@synoquant.in', 'manasrath@synoquant.in']

export const FOOTER_COLS = [
  { title: 'Company', links: ['About', 'Platforms', 'Verticals', 'Industries', 'How we work', 'Why us', 'Leadership'] },
  { title: 'Contact', links: [...OFFICES, ...EMAILS] },
  { title: 'Company type', links: ['Synoquant Solutions Ltd.', 'Private Limited Company'] },
]

export const HERO_BG_IMG = '/assets/synoquant/hero.jpg'