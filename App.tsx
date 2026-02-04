import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Pages
import HomePage from './app/page.tsx';
import AssessmentPage from './app/assessment/page.tsx';
import WhitepaperPage from './app/whitepaper/page.tsx';
import AiToolsPage from './app/ai-tools/page.tsx';
import SuccessCasesPage from './app/success-cases/page.tsx';
import MarketCompliancePage from './app/assessment/market-compliance/page.tsx';
import BasicEvalPage from './app/assessment/basic-eval/page.tsx';
import ExpertEvalPage from './app/assessment/expert-eval/page.tsx';
import NaReportPage from './app/assessment/expert-eval/na-report/page.tsx';
import EntryStrategyPage from './app/assessment/expert-eval/entry-strategy/page.tsx';
import AiConsultantPage from './app/ai-consultant/page.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/whitepaper" element={<WhitepaperPage />} />
            <Route path="/ai-tools" element={<AiToolsPage />} />
            <Route path="/ai-consultant/:toolId" element={<AiConsultantPage />} />
            <Route path="/success-cases" element={<SuccessCasesPage />} />
            <Route path="/assessment/market-compliance" element={<MarketCompliancePage />} />
            <Route path="/assessment/basic-eval" element={<BasicEvalPage />} />
            <Route path="/assessment/expert-eval" element={<ExpertEvalPage />} />
            <Route path="/assessment/expert-eval/na-report" element={<NaReportPage />} />
            <Route path="/assessment/expert-eval/entry-strategy" element={<EntryStrategyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
