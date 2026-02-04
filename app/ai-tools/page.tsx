import React, { useState } from 'react';
import { Search, Sparkles, Filter, Play, ExternalLink, ShieldCheck, Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AI_TOOLS } from '../../src/data/mockData';

const AiToolsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const modules = [
    { name: '合规与法务', description: '北美法律、准入认证、知识产权' },
    { name: '跨境物流', description: '报关、订舱、物流追踪' },
    { name: '财税金融', description: '关税计算、合同审查、财税合规' },
    { name: '市场洞察', description: '研报生成、数据挖掘、竞品分析' },
    { name: '企业战略', description: '顶级咨询架构、领导力、增长策略' },
    { name: '运营管理', description: '项目管理、精益制造、面试招聘' },
  ];

  const filteredTools = AI_TOOLS.filter(tool => 
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold mb-6 tracking-widest uppercase">
            <Sparkles size={12} className="mr-1" />
            <span>Operational Support AI Hub</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">出海全链路 AI 工具库</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            集成翰高独家 AI 算法与全球化专家知识库，覆盖从准入合规到实战运营的 35 款核心工具。
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-20">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
           <input 
             type="text" 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             placeholder="搜索工具名称、功能或应用领域 (如: 关税, 认证, 战略)..." 
             className="w-full bg-[#111111] border border-white/5 rounded-[2rem] py-8 pl-16 pr-8 text-xl focus:outline-none focus:border-yellow-500 transition-all placeholder:text-gray-700 shadow-2xl"
           />
        </div>

        {/* Modules Grid */}
        <div className="space-y-24">
          {modules.map((module) => {
            const moduleTools = filteredTools.filter(t => t.category === module.name);
            if (moduleTools.length === 0) return null;
            
            return (
              <section key={module.name} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{module.name}</h2>
                    <p className="text-gray-500 text-sm font-medium">{module.description}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">{moduleTools.length} 款可用工具</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {moduleTools.map(tool => (
                    <div 
                      key={tool.id} 
                      onClick={() => navigate(`/ai-consultant/${tool.id}`)}
                      className="group bg-[#111111] border border-white/5 rounded-3xl overflow-hidden hover:bg-[#1a1a1a] hover:border-white/10 transition-all flex flex-col cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img src={tool.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" alt={tool.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent"></div>
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <span className="bg-black/60 backdrop-blur-md text-[9px] font-bold text-white px-3 py-1.5 rounded-full border border-white/10">
                            {tool.isSelfDeveloped ? '翰高自研' : '精选工具'}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform flex-shrink-0">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors leading-tight">{tool.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 h-12 line-clamp-2">
                          {tool.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                           {tool.knowledgeTags?.slice(0, 3).map(tag => (
                             <span key={tag} className="text-[9px] font-bold text-gray-600 bg-white/5 px-2 py-1 rounded uppercase tracking-wider">{tag}</span>
                           ))}
                        </div>
                        <button className="w-full py-4 bg-[#1a1a1a] group-hover:bg-yellow-500 text-gray-500 group-hover:text-black font-bold rounded-2xl transition-all flex items-center justify-center border border-white/5 group-hover:border-transparent">
                          启动 AI 顾问 <Play size={14} className="ml-2 fill-current" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        
        {/* Advanced Support */}
        <div className="mt-32 p-16 rounded-[3rem] bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/5 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px]"></div>
          <div className="mb-10 lg:mb-0 max-w-2xl relative z-10 text-center lg:text-left">
             <h4 className="text-3xl font-extrabold text-white mb-6 flex items-center justify-center lg:justify-start">
               <ShieldCheck className="w-8 h-8 mr-4 text-yellow-500" />
               大型企业定制化 AI 部署
             </h4>
             <p className="text-gray-400 text-lg leading-relaxed">针对中大型制造企业的全球化业务，我们提供专有 AI 智能体 (Agent) 开发、私有化合规知识库部署及跨系统集成服务。</p>
          </div>
          <button className="bg-yellow-500 text-black px-12 py-6 rounded-2xl font-bold text-lg flex items-center hover:bg-yellow-400 transition-all whitespace-nowrap shadow-xl shadow-yellow-500/20 active:scale-95">
            联系专家团队 <ExternalLink className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiToolsPage;
