# AI Context for SkillBridge (O-Guard Repository)

## 📌 Introduction

This file serves as the **Single Source of Truth** for all AI assistants (like Antigravity, Cursor, Windsurf, Copilot, etc.) working on this repository.
Whenever an AI starts a new session or is asked to understand the system, it MUST read this file first to align its context with the entire team.

## 🎯 Project Overview: "SkillBridge" (สะพานทักษะ เชื่อมคนสู่งาน)

SkillBridge is a 2-sided marketplace platform designed to bridge the gap between industrial demands and opportunity seekers through an intelligent learning path recommendation system.

- **Goal:** To solve the structural unemployment and skill mismatch problem in Thailand.
- **Target Audience:** Job seekers (upskill/reskill) and Factory/Employers.
- **Unique Value Proposition (UVP):** Guaranteed job placement upon completing the learning path + Focus on free/low-cost learning resources.

## 🏗 System Architecture & Tech Stack

- **Frontend App:** Built with React, TypeScript (`.tsx`), and Vite.
- **Styling:** CSS (`index.css`), potentially Tailwind (if configured).
- **Core Modules:**
  1. **AI Matching Engine:** Matches user skills with Job Requirements (NLP).
  2. **Skill Gap Analyzer:** Analyzes missing skills compared to specific job roles.
  3. **Learning Path Generator:** Aggregates courses (MOOCs, Thai Government Departments).
  4. **Progress & Assessment Tracker:** Gamification and progress tracking.
  5. **Job Guarantee System:** System for employers to hire verified candidates.

## 🤖 AI Assistant Rules & Workflows

To ensure all AIs across the team are synchronized, follow these rules:

1. **Always Read First:** Before making structural changes, read this `AI_CONTEXT.md`.
2. **Update Automatically:** If a major architectural change is made, a new core feature is added, or a new tech stack is introduced, the AI MUST update this `AI_CONTEXT.md` file and push it to the repository.
3. **Commit Messages:** Prefix commits with `[AI Sync]` when updating the context file.
4. **Follow Workflows:** Check `.agents/workflows/` for predefined AI tasks and automation steps.

## 🚀 Current Roadmap & State

- **Phase 1 (MVP):** Focus on Skill Assessment + Course Aggregation.
- **Current Active Development:** Prototyping and creating the interactive Demo (as seen in recent `demo-app.html` and `Presentation.html` work, and the React app in `/app`).

---

_Note to developers: If you change the project goals, please update this file, commit, and push so other AIs on your team learn the new context instantly._
