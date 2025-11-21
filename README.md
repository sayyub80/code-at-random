## CareerAI - AI-Powered Career Architect

A responsive and modern web application built using Next.js 16 (App Router). This project serves as an intelligent career planning tool, featuring skill gap analysis, roadmap generation, and real-time tech news integration.

# 🚀 Live Demo & Features

Core User Flow

Define Goal: Users select a target role (e.g., Frontend Developer) and input their current skill set.

Analyze: The system compares user skills against industry standards using a logic-based engine.

View Report: Users are redirected to a comprehensive dashboard showing a "Match Score", missing skills, and a personalized timeline.

Learn & Stay Updated: Users view a 3-phase learning roadmap and read the latest relevant tech news from HackerNews.

# Key Features

Smart Skill Gap Analysis:

Compares user input against predefined industry standards.

Categorizes skills into "Acquired" vs. "Missing" with visual indicators.

Calculates a dynamic "Match Score" percentage.

Mock AI Roadmap Engine:

Generates structured, time-bound learning paths (e.g., "Month 1: Foundations").

Adapts content based on the selected role (Frontend/Backend/Full Stack).

Public API Integration:

Integrates HackerNews API to fetch and display the top 6 latest tech stories.

Uses parallel data fetching for optimal performance.

Modern UI/UX:

Cosmic Glass Aesthetic: Dark mode with glassmorphism, gradients, and blurs using Tailwind CSS.

Bento Grid Layout: A responsive, dashboard-style grid for data visualization.

Interactive Elements: Loading states, hover effects, and smooth transitions.

Backend & Persistence:

Next.js API Routes: Server-side logic for analysis and roadmap generation.

MongoDB: Persists every analysis result, allowing users to share or revisit their reports via unique URLs.

# 🛠️ Tech Stack

Frontend:

Next.js 16 (App Router)

React

Tailwind CSS

Lucide React (Icons)

Backend:

Node.js (Next.js Runtime)

MongoDB (Mongoose ODM)

HackerNews Public API

📂 Project Structure

career-ai/
│
├── src/
│   ├── app/                  # App Router (Pages & API)
│   │   ├── api/              # Backend Routes (skill-gap, roadmap, analysis)
│   │   ├── dashboard/        # Result Page (Server Component)
│   │   ├── layout.tsx        # Root Layout
│   │   └── page.tsx          # Landing Page (Input Form)
│   │
│   ├── components/           # UI Components
│   │   ├── features/         # Logic-heavy components (Charts, NewsFeed)
│   │   └── ui/               # Reusable atoms (Cards, Buttons)
│   │
│   ├── lib/                  # Utilities
│   │   ├── constants.ts      # Static Data (Standards, Roadmaps)
│   │   └── db.ts             # Database Connection
│   │
│   └── models/               # Mongoose Schemas
│       └── Analysis.ts       # Data Model
│
├── public/                   # Static Assets
└── README.md


## ⚙️ Installation & Setup

1. Setup

# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd career-ai

# Install dependencies
npm install


2. Configuration

Create a .env.local file in the root directory:

MONGODB_URI=your_mongodb_connection_string


3. Run

npm run dev
Access the app at http://localhost:3000.