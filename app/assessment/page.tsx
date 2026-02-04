"use client";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, ClipboardList, TrendingUp, Search, AlertCircle, Rocket, ArrowRight, Check, Lock, X, CheckCircle2, QrCode, CreditCard } from 'lucide-react';

const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const [isExpertUnlocked, setIsExpertUnlocked] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [activePayment, setActivePayment] = useState<'wechat' | 'alipay' | null>(null);
  const [redeemCode, setRedeemCode] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Check localStorage for unlock status on mount
  useEffect(() => {
    const status = localStorage.getItem('expert_eval_unlocked');
    if (status === 'true') setIsExpertUnlocked(true);
  }, []);

  const handleVerifyCode = () => {
    if (redeemCode.length === 12) {
      unlockModule();
    } else {
      alert("请输入有效的12位会员码");
    }
  };

  const unlockModule = () => {
    localStorage.setItem('expert_eval_unlocked', 'true');
    setIsExpertUnlocked(true);
    setShowUnlockModal(false);
    setActivePayment(null);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (!isExpertUnlocked) {
      e.preventDefault();
      setShowUnlockModal(true);
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-24 relative">
      {/* Success Notification */}
      {showSuccessToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] animate-in slide-in-from-top duration-500">
          <div className="bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-green-400">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-bold">支付/验证成功！出海深度评估已解锁。</span>
          </div>
        </div>
      )}

      {/* Unified Unlock Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowUnlockModal(false)}></div>
          <div className="relative bg-[#111111] border border-white/10 rounded-[3rem] p-10 max-w-lg w-full shadow-2xl scale-in-center overflow-hidden">
            <button onClick={() => setShowUnlockModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
              <X size={24} />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 mx-auto mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">解锁出海深度全面评估</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                会员用户，请输入会员码，非会员，扫码解锁进入出海深度全面评估。
              </p>
            </div>

            <div className="space-y-8">
              {/* Member Code Section */}
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-2" />
                  会员兑换码验证
                </p>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    placeholder="输入 12 位会员码" 
                    className="bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none focus:border-yellow-500 transition-all text-white placeholder:text-gray-700" 
                  />
                  <button 
                    onClick={handleVerifyCode}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold transition-all active:scale-95"
                  >
                    验证
                  </button>
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 flex items-center">
                  <CreditCard className="w-3 h-3 mr-2" />
                  扫码付费解锁专业版
                </p>
                
                {activePayment ? (
                  <div className="text-center animate-in fade-in zoom-in duration-300">
                    <div className="bg-white p-4 rounded-3xl mb-6 mx-auto w-40 h-40 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl relative flex items-center justify-center">
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4 opacity-10">
                          {Array.from({ length: 16 }).map((_, i) => <div key={i} className="bg-black rounded-sm"></div>)}
                        </div>
                        {activePayment === 'wechat' ? (
                           <img src="https://img.icons8.com/color/48/weixing.png" alt="WeChat" className="w-12 h-12 relative z-10" />
                        ) : (
                           <img src="https://img.icons8.com/color/48/alipay.png" alt="Alipay" className="w-12 h-12 relative z-10" />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-sm font-bold text-white mb-4">请使用{activePayment === 'wechat' ? '微信' : '支付宝'}扫码支付</p>
                      <button 
                        onClick={unlockModule}
                        className="text-yellow-500 text-xs font-bold underline hover:text-yellow-400"
                      >
                        模拟支付成功并返回
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center space-x-6">
                    <button 
                      onClick={() => setActivePayment('wechat')}
                      className="flex flex-col items-center space-y-2 group"
                    >
                      <div className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-green-500/50 group-hover:bg-green-500/5 transition-all">
                        <img src="https://img.icons8.com/color/48/weixing.png" alt="WeChat" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <span className="text-[10px] text-gray-500 font-bold group-hover:text-white">微信支付</span>
                    </button>
                    <button 
                      onClick={() => setActivePayment('alipay')}
                      className="flex flex-col items-center space-y-2 group"
                    >
                      <div className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
                        <img src="https://img.icons8.com/color/48/alipay.png" alt="Alipay" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <span className="text-[10px] text-gray-500 font-bold group-hover:text-white">支付宝</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <p className="text-center mt-8 text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em]">
              支付后实时解锁永久权限 • 由 翰高出海 安全中心保障
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">企业出海评估中心</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            赋能中国制造企业精准对标北美市场。通过行业权威合规、基础建厂及深度战略三大评估模块，为您构建清晰的全球化转型路径。
          </p>
        </div>

        {/* Assessment Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <AssessmentModuleCard 
            icon={<ShieldCheck className="w-8 h-8" />}
            title="市场准入与合规性评估"
            tag="免费急速合规自测"
            points={["快速识别核心准入资质缺口", "海关编码及税率初步查询建议", "规避北美市场知识产权法律红线"]}
            ctaLink="/assessment/market-compliance"
            ctaText="开始合规自测"
            color="yellow"
          />
          <AssessmentModuleCard 
            icon={<ClipboardList className="w-8 h-8" />}
            title="制造业北美出海基础体感专项评估"
            tag="免费版 · 28道专项测试"
            points={["全面扫描企业出海软硬实力现状", "对比北美制造服务业运营标准", "生成10页基础版转型能力报告"]}
            ctaLink="/assessment/basic-eval"
            ctaText="开启基础评估"
            color="yellow"
            isFeatured
          />
          
          {/* Deep Assessment Card */}
          <div className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all ${
            isExpertUnlocked 
              ? 'bg-[#1a1a1a] border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.1)]' 
              : 'bg-[#111111] border-yellow-500/30'
          }`}>
            <div className="mb-6 flex justify-between items-start">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 relative">
                <Rocket className="w-8 h-8" />
                {!isExpertUnlocked && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-[#111111]">
                    <Lock size={12} className="text-white" />
                  </div>
                )}
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border transition-colors ${
                isExpertUnlocked ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
              }`}>
                {isExpertUnlocked ? '已解锁 · 专业版' : '专业版 · 100道深度评估'}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">出海深度全面评估</h3>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-sm text-gray-400 leading-relaxed">
                <Check className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                覆盖财税筹划、品牌溢价与本土供应链
              </li>
              <li className="flex items-start text-sm text-gray-400 leading-relaxed">
                <Check className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                40+页PDF专家级战略评估报告
              </li>
              <li className="flex items-start text-sm text-gray-400 leading-relaxed">
                <Check className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                1对1资深出海专家 30分钟报告解读
              </li>
            </ul>

            <Link 
              to={isExpertUnlocked ? "/assessment/expert-eval" : "#"} 
              onClick={handleCtaClick}
              className={`w-full py-5 rounded-2xl font-bold text-center transition-all flex items-center justify-center group ${
                isExpertUnlocked 
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-xl shadow-yellow-500/20' 
                  : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.3)]'
              }`}
            >
              {isExpertUnlocked ? '进入深度评估' : '解锁深度评估'}
              <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${isExpertUnlocked ? 'group-hover:translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">评估版本详细对比</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-[#0d0d0d]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111111]">
                  <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">评估维度</th>
                  <th className="p-8 text-sm font-bold text-gray-400">市场准入合规版</th>
                  <th className="p-8 text-sm font-bold text-gray-400">基础体验版</th>
                  <th className="p-8 text-sm font-bold text-yellow-500">深度全面评估 (推荐)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <ComparisonRow label="侧重目标" c1="合规准入与强制认证" c2="运营基础与能力现状" c3="战略增长与本土化蓝图" />
                <ComparisonRow label="评估方法论" c1="北美法律法规对照" c2="制造转型通用模型" c3="行业标杆战略增长模型" />
                <ComparisonRow label="题目数量" c1="15-20 道 (合规项)" c2="28 道 (专项测试)" c3="100 道 (深度评估)" />
                <ComparisonRow label="核心分析领域" c1="FDA/EPA/UL认证、关税" c2="物流仓储、人才团队" c3="竞争情报、财税筹划、品牌溢价" />
                <ComparisonRow label="产出物" c1="合规缺口自查表" c2="网页简版概览报告" c3="40+页 PDF 专家评估报告" />
                <ComparisonRow label="后期支持" c1="法规更新推送" c2="无" c3="1对1 资深专家 30分钟解读" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <FeatureBox icon={<TrendingUp className="w-6 h-6 text-yellow-500" />} title="行业大数据对比" desc="对标 5000+ 同类型制造企业出海数据，精准定位您的行业水位线。" />
           <FeatureBox icon={<AlertCircle className="w-6 h-6 text-yellow-500" />} title="合规风险预警" desc="基于最新北美法律环境，提前预警 FDA, EPA, UL 等准入认证风险。" />
           <FeatureBox icon={<Search className="w-6 h-6 text-yellow-500" />} title="一站式资源链接" desc="评估后直连北美海外仓、本土律所及电商运营代办资源。" />
        </div>
      </div>
    </div>
  );
};

const AssessmentModuleCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  tag: string;
  points: string[];
  ctaLink: string;
  ctaText: string;
  color: string;
  isFeatured?: boolean;
}> = ({ icon, title, tag, points, ctaLink, ctaText, isFeatured }) => (
  <div className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all ${
    isFeatured 
      ? 'bg-[#1a1a1a] border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.1)]' 
      : 'bg-[#111111] border-white/5 hover:border-white/20'
  }`}>
    <div className="mb-6 flex justify-between items-start">
      <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500">
        {icon}
      </div>
      <span className="text-[10px] font-bold bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full uppercase tracking-wider border border-yellow-500/20">
        {tag}
      </span>
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{title}</h3>
    
    <ul className="space-y-4 mb-8 flex-grow">
      {points.map((p, i) => (
        <li key={i} className="flex items-start text-sm text-gray-400 leading-relaxed">
          <Check className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
          {p}
        </li>
      ))}
    </ul>

    <Link 
      to={ctaLink} 
      className={`w-full py-5 rounded-2xl font-bold text-center transition-all flex items-center justify-center group ${
        isFeatured 
          ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
          : 'bg-transparent border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/5'
      }`}
    >
      {ctaText}
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const ComparisonRow: React.FC<{ label: string; c1: string; c2: string; c3: string }> = ({ label, c1, c2, c3 }) => (
  <tr className="hover:bg-white/5 transition-colors">
    <td className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</td>
    <td className="p-8 text-sm">{c1}</td>
    <td className="p-8 text-sm">{c2}</td>
    <td className="p-8 text-sm font-bold text-yellow-500">{c3}</td>
  </tr>
);

const FeatureBox: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-[#111111] border border-white/5 p-10 rounded-[2.5rem] hover:bg-[#1a1a1a] transition-all group">
    <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default AssessmentPage;
