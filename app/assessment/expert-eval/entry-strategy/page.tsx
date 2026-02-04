"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Fixed: Added 'Lock' to the imported icons from lucide-react
import { Book, MessageSquare, Send, Paperclip, ChevronRight, FileDown, Share2, MoreVertical, ShieldCheck, Zap, Info, MapPin, Lock } from 'lucide-react';

const EntryStrategyPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '您好，我是翰高出海战略助手 (High-Goal AI)。基于您的评估报告，我已经为您准备好了北美市场进入策略。', time: '今天, 上午 10:23' },
    { role: 'assistant', text: '这份策略整合了8个关键评估模块的数据分析。建议我们优先从供应链合规性开始。是否需要我为您详细解读《美墨加协定》(USMCA) 对您现有BOM清单的具体影响？' },
  ]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Left Side: Strategy Document */}
        <div className="w-3/5 overflow-y-auto border-r border-white/5 bg-[#0d0d0d] p-12 custom-scrollbar">
           <div className="max-w-3xl mx-auto">
             <div className="flex items-center space-x-2 text-xs text-gray-500 font-bold mb-12">
                <Link to="/" className="hover:text-white">首页</Link>
                <ChevronRight size={12} />
                <Link to="/assessment/expert-eval" className="hover:text-white">专家深度评估</Link>
                <ChevronRight size={12} />
                <span className="text-gray-400">市场进入策略</span>
             </div>

             <div className="flex justify-between items-start mb-16">
                <div>
                   <div className="flex items-center space-x-3 mb-6">
                      <span className="bg-blue-500/10 text-blue-500 text-[10px] font-extrabold px-3 py-1 rounded border border-blue-500/20 uppercase">状态: 草稿</span>
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">行业: 精密制造</span>
                   </div>
                   <h1 className="text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">北美市场进入策略：精密零部件</h1>
                   <p className="text-lg text-gray-500 leading-relaxed">
                     针对 <span className="text-blue-500 font-bold">翰高出海 (High-Goal Consulting)</span> 平台用户定制的法规合规性、供应链物流和竞争定位的综合分析报告。
                   </p>
                </div>
                <div className="flex space-x-3">
                   <button className="bg-[#1a1a1a] text-white border border-white/10 px-4 py-3 rounded-xl text-xs font-bold flex items-center hover:bg-[#252525] transition-all">
                      <FileDown className="w-4 h-4 mr-2" /> 导出 PDF
                   </button>
                   <button className="bg-[#1a1a1a] text-white border border-white/10 px-4 py-3 rounded-xl text-xs font-bold flex items-center hover:bg-[#252525] transition-all">
                      <Share2 className="w-4 h-4 mr-2" /> 分享
                   </button>
                </div>
             </div>

             <div className="space-y-16">
                <section>
                   <div className="flex items-center space-x-4 mb-8">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center font-bold text-blue-500">01</div>
                      <h2 className="text-2xl font-extrabold text-white tracking-tight">法规环境与合规性</h2>
                   </div>
                   <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 mb-8">
                      <p className="text-sm text-gray-400 leading-relaxed mb-10">
                        根据当前的贸易协定，您的产品分类（HS编码 8481.80）受特定关税约束。USMCA（前北美自由贸易协定）条款要求汽车供应链中的区域价值含量达到 75% 才能享受免税待遇。
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl flex items-center space-x-4">
                            <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                               <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">风险因素</p>
                               <p className="text-sm text-white font-bold">劳工标准执行 (Section 307)</p>
                            </div>
                         </div>
                         <div className="bg-green-500/5 border border-green-500/10 p-6 rounded-2xl flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                               <Zap className="w-6 h-6" />
                            </div>
                            <div>
                               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">战略机遇</p>
                               <p className="text-sm text-white font-bold">自由贸易区 (FTZ) 利用</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </section>

                <section>
                   <div className="flex items-center space-x-4 mb-8">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center font-bold text-blue-500">02</div>
                      <h2 className="text-2xl font-extrabold text-white tracking-tight">关键供应链节点</h2>
                   </div>
                   <div className="relative h-80 rounded-3xl overflow-hidden mb-8 group">
                      <img src="https://picsum.photos/seed/port/800/400" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-1000" alt="Supply Chain" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm">
                         <div className="flex items-center space-x-2 text-blue-500 mb-3">
                            <MapPin size={16} />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest">推荐分销枢纽</span>
                         </div>
                         <h3 className="text-xl font-extrabold text-white mb-2">Chicago, IL (芝加哥)</h3>
                         <p className="text-xs text-gray-400">2天卡车运输范围内可覆盖70%的制造业基地。</p>
                      </div>
                   </div>
                </section>
             </div>
           </div>
        </div>

        {/* Right Side: AI Chat Strategist */}
        <div className="w-2/5 flex flex-col bg-[#0a0a0a]">
           <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                 <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-yellow-500">
                       <img src="https://picsum.photos/seed/strategist/100/100" className="w-full h-full object-cover" alt="AI Avatar" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                 </div>
                 <div>
                    <h3 className="text-sm font-extrabold text-white tracking-tight">翰高出海战略助手</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                       <span className="text-yellow-500">•</span> HIGH-GOAL AI • 在线
                    </p>
                 </div>
              </div>
              <button className="text-gray-500 hover:text-white">
                 <MoreVertical size={20} />
              </button>
           </div>

           <div className="flex-grow overflow-y-auto p-8 space-y-8 custom-scrollbar">
              <div className="text-center">
                 <span className="text-[10px] text-gray-700 font-bold uppercase tracking-widest bg-[#111111] px-4 py-1.5 rounded-full">今天, 上午 10:23</span>
              </div>
              
              {messages.map((msg, i) => (
                 <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                       <div className={`p-6 rounded-3xl text-sm leading-relaxed ${
                         msg.role === 'user' 
                           ? 'bg-blue-600 text-white rounded-tr-none' 
                           : 'bg-[#111111] border border-white/5 text-gray-300 rounded-tl-none shadow-xl'
                       }`}>
                          {msg.text}
                       </div>
                    </div>
                 </div>
              ))}
              
              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <div className="p-6 bg-blue-600 text-white rounded-3xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-blue-600/20">
                    是的，请重点关注 HS 编码 8481.80 类别。我非常关心区域价值含量(RVC)的具体要求。
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="flex flex-wrap gap-2 pt-4">
                 <button className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase hover:bg-yellow-500/20 transition-all">✨ 分析劳动风险</button>
                 <button className="bg-blue-500/10 text-blue-500 border border-blue-500/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase hover:bg-yellow-500/20 transition-all">📊 对比物流中心</button>
              </div>
           </div>

           <div className="p-8 border-t border-white/5 bg-[#0d0d0d]/50 backdrop-blur-md">
              <div className="relative group">
                 <textarea 
                   placeholder="向您的翰高出海战略顾问提问..."
                   className="w-full bg-[#111111] border border-white/5 rounded-3xl py-6 pl-6 pr-20 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all min-h-[120px] shadow-inner"
                 ></textarea>
                 <div className="absolute right-6 bottom-6 flex items-center space-x-3">
                    <button className="text-gray-500 hover:text-white transition-colors">
                       <Paperclip size={20} />
                    </button>
                    <button className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                       <Send size={20} />
                    </button>
                 </div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2 text-gray-600">
                 {/* Fixed: Lock icon is now correctly imported from lucide-react */}
                 <Lock size={12} />
                 <p className="text-[10px] font-bold uppercase tracking-widest italic">AI 建议需经法律顾问核实。翰高出海 (High-Goal Consulting) 机密信息。</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EntryStrategyPage;
