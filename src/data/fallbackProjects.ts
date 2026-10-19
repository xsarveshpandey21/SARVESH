export interface GithubRepoItem {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  pushed_at: string;
  created_at: string;
  isFallback?: boolean;
  mockupType: 'chat' | 'n8n' | 'churn' | 'sales';
  metrics: string[];
  longReadme?: string;
}

export const FALLBACK_PROJECTS: GithubRepoItem[] = [
  {
    id: 101,
    name: 'multi-turn-ai-assistant',
    full_name: 'xsarveshpandey21/multi-turn-ai-assistant',
    description: 'Multi-modal conversational assistant with sub-1.5s SQL turnaround, session persistence, exponential backoff, and n8n webhook logging to PostgreSQL.',
    html_url: 'https://github.com/xsarveshpandey21',
    homepage: 'https://github.com/xsarveshpandey21',
    language: 'Python',
    stargazers_count: 14,
    forks_count: 3,
    topics: ['gemini-api', 'streamlit', 'postgresql', 'n8n', 'llm-agents', 'sql-generation'],
    pushed_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    isFallback: true,
    mockupType: 'chat',
    metrics: ['Sub-1.5s SQL turnaround', '99.8% uptime SLA', 'Streaming responses'],
    longReadme: 'Engineered an enterprise-grade multi-turn conversational system with Google Gemini 1.5 Pro, featuring session history retention, exponential backoff rate-limiting, and automated PostgreSQL audit logging via n8n webhook triggers.',
  },
  {
    id: 102,
    name: 'automated-etl-workflow',
    full_name: 'xsarveshpandey21/automated-etl-workflow',
    description: 'Zero-touch document parser and event-driven pipeline parsing 5,000+ daily records into validated JSON schemas, syncing with PostgreSQL and Power BI.',
    html_url: 'https://github.com/xsarveshpandey21',
    homepage: null,
    language: 'Python',
    stargazers_count: 22,
    forks_count: 5,
    topics: ['n8n', 'claude-api', 'openai', 'power-bi', 'webhooks', 'etl-pipeline'],
    pushed_at: new Date(Date.now() - 5 * 86400000).toISOString(),
    created_at: '2026-02-10T00:00:00Z',
    isFallback: true,
    mockupType: 'n8n',
    metrics: ['5,000+ daily records', '15+ hrs/week saved', '98% schema accuracy'],
    longReadme: 'An event-driven n8n pipeline orchestrating Claude and OpenAI reasoning nodes to ingest heterogeneous documents, validate schema invariants, and refresh Power BI semantic models automatically.',
  },
  {
    id: 103,
    name: 'customer-churn-prediction',
    full_name: 'xsarveshpandey21/customer-churn-prediction',
    description: 'Customer churn analytics and classifier models trained on 10,000+ records (ROC-AUC 0.94) with interactive DAX retention cohort matrix.',
    html_url: 'https://github.com/xsarveshpandey21',
    homepage: 'https://github.com/xsarveshpandey21',
    language: 'Python',
    stargazers_count: 18,
    forks_count: 4,
    topics: ['scikit-learn', 'machine-learning', 'power-bi', 'dax', 'classification', 'shap'],
    pushed_at: new Date(Date.now() - 12 * 86400000).toISOString(),
    created_at: '2025-11-20T00:00:00Z',
    isFallback: true,
    mockupType: 'churn',
    metrics: ['95% prediction accuracy', 'ROC-AUC 0.94', '10,000+ records'],
    longReadme: 'Comprehensive customer retention modeling utilizing Random Forest and XGBoost classifiers, with SHAP value interpretability and interactive Power BI cohort dashboards.',
  },
  {
    id: 104,
    name: 'sales-performance-forecasting',
    full_name: 'xsarveshpandey21/sales-performance-forecasting',
    description: 'Time-series forecasting and seasonal sales optimization across 50,000+ retail transactions with executive Power BI & Tableau dashboards.',
    html_url: 'https://github.com/xsarveshpandey21',
    homepage: null,
    language: 'Python',
    stargazers_count: 11,
    forks_count: 2,
    topics: ['time-series', 'forecasting', 'tableau', 'power-bi', 'excel-power-query'],
    pushed_at: new Date(Date.now() - 20 * 86400000).toISOString(),
    created_at: '2025-08-14T00:00:00Z',
    isFallback: true,
    mockupType: 'sales',
    metrics: ['50,000+ transactions', '50% faster debug with Cursor AI', 'Executive KPIs'],
    longReadme: 'Executive business intelligence suite modeling seasonality and regional margin variance across 50,000+ multi-branch sales records.',
  },
];
