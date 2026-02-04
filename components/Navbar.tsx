"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../src/data/mockData.ts';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-black transform group-hover:scale-110 transition-transform">
                翰
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white uppercase">翰高出海</span>
                <span className="text-[10px] text-gray-500 font-medium">HIGH-GOAL CONSULTING</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                    location.pathname === item.path ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="text"
                placeholder="搜索案例、报告..."
                className="bg-[#1a1a1a] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:outline-none focus:border-yellow-500 transition-all focus:ring-1 focus:ring-yellow-500/20"
              />
            </div>
            <Link to="/assessment" className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold flex items-center transition-all hover:translate-y-[-1px]">
              联系客服
            </Link>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">个人中心</span>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-4 py-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-400 hover:text-yellow-500"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-4">
            <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold">
              联系客服
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
