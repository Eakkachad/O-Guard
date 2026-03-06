# 📊 Business & Research Guide (SkillBridge)

Welcome to the **SkillBridge** repository! If you are a Business Analyst, Researcher, Project Manager, or someone focusing on the non-technical aspects of the project, this guide is for you.

Even if you don't write code, keeping your research, business models, and service blueprints in this repository ensures that the **entire team (including our AI assistants) shares the same context.**

---

## 🚀 How to use this Repository for Business & Research

### 1. Where to Work

We have dedicated folders for non-code assets. You should place your work in the following structure:
_(If these folders don't exist yet, simply create them when you need them)_

- `docs/business/` : For Business Model Canvas, Financial Projections, Pitch Decks, and Market Strategy.
- `docs/research/` : For user research, market analysis, competitor analysis, and statistical data (e.g., Thai labor market stats).
- `docs/design/` : For UX/UI wireframes, Service Blueprints, and User Journey Maps.

### 2. How to Work with Your AI (Cursor, Windsurf, Copilot, etc.)

When you clone this repository and open it in your AI-powered IDE, do the following as your **first step**:

> **Prompt your AI:**
> _"Please read `AI_CONTEXT.md` and `docs/BUSINESS_RESEARCH_GUIDE.md` to understand the project. I am taking the role of a Business Analyst/Researcher. Help me analyze [Your Topic] based on the project's core objectives."_

Because the `AI_CONTEXT.md` file contains our core value proposition and system architecture, your AI will immediately understand the "SkillBridge" concept and give you highly relevant business advice, rather than generic answers.

### 3. Recommended Activities for Researchers

If you are just starting, here are high-priority tasks you can ask your AI to help with:

- **Market Sizing:** "Help me calculate the Total Addressable Market (TAM) for upskilling factory workers in Thailand."
- **Competitor Analysis:** "Compare SkillBridge's 'Guaranteed Job Placement' model with LinkedIn Learning and Coursera."
- **Pitch Deck Content:** "Draft a 5-minute pitch script based on the phases outlined in `implementation_plan.md`."
- **Revenue Modeling:** "Design a B2B subscription tier for factories to access our verified talent pool."

### 4. Keeping the Team Synchronized

Whenever you finalize a piece of research or a business plan:

1. Save it as a Markdown (`.md`) file, PDF, or export your spreadsheets as `.csv` in the `docs/` folder.
2. If your research significantly changes the project's direction (e.g., changing the target audience), ask your AI to update the `AI_CONTEXT.md` file using the workflow:
   - Command your AI: _"/sync-ai-context We are pivoting to target only the agricultural sector."_
3. Commit and push your changes to GitHub so the developers (and their AIs) can align with your new business logic.

```bash
git add .
git commit -m "docs(business): add competitor analysis and update market size"
git push origin main
```
