import React from 'react';

interface MockupProps {
  className?: string;
}

// 1. Multi-Turn AI Assistant Chatbot UI
export const ChatUIMockup: React.FC<MockupProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#1F2426] rounded-xl overflow-hidden flex flex-col text-xs font-mono select-none shadow-inner border border-slate/30 ${className}`}>
      {/* Window Title Bar */}
      <div className="bg-[#181B1C] px-4 py-2.5 flex items-center justify-between border-b border-slate/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
        </div>
        <div className="flex items-center gap-2 text-[10px] text-cream/70 bg-[#252B2E] px-3 py-0.5 rounded-full border border-slate/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>gemini-1.5-pro • sql-analyst-agent</span>
        </div>
        <div className="text-[10px] text-cream/50">turnaround: 1.2s</div>
      </div>

      {/* Chat Messages Body */}
      <div className="p-4 flex-1 flex flex-col gap-3 justify-center bg-gradient-to-b from-[#1F2426] to-[#171A1C]">
        {/* User Query */}
        <div className="flex items-start gap-2.5 self-end max-w-[85%]">
          <div className="bg-[#4F5A5E] text-cream rounded-2xl rounded-tr-none px-3.5 py-2 text-[11px] shadow">
            Generate SQL & cohort retention for users acquired in Q3 2026 with churn risk &gt; 0.7.
          </div>
          <div className="w-6 h-6 rounded-full bg-[#C58B72] text-[10px] font-sans font-bold flex items-center justify-center text-white shrink-0">
            SP
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-2.5 self-start max-w-[90%]">
          <div className="w-6 h-6 rounded-full bg-[#8FA89A] text-[9px] font-sans font-bold flex items-center justify-center text-charcoal shrink-0 shadow">
            AI
          </div>
          <div className="bg-[#2B3135] text-cream/90 rounded-2xl rounded-tl-none p-3 border border-slate/40 text-[11px] space-y-2 w-full">
            <div className="flex items-center justify-between text-[10px] text-cream/60 border-b border-slate/40 pb-1 font-sans">
              <span>Synthesizing SQL • n8n webhook active</span>
              <span className="text-emerald-400 font-mono">99.8% SLA</span>
            </div>
            <pre className="bg-[#181B1C] p-2 rounded text-[10px] text-[#ABC5B8] overflow-hidden leading-relaxed font-mono">
              <code>{`SELECT cohort_month, COUNT(user_id) AS active_users,
       ROUND(AVG(churn_probability), 3) AS avg_risk
FROM customer_analytics
WHERE churn_probability > 0.70
GROUP BY 1 ORDER BY 1 DESC;`}</code>
            </pre>
            <div className="flex items-center gap-2 text-[10px] text-[#CDB39B]">
              <span className="px-1.5 py-0.5 rounded bg-[#3D4649] text-cream/90">PostgreSQL Logged</span>
              <span className="px-1.5 py-0.5 rounded bg-[#3D4649] text-cream/90">Streamlit Stream</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Automated End-to-End Analytics & n8n Extraction Workflow
export const N8nWorkflowMockup: React.FC<MockupProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#181D1F] rounded-xl overflow-hidden flex flex-col text-xs font-mono select-none shadow-inner border border-slate/30 ${className}`}>
      {/* Canvas Header */}
      <div className="bg-[#141718] px-4 py-2.5 flex items-center justify-between border-b border-slate/50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6D5A]" />
          <span className="font-sans font-medium text-[11px] text-cream">n8n ETL Pipeline: /extract-docs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
            ● 5,000 daily records
          </span>
          <span className="text-[10px] text-cream/60">Execution: 284ms</span>
        </div>
      </div>

      {/* Node Canvas */}
      <div className="relative p-6 flex-1 flex items-center justify-center bg-[radial-gradient(#3D4649_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Connection Line SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 60 90 L 140 90 M 190 90 L 260 90 M 320 90 L 390 90"
            stroke="#8FA89A"
            strokeWidth="2"
            strokeDasharray="4 3"
            className="animate-pulse"
          />
        </svg>

        <div className="relative z-10 flex items-center justify-between w-full max-w-sm gap-2">
          {/* Node 1: Webhook */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-[#2C3336] border-2 border-[#8FA89A] flex items-center justify-center shadow-lg">
              <span className="text-sm">⚡</span>
            </div>
            <span className="text-[9px] text-cream/80 font-sans">Webhook</span>
          </div>

          {/* Node 2: Document Parser */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-[#2C3336] border-2 border-[#CDB39B] flex items-center justify-center shadow-lg">
              <span className="text-sm">📄</span>
            </div>
            <span className="text-[9px] text-cream/80 font-sans">Parse JSON</span>
          </div>

          {/* Node 3: Claude / OpenAI LLM */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-2xl bg-[#C58B72] text-white flex items-center justify-center shadow-xl ring-4 ring-[#C58B72]/20 scale-105">
              <span className="text-base font-bold">AI</span>
            </div>
            <span className="text-[9px] text-cream font-medium font-sans">LLM Reasoning</span>
          </div>

          {/* Node 4: PostgreSQL */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-[#2C3336] border-2 border-[#4F5A5E] flex items-center justify-center shadow-lg">
              <span className="text-sm">🗄️</span>
            </div>
            <span className="text-[9px] text-cream/80 font-sans">PostgreSQL</span>
          </div>

          {/* Node 5: Power BI */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-[#2C3336] border-2 border-amber-400 flex items-center justify-center shadow-lg">
              <span className="text-sm">📊</span>
            </div>
            <span className="text-[9px] text-cream/80 font-sans">Power BI</span>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="bg-[#121415] px-4 py-2 flex items-center justify-between text-[10px] text-cream/70 border-t border-slate/60">
        <span>Validation: 98% Schema Match</span>
        <span className="text-emerald-400 font-mono">15+ hrs/week saved</span>
      </div>
    </div>
  );
};

// 3. Customer Churn Analysis & Predictive Modeling
export const ChurnDashboardMockup: React.FC<MockupProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#1E2325] rounded-xl overflow-hidden flex flex-col text-xs font-sans select-none shadow-inner border border-slate/30 ${className}`}>
      {/* Dashboard Top */}
      <div className="bg-[#171A1B] px-4 py-2.5 flex items-center justify-between border-b border-slate/40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-serif italic text-cream font-medium text-xs">Customer Churn Retention Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#4F5A5E] text-cream text-[10px]">10,000+ Records</span>
          <span className="px-2 py-0.5 rounded bg-terracotta text-white font-mono text-[10px] font-bold">AUC: 0.94</span>
        </div>
      </div>

      {/* Dashboard Main Visuals */}
      <div className="p-4 grid grid-cols-2 gap-3 flex-1 bg-gradient-to-br from-[#1E2325] to-[#141718]">
        {/* Left: ROC Curve SVG */}
        <div className="bg-[#262D30] p-3 rounded-lg border border-slate/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-cream/70">
            <span>ROC-AUC Curve</span>
            <span className="text-emerald-400 font-mono">95% Acc</span>
          </div>
          <div className="h-24 w-full relative my-1">
            <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
              {/* Baseline */}
              <line x1="0" y1="80" x2="100" y2="0" stroke="#4F5A5E" strokeWidth="1" strokeDasharray="3 3" />
              {/* AUC Shaded Fill */}
              <path
                d="M 0 80 Q 8 10, 100 0 L 100 80 Z"
                fill="url(#rocGrad)"
                opacity="0.35"
              />
              <defs>
                <linearGradient id="rocGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8FA89A" />
                  <stop offset="100%" stopColor="#C58B72" />
                </linearGradient>
              </defs>
              {/* Model Curve */}
              <path
                d="M 0 80 Q 8 10, 100 0"
                fill="none"
                stroke="#8FA89A"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <div className="text-[9px] text-cream/60 flex justify-between font-mono">
            <span>FPR: 0.05</span>
            <span>TPR: 0.95</span>
          </div>
        </div>

        {/* Right: Feature Importance Bar Chart */}
        <div className="bg-[#262D30] p-3 rounded-lg border border-slate/40 flex flex-col justify-between">
          <div className="text-[10px] text-cream/70">Key Churn Drivers (SHAP)</div>
          <div className="space-y-1.5 my-1">
            <div>
              <div className="flex justify-between text-[9px] text-cream/80 mb-0.5">
                <span>Contract Type (Monthly)</span>
                <span className="font-mono">0.34</span>
              </div>
              <div className="w-full h-1.5 bg-[#181B1C] rounded-full overflow-hidden">
                <div className="h-full bg-terracotta rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-cream/80 mb-0.5">
                <span>Support Tickets &gt; 3</span>
                <span className="font-mono">0.26</span>
              </div>
              <div className="w-full h-1.5 bg-[#181B1C] rounded-full overflow-hidden">
                <div className="h-full bg-sand rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-cream/80 mb-0.5">
                <span>Payment Delay Days</span>
                <span className="font-mono">0.19</span>
              </div>
              <div className="w-full h-1.5 bg-[#181B1C] rounded-full overflow-hidden">
                <div className="h-full bg-sage rounded-full" style={{ width: '48%' }} />
              </div>
            </div>
          </div>
          <div className="text-[9px] text-cream/60 font-mono">
            DAX Cohort Retention Matrix
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Sales Performance Optimization & Time-Series Forecasting
export const SalesTimeSeriesMockup: React.FC<MockupProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full bg-[#1F2528] rounded-xl overflow-hidden flex flex-col text-xs font-sans select-none shadow-inner border border-slate/30 ${className}`}>
      {/* Top Header */}
      <div className="bg-[#161B1C] px-4 py-2.5 flex items-center justify-between border-b border-slate/40">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-terracotta" />
          <span className="font-serif italic text-cream font-medium text-xs">Executive Sales & Margin Forecaster</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-cream/70 bg-[#2B3336] px-2.5 py-0.5 rounded">
          <span>50,000+ Transactions</span>
        </div>
      </div>

      {/* Main Graph */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-t from-[#161B1C] to-[#1F2528]">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#283135] p-2 rounded border border-slate/40 text-center">
            <span className="text-[9px] text-cream/60 block">Annual Sales</span>
            <span className="font-serif italic text-cream text-sm font-bold">$3.84M</span>
            <span className="text-[8px] text-emerald-400 block">+18.4% YoY</span>
          </div>
          <div className="bg-[#283135] p-2 rounded border border-slate/40 text-center">
            <span className="text-[9px] text-cream/60 block">Gross Margin</span>
            <span className="font-serif italic text-cream text-sm font-bold">34.8%</span>
            <span className="text-[8px] text-sand block">+2.6 pts</span>
          </div>
          <div className="bg-[#283135] p-2 rounded border border-slate/40 text-center">
            <span className="text-[9px] text-cream/60 block">Debug Speed</span>
            <span className="font-serif italic text-terracotta text-sm font-bold">-50%</span>
            <span className="text-[8px] text-cream/70 block">Cursor AI</span>
          </div>
        </div>

        {/* Time-Series Line Chart SVG */}
        <div className="h-20 w-full relative my-2">
          <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
            {/* Grid horizontal lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="#3D4649" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="#3D4649" strokeWidth="0.5" strokeDasharray="3 3" />

            {/* Area Fill */}
            <path
              d="M 0 65 Q 40 50, 75 58 T 150 35 T 225 40 T 300 15 L 300 80 L 0 80 Z"
              fill="url(#salesGrad)"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C58B72" />
                <stop offset="100%" stopColor="#4F5A5E" />
              </linearGradient>
            </defs>

            {/* Forecast Trend Line */}
            <path
              d="M 0 65 Q 40 50, 75 58 T 150 35 T 225 40 T 300 15"
              fill="none"
              stroke="#C58B72"
              strokeWidth="2.5"
            />

            {/* Peak Highlights */}
            <circle cx="150" cy="35" r="4" fill="#EBD3CB" stroke="#C58B72" strokeWidth="2" />
            <circle cx="300" cy="15" r="4" fill="#8FA89A" stroke="#161B1C" strokeWidth="2" />
          </svg>
        </div>

        <div className="flex items-center justify-between text-[9px] text-cream/60 font-mono border-t border-slate/50 pt-1">
          <span>Q1 Seasonal Low</span>
          <span>Q3 Peak Promotion</span>
          <span className="text-emerald-400">Q4 Target Exceeded</span>
        </div>
      </div>
    </div>
  );
};
