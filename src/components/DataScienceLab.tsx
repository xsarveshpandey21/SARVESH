import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  Share2,
  BarChart2,
  Workflow,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface KMeansPoint {
  id: number;
  rawX: number;
  rawY: number;
  clusteredX: number;
  clusteredY: number;
  color: string;
  cluster: string;
}

const STATIC_KMEANS_POINTS: KMeansPoint[] = (() => {
  const pts: KMeansPoint[] = [];
  // Cluster 1 (Sage: center ~ (75, 75))
  for (let i = 0; i < 15; i++) {
    pts.push({
      id: i,
      rawX: 35 + ((i * 37) % 210),
      rawY: 35 + ((i * 47) % 130),
      clusteredX: 65 + Math.sin(i * 1.8) * 20,
      clusteredY: 70 + Math.cos(i * 2.1) * 18,
      color: '#8FA89A', // sage-500
      cluster: 'Retention Cohort A',
    });
  }
  // Cluster 2 (Blush: center ~ (200, 65))
  for (let i = 15; i < 30; i++) {
    pts.push({
      id: i,
      rawX: 40 + ((i * 29) % 210),
      rawY: 40 + ((i * 53) % 130),
      clusteredX: 205 + Math.sin(i * 1.7) * 20,
      clusteredY: 65 + Math.cos(i * 2.3) * 18,
      color: '#D9B3A7', // blush-500
      cluster: 'High-LTV Subscribers',
    });
  }
  // Cluster 3 (Sand: center ~ (140, 140))
  for (let i = 30; i < 45; i++) {
    pts.push({
      id: i,
      rawX: 30 + ((i * 43) % 210),
      rawY: 30 + ((i * 61) % 130),
      clusteredX: 135 + Math.sin(i * 1.9) * 20,
      clusteredY: 135 + Math.cos(i * 2.2) * 16,
      color: '#CDB39B', // sand-400
      cluster: 'At-Risk Churn Segment',
    });
  }
  return pts;
})();

export const DataScienceLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nn' | 'roc' | 'kmeans' | 'comparison' | 'pipeline'>('nn');
  const [nnArch, setNnArch] = useState<'ann' | 'cnn' | 'rnn'>('ann');
  const [isClustered, setIsClustered] = useState<boolean>(true);
  const initialPoints = STATIC_KMEANS_POINTS;

  return (
    <div className="bg-sage-100/70 dark:bg-darkgreen-surface/90 border border-sage-300 dark:border-darkgreen-border rounded-2xl p-5 sm:p-6 shadow-sm select-none">
      {/* Header and Lab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sage-300/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sage-500 text-cream">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700 dark:text-sage-300 font-semibold">
                LAB DEMONSTRATION • SAGE SUITE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            </div>
            <h4 className="font-serif text-base sm:text-lg font-normal text-ink-900 dark:text-cream">
              Data Science & Deep Learning Sandbox
            </h4>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1 bg-sage-300/30 dark:bg-darkgreen-border p-1 rounded-xl">
          {[
            { id: 'nn', label: 'Neural Net', icon: Brain },
            { id: 'roc', label: 'ROC & Matrix', icon: TrendingUp },
            { id: 'kmeans', label: 'K-Means', icon: Share2 },
            { id: 'comparison', label: 'Models', icon: BarChart2 },
            { id: 'pipeline', label: 'Pipeline', icon: Workflow },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeTab === tab.id
                    ? 'bg-ink-700 text-cream shadow-xs font-medium'
                    : 'text-ink-700 dark:text-cream/80 hover:bg-sage-300/40'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Display Area */}
      <div className="min-h-[260px] flex flex-col justify-center">
        {/* ================= 1. NEURAL ARCHITECTURES (ANN, CNN, RNN) ================= */}
        {activeTab === 'nn' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-ink-700 dark:text-sage-300">
                  Select Architecture:
                </span>
                <div className="flex gap-1.5">
                  {(['ann', 'cnn', 'rnn'] as const).map((arch) => (
                    <button
                      key={arch}
                      onClick={() => setNnArch(arch)}
                      className={`px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-colors ${
                        nnArch === arch
                          ? 'bg-sage-500 text-cream font-bold'
                          : 'bg-sage-200 dark:bg-darkgreen-border text-ink-700 dark:text-cream hover:bg-sage-300'
                      }`}
                    >
                      {arch.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-mono text-ink-700/70 dark:text-cream/60 hidden sm:inline">
                Signals pulse along trained synaptic weights
              </span>
            </div>

            <div className="relative h-56 bg-cream-50/70 dark:bg-darkgreen/80 rounded-xl border border-sage-300/60 p-3 overflow-hidden flex items-center justify-center">
              {nnArch === 'ann' && (
                <svg viewBox="0 0 460 200" className="w-full h-full max-w-lg">
                  {/* Synapse connections between layers */}
                  {[
                    // Input to H1
                    [35, 45, 140, 30], [35, 45, 140, 65], [35, 45, 140, 100], [35, 45, 140, 135], [35, 45, 140, 170],
                    [35, 85, 140, 30], [35, 85, 140, 65], [35, 85, 140, 100], [35, 85, 140, 135], [35, 85, 140, 170],
                    [35, 125, 140, 30], [35, 125, 140, 65], [35, 125, 140, 100], [35, 125, 140, 135], [35, 125, 140, 170],
                    [35, 165, 140, 30], [35, 165, 140, 65], [35, 165, 140, 100], [35, 165, 140, 135], [35, 165, 140, 170],
                    // H1 to H2
                    [140, 30, 270, 45], [140, 65, 270, 85], [140, 100, 270, 120], [140, 135, 270, 155], [140, 170, 270, 85],
                    [140, 30, 270, 120], [140, 65, 270, 155], [140, 100, 270, 45], [140, 170, 270, 120],
                    // H2 to Output
                    [270, 45, 400, 75], [270, 85, 400, 75], [270, 120, 400, 125], [270, 155, 400, 125],
                    [270, 45, 400, 125], [270, 155, 400, 75],
                  ].map(([x1, y1, x2, y2], idx) => (
                    <line
                      key={idx}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#B7C8BA"
                      strokeWidth="1.2"
                      strokeOpacity="0.6"
                    />
                  ))}

                  {/* Pulsing signal dots travelling along key synapses */}
                  <motion.circle
                    r="3.5"
                    fill="#C58B72"
                    animate={{
                      cx: [35, 140, 270, 400],
                      cy: [45, 65, 85, 75],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="3"
                    fill="#5F7A6B"
                    animate={{
                      cx: [35, 140, 270, 400],
                      cy: [125, 100, 120, 125],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Input Layer (4 nodes) */}
                  {[45, 85, 125, 165].map((y, i) => (
                    <g key={`in-${i}`}>
                      <circle cx="35" cy={y} r="11" fill="#E4EBE4" stroke="#5F7A6B" strokeWidth="1.6" />
                      <text x="35" y={y + 3.5} textAnchor="middle" fontSize="9" fill="#2B302E" fontFamily="monospace">
                        x{i + 1}
                      </text>
                    </g>
                  ))}
                  <text x="35" y="194" textAnchor="middle" fontSize="9" fill="#4A5552" fontFamily="monospace">
                    Input
                  </text>

                  {/* Hidden Layer 1 (5 nodes) */}
                  {[30, 65, 100, 135, 170].map((y, i) => (
                    <circle key={`h1-${i}`} cx="140" cy={y} r="10" fill="#B7C8BA" stroke="#5F7A6B" strokeWidth="1.6" />
                  ))}
                  <text x="140" y="194" textAnchor="middle" fontSize="9" fill="#4A5552" fontFamily="monospace">
                    Hidden L1
                  </text>

                  {/* Hidden Layer 2 (4 nodes) */}
                  {[45, 85, 120, 155].map((y, i) => (
                    <circle key={`h2-${i}`} cx="270" cy={y} r="10" fill="#8FA89A" stroke="#4A5552" strokeWidth="1.6" />
                  ))}
                  <text x="270" y="194" textAnchor="middle" fontSize="9" fill="#4A5552" fontFamily="monospace">
                    Hidden L2
                  </text>

                  {/* Output Layer (2 nodes) */}
                  {[75, 125].map((y, i) => (
                    <g key={`out-${i}`}>
                      <circle cx="400" cy={y} r="12" fill="#EBD3CB" stroke="#C58B72" strokeWidth="1.8" />
                      <text x="400" y={y + 3.5} textAnchor="middle" fontSize="9" fill="#2B302E" fontFamily="monospace">
                        ŷ{i}
                      </text>
                    </g>
                  ))}
                  <text x="400" y="194" textAnchor="middle" fontSize="9" fill="#4A5552" fontFamily="monospace">
                    Output
                  </text>
                </svg>
              )}

              {nnArch === 'cnn' && (
                <div className="w-full flex items-center justify-around px-4">
                  {/* Input Map */}
                  <div className="text-center space-y-1.5">
                    <div className="grid grid-cols-4 gap-1 p-2 rounded-lg bg-sage-200 border border-sage-500/40">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <span key={i} className="w-4 h-4 rounded-xs bg-sage-500/30 flex items-center justify-center text-[7px] font-mono text-ink-900" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-ink-700 block">Input Feature</span>
                  </div>

                  {/* Conv Filter */}
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-mono text-terracotta mb-1">Conv2D (3x3)</span>
                    <span className="text-lg text-sage-700">➔</span>
                  </div>

                  {/* Convolved Feature Map */}
                  <div className="text-center space-y-1.5">
                    <div className="grid grid-cols-3 gap-1 p-2 rounded-lg bg-blush-300/40 border border-blush-500">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <span key={i} className="w-4 h-4 rounded-xs bg-blush-500/40" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-ink-700 block">Feature Maps</span>
                  </div>

                  {/* Max Pooling */}
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-mono text-sage-700 mb-1">MaxPool (2x2)</span>
                    <span className="text-lg text-sage-700">➔</span>
                  </div>

                  {/* Dense Classification */}
                  <div className="text-center space-y-1.5">
                    <div className="flex flex-col gap-1.5 p-2 rounded-lg bg-sand-200 border border-sand-400">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cream text-ink-900">Class 0: 0.05</span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-sage-500 text-cream font-bold">Class 1: 0.95</span>
                    </div>
                    <span className="text-[10px] font-mono text-ink-700 block">Softmax</span>
                  </div>
                </div>
              )}

              {nnArch === 'rnn' && (
                <div className="w-full flex items-center justify-center space-x-6 sm:space-x-10">
                  {/* Time Step t-1 */}
                  <div className="text-center space-y-2">
                    <div className="p-3 rounded-xl bg-sage-200 border border-sage-500 text-xs font-mono text-ink-900">
                      h(t-1)
                    </div>
                    <span className="text-[10px] font-mono text-ink-700 block">Past Context</span>
                  </div>

                  <span className="text-xl text-sage-700 font-bold">➔</span>

                  {/* Recurrent Cell with Feedback Loop */}
                  <div className="relative text-center space-y-2">
                    <div className="relative p-4 rounded-2xl bg-blush-300/50 border-2 border-terracotta text-xs font-mono font-bold text-ink-900 shadow-sm">
                      LSTM Cell: h(t)
                      {/* Recurrent Loop Arrow */}
                      <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-8" viewBox="0 0 60 30" fill="none">
                        <path d="M 10 25 C 10 5, 50 5, 50 25" stroke="#C58B72" strokeWidth="2" strokeDasharray="3 2" />
                        <polygon points="46,20 50,26 54,20" fill="#C58B72" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono text-terracotta font-semibold block">Hidden Memory</span>
                  </div>

                  <span className="text-xl text-sage-700 font-bold">➔</span>

                  {/* Time Step t+1 */}
                  <div className="text-center space-y-2">
                    <div className="p-3 rounded-xl bg-sage-200 border border-sage-500 text-xs font-mono text-ink-900">
                      h(t+1)
                    </div>
                    <span className="text-[10px] font-mono text-ink-700 block">Future Step</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= 2. ROC CURVE & CONFUSION MATRIX ================= */}
        {activeTab === 'roc' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* ROC Curve Graph */}
            <div className="md:col-span-7 bg-cream-50/70 dark:bg-darkgreen/80 rounded-xl p-3 border border-sage-300/60 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-ink-900 dark:text-cream">
                  ROC Curve (Receiver Operating Characteristic)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-sage-500 text-cream font-mono text-[10px] font-bold">
                  AUC = 0.94
                </span>
              </div>

              <svg viewBox="0 0 260 160" className="w-full h-36">
                {/* Axes */}
                <line x1="30" y1="140" x2="245" y2="140" stroke="#4A5552" strokeWidth="1.2" />
                <line x1="30" y1="20" x2="30" y2="140" stroke="#4A5552" strokeWidth="1.2" />

                {/* Random Baseline (AUC 0.50) */}
                <line x1="30" y1="140" x2="240" y2="25" stroke="#CDB39B" strokeWidth="1" strokeDasharray="3 3" />
                <text x="145" y="90" fontSize="8" fill="#CDB39B" fontFamily="monospace" transform="rotate(-28 145 90)">
                  Random Guess (0.50)
                </text>

                {/* Actual Model ROC Curve (AUC 0.94) */}
                <motion.path
                  d="M 30 140 C 35 45, 75 25, 240 25"
                  fill="none"
                  stroke="#5F7A6B"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: 'easeOut' }}
                />

                {/* Shaded Area under the curve */}
                <path
                  d="M 30 140 C 35 45, 75 25, 240 25 L 240 140 Z"
                  fill="#B7C8BA"
                  fillOpacity="0.25"
                />

                {/* Optimal Operating Point */}
                <circle cx="48" cy="38" r="4.5" fill="#C58B72" />
                <text x="56" y="38" fontSize="8" fill="#2B302E" fontFamily="monospace" fontWeight="bold">
                  Optimal (TPR: 95%, FPR: 5%)
                </text>

                {/* Axis Labels */}
                <text x="135" y="155" textAnchor="middle" fontSize="8" fill="#4A5552" fontFamily="monospace">
                  False Positive Rate (1 - Specificity)
                </text>
                <text x="12" y="80" textAnchor="middle" fontSize="8" fill="#4A5552" fontFamily="monospace" transform="rotate(-90 12 80)">
                  True Positive Rate
                </text>
              </svg>
            </div>

            {/* Confusion Matrix (2x2) */}
            <div className="md:col-span-5 bg-cream-50/70 dark:bg-darkgreen/80 rounded-xl p-3 border border-sage-300/60 space-y-2">
              <span className="text-xs font-mono font-semibold text-ink-900 dark:text-cream block">
                Confusion Matrix (10,000 Records)
              </span>

              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-sage-500 text-cream">
                  <div className="text-[9px] uppercase tracking-wider opacity-85">True Positive</div>
                  <div className="font-serif text-lg font-bold">950</div>
                  <div className="text-[8px] opacity-75">Churn Detected</div>
                </div>

                <div className="p-2.5 rounded-lg bg-blush-300/50 text-ink-900 border border-blush-500">
                  <div className="text-[9px] uppercase tracking-wider opacity-85">False Positive</div>
                  <div className="font-serif text-lg font-bold">50</div>
                  <div className="text-[8px] opacity-75">Type I Error</div>
                </div>

                <div className="p-2.5 rounded-lg bg-blush-300/50 text-ink-900 border border-blush-500">
                  <div className="text-[9px] uppercase tracking-wider opacity-85">False Negative</div>
                  <div className="font-serif text-lg font-bold">45</div>
                  <div className="text-[8px] opacity-75">Type II Error</div>
                </div>

                <div className="p-2.5 rounded-lg bg-sage-300 text-ink-900">
                  <div className="text-[9px] uppercase tracking-wider opacity-85">True Negative</div>
                  <div className="font-serif text-lg font-bold">8,955</div>
                  <div className="text-[8px] opacity-75">Retained Loyal</div>
                </div>
              </div>

              <div className="pt-2 border-t border-sage-300/50 flex justify-between text-[10px] font-mono text-ink-700 dark:text-sage-300">
                <span>Precision: 95.0%</span>
                <span>Recall: 95.5%</span>
                <span>F1: 0.952</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. K-MEANS CLUSTERING SIMULATION ================= */}
        {activeTab === 'kmeans' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-ink-900 dark:text-cream">
                  Customer Segmentation:
                </span>
                <span className="text-[11px] font-mono text-sage-700 dark:text-sage-300">
                  k = 3 Clusters (Euclidean Distance Convergence)
                </span>
              </div>

              <button
                onClick={() => {
                  setIsClustered(!isClustered);
                }}
                className="px-3 py-1 rounded-lg bg-sage-500 hover:bg-sage-700 text-cream text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{isClustered ? 'Reset to Raw Scatter' : 'Run K-Means Convergence'}</span>
              </button>
            </div>

            <div className="relative h-52 bg-cream-50/70 dark:bg-darkgreen/80 rounded-xl border border-sage-300/60 p-2 overflow-hidden">
              <svg viewBox="0 0 280 180" className="w-full h-full">
                {/* Grid Lines */}
                <line x1="20" y1="160" x2="270" y2="160" stroke="#E4EBE4" strokeWidth="1" />
                <line x1="20" y1="20" x2="20" y2="160" stroke="#E4EBE4" strokeWidth="1" />

                {/* Animated Data Points */}
                {initialPoints.map((pt) => (
                  <motion.circle
                    key={pt.id}
                    r="4"
                    animate={{
                      cx: isClustered ? pt.clusteredX : pt.rawX,
                      cy: isClustered ? pt.clusteredY : pt.rawY,
                      fill: isClustered ? pt.color : '#4A5552',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 85,
                      damping: 14,
                      delay: (pt.id % 8) * 0.04,
                    }}
                  />
                ))}

                {/* Centroids when clustered */}
                {isClustered && (
                  <g>
                    <polygon points="65,60 70,72 60,72" fill="#5F7A6B" />
                    <text x="65" y="55" fontSize="8" fill="#5F7A6B" textAnchor="middle" fontFamily="monospace">μ1</text>

                    <polygon points="205,55 210,67 200,67" fill="#C58B72" />
                    <text x="205" y="50" fontSize="8" fill="#C58B72" textAnchor="middle" fontFamily="monospace">μ2</text>

                    <polygon points="135,125 140,137 130,137" fill="#CDB39B" />
                    <text x="135" y="120" fontSize="8" fill="#CDB39B" textAnchor="middle" fontFamily="monospace">μ3</text>
                  </g>
                )}
              </svg>

              {/* Cluster Legend */}
              <div className="absolute bottom-2 right-3 flex items-center gap-3 bg-cream/90 dark:bg-darkgreen/90 px-3 py-1 rounded-md text-[10px] font-mono border border-sage-300">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sage-500" />
                  <span>Retention Cohort</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blush-500" />
                  <span>High-LTV</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sand-400" />
                  <span>At-Risk Segment</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================= 4. MODEL COMPARISON BARS ================= */}
        {activeTab === 'comparison' && (
          <div className="space-y-3 bg-cream-50/70 dark:bg-darkgreen/80 rounded-xl p-4 border border-sage-300/60">
            <div className="flex items-center justify-between border-b border-sage-300/50 pb-2">
              <span className="text-xs font-mono font-semibold text-ink-900 dark:text-cream">
                Supervised Model Benchmarks (Accuracy & ROC-AUC)
              </span>
              <span className="text-[10px] font-serif italic text-terracotta">
                (illustrative benchmarks on 10k churn dataset)
              </span>
            </div>

            <div className="space-y-3">
              {[
                { name: 'XGBoost (Tuned Classifier)', accuracy: 95, auc: 0.94, latency: '2.4ms', champion: true },
                { name: 'Random Forest (100 Trees)', accuracy: 93, auc: 0.91, latency: '4.8ms' },
                { name: 'Logistic Regression (ElasticNet)', accuracy: 88, auc: 0.86, latency: '0.9ms' },
              ].map((model) => (
                <div key={model.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-2 font-medium text-ink-900 dark:text-cream">
                      {model.champion && <Sparkles className="w-3.5 h-3.5 text-terracotta" />}
                      <span>{model.name}</span>
                    </span>
                    <span className="text-[11px] text-ink-700 dark:text-sage-300">
                      Acc: {model.accuracy}% • AUC: {model.auc} • Latency: {model.latency}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-sage-200 dark:bg-darkgreen-border overflow-hidden flex">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${model.accuracy}%` }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        model.champion ? 'bg-sage-500' : 'bg-sage-300'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[10px] font-mono text-ink-700/80 dark:text-cream/70 flex justify-between">
              <span>Hyperparameter Tuning: 5-Fold Cross Validation via GridSearchCV</span>
              <span>Metric Priority: ROC-AUC Optimization</span>
            </div>
          </div>
        )}

        {/* ================= 5. MINI DATA PIPELINE DIAGRAM ================= */}
        {activeTab === 'pipeline' && (
          <div className="bg-cream-50/70 dark:bg-darkgreen/80 rounded-xl p-4 border border-sage-300/60 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-ink-900 dark:text-cream">
                End-to-End Automated Analytics Flow
              </span>
              <span className="text-[10px] font-mono text-terracotta">
                Event-driven n8n + Python + Power BI
              </span>
            </div>

            {/* Pipeline Steps with travelling dot */}
            <div className="relative py-4">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-sage-300 -translate-y-1/2 rounded" />

              {/* Travelling Signal Dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-terracotta z-20 shadow-md"
                animate={{
                  left: ['5%', '27%', '50%', '73%', '94%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10 grid grid-cols-5 gap-2 text-center">
                {[
                  { step: '01', title: 'Raw Data', desc: 'PostgreSQL Webhooks' },
                  { step: '02', title: 'Cleaning', desc: 'Outlier Imputation' },
                  { step: '03', title: 'Feature Eng.', desc: 'SMOTE & Scaler' },
                  { step: '04', title: 'Model Engine', desc: 'XGBoost / LLM API' },
                  { step: '05', title: 'Executive BI', desc: 'Power BI Dashboard' },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-cream dark:bg-darkgreen-surface border-2 border-sage-500 flex items-center justify-center text-xs font-mono font-bold text-ink-900 dark:text-cream shadow-xs mb-2">
                      {s.step}
                    </div>
                    <span className="font-serif text-xs font-medium text-ink-900 dark:text-cream block">
                      {s.title}
                    </span>
                    <span className="text-[9px] font-mono text-ink-700 dark:text-sage-300 block">
                      {s.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-ink-700 dark:text-cream/70 text-center pt-2 border-t border-sage-300/50">
              Zero manual maintenance • 15+ hours saved weekly • 99.8% execution reliability
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
