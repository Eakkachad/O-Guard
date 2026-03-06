---
description: How to synchronize and update the AI context for the project.
---

# 🤖 Sync AI Context Workflow

This workflow explains how AI assistants should update and synchronize project context to ensure all developers and their respective AIs (Antigravity, Cursor, Windsurf) are on the same page.

## Steps

1. **Verify if context needs updating**
   Review if recent changes introduced new architectures, libraries, or shifted the business logic/roadmap.

2. **Update AI_CONTEXT.md**
   If changes occurred, modify the `/AI_CONTEXT.md` file at the root of the project to reflect the new state of the project. Keep it concise but highly accurate.

3. **Commit the context changes**
   Use standard git commands to commit the changes.

   ```bash
   git add AI_CONTEXT.md
   git commit -m "docs: [AI Sync] update project context based on recent changes"
   ```

4. **Push the changes**
   Push the changes to the remote repository so other team members can pull them.

   ```bash
   git push origin main
   ```

5. **Notify the User**
   Inform the user that the system context has been synchronized and pushed to the team environment.
