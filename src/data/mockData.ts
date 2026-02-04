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
  // 合规与法务 (6 tools)
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
    knowledgeTags: ['CFR', 'USC', 'Legal Compliance']
  },
  {
    id: 'customs-legal',
    title: 'AI 关务 (法务版)',
    description: '从法律合规角度审查进出口单据，规避海关稽查风险。',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '专注于海关法、反补贴/反倾销调查以及针对强迫劳动（UFLPA）等专项合规审查。',
    features: ['UFLPA合规自检', '反倾销税风险评估', '原产地证明审查'],
    systemInstruction: '你是一位资深海关律师，精通北美海关法。请帮助用户分析关务合规性，规避法律处罚风险。',
    knowledgeTags: ['Customs Law', 'Compliance', 'Audit']
  },
  {
    id: 'osha-ai',
    title: 'OSHA AI助手',
    description: '工厂安全标准、员工保护及职业健康法规实时问答。',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '针对职业安全与健康管理局（OSHA）标准的专项AI工具。',
    features: ['作业安全评估', 'PPE标准查询', '事故报告指引'],
    systemInstruction: '你是一位OSHA安全检查员，请用专业的视角帮助企业排查安全隐患，并根据1910及1926标准给出解释。',
    knowledgeTags: ['Safety', 'Factory', 'Standard']
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
    systemInstruction: '你是一位精通NEC和UL 508A的电气工程师。请帮助用户解决布线、保护及认证相关的问题。',
    knowledgeTags: ['NEC', 'UL', 'Electrical']
  },
  {
    id: 'compliance-check',
    title: 'AI 合规自检工具',
    description: '针对特定产品品类，一键生成北美市场准入合规检查清单。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '通过问答形式，自动匹配产品所属的监管部门（如CPSC, FDA, EPA）。',
    features: ['准入资质核查', '标签合规审核', '认证项目建议'],
    systemInstruction: '你是一位专业的合规顾问，请根据用户提供的产品描述，列出所有必须满足的北美准入要求。',
    knowledgeTags: ['Certification', 'Standards', 'Access']
  },
  {
    id: 'ip-monitor',
    title: 'AI 知识产权监控',
    description: '全网监控商标侵权、外观设计抄袭及竞争对手专利布局。',
    imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400',
    category: '合规与法务',
    isSelfDeveloped: true,
    detailedInfo: '实时抓取USPTO数据，利用图像识别技术监控主流电商平台的侵权行为。',
    features: ['商标相似度对比', '外观设计侵权分析', '专利布局监测'],
    systemInstruction: '你是一位知识产权律师，精通美国专利商标法。请帮助用户识别潜在侵权风险或监控竞争对手。',
    knowledgeTags: ['IP', 'Trademark', 'Patent']
  },

  // 跨境物流 (3 tools)
  {
    id: 'customs-logistics',
    title: 'AI 关务 (物流版)',
    description: 'HTS分类建议与报关单据智能生成，加速清关流程。',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400',
    category: '跨境物流',
    isSelfDeveloped: true,
    detailedInfo: '通过AI图像识别与NLP技术，辅助完成复杂的HTS分类，优化报关流程。',
    features: ['HTS自动分类', '报关单据预审', '查验风险预测'],
    systemInstruction: '你是一位资深报关师，精通北美海关HTS编码逻辑。请帮助用户精准匹配编码并预估税率。',
    knowledgeTags: ['HTS', 'Customs', 'Tariff']
  },
  {
    id: 'logistics-query',
    title: 'AI 物流查询',
    description: '全球航线动态实时监控与物流节点预测。',
    imageUrl: 'https://images.unsplash.com/photo-1494412574737-5917e5a0004d?auto=format&fit=crop&q=80&w=400',
    category: '跨境物流',
    isSelfDeveloped: false,
    detailedInfo: '链接各大港口及承运人数据，提供更精准的到货预测。',
    features: ['多单号实时追踪', '港口拥堵指数', '动态路径优化'],
    systemInstruction: '你是一位全球供应链调度专家。请根据物流现状给出最优路径建议和风险应对方案。',
    knowledgeTags: ['Tracking', 'Port', 'ETA']
  },
  {
    id: 'booking-ai',
    title: 'AI 订舱',
    description: '智能比价与舱位预定，自动匹配最优空海运线路。',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400',
    category: '跨境物流',
    isSelfDeveloped: true,
    detailedInfo: '实时同步全球运费报价，支持一键比价及智能路线推荐。',
    features: ['运费动态分析', '舱位余量监测', '智能拼柜建议'],
    systemInstruction: '你是一位专业的货代专家，请根据用户的货物规格和时间要求，推荐最经济高效的物流路径。',
    knowledgeTags: ['Booking', 'Freight', 'Optimization']
  },

  // 财税金融 (3 tools)
  {
    id: 'tariff-pro',
    title: '关税精算师',
    description: '多维度成本模型，计算进口关税对利润的深层影响。',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400',
    category: '财税金融',
    isSelfDeveloped: true,
    detailedInfo: '不仅是计算税率，更从税务筹划角度优化进口结构。',
    features: ['利润敏感度分析', '转让定价建议', '税负优化方案'],
    systemInstruction: '你是一位跨国税务顾问。请帮助用户分析关税变动对整体利润的影响，并提供合法的节税方案。',
    knowledgeTags: ['Tax', 'Pricing', 'Profit']
  },
  {
    id: 'daily-tariff',
    title: 'AI 关税每日达',
    description: '每日推送针对您产品品类的最新关税变动及政策解读。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '财税金融',
    isSelfDeveloped: true,
    detailedInfo: '订阅制政策预警，确保企业在政策窗口期内完成成本调整。',
    features: ['实时政策推送', '排除延期提醒', '关税成本计算'],
    systemInstruction: '你是一位政策分析员，请根据最新的贸易动态，解读对特定产品关税的潜在影响。',
    knowledgeTags: ['Daily', 'Alert', 'Policy']
  },
  {
    id: 'contract-helper',
    title: 'AI 合同助手',
    description: '智能审核商务合同，识别潜在法律漏洞与财税风险点。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '财税金融',
    isSelfDeveloped: true,
    detailedInfo: '支持Incoterms 2020对照审查，确保物流、责任及款项条款无缝衔接。',
    features: ['条款合规审查', '核心利益对冲', '多语言合同翻译'],
    systemInstruction: '你是一位商务律师，请帮助用户审查合同条款中的不当描述，特别是关于责任划分和支付风险的部分。',
    knowledgeTags: ['Contract', 'Legal', 'Commercial']
  },

  // 市场洞察 (3 tools)
  {
    id: 'biz-report',
    title: 'AI 商业研报',
    description: '分钟级生成北美行业竞争格局及市场容量分析。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: '市场洞察',
    isSelfDeveloped: true,
    detailedInfo: '基于多渠道数据源，提供极具洞察力的行业分析报告。',
    features: ['竞品地图', 'SWOT分析', '消费者意愿调研'],
    systemInstruction: '你是一位麦肯锡级别的市场分析师。请针对特定行业提供深度的市场容量及竞争分析报告。',
    knowledgeTags: ['Report', 'Competitor', 'Market']
  },
  {
    id: 'market-crawler',
    title: 'AI 市场爬虫',
    description: '自动化抓取电商平台、社交媒体及行业论坛的实时数据。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: '市场洞察',
    isSelfDeveloped: true,
    detailedInfo: '集成海量代理池，规避反爬机制，获取最真实的市场反馈。',
    features: ['价格监控', '评论情感分析', '爆款趋势预测'],
    systemInstruction: '你是一位数据科学家，请帮助用户解析特定产品的市场走势和消费者偏好。',
    knowledgeTags: ['Crawler', 'Data', 'Trends']
  },
  {
    id: 'america-broadcast',
    title: '美洲播报',
    description: '每日聚焦北美政经动态、罢工预警及行业突发事件。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    category: '市场洞察',
    isSelfDeveloped: true,
    detailedInfo: '翰高驻美团队实时采编，深度解析重大事件对出海企业的影响。',
    features: ['突发事件预警', '深度时政解读', '行业机会发现'],
    systemInstruction: '你是一位资深美洲新闻评论员，请用专业的视角解读北美动态对中国制造企业的具体利弊。',
    knowledgeTags: ['News', 'America', 'Insight']
  },

  // 企业战略 (5 tools)
  {
    id: 'mck-strategist',
    title: '麦肯锡战略官',
    description: '采用顶级咨询机构方法论，重塑企业出海战略路径图。',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '利用MECE原则、7S模型等框架进行战略解构。',
    features: ['7S模型分析', '市场进入路径选择', '增长黑客策略'],
    systemInstruction: '你是一位顶尖战略顾问。请运用管理咨询框架帮助用户解决复杂的战略转型难题。',
    knowledgeTags: ['McKinsey', 'Strategy', 'Framework']
  },
  {
    id: 'kearney-procurement',
    title: '科尔尼采购战略',
    description: '优化全球采购布局，提升供应链抗风险能力与成本竞争力。',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '结合切斯曼矩阵（Chessboard）等工具，优化供应商组合。',
    features: ['品类管理优化', '供应商降本方案', '近岸外包建议'],
    systemInstruction: '你是一位采购战略专家。请帮助用户分析采购结构，并提出优化成本和提升韧性的方案。',
    knowledgeTags: ['Sourcing', 'Kearney', 'Supply Chain']
  },
  {
    id: 'competitor-analysis',
    title: 'AI 竞品分析',
    description: '深度解剖北美头部竞品的商业模式、供应链及营销策略。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '不仅看产品参数，更看其背后的渠道壁垒和售后支撑。',
    features: ['对标分析', '定价策略模拟', '分销渠道复刻'],
    systemInstruction: '你是一位商业竞争分析师，请帮助用户识别竞品的弱点并寻找切入市场的机会。',
    knowledgeTags: ['Benchmarking', 'Rival', 'Market Share']
  },
  {
    id: 'gap-analyzer',
    title: 'AI 双差分析器',
    description: '分析企业现状与北美市场标准之间的“产品差”与“服务差”。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '量化核心差距，为转型升级提供明确的行动计划。',
    features: ['转型缺口量化', '短板优先级排序', '资源配置建议'],
    systemInstruction: '你是一位企业诊断专家，请通过对比分析，指明用户企业在哪些方面需要核心改进。',
    knowledgeTags: ['Gap', 'Analysis', 'Transformation']
  },
  {
    id: 'leadership-ai',
    title: 'AI 领导力',
    description: '模拟跨文化管理场景，提升企业高管的国际化视野与决策力。',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
    category: '企业战略',
    isSelfDeveloped: true,
    detailedInfo: '针对北美职场文化及管理逻辑的沉浸式培训。',
    features: ['跨文化沟通模拟', '战略决策推演', '管理冲突处理'],
    systemInstruction: '你是一位领导力教练，请引导用户在复杂的国际化管理场景中做出最优决策。',
    knowledgeTags: ['Leadership', 'Management', 'Global']
  },

  // 运营管理 (15 tools)
  {
    id: 'project-mgmt',
    title: 'AI 项目管理',
    description: '自动化任务分配、进度追踪与关键节点预警。',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '针对出海工厂建设、新产品上市全流程定制。',
    features: ['甘特图自动生成', '资源冲突检测', '风险缓解计划'],
    systemInstruction: '你是一位资深的PMP项目经理。请帮助用户梳理项目关键路径，并预估潜在延期风险。',
    knowledgeTags: ['PMP', 'Management', 'Efficiency']
  },
  {
    id: 'meeting-assistant',
    title: 'AI 会议助手',
    description: '多语言会议实时转录、翻译及待办事项自动提取。',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '特别针对北美远程会议环境优化，支持多种行业术语识别。',
    features: ['实时多语翻译', '智能要点总结', '任务指派提醒'],
    systemInstruction: '你是一位高效的行政助理，请帮助用户记录会议核心内容并整理成行动项。',
    knowledgeTags: ['Meeting', 'Translation', 'Note']
  },
  {
    id: 'lean-ai',
    title: 'AI 精益',
    description: '利用 AI 识别产线浪费，提供数字化精益改进方案。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '结合六西格玛方法论，优化生产节拍与物料流动。',
    features: ['价值流图分析', '产线瓶颈诊断', '5S 管理助手'],
    systemInstruction: '你是一位精益生产顾问，请帮助用户识别生产过程中的非增值环节并给出改进方案。',
    knowledgeTags: ['Lean', 'Production', 'Efficiency']
  },
  {
    id: 'fmea-assistant',
    title: 'AI FMEA助手',
    description: '智能生成失效模式与影响分析报告，提升质量管控水平。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '基于行业知识库，自动联想可能的风险点及建议预防措施。',
    features: ['风险评分优化', '故障模式联想', '质量改进闭环'],
    systemInstruction: '你是一位质量保证专家，请协助用户完善DFMEA/PFMEA表格，确保潜在风险被充分识别。',
    knowledgeTags: ['Quality', 'FMEA', 'Risk']
  },
  {
    id: 'integrator-helper',
    title: 'AI 集成商助手',
    description: '连接北美自动化集成商资源，加速本土化售后体系建设。',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '匹配符合标准的第三方维保团队，降低自主建站成本。',
    features: ['集成商筛选', '售后派单监控', '零部件仓储协同'],
    systemInstruction: '你是一位售后服务主管，请根据产品属性推荐最合适的北美本地维修集成商方案。',
    knowledgeTags: ['Service', 'Integrator', 'USA']
  },
  {
    id: 'travel-pro',
    title: 'AI 差旅家',
    description: '北美商务考察行程定制、酒店预订及签证辅助。',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '考虑展会、商务洽谈及交通便利性的最优化行程规划。',
    features: ['行程智能规划', '差旅标准控制', '全天候安全预警'],
    systemInstruction: '你是一位专业的商务差旅顾问，请为用户规划一次高效的北美商务考察之旅。',
    knowledgeTags: ['Travel', 'Business', 'Plan']
  },
  {
    id: 'ai-secretary',
    title: 'AI 秘书',
    description: '处理日常商务邮件、预约安排及跨时区协调。',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '模仿您的沟通风格，高效处理繁琐的行政事务。',
    features: ['智能回复建议', '日程多端同步', '多时区协调专家'],
    systemInstruction: '你是一位得力的私人秘书，请帮助用户打理繁杂的日程并草拟商务信函。',
    knowledgeTags: ['Secretary', 'Admin', 'Efficiency']
  },
  {
    id: 'visa-master',
    title: 'AI 签证神器',
    description: '针对商务签证 (B1/B2, L1) 的材料审核与面试模拟。',
    imageUrl: 'https://images.unsplash.com/photo-1534398079244-67c8ad669224?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '基于数万例真实面谈案例，通过 AI 提高签证通过率。',
    features: ['材料清单核对', '面谈问题推演', '拒签风险诊断'],
    systemInstruction: '你是一位前领事馆签证官助理，请评估用户的申请材料并进行模拟面试辅导。',
    knowledgeTags: ['Visa', 'B1B2', 'L1']
  },
  {
    id: 'etiquette',
    title: '北美礼仪培训',
    description: '商务洽谈、展会沟通及跨文化合作指南。',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '降低跨文化沟通壁垒，提升商务谈判成功率。',
    features: ['模拟对话演练', '禁忌提醒', '邮件文法优化'],
    systemInstruction: '你是一位拥有20年北美商务经验的顾问。请指导用户如何在商务谈判和日常工作中展现专业礼仪。',
    knowledgeTags: ['Etiquette', 'Culture', 'Business']
  },
  {
    id: 'safety-stock',
    title: 'AI 安全库存计算器',
    description: '智能预测销量，动态优化海外仓补货周期。',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '基于季节性及物流延时波动的动态库存算法。',
    features: ['销量预测', '库容优化建议', '断货预警'],
    systemInstruction: '你是一位精通EOQ模型的供应链专家。请帮助用户计算最优安全库存量，避免资金占用和断货。',
    knowledgeTags: ['Inventory', 'Warehouse', 'Stock']
  },
  {
    id: 'price-comparison',
    title: 'AI 比价',
    description: '监控北美主流商超及电商平台价格，自动生成定价建议。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '多平台数据实时比对，支持促销活动效果预测。',
    features: ['动态调价引擎', '毛利保护预警', '竞品调价监测'],
    systemInstruction: '你是一位定价策略专家，请根据市场行情和用户的成本结构建议最优的销售价格。',
    knowledgeTags: ['Price', 'Monitor', 'Strategy']
  },
  {
    id: 'interviewer-ai',
    title: 'AI 面试官',
    description: '针对北美本土岗位的招聘需求，进行 AI 视频面试评估。',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '分析候选人的专业技能、价值观匹配度及跨文化沟通能力。',
    features: ['简历智能解析', '胜任力模型匹配', '多轮 AI 面试引导'],
    systemInstruction: '你是一位 HR 专家，请根据岗位描述，对候选人进行多维度的背景调查和技能初步评估。',
    knowledgeTags: ['Recruit', 'Interview', 'HR']
  },
  {
    id: 'hr-assistant',
    title: 'AI 人事',
    description: '管理北美员工福利、社保申报及本土合规用工咨询。',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '解决州级复杂的用工法律差异，规避雇佣歧视等法律纠纷。',
    features: ['用工合同模板', '州级法律对照', '绩效考核系统'],
    systemInstruction: '你是一位北美 HRBP，请帮助用户解答关于薪酬管理、解雇流程以及合规用工的问题。',
    knowledgeTags: ['Employment', 'Payroll', 'Compliance']
  },
  {
    id: 'cms-ai',
    title: 'AI CMS',
    description: '自动化管理出海多平台内容，生成符合本土审美的视觉素材。',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '一键同步官网、社交媒体及电商主图，保持品牌一致性。',
    features: ['文案自动生成', '视觉风格迁移', '内容发布调度'],
    systemInstruction: '你是一位内容营销专家，请帮助用户优化社交媒体推文和产品详情页，提升转化率。',
    knowledgeTags: ['Content', 'Marketing', 'Automation']
  },
  {
    id: 'headhunter-ai',
    title: 'AI 找人',
    description: '在全球人才库中通过深度学习模型锁定最合适的出海高管。',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    category: '运营管理',
    isSelfDeveloped: true,
    detailedInfo: '连接 LinkedIn、Indeed 等平台，利用知识图谱进行人才寻访。',
    features: ['高精人才画像', '匿名初步接触', '团队兼容度分析'],
    systemInstruction: '你是一位资深猎头，请帮助用户寻找具备北美建厂或品牌运营经验的高级管理人才。',
    knowledgeTags: ['Headhunter', 'Talent', 'Executives']
  }
];
