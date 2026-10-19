export interface StatItem {
  id: string;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  description: string;
  metrics: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  mockupType: 'chat' | 'n8n' | 'churn' | 'sales';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  coursework?: string[];
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  level?: string;
  badgeColor?: 'gold' | 'sage' | 'terracotta' | 'sand';
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: 'shooting' | 'attendance' | 'award';
  highlight: string;
}

export const PERSONAL_INFO = {
  name: "Sarvesh Pandey",
  initials: "SP.",
  title: "Data Scientist & Generative AI Developer",
  location: "Lucknow, Uttar Pradesh, India",
  email: "sarveshpandey2151@gmail.com",
  linkedin: "https://linkedin.com/in/sarvesh-pandey-b617743ab",
  github: "https://github.com/xsarveshpandey21",
  resumePath: "/resume.pdf",
  profilePhotoPath: "/images/profile.jpg",
  heroTagline: "I turn data into predictions and build AI systems that automate decisions.",
  coverIntro: "Final-year B.Tech IT student building predictive models, GenAI systems and automated analytics.",
  summary: `High-impact, analytical Data Scientist and Generative AI Developer with proficiency across predictive modeling, deep neural networks and automated business intelligence workflows. Hands-on with enterprise ML pipelines in Python, Scikit-Learn and TensorFlow, spanning supervised and unsupervised algorithms, feature engineering and neural network architectures (ANN, CNN, RNN). Skilled in Advanced SQL, Power BI (DAX, Star Schema) and Excel to turn raw records into executive insights. Has deployed production GenAI systems with Google Gemini API, Claude API and event-driven automation (n8n).`,
  about: `High-impact, analytical Data Scientist and Generative AI Developer with proficiency across predictive modeling, deep neural networks and automated business intelligence workflows. Hands-on with enterprise ML pipelines in Python, Scikit-Learn and TensorFlow, spanning supervised and unsupervised algorithms, feature engineering and neural network architectures (ANN, CNN, RNN). Skilled in Advanced SQL, Power BI (DAX, Star Schema) and Excel to turn raw records into executive insights. Has deployed production GenAI systems with Google Gemini API, Claude API and event-driven automation (n8n).`,
};

export const STATS: StatItem[] = [
  {
    id: "records-modeled",
    value: 10000,
    suffix: "+",
    label: "Records Modeled",
    sublabel: "Scikit-Learn, XGBoost & Random Forest",
  },
  {
    id: "accuracy",
    value: 95,
    suffix: "%",
    label: "Prediction Accuracy",
    sublabel: "ROC-AUC 0.94 in tuned ML models",
  },
  {
    id: "transactions",
    value: 50000,
    suffix: "+",
    label: "Transactions Analyzed",
    sublabel: "Clustering & time-series forecasting",
  },
  {
    id: "daily-records",
    value: 5000,
    suffix: "+",
    label: "Daily Records Automated",
    sublabel: "n8n webhooks & PostgreSQL ETL",
  },
  {
    id: "hours-saved",
    value: 15,
    suffix: "+ hrs/wk",
    label: "Saved via Automation",
    sublabel: "Autonomous GenAI reasoning pipelines",
  },
  {
    id: "latency",
    value: 30,
    suffix: "%",
    label: "Lower Inference Latency",
    sublabel: "Token & context window optimization",
  },
  {
    id: "schema",
    value: 98,
    suffix: "%",
    label: "Schema Accuracy",
    sublabel: "1,000+ unstructured docs parsed",
  },
  {
    id: "cgpa",
    value: 8.5,
    decimals: 1,
    suffix: " / 10",
    label: "Academic CGPA",
    sublabel: "B.Tech Information Technology",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: "Brain",
    description: "Supervised and unsupervised algorithms, hyperparameter tuning & evaluation",
    skills: [
      { name: "Linear & Logistic Regression", tag: "Core" },
      { name: "Decision Trees & Random Forest", tag: "Advanced" },
      { name: "XGBoost", tag: "Primary" },
      { name: "Clustering (K-Means, DBSCAN, Hierarchical)" },
      { name: "Association Rule Mining (Apriori, FP-Growth)" },
      { name: "Classification & Time-Series Forecasting" },
      { name: "Hyperparameter Tuning (GridSearchCV)" },
      { name: "Cross-Validation & Model Evaluation (ROC-AUC, F1)" },
    ],
  },
  {
    id: "feature-engineering",
    name: "Feature Engineering & Preprocessing",
    icon: "Filter",
    description: "Data transformation, dimensionality reduction and class balance",
    skills: [
      { name: "Data Preprocessing & EDA", tag: "Core" },
      { name: "One-Hot & Label Encoding" },
      { name: "Outlier Detection & Imputation" },
      { name: "Feature Scaling (StandardScaler, MinMaxScaler)" },
      { name: "PCA Dimensionality Reduction" },
      { name: "Class Imbalance Handling (SMOTE)" },
      { name: "Missing Value Imputation" },
    ],
  },
  {
    id: "deep-learning",
    name: "Deep Learning & Neural Networks",
    icon: "Cpu",
    description: "Deep architectures, transfer learning and transformer representations",
    skills: [
      { name: "Artificial Neural Networks (ANN)", tag: "Core" },
      { name: "Convolutional Neural Networks (CNN)", tag: "Feature Extraction" },
      { name: "RNN / LSTM / GRU Networks", tag: "Sequential" },
      { name: "Multi-Layer Perceptron (MLP)" },
      { name: "Backpropagation & Gradient Descent" },
      { name: "Transfer Learning" },
      { name: "Hugging Face Transformers" },
      { name: "TensorFlow" },
    ],
  },
  {
    id: "genai",
    name: "Generative AI & LLMs",
    icon: "Bot",
    description: "Production reasoning pipelines, prompt architectures and agent orchestration",
    skills: [
      { name: "Google Gemini API", tag: "Production" },
      { name: "Claude API (Anthropic)", tag: "Advanced" },
      { name: "OpenAI API / Custom GPTs" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Token Optimization (-30% latency)" },
      { name: "Context Window Management" },
      { name: "Few-Shot & Chain-of-Thought (CoT)" },
      { name: "LangChain & Multi-Modal Systems" },
    ],
  },
  {
    id: "analytics",
    name: "Data Analytics & Business Intelligence",
    icon: "BarChart3",
    description: "Enterprise DAX modeling, star schema architecture, and SQL query tuning",
    skills: [
      { name: "Power BI (Dynamic DAX, Star/Snowflake Schema)", tag: "Expert" },
      { name: "Custom KPI Dashboards & Row-Level Security" },
      { name: "Advanced SQL (PostgreSQL, MySQL)", tag: "Expert" },
      { name: "Window Functions, CTEs, Joins, Indexing" },
      { name: "Excel (Power Query, Pivot Tables, Data Modeling, XLOOKUP)" },
      { name: "Tableau Visual Analytics" },
    ],
  },
  {
    id: "tools",
    name: "Languages & Tools",
    icon: "Terminal",
    description: "Core programming languages, orchestration webhooks and modern IDEs",
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn)", tag: "Primary" },
      { name: "R Language" },
      { name: "Flask & Streamlit Web Apps" },
      { name: "n8n (Webhooks, API Orchestration, Self-Hosted)", tag: "Primary" },
      { name: "REST APIs & JSON Schema Validation" },
      { name: "Git & GitHub Version Control" },
      { name: "Cursor AI" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "saanvi",
    role: "Generative AI Developer & Python Developer",
    company: "Saanvi Technologies and Solutions",
    type: "Current Role",
    period: "Sep 2026 – Present",
    location: "Lucknow, Uttar Pradesh, India",
    bullets: [
      "Architect and deploy production-grade GenAI pipelines and modular Python backends integrating Gemini, Claude and OpenAI with corporate databases.",
      "Build scalable REST integrations and validation layers to structure complex multi-source JSON payloads for analytics.",
      "Design event-driven n8n workflows connecting LLM reasoning engines with PostgreSQL and internal services.",
      "Systematize context window and token usage, reducing inference latency by 30% across client deployments.",
    ],
    technologies: ["Google Gemini API", "Claude API", "OpenAI", "Python", "n8n", "PostgreSQL", "REST APIs", "JSON"],
  },
  {
    id: "ibm-virtual",
    role: "Virtual Intern — GenAI & Data Analytics",
    company: "IBM Developer Skills Network (via FutureSkills Prime)",
    type: "Internship",
    period: "Jun 2026 – Aug 2026",
    location: "Remote",
    bullets: [
      "Built end-to-end analytical pipelines and predictive routines with Hugging Face, TensorFlow and LLM APIs, accelerating KPI synthesis by 40%.",
      "Formulated Chain-of-Thought and Few-Shot prompt patterns on Claude and OpenAI to parse 1,000+ unstructured documents at 98% schema accuracy.",
      "Synchronized n8n webhook architectures for automated handoffs between Python scripts, PostgreSQL and notifications.",
      "Optimized Python code and benchmarked API latency with Cursor AI, lowering test execution overhead by 25%.",
    ],
    technologies: ["Hugging Face", "TensorFlow", "n8n", "PostgreSQL", "Cursor AI", "Prompt Engineering"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "customer-churn-predictive",
    title: "Customer Churn Analysis & Predictive ML Pipeline",
    year: "2025–26",
    category: "Machine Learning & Predictive Modeling",
    summary: "Trained tuned classifiers on 10,000+ records achieving 95% accuracy and ROC-AUC 0.94 with interactive Power BI retention cohorts.",
    description: "Cleaned 10,000+ records from PostgreSQL; performed one-hot encoding, outlier detection, and feature scaling. Trained and validated Logistic Regression, Random Forest and XGBoost with cross-validation and hyperparameter tuning for 95% accuracy and ROC-AUC 0.94. Designed an interactive Power BI dashboard featuring dynamic DAX retention cohort models.",
    metrics: ["10,000+ records modeled", "95% accuracy", "ROC-AUC 0.94", "DAX Retention Cohorts"],
    techStack: ["Python", "Scikit-Learn", "SQL", "Power BI", "DAX", "Pandas", "Seaborn"],
    githubUrl: "https://github.com/xsarveshpandey21",
    mockupType: "churn",
  },
  {
    id: "sales-performance-timeseries",
    title: "Sales Performance Optimization, Clustering & Time-Series Forecasting",
    year: "2025",
    category: "Business Intelligence & Forecasting",
    summary: "Transformed 50,000+ transactions to model seasonality, sales velocity and margins with K-Means customer segmentation.",
    description: "Transformed 50,000+ transactions to model seasonality, sales velocity, and profit margins. Implemented K-Means clustering for customer segmentation and Apriori association rule mining for bundling and cross-sell analysis. Created executive dashboards in Power BI and Tableau for multi-region performance tracking.",
    metrics: ["50,000+ transactions modeled", "K-Means segmentation", "Apriori bundling", "Power BI & Tableau"],
    techStack: ["Power BI", "Excel Power Query", "SQL", "Tableau", "Scikit-Learn", "Python"],
    githubUrl: "https://github.com/xsarveshpandey21",
    mockupType: "sales",
  },
  {
    id: "multi-turn-ai-assistant",
    title: "Multi-Turn AI Assistant & Automated Analytics Bot",
    year: "2026",
    category: "Generative AI & Autonomous Systems",
    summary: "Natural language to executable SQL in under 1.5s; persistent session history, token optimization, and 99.8% uptime.",
    description: "Engineered a production conversational system converting natural language to executable SQL queries in under 1.5s. Implemented persistent multi-turn session history, system instruction design, and token optimization. Built exponential backoff retry algorithms for 99.8% uptime and integrated n8n logging to PostgreSQL.",
    metrics: ["Sub-1.5s SQL turnaround", "99.8% uptime reliability", "Token optimized", "n8n Postgres Logging"],
    techStack: ["Gemini API", "Python", "Streamlit", "n8n", "PostgreSQL", "SQL"],
    githubUrl: "https://github.com/xsarveshpandey21",
    mockupType: "chat",
  },
  {
    id: "automated-analytics-workflow",
    title: "Automated End-to-End Analytics & Data Extraction Workflow",
    year: "2026",
    category: "Workflow Automation & ETL",
    summary: "5,000+ daily records via webhooks parsed into validated JSON with zero manual intervention; 15+ hours/week saved.",
    description: "Architected an event-driven automation workflow ingesting 5,000+ daily records via webhooks. Structured unstructured text using Claude and OpenAI reasoning into validated JSON schemas with zero manual intervention. Configured scheduled synchronizations to PostgreSQL and automated Power BI semantic refresh, saving 15+ hours/week.",
    metrics: ["5,000+ daily records parsed", "15+ hrs/week saved", "98% schema accuracy", "Scheduled ETL"],
    techStack: ["n8n", "OpenAI / Claude", "PostgreSQL", "Power BI", "Webhooks", "JSON"],
    githubUrl: "https://github.com/xsarveshpandey21",
    mockupType: "n8n",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Information Technology",
    institution: "SR Institute of Management and Technology (AKTU), Lucknow",
    period: "2023 – 2027 (Expected)",
    score: "CGPA 8.5 / 10",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Design & Analysis of Algorithms",
      "Object-Oriented Programming (OOPs)",
      "Database Management Systems (DBMS)",
      "Web Technologies",
      "Software Engineering",
    ],
    details: "Deep focus on mathematical algorithms, database optimization, neural network architectures, and modern web application development.",
  },
  {
    id: "class-12",
    degree: "Intermediate (Class XII)",
    institution: "UP Board, Lucknow",
    period: "2023",
    score: "First Division",
    details: "Mathematics, Physics, Chemistry, Computer Science.",
  },
  {
    id: "class-10",
    degree: "High School (Class X)",
    institution: "UP Board, Lucknow",
    period: "2021",
    score: "First Division with Distinction",
    details: "Science, Mathematics, Social Sciences, Languages.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "eda-gold",
    title: "Exploratory Data Analysis (EDA)",
    issuer: "NASSCOM FutureSkills Prime",
    date: "Aug 2026",
    level: "Gold Tier",
    badgeColor: "gold",
  },
  {
    id: "digital-stem-gold",
    title: "Digital Application Fundamentals STEM",
    issuer: "NASSCOM FutureSkills Prime",
    date: "Jul 2026",
    level: "Gold Tier",
    badgeColor: "gold",
  },
  {
    id: "aws-genai",
    title: "AWS Academy Graduate — Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2026",
    badgeColor: "terracotta",
  },
  {
    id: "aws-ml",
    title: "AWS Academy Graduate — ML Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Jan 2026",
    badgeColor: "terracotta",
  },
  {
    id: "ibm-genai",
    title: "IBM Virtual Internship in Generative AI",
    issuer: "IBM Developer Skills Network",
    date: "Aug 2026",
    badgeColor: "sage",
  },
  {
    id: "simplilearn-ml",
    title: "Machine Learning Fundamentals",
    issuer: "Simplilearn",
    date: "2025",
    badgeColor: "sage",
  },
  {
    id: "simplilearn-analytics",
    title: "Business Analytics with Excel",
    issuer: "Simplilearn",
    date: "2025",
    badgeColor: "sand",
  },
  {
    id: "prompt-eng",
    title: "Prompt Engineering for LLMs",
    issuer: "Let's Upgrade",
    date: "2025",
    badgeColor: "sage",
  },
  {
    id: "intel-ai",
    title: "Intel AI for All",
    issuer: "Skill India Digital Hub",
    date: "2025",
    badgeColor: "sage",
  },
  {
    id: "sql-bi-suites",
    title: "SQL, Power BI & Tableau Suites",
    issuer: "Simplilearn",
    date: "2024",
    badgeColor: "sand",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "pistol-shooting",
    title: "Championship Gold Medalist",
    subtitle: "100-Meter Pistol Shooting",
    description: "Inter-College Varsity Championship winner. Honed absolute focus, fine motor control, and calm precision under high-pressure competitive environments.",
    icon: "shooting",
    highlight: "Varsity Gold Medalist",
  },
  {
    id: "attendance",
    title: "Institutional 100% Attendance Excellence Award",
    subtitle: "SR Institute of Management and Technology",
    description: "Awarded in recognition of flawless discipline, consistency, and unrelenting commitment across every technical lecture and laboratory session.",
    icon: "attendance",
    highlight: "100% Attendance",
  },
];

export const LANGUAGES = [
  { name: "English", proficiency: "Professional Working", flag: "🇬🇧" },
  { name: "Hindi", proficiency: "Native / Bilingual", flag: "🇮🇳" },
];
