import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  Sparkles, 
  Info, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Zap, 
  History, 
  Bookmark,
  ChevronRight,
  Bot,
  User,
  MoreVertical,
  Paperclip,
  Share2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { AI_TOOLS } from '../../src/data/mockData';
import Breadcrumbs from '../../components/Breadcrumbs';

const AiConsultantPage: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const navigate = useNavigate();
  const tool = AI_TOOLS.find(t => t.id === toolId);
  
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tool) {
      navigate('/ai-tools');
      return;
    }
    // Set initial welcome message
    setMessages([{
      role: 'assistant',
      content: `您好！我是您的 ${tool.title} 专属 AI 顾问。基于翰高出海专家库，我已准备好协助您处理相关的 ${tool.category} 问题。请问您想了解哪些方面的具体信息？`
    }]);
  }, [tool, navigate]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !tool || isLoading) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `${tool.systemInstruction}\n你的回答应专业、客观，涉及法规时应注明出处。如果你不确定，请建议用户咨询翰高的真人专家。`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "抱歉，我暂时无法处理您的请求。";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "抱歉，由于连接超时，我暂时无法回答。请检查网络或稍后再试。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!tool) return null;

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col h-screen overflow-hidden">
      <div className="flex-grow flex overflow-hidden">
        
        {/* Left Panel: Knowledge Hub */}
        <aside className="w-[450px] border-r border-white/5 bg-[#0d0d0d] hidden lg:flex flex-col overflow-y-auto custom-scrollbar">
          <div className="p-8">
            <Link to="/ai-tools" className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-white mb-10 transition-colors group">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              返回 AI 工具库
            </Link>

            <div className="mb-10">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 mb-6 shadow-xl shadow-yellow-500/5">
                <Sparkles size={32} />
              </div>
              <h1 className="text-3xl font-extrabold text-white mb-4 tracking-tight">{tool.title}</h1>
              <p className="text-gray-500 leading-relaxed text-sm">
                {tool.detailedInfo}
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature Tags */}
              <section>
                <h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4 flex items-center">
                  <Zap size={12} className="mr-2" />
                  核心能力点
                </h3>
                <div className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-start bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ShieldCheck className="w-4 h-4 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-xs text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reference Metadata */}
              <section>
                <h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4 flex items-center">
                  <Info size={12} className="mr-2" />
                  专家知识库标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.knowledgeTags?.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-[#1a1a1a] text-[10px] font-bold text-yellow-500/70 border border-yellow-500/10 rounded-lg uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Tips Banner */}
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/5 relative overflow-hidden group">
                 <div className="relative z-10">
                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-3">使用小贴士</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      您可以尝试问我：“{tool.features[0]} 的具体流程是什么？”或“针对该品类有什么合规建议？”
                    </p>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Panel: Chat Interface */}
        <main className="flex-grow flex flex-col bg-[#0a0a0a] relative">
          
          {/* Chat Header */}
          <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
             <div className="flex items-center space-x-4">
               <div className="lg:hidden">
                 <Link to="/ai-tools">
                   <ArrowLeft className="w-6 h-6 text-gray-500" />
                 </Link>
               </div>
               <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                    <Bot size={24} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
               </div>
               <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{tool.title} AI 顾问</h3>
                  <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">
                     <span className="text-yellow-500">•</span>
                     <span>Gemini 3 Turbo</span>
                     <span className="px-1.5 py-0.5 bg-yellow-500/10 text-yellow-500 rounded ml-2">专业版</span>
                  </div>
               </div>
             </div>
             <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all">
                   <History size={18} />
                </button>
                <button className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all">
                   <Bookmark size={18} />
                </button>
                <button className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all lg:hidden">
                   <Info size={18} />
                </button>
                <div className="h-4 w-px bg-white/10 mx-2"></div>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10">
                   咨询真人专家
                </button>
             </div>
          </header>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-8 space-y-8 custom-scrollbar scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`flex max-w-[85%] lg:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-4`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                    msg.role === 'user' 
                      ? 'bg-blue-600/10 border-blue-600/20 text-blue-500 ml-4' 
                      : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500 mr-4'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-5 rounded-3xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-[#111111] border border-white/5 text-gray-300 rounded-tl-none shadow-xl whitespace-pre-wrap'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20 mr-4 flex items-center justify-center text-yellow-500">
                  <Bot size={16} />
                </div>
                <div className="bg-[#111111] border border-white/5 p-4 rounded-3xl rounded-tl-none flex space-x-2">
                   <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                   <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-white/5 bg-[#0a0a0a]/50 backdrop-blur-md">
             <div className="max-w-4xl mx-auto relative group">
                <textarea 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="在此输入您的问题 (Shift+Enter 换行)..."
                  className="w-full bg-[#111111] border border-white/10 rounded-[2rem] py-6 pl-8 pr-24 text-sm text-white focus:outline-none focus:border-yellow-500 transition-all min-h-[80px] max-h-[300px] shadow-inner placeholder:text-gray-700 resize-none"
                ></textarea>
                <div className="absolute right-6 bottom-5 flex items-center space-x-3">
                   <button className="text-gray-500 hover:text-white p-2 transition-colors">
                      <Paperclip size={20} />
                   </button>
                   <button 
                     onClick={handleSendMessage}
                     disabled={isLoading || !inputValue.trim()}
                     className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                       inputValue.trim() && !isLoading
                        ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 hover:scale-105' 
                        : 'bg-white/5 text-gray-700'
                     }`}
                   >
                      <Send size={20} className={isLoading ? 'animate-pulse' : ''} />
                   </button>
                </div>
             </div>
             <div className="mt-4 flex items-center justify-center space-x-4 text-[10px] text-gray-700 font-bold uppercase tracking-widest">
                <span className="flex items-center"><ShieldCheck size={10} className="mr-1" /> 端到端加密</span>
                <span className="flex items-center"><Sparkles size={10} className="mr-1" /> 翰高 AI 核心引擎 2.0</span>
                <button className="hover:text-gray-400 transition-colors flex items-center">
                  <Share2 size={10} className="mr-1" /> 分享对话记录
                </button>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AiConsultantPage;
