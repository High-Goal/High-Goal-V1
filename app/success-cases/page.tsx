
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ArrowRight, Play, Bookmark, Share2 } from 'lucide-react';
import { SUCCESS_CASES } from '../../src/data/mockData';

const SuccessCasesPage: React.FC = () => {
  const featured = SUCCESS_CASES[0];
  const others = SUCCESS_CASES.slice(1);

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative rounded-[2.5rem] overflow-hidden mb-24 h-[600px] border border-white/5 group">
           <img src="https://picsum.photos/seed/factory/1200/600" className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Success Stories" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">社区聚焦</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">制造业出海先行者故事</h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                探索中国传统制造企业如何成功转型，在竞争激烈的北美市场中蓬勃发展。
              </p>
              <div className="flex space-x-6">
                <button className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all">阅读最新案例</button>
                <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">加入出海社区</button>
              </div>
           </div>
        </div>

        {/* This Month's Spotlight */}
        <section className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1.5 h-8 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">本月出海标杆</h2>
          </div>

          <div className="bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row group transition-all hover:border-white/10">
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
              <img src={featured.imageUrl} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt={featured.title} />
              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-[10px] text-white/80">
                深圳, 中国
              </div>
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                 <span className="text-yellow-500 text-[10px] font-bold bg-yellow-500/10 px-3 py-1 rounded-full uppercase border border-yellow-500/20">{featured.category}</span>
                 <span className="text-gray-500 text-[10px] uppercase tracking-wider">{featured.timeToRead}</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight group-hover:text-yellow-500 transition-colors">{featured.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                {featured.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <img src="https://picsum.photos/seed/ceo/100/100" className="w-full h-full object-cover" alt={featured.author} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{featured.author}</p>
                    <p className="text-xs text-gray-500">{featured.authorRole}</p>
                  </div>
                </div>
                <button className="text-yellow-500 text-sm font-bold flex items-center hover:text-yellow-400">
                  阅读完整报道 <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Grid */}
        <section>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">翰高出海助力企业案例</h2>
              <p className="text-gray-500">来自成功跨越者的实战洞察</p>
            </div>
            <Link to="#" className="text-yellow-500 text-sm font-bold flex items-center hover:text-yellow-400">
              查看归档 <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {others.map(c => (
              <div key={c.id} className="group flex flex-col bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={c.imageUrl} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={c.title} />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <span className="text-[10px] font-bold text-yellow-500 mb-4 tracking-wider uppercase">{c.category}</span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors leading-snug">{c.title}</h3>
                  <p className="text-sm text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                     <span className="text-[10px] text-gray-600 uppercase tracking-widest">{c.timeToRead}</span>
                     <button className="text-gray-500 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-y border-white/5 text-center">
             <StatItem label="分享案例" value="500+" />
             <StatItem label="北美总营收" value="$20亿+" prefix="text-blue-500" />
             <StatItem label="覆盖行业" value="50+" />
             <StatItem label="社区成员" value="12k" />
          </div>
        </section>

        {/* Submission CTA */}
        <div className="fixed bottom-12 right-12 z-40">
           <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold shadow-2xl flex items-center hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95">
              <Play className="w-4 h-4 mr-2 fill-current" /> 提交您的出海故事
           </button>
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{ label: string; value: string; prefix?: string }> = ({ label, value, prefix }) => (
  <div>
    <p className={`text-5xl font-extrabold mb-3 tracking-tighter ${prefix || 'text-white'}`}>{value}</p>
    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{label}</p>
  </div>
);

export default SuccessCasesPage;
