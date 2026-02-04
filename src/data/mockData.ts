export interface NavItem {
  label: string;
  path: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  timeToRead: string;
}

export interface Whitepaper {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface AiTool {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isSelfDeveloped: boolean;
  detailedInfo: string;
  features: string[];
  systemInstruction: string;
  knowledgeTags?: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '出海评估', path: '/assessment' },
  { label: '白皮书', path: '/whitepaper' },
  { label: 'AI工具', path: '/ai-tools' },
  { label: '成功案例', path: '/success-cases' },
];

export const WHITEPAPERS: Whitepaper[] = [
  {
    id: 'wp1',
    title: '2024 北美关税变动对中国制造的影响',
    date: '2024-03-15',
    category: '行业白皮书',
    description: '深入分析301条款及最新反倾销政策变动，提供针对性避税建议。',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'wp2',
    title: '北美市场准入：UL与FDA认证完全指南',
    date: '2024-02-10',
    category: '技术趋势',
    description: '制造业出海必备认证流程梳理，降低合规成本与风险。',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400'
  }
];

export const SUCCESS_CASES: CaseStudy[] = [
  {
    id: 'case1',
    title: '某精密机械企业从传统OEM到北美DTC品牌的转型之路',
    category: '品牌转型',
    description: '通过翰高出海平台，该企业在短短12个月内建立了自己的北美售后服务体系，利润率提升35%。',
    author: '陈建国',
    authorRole: 'CEO, 捷迈科技',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400',
    timeToRead: '8 min'
  }
];

export const AI_TOOLS: AiTool[] = [
  // --- 合规与法务 (6) ---
  {
    id: 'reg-query',
    title: 'AI 法规查询',
    description: '实时检索北美联邦及各州最新法律条文，快速定位合规风险。',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '集成CFR（联邦法规集）及USC（美国法典）实时更新数据库，支持自然语言解析复杂法律条文。',
    features: ['多维关键词检索', '条款深度解析', '历史修正案对照'],
    systemInstruction: '你是一位北美法律专家，擅长解读复杂的联邦和州级法规。请准确引用法条，并给出合规建议。',
    knowledgeTags: ['CFR', 'USC', 'Legal']
  },
  {
    id: 'customs-compliance',
    title: 'AI 关务',
    description: '针对关务合规性、反倾销调查以及针对强迫劳动（UFLPA）等专项合规审查。',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '专注于海关法合规审核，确保进出口流程符合美国最新法律框架。',
    features: ['UFLPA合规自检', '反倾销税风险评估', '原产地证明审查'],
    systemInstruction: '你是一位资深海关律师，精通北美海关法。请帮助用户分析关务合规性。',
    knowledgeTags: ['Customs Law', 'UFLPA', 'Audit']
  },
  {
    id: 'osha-ai',
    title: 'OSHA AI助手',
    description: '工厂安全标准、员工保护及职业健康法规实时问答。',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '针对职业安全与健康管理局（OSHA）标准的专项AI工具，帮助工厂通过安全审计。',
    features: ['作业安全评估', 'PPE标准查询', '事故报告指引'],
    systemInstruction: '你是一位OSHA安全检查员，请用专业的视角帮助企业排查安全隐患。',
    knowledgeTags: ['Safety', 'OSHA', 'Factory']
  },
  {
    id: 'electric-safety',
    title: '北美电气安全AI助手',
    description: 'NEC（国家电气规范）与NFPA标准即时查阅与计算。',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '专注电气工程安全、布线标准及UL认证前置自检。',
    features: ['NEC标准查询', '导线容量计算', '认证风险预警'],
    systemInstruction: '你是一位精通NEC和UL 508A的电气工程师。请帮助用户解决布线和认证相关的问题。',
    knowledgeTags: ['NEC', 'UL', 'Electrical']
  },
  {
    id: 'compliance-check',
    title: 'AI 合规自检工具',
    description: '针对特定产品品类，一键生成北美市场准入合规检查清单。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '通过问答形式，自动匹配产品所属的监管部门要求。',
    features: ['准入资质核查', '标签合规审核', '认证项目建议'],
    systemInstruction: '你是一位专业的合规顾问，请列出所有必须满足的北美准入要求。',
    knowledgeTags: ['CPSC', 'FDA', 'EPA']
  },
  {
    id: 'ip-monitor',
    title: 'AI 知识产权监控',
    description: '全网监控商标侵权、外观设计抄袭及竞争对手专利布局。',
    imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '实时抓取USPTO数据，监控主流电商平台的侵权行为。',
    features: ['商标相似度对比', '外观设计侵权分析', '专利布局监测'],
    systemInstruction: '你是一位知识产权律师，精通美国专利商标法。',
    knowledgeTags: ['IP', 'Trademark', 'Patent']
  },

  // --- 跨境物流 (3) ---
  {
    id: 'logistics-customs',
    title: 'AI 关务',
    description: 'HTS分类建议与报关单据智能审核，专注于物流节点效率。',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400',
    category: '跨境物流',
    isSelfDeveloped: true,
    detailedInfo: '辅助物流专员快速完成海关申报准备，降低查验率。',
    features: ['HTS自动分类', '单据纠错', '预录入助手'],
    systemInstruction: '你是一位报关单据审核员，请帮助用户优化清关单据。',
    knowledgeTags: ['HTS', 'Logistics', 'Clearing']
  },
  {
    id: 'logistics-query',
    title: 'AI 物流查询',
    description: '全球航线动态实时监控与物流节点预测。',
    imageUrl: 'https://images.unsplash.com/photo-1494412574737-5917e5a0004d?auto=format&fit=crop&q=80&w=400',
    category: '跨境物流',
    isSelfDeveloped: false,
    detailedInfo: '链接各大港口及承运人数据，提供精准的到货预测。',
    features: ['实时追踪', '港口拥堵指数', 'ETA预测'],
    systemInstruction: '你是一位全球供应链调度专家，请提供最新的物流状态分析。',
    knowledgeTags: ['Tracking', 'ETA', 'Vessel']
  },
  {
    id: 'booking-ai',
    title: 'AI 订舱',
    description: '智能比价与舱位预定，自动匹配最优空海运线路。',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400',
    category: '跨境物流',
    isSelfDeveloped: true,
    detailedInfo: '实时同步运费报价，支持智能拼柜建议。',
    features: ['运费分析', '舱位锁定', '路径优化'],
    systemInstruction: '你是一位货代专家，请根据货物要求推荐最优订舱方案。',
    knowledgeTags: ['Booking', 'Freight', 'Route']
  },

  // --- 财税金融 (3) ---
  {
    id: 'tariff-actuary',
    title: '关税精算师',
    description: '多维度成本模型，计算进口关税对利润的深层影响。',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400',
    category: '财税金融',
    isSelfDeveloped: true,
    detailedInfo: '深度分析关税、杂费对 landed cost 的影响。',
    features: ['利润敏感度', '税负优化', '成本建模'],
    systemInstruction: '你是一位财税顾问，请帮助用户计算产品落地的综合关税成本。',
    knowledgeTags: ['Tax', 'Tariff', 'Finance']
  },
  {
    id: 'daily-tariff',
    title: 'AI 关税每日达',
    description: '每日推送针对您产品品类的最新关税变动及政策解读。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '财税金融',
    isSelfDeveloped: true,
    detailedInfo: '专注于关税政策动态，特别是301条款、排除清单的变动。',
    features: ['政策快讯', '税率变动预警', '豁免申请咨询'],
    systemInstruction: '你是一位贸易合规分析员，请提供每日关税政策解读。',
    knowledgeTags: ['Update', 'Policy', 'Daily']
  },
  {
    id: 'contract-helper',
    title: 'AI 合同助手',
    description: '智能审核商务合同，识别潜在法律漏洞与财税风险点。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '财税金融',
    isSelfDeveloped: true,
    detailedInfo: '支持多语言合同审查，识别回扣、不平等条款等风险。',
    features: ['合规审查', '核心利益对冲', '风险评估'],
    systemInstruction: '你是一位法务审计，请帮助用户识别合同中的财税风险和法律漏洞。',
    knowledgeTags: ['Contract', 'Review', 'Finance']
  },

  // --- 市场洞察 (3) ---
  {
    id: 'business-report',
    title: 'AI 商业研报',
    description: '分钟级生成北美行业竞争格局及市场容量分析。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: '市场洞察',
    isSelfDeveloped: true,
    detailedInfo: '基于最新的行业数据和市场趋势生成深度报告。',
    features: ['竞品地图', 'SWOT分析', '需求预测'],
    systemInstruction: '你是一位行业分析师，请根据市场数据生成研报。',
    knowledgeTags: ['Analysis', 'Report', 'Market']
  },
  {
    id: 'market-crawler',
    title: 'AI 市场爬虫',
    description: '自动化抓取电商平台、社交媒体及行业论坛的实时数据。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: '市场洞察',
    isSelfDeveloped: true,
    detailedInfo: '实时价格追踪与舆情分析，获取市场第一手信号。',
    features: ['价格监控', '情感分析', '竞品追踪'],
    systemInstruction: '你是一位数据挖掘专家，请帮助用户解析市场实时动态。',
    knowledgeTags: ['Data', 'Crawler', 'Price']
  },
  {
    id: 'america-news',
    title: '美洲播报',
    description: '每日聚焦北美政经动态、罢工预警及行业突发事件。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    category: '市场洞察',
    isSelfDeveloped: true,
    detailedInfo: '翰高驻美团队与AI结合的资讯平台，解读对出海企业的影响。',
    features: ['突发预警', '政经解读', '行业机会'],
    systemInstruction: '你是一位美洲资讯专家，请为用户播报最新的市场环境变动。',
    knowledgeTags: ['News', 'Politics', 'America']
  },

  // --- 企业战略 (5) ---
  {
    id: 'mck-strategist',
    title: '麦肯锡战略官',
    description: '采用顶级咨询机构方法论，重塑企业出海战略路径图。',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '利用MECE、7S等框架进行战略解构。',
    features: ['战略定位', '增长策略', '核心竞争力分析'],
    systemInstruction: '你是一位顶级战略顾问，请运用麦肯锡框架为企业出谋划策。',
    knowledgeTags: ['McKinsey', 'Strategy', 'Growth']
  },
  {
    id: 'kearney-procurement',
    title: '科尔尼采购战略',
    description: '优化全球采购布局，提升供应链抗风险能力与成本竞争力。',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '专注于供应链上游优化，实施科学的供应商评估。',
    features: ['品类管理', '采购降本', '韧性评估'],
    systemInstruction: '你是一位采购战略专家，请协助用户优化供应链布局。',
    knowledgeTags: ['Kearney', 'Sourcing', 'Procurement']
  },
  {
    id: 'comp-analysis',
    title: 'AI 竞品分析',
    description: '深度解剖北美头部竞品的商业模式、供应链及营销策略。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '对标龙头企业，寻找差异化竞争优势。',
    features: ['对标研究', '策略复刻', '漏洞识别'],
    systemInstruction: '你是一位竞争情报专家，请解析竞品的核心壁垒。',
    knowledgeTags: ['Benchmarking', 'Competition', 'Rival']
  },
  {
    id: 'gap-analyzer',
    title: 'AI 双差分析器',
    description: '分析企业现状与北美市场标准之间的“产品差”与“服务差”。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '精准识别转型缺口，提供明确的补齐建议。',
    features: ['差距分析', '转型计划', '资源配置'],
    systemInstruction: '你是一位企业诊断顾问，请指出用户的核心短板。',
    knowledgeTags: ['Gap', 'Analysis', 'Transformation']
  },
  {
    id: 'leadership-ai',
    title: 'AI 领导力',
    description: '模拟跨文化管理场景，提升企业高管的国际化视野与决策力。',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '通过模拟面试与场景推演，提升出海团队管理水平。',
    features: ['跨文化沟通', '场景推演', '决策支持'],
    systemInstruction: '你是一位领导力教练，请引导用户处理国际管理中的冲突。',
    knowledgeTags: ['Leadership', 'Management', 'Global']
  },

  // --- 运营管理 (15) ---
  {
    id: 'project-mgmt',
    title: 'AI 项目管理',
    description: '自动化任务分配、进度追踪与关键节点预警。',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '支持PMP/Agile框架下的跨国协作管理。',
    features: ['进度管理', '风险预警', '资源调度'],
    systemInstruction: '你是一位资深项目经理，请协调各方进度。',
    knowledgeTags: ['PMP', 'Project', 'Task']
  },
  {
    id: 'meeting-assistant',
    title: 'AI 会议助手',
    description: '多语言会议实时转录、翻译及待办事项自动提取。',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '特别优化跨时区会议纪要整理。',
    features: ['转录翻译', '要点总结', '任务提取'],
    systemInstruction: '你是一位行政专家，请整理会议的核心成果。',
    knowledgeTags: ['Meeting', 'Memo', 'Translation']
  },
  {
    id: 'lean-ai',
    title: 'AI 精益',
    description: '利用 AI 识别产线浪费，提供数字化精益改进方案。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '基于精益生产理论识别瓶颈并优化。',
    features: ['浪费识别', '产线平衡', '精益建议'],
    systemInstruction: '你是一位精益顾问，请分析并优化生产流程。',
    knowledgeTags: ['Lean', 'TPS', 'Efficiency']
  },
  {
    id: 'fmea-assistant',
    title: 'AI FMEA助手',
    description: '智能生成失效模式与影响分析报告，提升质量管控水平。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '根据输入快速生成标准的 FMEA 表格。',
    features: ['风险评估', '失效预测', '防错建议'],
    systemInstruction: '你是一位质量工程专家，请协助完成FMEA分析。',
    knowledgeTags: ['FMEA', 'Quality', 'Risk']
  },
  {
    id: 'integrator-helper',
    title: 'AI 集成商助手',
    description: '连接北美自动化集成商资源，加速本土化售后体系建设。',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '帮助企业匹配美国本土的服务商和技术支持。',
    features: ['资源匹配', '能力审核', '对接协调'],
    systemInstruction: '你是一位技术对接专家，请推荐合适的本地集成商。',
    knowledgeTags: ['Service', 'Integrator', 'Local']
  },
  {
    id: 'travel-assistant',
    title: 'AI 差旅家',
    description: '北美商务考察行程定制、酒店预订及差旅开支优化。',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '专注于商务出行的效率最大化。',
    features: ['行程规划', '预算控制', '全天候支持'],
    systemInstruction: '你是一位差旅顾问，请为用户规划行程。',
    knowledgeTags: ['Travel', 'Business', 'Expense']
  },
  {
    id: 'ai-secretary',
    title: 'AI 秘书',
    description: '处理日常商务邮件、预约安排及跨时区协调。',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '模仿用户语调进行商务信函往来。',
    features: ['回复建议', '日程管理', '行政支持'],
    systemInstruction: '你是一位得力的私人秘书。',
    knowledgeTags: ['Admin', 'Secretary', 'Efficiency']
  },
  {
    id: 'visa-helper',
    title: 'AI 签证神器',
    description: '针对商务签证 (B1/B2, L1) 的材料审核与面试模拟。',
    imageUrl: 'https://images.unsplash.com/photo-1534398079244-67c8ad669224?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '极大提升签证成功率的辅导工具。',
    features: ['材料预审', '模拟面谈', '通过率评估'],
    systemInstruction: '你是一位资深签证辅导专家。',
    knowledgeTags: ['Visa', 'Interview', 'Travel']
  },
  {
    id: 'etiquette-training',
    title: '北美礼仪培训',
    description: '商务洽谈、展会沟通及本土文化合作指南。',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '帮助用户掌握北美商务交流的“暗语”。',
    features: ['模拟演练', '禁忌提醒', '话术建议'],
    systemInstruction: '你是一位跨文化交流顾问。',
    knowledgeTags: ['Culture', 'Etiquette', 'Business']
  },
  {
    id: 'safety-stock',
    title: 'AI 安全库存计算器',
    description: '智能预测销量，动态优化海外仓补货周期。',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '结合EOQ模型和实时物流波动。',
    features: ['库存优化', '补货提醒', '预测算法'],
    systemInstruction: '你是一位供应链专家，请计算最优库存。',
    knowledgeTags: ['Inventory', 'Warehouse', 'Stock']
  },
  {
    id: 'price-compare',
    title: 'AI 比价',
    description: '监控北美主流商超及电商平台价格，自动生成定价建议。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '全天候抓取竞品价格动态。',
    features: ['价格监控', '定价策略', '利润预警'],
    systemInstruction: '你是一位定价分析师，请提供调价建议。',
    knowledgeTags: ['Price', 'Monitor', 'Strategy']
  },
  {
    id: 'interviewer-ai',
    title: 'AI 面试官',
    description: '针对北美本土岗位的招聘需求，进行 AI 视频面试评估。',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '辅助HR快速筛选海外本土候选人。',
    features: ['智能初面', '胜任力分析', '报告生成'],
    systemInstruction: '你是一位HR专家，请协助完成初步面试评价。',
    knowledgeTags: ['Recruit', 'HR', 'Interview']
  },
  {
    id: 'hr-assistant',
    title: 'AI 人事',
    description: '管理北美员工福利、社保申报及本土合规用工咨询。',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '解决州级复杂的用工法律差异。',
    features: ['合规咨询', '薪资福利', '政策库'],
    systemInstruction: '你是一位北美HRBP，请解答合规用工问题。',
    knowledgeTags: ['Payroll', 'HR', 'Compliance']
  },
  {
    id: 'cms-ai',
    title: 'AI CMS',
    description: '自动化管理出海多平台内容，生成符合本土审美的素材。',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '一键同步社交媒体与官网内容。',
    features: ['文案生成', '发布调度', 'SEO优化'],
    systemInstruction: '你是一位内容营销专家。',
    knowledgeTags: ['Content', 'SEO', 'CMS']
  },
  {
    id: 'talent-finder',
    title: 'AI 找人',
    description: '在全球人才库中通过深度学习模型锁定最合适的出海高管。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '精准搜寻具备北美实战经验的高端人才。',
    features: ['人才寻访', '匹配度预测', '简历挖掘'],
    systemInstruction: '你是一位顶级猎头，请帮用户寻访高端人才。',
    knowledgeTags: ['Headhunter', 'Talent', 'Global']
  }
];
