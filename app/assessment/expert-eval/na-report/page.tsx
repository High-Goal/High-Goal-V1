"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, Activity, BookCopy, ChevronRight, Search, Bell, MessageSquare, Download, Share2, TrendingUp, Users, ShieldAlert, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2019', value: 80 },
  { year: '2020', value: 70 },
  { year: '2021', value: 120 },
  { year: '2022', value: 100 },
  { year: '2023', value: 240 },
];

const NaReportPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 h-screen sticky top-0 bg-[#0d0d0d] hidden md:flex flex-col p-6">
          <div className="mb-10 flex items-center space-x-2">
            <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-black font-bold text-[10px]">翰</div>
            <span className="text-sm font-bold text-white tracking-tight">翰高出海</span>
          </div>

          <nav className="flex-grow space-y-2">
            <SidebarItem icon={<LayoutDashboard size={18} />} label="总览仪表盘" />
            <SidebarItem icon={<FileText size={18} />} label="评估工具" />
            <SidebarItem icon={<BookCopy size={18} />} label="定制化报告" active />
            <SidebarItem icon={<Activity size={18} />} label="合规动态" />
            <SidebarItem icon={<Download size={18} />} label="我的报告库" />
          </nav>

          <div className="pt-8 mt-8 border-t border-white/5 space-y-6">
             <div className="px-2">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">您的相关行业</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>汽车零部件制造</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span>工业机械设备</span>
                  </div>
                </div>
             </div>
             <SidebarItem icon={<SettingsIcon size={18} />} label="账户设置" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8">
           <div className="max-w-6xl mx-auto">
             {/* Header */}
             <div className="flex items-center justify-between mb-12">
                <div className="flex items-center text-xs text-gray-500 font-bold space-x-2">
                   <Link to="/assessment/expert-eval" className="hover:text-white transition-colors">评估中心</Link>
                   <ChevronRight size={12} />
                   <span className="text-gray-400">评估结果分析</span>
                </div>
                <div className="flex items-center space-x-6">
                   <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input type="text" placeholder="搜索报告、数据趋势或法规..." className="bg-[#1a1a1a] border border-white/5 rounded-lg py-2 pl-10 pr-4 text-xs w-80 focus:outline-none focus:border-blue-500" />
                   </div>
                   <div className="flex space-x-4">
                     <button className="relative w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-500 hover:text-white">
                        <Bell size={18} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1a1a1a]"></span>
                     </button>
                     <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-500 hover:text-white">
                        <MessageSquare size={18} />
                     </button>
                     <div className="flex items-center space-x-3 ml-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500"></div>
                        <span className="text-sm font-bold text-white">张伟</span>
                     </div>
                   </div>
                </div>
             </div>

             {/* Hero */}
             <div className="flex justify-between items-start mb-12">
                <div className="max-w-2xl">
                   <h2 className="text-[10px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-4">定制化市场洞察报告</h2>
                   <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">基于您的评估结果：北美制造业市场洞察</h1>
                   <p className="text-gray-500">针对您输入的 “汽车零部件制造” 背景生成的定制化分析 - 2024年第三季度</p>
                </div>
                <div className="flex space-x-4">
                   <button className="bg-[#1a1a1a] text-white border border-white/10 px-6 py-4 rounded-xl font-bold text-sm flex items-center hover:bg-[#252525] transition-all">
                      <Share2 className="w-4 h-4 mr-3" /> 分享报告
                   </button>
                   <button className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-sm flex items-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                      <Download className="w-4 h-4 mr-3" /> 下载完整 PDF
                   </button>
                </div>
             </div>

             {/* KPIs */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <StatCard icon={<TrendingUp className="text-green-500" />} label="潜在市场规模 (TAM)" value="$482亿" sub={<span className="text-green-500">↗ 2.1%</span>} subLabel="环比上一季度" />
                <StatCard icon={<Activity className="text-blue-500" />} label="行业年增长率 (YoY)" value="+5.8%" sub={<span className="text-green-500">↗ 0.4%</span>} subLabel="相比行业平均水平" />
                <StatCard icon={<Users className="text-purple-500" />} label="活跃买家/进口商" value="1,240 家" sub={<span className="text-green-500">↗ 12%</span>} subLabel="近30天活跃度" />
                <StatCard icon={<ShieldAlert className="text-red-500" />} label="合规风险评级" value="中等风险" subLabel="基于最新301条款变动" sub="政策波动" isAlert />
             </div>

             {/* Main Chart */}
             <div className="bg-[#111111] border border-white/5 rounded-3xl p-10 mb-12">
                <div className="flex items-center justify-between mb-12">
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">北美进口量趋势预测 (2019-2023)</h3>
                     <p className="text-3xl font-extrabold text-white">240万 单位 <span className="text-sm font-bold text-green-500 ml-4">+15% 总体增长</span></p>
                   </div>
                   <div className="bg-[#1a1a1a] p-1.5 rounded-xl border border-white/5">
                      <button className="px-4 py-2 bg-[#0d0d0d] text-xs font-bold text-white rounded-lg border border-white/10">近5年趋势</button>
                   </div>
                </div>

                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                      <XAxis dataKey="year" stroke="#666" fontSize={12} axisLine={false} tickLine={false} />
                      <YAxis stroke="#666" fontSize={12} axisLine={false} tickLine={false} hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '12px' }}
                        itemStyle={{ color: '#3b82f6' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </div>

             {/* Footer Actions */}
             <div className="flex items-center justify-between">
                <div className="flex items-center space-x-12">
                   <div>
                      <p className="text-xs text-gray-600 font-bold mb-2 uppercase tracking-widest">推荐细分领域深度报告</p>
                      <button className="text-blue-500 text-xs font-bold flex items-center hover:text-blue-400">查看全部 <ChevronRight size={12} className="ml-1" /></button>
                   </div>
                   <div>
                      <p className="text-xs text-gray-600 font-bold mb-2 uppercase tracking-widest">关键合规预警</p>
                      <div className="flex -space-x-2">
                         <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-red-500"></div>
                         <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-orange-500"></div>
                         <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-yellow-500"></div>
                      </div>
                   </div>
                </div>
                <Link to="/assessment/expert-eval/entry-strategy" className="bg-white text-black px-10 py-5 rounded-2xl font-bold flex items-center hover:bg-gray-100 transition-all group">
                   前往: 市场进入策略规划
                   <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
           </div>
        </main>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex items-center space-x-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
    <div className={active ? 'text-yellow-500' : 'text-gray-500'}>{icon}</div>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; sub?: React.ReactNode; subLabel: string; isAlert?: boolean }> = ({ icon, label, value, sub, subLabel, isAlert }) => (
  <div className={`p-8 rounded-3xl border ${isAlert ? 'bg-red-500/5 border-red-500/10' : 'bg-[#111111] border-white/5'}`}>
     <div className="flex items-center justify-between mb-8">
        <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
           {icon}
        </div>
        <div className="text-gray-700">
           {isAlert ? <ShieldAlert size={14} /> : <div className="w-1 h-1 bg-gray-700 rounded-full"></div>}
        </div>
     </div>
     <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">{label}</p>
     <p className="text-3xl font-extrabold text-white mb-3">{value}</p>
     <p className="text-[10px] text-gray-500">
        {sub && <span className="mr-2 font-bold">{sub}</span>}
        {subLabel}
     </p>
  </div>
);

const SettingsIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);

export default NaReportPage;
