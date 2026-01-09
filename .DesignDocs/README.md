# Assistant workspace (.assistant)

Purpose
-------
This folder holds brief, authoritative files the AI assistant (and humans) should consult when starting work in this repository. Treat them as the single source of short-lived session context, lexicon, and workflow preferences.

Convention (please follow)
-------------------------
- When starting a session, run the helper script to print these files locally:

```bash
./.assistant/load_assistant_context.sh
```

- If you want the assistant to consult these files automatically, start the conversation with: "Consult `.assistant/` first". The assistant will then read these files and honor defaults.

Limitations
-----------
- The assistant does not automatically run scripts or change its environment across separate chat sessions. The files in `.assistant/` are a persistent, repository-level convention that any human or automated agent can follow.

Files in this folder
--------------------
