# AI Context for O-Guard (ผู้พิทักษ์โอกาสแห่งการเรียนรู้และอาชีพ)

## 📌 Introduction

This file serves as the **Single Source of Truth** for all AI assistants (Antigravity, Cursor, Windsurf, Copilot, etc.) working on this repository.
Whenever an AI starts a new session or is asked to understand the system, it MUST read this file first to align its context with the entire team.

## 🎯 Project Overview

O-Guard is an **AI-Powered 2-sided marketplace platform** that bridges the gap between industrial labor demands and opportunity seekers in Thailand through an intelligent learning path recommendation system.

- **Goal:** Solve structural unemployment and skill mismatch in Thailand.
- **Target Audience:** Job seekers (upskill/reskill) and Employers (Factories/Enterprises).
- **Unique Value Proposition (UVP):** Guaranteed job placement upon completing the learning path + Focus on free/low-cost learning resources.
- **Brand Name:** O-Guard (ผู้พิทักษ์โอกาส)

## 🏗 System Architecture & Tech Stack

### Frontend

- **Framework:** React 18 + TypeScript (`.tsx`) + Vite
- **Styling:** CSS3 (Modern, Responsive)

### Backend (Decided)

- **Framework:** Python FastAPI
- **Database:** PostgreSQL (Relational) + Vector Database (e.g., Qdrant/Pinecone) for Embedding
- **Deployment:** Cloud (AWS/GCP), Microservices architecture for independent scaling

### AI/ML Strategy (Decided)

- **Approach:** Pre-trained models + Fine-tuning with Thai labor market data to save resources
- **NLP (Skill Extraction):** LLM API (GPT/Claude) for Phase 1, Fine-tuned model for Phase 2
- **Embedding:** Pre-trained Sentence-Transformers / OpenAI Embedding API
- **Recommendation:** Collaborative Filtering
- **Chatbot:** RAG (Retrieval-Augmented Generation) from O-Guard's own data

### Core AI Modules

1. **Skill Gap Analyzer (NLP + ML Classification):** Reads Job Descriptions → Extracts required skills → Compares with user profile → Shows % gap
2. **Skill Taxonomy Graph:** Knowledge graph linking Skills ↔ Jobs ↔ Courses
3. **Learning Path Generator (Recommendation System):** Creates personalized learning paths using Collaborative Filtering
4. **RAG Chatbot:** Answers questions using real data from O-Guard's database, not generic AI
5. **Vector Embedding (Job Matching):** Converts profiles to vectors for accurate matching
6. **Progress Tracker (Gamification + Data Analytics):** Unified dashboard for all learning progress

### Learning Verification System (3 Tiers)

1. **🟢 Tier 1 – Direct API:** Real-time data from Thai MOOC, Coursera, กรมพัฒนาฝีมือแรงงาน via API
2. **🟡 Tier 2 – Cross-check with Issuers:** User uploads certificate → O-Guard contacts the issuing organization to verify authenticity
3. **🔴 Tier 3 – Coordinated Exams:** O-Guard gathers candidates → Arranges testing sessions with accredited bodies (กรมพัฒนาฝีมือแรงงาน, TPQI) → Certificates issued by the official body, not O-Guard

### Data & Privacy (Decided)

- **Compliance:** PDPA (Privacy by Design)
- **Consent:** Required before collecting user data
- **User Rights:** Users can request data deletion at any time
- **Encryption:** Data encrypted at rest and in transit

## 🤖 AI Assistant Rules & Workflows

1. **Always Read First:** Before structural changes, read this `AI_CONTEXT.md`.
2. **Update on Changes:** If architecture/features/stack changes, update this file and push.
3. **Commit Messages:** Prefix with `[AI Sync]` when updating context.
4. **Follow Workflows:** Check `.agents/workflows/` for predefined AI workflows.

## 🎯 Pilot Target (Decided with Business Team)

- **Supply (ผู้เรียน):** เด็กจบใหม่ ปวส./ป.ตรี + ผู้ว่างงาน 20-30 ปี ใน EEC
- **Demand (ตำแหน่งงาน):** Manufacturing & Logistics ใน EEC
  1. Automation & Robotics Technician (ช่างเทคนิคระบบอัตโนมัติ/หุ่นยนต์)
  2. Digital Warehouse Supervisor (หัวหน้างานคลังสินค้าดิจิทัล)
  3. Smart Maintenance Technician (ช่างซ่อมบำรุงเชิงคาดการณ์)
  4. Logistics Data Analyst (นักวิเคราะห์ข้อมูลโลจิสติกส์)
- **Pilot Scale:** 100 placements, 5-10 partner companies
- **MVP Budget:** ~1.4M฿ (6 months) — see `docs/tech/04_mvp_cost_estimate.md`

## 🚀 Current Roadmap & State

- **Phase 1 (MVP - 6 months):** Skill Assessment + Course Aggregation + Frontend Prototype + Pilot 100 users
- **Phase 2:** Fine-tune AI models with real Thai labor data + Backend API + Scale to 1,000 users
- **Current:** Prototyping interactive demo (React app in `/app`, `presentation.html`)

## 📂 Project Structure

- `/app` – React/Vite frontend application
- `/docs/business/` – Business models, pitch decks, financial projections
- `/docs/research/` – Market analysis, competitor research, labor statistics
- `/docs/design/` – UX/UI wireframes, service blueprints
- `/AI_CONTEXT.md` – This file (Single Source of Truth for AI)
- `/.agents/workflows/` – AI automation workflows

---

_Last updated: 2026-03-07 by Tech Lead. If goals change, update this file, commit, and push._
