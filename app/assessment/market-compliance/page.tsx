"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/Breadcrumbs.tsx';

const MarketCompliancePage: React.FC = () => {
  const [progress, setProgress] = useState(15);

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[
            { label: '出海评估', path: '/assessment' },
            { label: '市场准入与合规性评估' }
          ]} 
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">评估进度</h3>
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl font-bold text-yellow-500">{progress}%</span>
                <span className="text-[10px] text-gray-500 uppercase">Step 1/6</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <nav className="space-y-1">
              <SidebarStep label="1. 基础认证与标准" active current />
              <SidebarStep label="2. 法律与知识产权" />
              <SidebarStep label="3. 关税与贸易壁垒" />
              <SidebarStep label="4. 劳工与人权标准" />
              <SidebarStep label="5. 环境保护准则" />
              <SidebarStep label="6. 数据安全与隐私" />
            </nav>

            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-2 text-yellow-500" />
                合规性声明
              </h4>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                本评估基于 2024 年最新北美海关及联邦法规。评估结果仅供参考，不构成法律建议。
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold rounded-full border border-yellow-500/20 uppercase">Module 1</span>
                <h2 className="text-3xl font-bold text-white tracking-tight">基础认证与标准</h2>
              </div>

              <div className="space-y-12">
                <section>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    请选择您的产品目前已经获得或正在申请的北美相关认证。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <OptionCard 
                      title="UL / ETL 认证" 
                      desc="电子电气、机械设备安全标准。" 
                      checked 
                    />
                    <OptionCard 
                      title="FCC 认证" 
                      desc="无线电应用及通讯产品强制标准。" 
                    />
                    <OptionCard 
                      title="FDA 注册" 
                      desc="食品、医疗、激光类产品准入要求。" 
                    />
                    <OptionCard 
                      title="EPA / CARB" 
                      desc="发动机排放、化学品、环保材料标准。" 
                    />
                  </div>
                </section>

                <section className="pt-12 border-t border-white/5">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white">产品责任保险 (Product Liability)</h3>
                    <Info className="w-4 h-4 text-gray-600 cursor-help" />
                  </div>
                  <div className="space-y-4">
                    <RadioItem label="已投保符合北美要求的全球责任险" value="yes" />
                    <RadioItem label="仅有国内保险，需升级北美附加险" value="partial" selected />
                    <RadioItem label="目前尚未投保任何产品责任保险" value="no" />
                  </div>
                </section>

                <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl flex items-start space-x-4 mt-8">
                  <AlertCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="font-bold text-blue-400">专家提醒：</span> 针对传统制造企业，UL 认证是进入北美大型商超链（如 Walmart, Home Depot）的“敲门砖”。建议优先完善此项认证。
                  </p>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8">
                <button className="text-sm font-bold text-gray-500 hover:text-white transition-colors">
                  保存并稍后继续
                </button>
                <div className="flex space-x-4">
                  <button className="px-8 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-all">
                    上一步
                  </button>
                  <button className="px-10 py-3 bg-yellow-500 text-black rounded-xl font-bold text-sm hover:bg-yellow-400 transition-all flex items-center shadow-lg shadow-yellow-500/10 group">
                    下一步: 法律与知识产权
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarStep: React.FC<{ label: string; active?: boolean; current?: boolean }> = ({ label, active, current }) => (
  <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${current ? 'bg-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/10' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}>
    <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-yellow-500' : 'bg-gray-700'} ${current ? 'bg-black' : ''}`}></div>
    <span className="text-xs">{label}</span>
  </div>
);

const OptionCard: React.FC<{ title: string; desc: string; checked?: boolean }> = ({ title, desc, checked }) => (
  <div className={`p-6 rounded-2xl border transition-all cursor-pointer group ${checked ? 'bg-yellow-500/5 border-yellow-500/50 shadow-inner' : 'bg-[#161616] border-white/5 hover:border-white/20'}`}>
    <div className="flex items-center justify-between mb-3">
      <h4 className={`text-sm font-bold transition-colors ${checked ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{title}</h4>
      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${checked ? 'bg-yellow-500 border-yellow-500' : 'border-white/10'}`}>
        {checked && <CheckCircle2 className="w-4 h-4 text-black" />}
      </div>
    </div>
    <p className="text-[10px] text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const RadioItem: React.FC<{ label: string; value: string; selected?: boolean }> = ({ label, selected }) => (
  <div className={`flex items-center p-5 rounded-2xl border cursor-pointer transition-all ${selected ? 'bg-[#1a1a1a] border-yellow-500/30' : 'border-white/5 hover:bg-white/5'}`}>
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-all ${selected ? 'border-yellow-500' : 'border-white/20'}`}>
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-in fade-in zoom-in duration-300"></div>}
    </div>
    <span className={`text-sm ${selected ? 'text-white font-bold' : 'text-gray-400'}`}>{label}</span>
  </div>
);

export default MarketCompliancePage;
