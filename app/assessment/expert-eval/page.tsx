"use client";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, 
  BarChart3, 
  Users, 
  Factory, 
  Lightbulb, 
  Package, 
  Globe2, 
  Scale, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Lock,
  FileText,
  Download,
  CheckCircle2,
  Trophy,
  Briefcase,
  Edit3
} from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs.tsx';

// Mock Data for all 10 modules
const MODULES = [
  { id: 1, label: '1. 经营状况 (利润)', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 2, label: '2. 核心产品竞争力', icon: <Package className="w-4 h-4" /> },
  { id: 3, label: '3. 市场竞争对手分析', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 4, label: '4. 制造能力与技术', icon: <Factory className="w-4 h-4" /> },
  { id: 5, label: '5. 产品创新能力', icon: <Lightbulb className="w-4 h-4" /> },
  { id: 6, label: '6. 供应链韧性', icon: <Layers className="w-4 h-4" /> },
  { id: 7, label: '7. 国际化项目经验', icon: <Globe2 className="w-4 h-4" /> },
  { id: 8, label: '8. 合规与风控', icon: <Scale className="w-4 h-4" /> },
  { id: 9, label: '9. 领导与管理能力', icon: <Trophy className="w-4 h-4" /> },
  { id: 10, label: '10. 人员及组织能力', icon: <Briefcase className="w-4 h-4" /> },
];

interface Answer {
  type: 'score' | 'other';
  value: number | string;
}

const ExpertEvalPage: React.FC = () => {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentModule, setCurrentModule] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [isFinished, setIsFinished] = useState(false);

  // Check lock status
  useEffect(() => {
    const status = localStorage.getItem('expert_eval_unlocked');
    if (status === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentModule < 10) {
      setCurrentModule(currentModule + 1);
      setCurrentPage(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (isFinished) {
      setIsFinished(false);
      setCurrentModule(10);
      setCurrentPage(2);
      return;
    }
    if (currentPage > 1) {
      setCurrentPage(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentModule > 1) {
      setCurrentModule(currentModule - 1);
      setCurrentPage(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScoreSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({ 
      ...prev, 
      [`${currentModule}-${questionId}`]: { type: 'score', value: score } 
    }));
  };

  const handleOtherToggle = (questionId: number) => {
    const key = `${currentModule}-${questionId}`;
    if (answers[key]?.type === 'other') {
      // If already other, maybe toggle off or just keep
    } else {
      setAnswers(prev => ({ 
        ...prev, 
        [key]: { type: 'other', value: '' } 
      }));
    }
  };

  const handleOtherTextChange = (questionId: number, text: string) => {
    setAnswers(prev => ({ 
      ...prev, 
      [`${currentModule}-${questionId}`]: { type: 'other', value: text } 
    }));
  };

  // Generate 10 questions logic (5 per page)
  const getQuestions = () => {
    const startIndex = (currentPage - 1) * 5 + 1;
    const moduleLabel = MODULES.find(m => m.id === currentModule)?.label.split('. ')[1];
    
    return Array.from({ length: 5 }).map((_, i) => {
      const qId = startIndex + i;
      return {
        id: qId,
        text: `针对【${moduleLabel}】维度的第 ${qId} 个专业调研问题：您企业的具体表现如何？`
      };
    });
  };

  if (!isUnlocked) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen py-24 flex items-center justify-center p-4">
        <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-12 max-w-2xl w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mx-auto mb-8">
            <Lock size={40} />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-6">访问受限</h1>
          <p className="text-gray-400 mb-12 text-lg">
            “出海深度全面评估”属于专业版功能。请先在评估中心完成解锁操作。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/assessment')}
              className="px-10 py-5 bg-yellow-500 text-black rounded-2xl font-bold hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20"
            >
              前往评估中心解锁
            </button>
            <button 
              onClick={() => navigate('/')}
              className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestions = getQuestions();
  const totalSteps = 20; 
  const currentStep = (currentModule - 1) * 2 + currentPage;
  const progressValue = (currentStep / totalSteps) * 100;

  if (isFinished) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: '出海评估', path: '/assessment' }, { label: '评估完成' }]} />
          
          <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-12 text-center shadow-2xl">
            <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-6">深度专家评估已完成</h1>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              您的 100 项深度调研数据已处理完毕。系统已根据您的行业属性与北美市场准入标准生成了完整的战略转型报告。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">报告版本</p>
                <p className="text-white font-bold">2024 专家级深度评估报告</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">报告页数</p>
                <p className="text-white font-bold">42 页 PDF 深度分析</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={handlePrev}
                className="px-10 py-5 bg-[#1a1a1a] text-gray-400 rounded-2xl font-bold text-sm hover:text-white transition-all flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回修改
              </button>
              <Link 
                to="/assessment/expert-eval/na-report"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-500/20 flex items-center group transition-all"
              >
                生成全面专家评估报告
                <FileText className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
              </Link>
              <button className="bg-white/5 text-white border border-white/10 px-8 py-5 rounded-2xl font-bold flex items-center hover:bg-white/10 transition-all">
                <Download className="w-5 h-5 mr-3" />
                PDF 下载
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[
            { label: '出海评估', path: '/assessment' },
            { label: '深度专家评估' }
          ]} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
               <h2 className="text-xl font-bold text-white mb-2 tracking-tight">专家深度评估系统</h2>
               <p className="text-[10px] text-yellow-500 font-bold tracking-[0.2em] uppercase">Premium Strategic Eval</p>
            </div>

            <div className="space-y-1">
              {MODULES.map(mod => (
                <button
                  key={mod.id}
                  onClick={() => {
                    setCurrentModule(mod.id);
                    setCurrentPage(1);
                  }}
                  className={`w-full flex items-center px-5 py-3.5 rounded-xl transition-all ${
                    currentModule === mod.id 
                      ? 'bg-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/10' 
                      : 'text-gray-500 hover:bg-[#111111] hover:text-gray-300 border border-transparent hover:border-white/5'
                  }`}
                >
                  <span className="mr-3">{mod.icon}</span>
                  <span className="text-xs truncate">{mod.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-3">
             <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-white/5 pb-8">
                   <div>
                     <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2 block">
                       Module {currentModule} / 10 • Page {currentPage} / 2
                     </span>
                     <h1 className="text-2xl font-extrabold text-white tracking-tight">
                       {MODULES.find(m => m.id === currentModule)?.label.split('. ')[1]}
                     </h1>
                   </div>
                   <div className="bg-[#1a1a1a] px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-4">
                      <div className="text-right">
                         <p className="text-[10px] text-gray-500 font-bold uppercase">总体进度</p>
                         <p className="text-sm font-bold text-white">{Math.round(progressValue)}%</p>
                      </div>
                      <div className="w-24 h-1.5 bg-black/50 rounded-full overflow-hidden">
                         <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${progressValue}%` }}></div>
                      </div>
                   </div>
                </div>

                <div className="space-y-16 py-4">
                  {currentQuestions.map((q) => {
                    const answer = answers[`${currentModule}-${q.id}`];
                    return (
                      <section key={q.id} className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 font-bold text-xs flex-shrink-0">
                            {String(q.id).padStart(2, '0')}
                          </div>
                          <h3 className="text-base font-bold text-gray-200 tracking-tight mt-1 leading-relaxed">{q.text}</h3>
                        </div>
                        
                        <div className="ml-12 space-y-4">
                          {/* 1-5 Score Buttons */}
                          <div className="flex flex-col space-y-2">
                             <div className="flex justify-between text-[10px] text-gray-600 font-bold uppercase tracking-widest px-1">
                                <span>1 (最不好)</span>
                                <span>5 (最好)</span>
                             </div>
                             <div className="grid grid-cols-5 gap-3">
                                {[1, 2, 3, 4, 5].map((score) => (
                                  <button
                                    key={score}
                                    onClick={() => handleScoreSelect(q.id, score)}
                                    className={`p-4 rounded-xl border text-center transition-all ${
                                      answer?.type === 'score' && answer.value === score
                                        ? 'bg-yellow-500 border-yellow-500 text-black font-extrabold shadow-lg shadow-yellow-500/20 scale-[1.02]' 
                                        : 'bg-[#1a1a1a] border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'
                                    }`}
                                  >
                                    <span className="text-sm">{score}</span>
                                  </button>
                                ))}
                             </div>
                          </div>

                          {/* Other Option */}
                          <div className="space-y-3">
                             <button
                               onClick={() => handleOtherToggle(q.id)}
                               className={`w-full p-4 rounded-xl border text-center transition-all flex items-center justify-center space-x-2 ${
                                 answer?.type === 'other'
                                   ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500 font-bold' 
                                   : 'bg-[#1a1a1a] border-white/5 text-gray-500 hover:border-white/20'
                               }`}
                             >
                               <Edit3 size={14} />
                               <span className="text-sm">其他事项说明</span>
                             </button>

                             {answer?.type === 'other' && (
                               <div className="animate-in slide-in-from-top-2 duration-300">
                                 <textarea
                                   value={typeof answer.value === 'string' ? answer.value : ''}
                                   onChange={(e) => handleOtherTextChange(q.id, e.target.value)}
                                   placeholder="请输入具体详情或补充信息..."
                                   className="w-full bg-[#0a0a0a] border border-yellow-500/30 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all min-h-[100px] shadow-inner placeholder:text-gray-700"
                                 />
                               </div>
                             )}
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </div>
             </div>

             <div className="flex items-center justify-between">
                <p className="text-[10px] text-gray-600 font-medium italic">High-Goal: 100项核心维度调研已启用 1-5 权重评估逻辑</p>
                <div className="flex space-x-4">
                   <button 
                     onClick={handlePrev}
                     disabled={currentModule === 1 && currentPage === 1}
                     className={`px-6 py-4 rounded-2xl text-xs font-bold border transition-all flex items-center ${
                       currentModule === 1 && currentPage === 1 
                        ? 'opacity-0 pointer-events-none'
                        : 'bg-[#111111] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                     }`}
                   >
                     <ArrowLeft className="w-4 h-4 mr-2" />
                     上一步
                   </button>

                   <button 
                     onClick={handleNext}
                     className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-yellow-500/10 flex items-center group transition-all"
                   >
                     {(currentModule === 10 && currentPage === 2) ? '完成所有调研' : (currentPage === 1 ? '继续该模块' : '进入下一模块')}
                     <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertEvalPage;
