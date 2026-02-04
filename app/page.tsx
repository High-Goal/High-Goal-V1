
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Globe, Sparkles, Box, CheckCircle, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/skyscrapers/1920/1080" 
            className="w-full h-full object-cover opacity-30 blur-[2px]" 
            alt="Cityscape"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold mb-8 tracking-wider uppercase">
              <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span>专注服务中国传统制造企业</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              助力中国传统制造<br /><span className="text-yellow-500">深耕北美市场</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              我们提供全链路数字化出海解决方案。从智能评估、市场洞察到 AI 辅助运营，一站式赋能企业实现品牌化转型与全球增长。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/assessment" 
                className="group bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center transition-all shadow-[0_0_30px_rgba(234,179,8,0.2)]"
              >
                立即开始企业出海评估
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center">
                查看演示视频
                <div className="ml-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-12">
              <div>
                <p className="text-3xl font-bold text-white mb-1">500+</p>
                <p className="text-sm text-gray-500">服务企业</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">$2B+</p>
                <p className="text-sm text-gray-500">促成交易额</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">98%</p>
                <p className="text-sm text-gray-500">客户满意度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">全流程智能化服务体系</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">基于 AI 大模型与行业专家经验，为您构建从 0 到 1 的出海路径</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<BarChart2 className="w-6 h-6" />}
              title="企业出海评估"
              desc="基于企业现状进行多维度体检，生成定制化出海潜力报告与战略建议。"
              link="/assessment"
              label="立即评估"
            />
            <ServiceCard 
              icon={<Globe className="w-6 h-6" />}
              title="北美市场研报"
              desc="覆盖 50+ 细分品类的深度市场分析，洞察竞品动态、价格趋势与消费者偏好。"
              link="/whitepaper"
              label="浏览报告"
            />
            <ServiceCard 
              icon={<Sparkles className="w-6 h-6" />}
              title="AI 智能顾问"
              desc="7x24小时在线，解答法律合规、物流关税、平台政策等出海难题，即问即答。"
              link="/ai-tools"
              label="开始对话"
              isHot
            />
            <ServiceCard 
              icon={<Box className="w-6 h-6" />}
              title="AI 运营工具箱"
              desc="自动生成 listing 文案、多语言客服邮件、社交媒体营销内容，提升运营效率。"
              link="/ai-tools"
              label="试用工具"
            />
            <ServiceCard 
              icon={<CheckCircle className="w-6 h-6" />}
              title="成功案例库"
              desc="精选 100+ 中国制造出海成功范本，深度解析品牌构建与渠道拓展策略。"
              link="/success-cases"
              label="阅读案例"
            />
            <ServiceCard 
              icon={<MapPin className="w-6 h-6" />}
              title="本地化专家服务"
              desc="连接北美税务、法律、物流专家，提供一对一落地指导与资源对接。"
              link="/assessment/expert-eval"
              label="预约专家"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-4 block">服务网络</span>
            <h2 className="text-4xl font-bold text-white mb-4">全美核心商业区覆盖</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">我们的服务网络覆盖美国主要经济中心，为您打通线下分销渠道。</p>
          </div>

          <div className="relative h-[600px] bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 group">
            <img 
              src="https://picsum.photos/seed/worldmap/1200/600" 
              className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-[20s] group-hover:scale-110" 
              alt="World Map"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            
            {/* Map Markers */}
            <div className="absolute top-1/4 left-1/4">
               <div className="relative group cursor-pointer">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full relative"></div>
               </div>
            </div>
            <div className="absolute bottom-1/3 left-1/3">
               <div className="relative group cursor-pointer">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full relative"></div>
               </div>
            </div>
            <div className="absolute top-1/2 right-1/4">
               <div className="relative group cursor-pointer">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full relative"></div>
               </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-12 bg-black/50 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-xs text-white">自有海外仓</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs text-white">合作分销商</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                <span className="text-xs text-white">售后服务点</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">准备好开启您的出海征程了吗？</h2>
          <p className="text-lg text-black/70 mb-10 max-w-2xl mx-auto">
            立即注册即可免费获取一份针对您所在行业的《北美市场准入简报》，并体验 AI 智能顾问服务。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link 
              to="/assessment" 
              className="bg-black text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              立即开始评估
            </Link>
            <button className="bg-transparent text-black border-2 border-black px-10 py-5 rounded-lg text-lg font-bold hover:bg-black/5 transition-all">
              联系销售团队
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  link: string; 
  label: string; 
  isHot?: boolean;
}> = ({ icon, title, desc, link, label, isHot }) => (
  <div className="group bg-[#111111] border border-white/5 p-8 rounded-2xl hover:bg-[#1a1a1a] hover:border-white/10 transition-all">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      {isHot && (
        <span className="text-[10px] font-bold bg-red-500/10 text-red-500 px-2 py-1 rounded uppercase tracking-wider border border-red-500/20">
          热门
        </span>
      )}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">
      {desc}
    </p>
    <Link to={link} className="inline-flex items-center text-sm font-bold text-yellow-500 hover:text-yellow-400">
      {label}
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default HomePage;
