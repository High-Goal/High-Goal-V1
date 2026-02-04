
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center font-bold text-black text-xs">
                翰
              </div>
              <span className="text-base font-bold text-white tracking-tight">翰高出海</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              专为中国传统制造企业打造的一站式北美市场拓展平台。数据驱动，AI 赋能，让出海更简单。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm mb-6">平台服务</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/assessment" className="hover:text-yellow-500">出海评估</Link></li>
              <li><Link to="/whitepaper" className="hover:text-yellow-500">白皮书</Link></li>
              <li><Link to="/ai-tools" className="hover:text-yellow-500">AI 工具箱</Link></li>
              <li><Link to="/assessment/expert-eval" className="hover:text-yellow-500">专家咨询</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6">关于我们</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="#" className="hover:text-yellow-500">公司介绍</Link></li>
              <li><Link to="/success-cases" className="hover:text-yellow-500">成功案例</Link></li>
              <li><Link to="#" className="hover:text-yellow-500">合作伙伴</Link></li>
              <li><Link to="#" className="hover:text-yellow-500">加入我们</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6">联系方式</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>support@highgoal.com</li>
              <li>400-123-4567</li>
              <li className="flex items-center space-x-4 pt-2">
                <Link to="#" className="text-gray-500 hover:text-yellow-500"><Share2 className="w-4 h-4" /></Link>
                <Link to="#" className="text-gray-500 hover:text-yellow-500"><Globe className="w-4 h-4" /></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            © 2024 翰高出海全球化咨询服务有限公司 (High-Goal Consulting). 保留所有权利。
          </p>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6 text-xs text-gray-600">
              <Link to="#" className="hover:text-white">隐私政策</Link>
              <Link to="#" className="hover:text-white">服务条款</Link>
              <span className="text-gray-700">京ICP备12345678号</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Globe className="w-4 h-4" />
              <Share2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
