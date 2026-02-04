
import React, { useState } from 'react';
import { Search, Download, BookOpen, Clock, Tag, ArrowRight, TrendingUp } from 'lucide-react';
import { WHITEPAPERS } from '../../src/data/mockData';

const WhitepaperPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '行业白皮书', '市场动态', '技术趋势', '专家观点'];

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-[400px]">
          <img src="https://picsum.photos/seed/insights/1200/400" className="w-full h-full object-cover opacity-30" alt="Whitepaper Banner" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-extrabold text-white mb-6">行业深度洞察与出海指南</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              助力中国传统制造企业精准出海，掌握北美市场一手资讯，规避合规风险，提升全球化竞争力。
            </p>
            <div className="mt-10 flex space-x-4">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold flex items-center hover:bg-yellow-400 transition-all">
                获取最新白皮书
              </button>
              <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center hover:bg-white/10 transition-all">
                咨询专家
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex space-x-2">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="搜索行业、报告、关键词" 
                  className="bg-[#1a1a1a] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:border-yellow-500"
                />
              </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHITEPAPERS.map(paper => (
                <div key={paper.id} className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={paper.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={paper.title} />
                    <div className="absolute top-4 left-4 bg-yellow-500/90 text-black text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      {paper.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {paper.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-500 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                      {paper.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="text-sm font-bold text-yellow-500 flex items-center hover:text-yellow-400">
                        立即阅读 <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-white transition-colors">
                         <Tag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center space-x-2">
              <button className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-gray-500 hover:text-white transition-all">
                &lt;
              </button>
              <button className="w-10 h-10 rounded-lg bg-yellow-500 text-black font-bold">1</button>
              <button className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-gray-500 hover:text-white">2</button>
              <button className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-gray-500 hover:text-white">3</button>
              <button className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-gray-500 hover:text-white transition-all">
                &gt;
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Hot Downloads */}
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-yellow-500" /> 热门下载
              </h3>
              <div className="space-y-6">
                <HotItem rank="01" title="北美海关进口关税速查表" downloads="1.2k 下载" />
                <HotItem rank="02" title="2024 FDA 认证完全指南" downloads="950 下载" />
                <HotItem rank="03" title="中美贸易法律风险预警 2.0" downloads="820 下载" />
              </div>
              <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-xs font-bold text-gray-400 hover:bg-white/5 transition-all">
                查看全部排行
              </button>
            </div>

            {/* News */}
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
               <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-yellow-500" /> 最新动态
              </h3>
              <div className="space-y-6 relative border-l border-white/10 pl-4 ml-2">
                <NewsItem time="2小时前" text="美国商务部发布关于半导体出口限制的最新说明" />
                <NewsItem time="昨天" text="翰高出海助力某佛山家电巨头完成北美首批EPA认证" />
                <NewsItem time="3天前" text="2024年4月北美汽配需求指数预测发布" />
              </div>
            </div>

            {/* Assessment CTA */}
            <div className="bg-yellow-500 rounded-2xl p-8 text-black">
              <h4 className="text-xl font-bold mb-4">需要专属评估？</h4>
              <p className="text-sm text-black/70 mb-6 leading-relaxed">我们的专家团队将为您提供 1对1 的出海可行性分析报告。</p>
              <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-bold w-full hover:bg-gray-900 transition-all">
                立即预约
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HotItem: React.FC<{ rank: string; title: string; downloads: string }> = ({ rank, title, downloads }) => (
  <div className="flex space-x-4">
    <span className="text-yellow-500/50 font-bold text-xl">{rank}</span>
    <div>
      <p className="text-sm text-white font-medium mb-1 hover:text-yellow-500 cursor-pointer">{title}</p>
      <p className="text-[10px] text-gray-500">{downloads}</p>
    </div>
  </div>
);

const NewsItem: React.FC<{ time: string; text: string }> = ({ time, text }) => (
  <div className="relative">
    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-yellow-500 border-2 border-[#111111]"></div>
    <p className="text-[10px] text-gray-500 mb-1">{time}</p>
    <p className="text-sm text-white leading-relaxed hover:text-yellow-500 cursor-pointer">{text}</p>
  </div>
);

export default WhitepaperPage;
