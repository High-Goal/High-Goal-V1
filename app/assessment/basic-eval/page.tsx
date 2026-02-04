"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, ArrowRight, Save, Lock, Zap, CheckCircle, HelpCircle } from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs.tsx';

const BasicEvalPage: React.FC = () => {
  const steps = [
    { id: 1, label: '1. 核心产品线', status: 'done' },
    { id: 2, label: '2. 营收规模', status: 'done' },
    { id: 3, label: '3. 产能与产线', status: 'done' },
    { id: 4, label: '4. 竞争优势', status: 'done' },
    { id: 5, label: '5. 供应链现状', status: 'current' },
    { id: 6, label: '6. 出口经验', status: 'pending' },
    { id: 7, label: '7. 团队配置', status: 'pending' },
    { id: 8, label: '8. 资金预算', status: 'pending' },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[
            { label: '出海评估', path: '/assessment' },
            { label: '基础专项评估' }
          ]} 
        />

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">制造业北美出海基础体感评估</h1>
          <p className="text-gray-500 max-w-3xl leading-relaxed">
            专为中小型制造企业设计，评估生产制造能力与北美本地化需求的匹配度。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Nav */}
          <div className="space-y-1">
            {steps.map(step => (
              <div 
                key={step.id} 
                className={`flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all cursor-pointer ${
                  step.status === 'current' 
                    ? 'bg-yellow-500 border-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/10' 
                    : step.status === 'done'
                    ? 'bg-[#111111] border-white/5 text-gray-300'
                    : 'bg-[#0d0d0d] border-white/5 text-gray-600'
                }`}
              >
                <span className="text-xs tracking-tight">{step.label}</span>
                {step.status === 'done' && <CheckCircle className="w-3.5 h-3.5 text-green-500" />}
              </div>
            ))}
            
            <div className="pt-8 space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/5">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">预计耗时</p>
                <p className="text-lg font-bold text-white mb-2">15 分钟</p>
                <p className="text-[10px] text-gray-600">完成度越高，分析结果越精准。</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. 供应链现状与柔性能力</h2>
                </div>
                <HelpCircle className="w-5 h-5 text-gray-700 cursor-help" />
              </div>

              <div className="space-y-12">
                <QuestionItem 
                  question="核心原材料的供应来源分布如何？"
                  options={[
                    "100% 依赖国内单一供应商",
                    "国内有多家备选，无海外来源",
                    "已有部分原材料来自海外（东南亚等）",
                    "全球化布局，在北美已有现成供应链"
                  ]}
                  selectedIndex={1}
                />

                <QuestionItem 
                  question="对于“小批量、多批次”的定制化订单，产线响应时间？"
                  options={[
                    "2周以内 (极高柔性)",
                    "2-4周 (中等柔性)",
                    "4-8周 (偏刚性)",
                    "8周以上 (传统大规模生产)"
                  ]}
                />

                <QuestionItem 
                  question="是否具备在北美建立本地组装或发货仓库的意向？"
                  options={[
                    "已有明确计划与选址",
                    "有初步意向，正在调研",
                    "暂无计划，仅考虑国内直发",
                    "不考虑建立海外节点"
                  ]}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button className="px-8 py-4 bg-[#111111] border border-white/10 rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-all flex items-center">
                <Save className="w-4 h-4 mr-2" /> 暂存草稿
              </button>
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-[#1a1a1a] text-gray-500 rounded-xl font-bold text-sm">上一步</button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 rounded-xl font-bold flex items-center shadow-xl shadow-yellow-500/10 group text-sm">
                  下一步: 出口经验
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionItem: React.FC<{ question: string; options: string[]; selectedIndex?: number }> = ({ question, options, selectedIndex }) => (
  <div className="space-y-6">
    <h3 className="text-lg font-bold text-white">{question}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((opt, i) => (
        <div 
          key={i} 
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            selectedIndex === i 
              ? 'bg-yellow-500/5 border-yellow-500 text-white font-bold' 
              : 'bg-[#161616] border-white/5 text-gray-500 hover:border-white/10 hover:text-gray-300'
          }`}
        >
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${selectedIndex === i ? 'border-yellow-500' : 'border-white/10'}`}>
              {selectedIndex === i && <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>}
            </div>
            <span className="text-sm">{opt}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BasicEvalPage;
