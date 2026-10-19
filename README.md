# Sarvesh Pandey — Digital Print Magazine & Lookbook Portfolio

> **Generative AI Developer & Data Analyst**  
> *"I build intelligent AI systems, automate workflows, and turn data into decisions."*  
> **Lucknow, Uttar Pradesh, India** • [LinkedIn](https://linkedin.com/in/sarvesh-pandey-b617743ab) • [GitHub](https://github.com/xsarveshpandey21)

A complete, highly animated personal portfolio website designed as an authentic **Digital Print Magazine & Lookbook**, closely matching editorial publication templates with open-book facing spreads, color blocks, 3D page turns, live GitHub telemetry, and smooth Lenis scrolling.

---

## 📖 Lookbook Magazine Architecture

The website is structured as an interactive digital publication:
- **Intro Loader**: Closed magazine cover on warm cream backdrop (`#FBF7F1`), ambient morphing blobs drawing in, self-drawing `SP.` monogram, and a 3D page-turn opening to the cover spread.
- **Cover Spread (Hero)**: Exact replication of the magazine cover layout:
  - Blush (`#EBD3CB`) top-left area
  - Ink-700 (`#4A5552`) right vertical strip and bottom block (warm green-charcoal, never bluish)
  - Sage-500 (`#8FA89A`) bottom-right block
  - Large framed portrait photo with arch clip-path reveal and soft floating sway
  - SplitText mask reveal of "Portfolio" and "Sarvesh Pandey" dark label boxes with overshoot
  - Top-right cream tag box: "Data Scientist & GenAI Developer"
  - Sweeping curved line-art strokes and bottom sand-400 (`#CDB39B`) organic blob crop
  - Rotating text badge: *"• OPEN TO WORK • DATA SCIENCE • GENAI •"*
- **Open-Book Facing Spreads**:
  - **Spread 01**: Biography & engineering philosophy + fanning polaroid stack + animated count-up metrics (Blush Theme)
  - **Spread 02**: Skills arsenal + Interactive Data Science Lab (Neural Net, ROC AUC 0.94, K-Means clustering, Model comparison) (Sage Theme)
  - **Spread 03**: Industry experience timeline (Saanvi Technologies & IBM Virtual Internship) with scroll-growing line and node pulse (Cream & Sand Theme)
  - **Spread 04**: Featured ML Projects with verified metrics and case studies (Blush Theme)
  - **Spread 05**: Live GitHub repositories, contribution calendar (SAGE scale), languages distribution donut, and public events stream (Sage Theme)
  - **Spread 06**: Academia (AKTU B.Tech IT, CGPA 8.5) & Varsity Honors (inter-college 100-Meter Pistol Shooting Champion with interactive animated crosshair) (Sand Theme)
  - **Spread 07**: Industry Certifications (NASSCOM Gold, AWS Academy, IBM, Intel) with dual-direction infinite marquee (Sage-Light Theme)
  - **Spread 08 (Back Cover)**: Direct dossier + dispatch contact form with floating labels, flying paper-plane submit interaction, and palette confetti burst (Blush Theme)
- **Magazine Controls**:
  - **Flip Book View**: 3D page turn with center gutter spine shadow, drag-to-flip, keyboard navigation, and mousewheel paging
  - **2x3 Grid Lookbook View**: Complete overview grid of all spreads side-by-side matching the template image
  - **Stacked View**: Clean mobile-first single-page vertical reading mode

---

## 🎨 Color Palette Tokens (Strict 60 / 30 / 10 Harmony)

- **Base Warm Cream**: `cream-50` (`#FBF7F1`), `cream-100` (`#F5EDE2`)
- **Blush Family**: `blush-100` (`#F6E6E0`), `blush-300` (`#EBD3CB`), `blush-500` (`#D9B3A7`)
- **Sage Family**: `sage-100` (`#E4EBE4`), `sage-300` (`#B7C8BA`), `sage-500` (`#8FA89A`), `sage-700` (`#5F7A6B`)
- **Sand Family**: `sand-200` (`#E6D5C3`), `sand-400` (`#CDB39B`)
- **Ink (Text & Labels)**: `ink-700` (`#4A5552`), `ink-900` (`#2B302E`) (warm green-charcoal, never bluish)
- **Accent**: `terracotta` (`#C58B72`) (buttons & tiny highlights only)
- **Dark Mode Base**: `darkgreen` (`#1F2926`) (deep muted sage-green, NEVER brown)

---

## 🚀 How to Run Locally

### 1. Prerequisites
- **Node.js (v18+)**
- **npm** or **pnpm**

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production & Typecheck
```bash
npm run build
```
Builds the bundle into `dist/` with automated code-splitting and asset optimization.

### 5. Lint
```bash
npm run lint
```

---

## ✏️ Where to Edit Content & Repositories

### 1. Personal Information, Bio, Experience, & Education
All personal and portfolio text is located in [`src/data/portfolio.ts`](src/data/portfolio.ts):
- `PERSONAL_INFO`: Name, title, tagline, location, email, LinkedIn, GitHub URL, and about narrative.
- `STATS`: Operational metrics (5,000+ daily records, 15+ hrs saved, 95% accuracy, 98% schema accuracy, CGPA 8.5).
- `SKILL_CATEGORIES`: Skill groups (Gen AI & LLMs, Automation, Dev Tools, Languages, BI, ML & Cloud, Math).
- `EXPERIENCES`: Saanvi Technologies and Solutions & IBM Developer Skills Network records and bullets.
- `EDUCATION`: B.Tech Information Technology (AKTU / SRIMT, CGPA 8.5/10), coursework, and UP Board milestones.
- `ACHIEVEMENTS`: 100-Meter Pistol Shooting Varsity Championship Gold Medal and 100% Attendance Award.
- `CERTIFICATIONS`: NASSCOM Gold, AWS Academy Foundations, IBM, Intel, Simplilearn.

### 2. Live GitHub Configuration & FEATURED_REPOS
Configure GitHub behavior in [`src/data/config.ts`](src/data/config.ts):
```typescript
export const GITHUB_USERNAME = 'xsarveshpandey21';

// Priority order for projects appearing first in the showcase
export const FEATURED_REPOS = [
  'multi-turn-ai-assistant',
  'automated-etl-workflow',
  'customer-churn-prediction',
  'sales-performance-forecasting',
  'genai-document-parser',
];
```

### 3. Curated Fallback Projects
If the GitHub API is offline or rate-limited (60 req/hr unauthenticated limit), the app automatically falls back to the 4 verified production projects in [`src/data/fallbackProjects.ts`](src/data/fallbackProjects.ts):
1. **Multi-Turn AI Assistant & Analytics Bot** (Gemini 1.5 Pro, Streamlit, n8n, PostgreSQL)
2. **Automated End-to-End Analytics & Data Extraction Workflow** (n8n, Claude/OpenAI, PostgreSQL, Power BI)
3. **Customer Churn Analysis & Predictive Modeling** (Python, Scikit-Learn, Power BI, DAX)
4. **Sales Performance Optimization & Time-Series Forecasting** (Power BI, Tableau, Power Query)

### 4. Vercel Live Deployments (Section 05)
All deployed web applications are configured in [`src/data/liveProjects.ts`](src/data/liveProjects.ts):
- Contains 12 project records: 10 public live projects (e.g., `honda-autoinsight`, `superintelligence`, `newsreel-studio`, `news`, `project-clean`, `ecommerce`, `normal`, `deploy-2`, `sarveshpandey`, `portfolio-project`) and 2 private projects (`shrutidixit`, `trisha`) with `showPublicly: false`.
- Any project with `showPublicly: false` is strictly excluded from rendering anywhere (cards, filters, timeline).
- Live health checks run non-blockingly with a 5-second timeout and 10-minute cache (`useLiveStatus`).
- Quick Preview modal offers interactive device switching (Desktop, Tablet, Mobile) with iframe embedding and fallback to high-resolution previews.

---

## 📸 Where to Drop in Photos & Resume

Clearly designated image slots exist in [`public/images/`](public/images/):
- **`public/images/profile.jpg`**: Your main portrait photo displayed in the left-center framed slot of the cover.
- **`public/images/profile-placeholder.jpg`**: Backup/placeholder portrait slot.
- **`public/images/about-1.jpg`**: First image in the polaroid fan stack.
- **`public/images/about-2.jpg`**: Second image in the polaroid fan stack.
- **`public/images/cert-1.jpg` to `cert-4.jpg`**: Credential image slots.
- **`public/resume.pdf`**: Your downloadable PDF resume dossier.

> **Note**: To replace any image, simply overwrite the file in `public/images/` keeping the same name, or update the path in `src/data/portfolio.ts`.

---

## 🔑 Optional GitHub Token & Formspree Setup

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### GitHub Token (Optional)
```env
VITE_GITHUB_TOKEN=your_personal_access_token
```
> ⚠️ **CRITICAL SECURITY NOTE**: The token must be **READ-ONLY** and **public-scope only** (no repo write, no admin access).  
> - Without a token, the GitHub REST API allows 60 requests per hour per IP.
> - With a read-only token, the rate limit increases to 5,000 requests per hour.
> - Responses are automatically cached in `localStorage` with a 30-minute TTL and conditional `ETag` / `If-None-Match` headers to minimize API consumption.

### Formspree Contact Endpoint (Optional)
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```
*(If left empty or as placeholder, the contact form runs in interactive simulation mode with instant status feedback, flying paper-plane animation, and confetti burst).*

---

## 🚢 Deployment Steps for Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: digital print magazine portfolio"
   git push origin main
   ```
2. **Import in Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Select your repository (`xsarveshpandey21/portfolio`).
3. **Project Settings**:
   - **Framework Preset**: `Vite` (automatically detected).
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables**:
   - Add `VITE_GITHUB_TOKEN` (optional, read-only).
   - Add `VITE_FORMSPREE_ENDPOINT` (optional).
5. **Click Deploy**:
   Vercel will build and assign an instant production URL with automatic HTTPS and edge distribution.
