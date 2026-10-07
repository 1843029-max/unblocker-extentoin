* {
  box-sizing: border-box;
}

:root {
  --bg: #0f172a;
  --panel: #111827;
  --panel-strong: #1f2937;
  --card: rgba(15, 23, 42, 0.7);
  --text: #e5e7eb;
  --muted: #9ca3af;
  --accent: #38bdf8;
  --accent-strong: #0ea5e9;
  --border: rgba(148, 163, 184, 0.22);
  --success: #22c55e;
  --warning: #facc15;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: radial-gradient(circle at top, #1e293b 0%, var(--bg) 48%);
  color: var(--text);
}

.page-shell {
  width: min(100%, 1100px);
  margin: 0 auto;
  padding: 36px 18px 60px;
}

.topbar {
  margin-bottom: 24px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-badge {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #082f49;
  font-size: 1.8rem;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(14, 165, 233, 0.4);
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.8rem);
}

.app-card {
  background: rgba(17, 24, 39, 0.92);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 25px 70px rgba(15, 23, 42, 0.55);
  overflow: hidden;
}

.controls {
  padding: 24px 20px 16px;
}

.input-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

input {
  flex: 1 1 520px;
  min-width: 220px;
  width: 100%;
  padding: 15px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  font-size: 1rem;
}

input:focus {
  outline: 2px solid rgba(56, 189, 248, 0.5);
  border-color: rgba(56, 189, 248, 0.7);
}

button {
  cursor: pointer;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

input + button,
.quick-link {
  padding: 15px 20px;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #031827;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.quick-link {
  padding: 10px 14px;
  font-size: 0.9rem;
  opacity: 0.9;
}

.status-panel {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.65);
  padding: 16px 20px;
}

#status-message {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.result-panel {
  padding: 20px;
}

.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.result-header h2 {
  margin: 0;
  font-size: 1.3rem;
}

#source-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.preview-output {
  min-height: 320px;
  max-height: 72vh;
  overflow: auto;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.9);
  padding: 18px 20px;
  line-height: 1.7;
  color: var(--text);
}

.preview-output p,
.preview-output h1,
.preview-output h2,
.preview-output h3,
.preview-output h4,
.preview-output ul,
.preview-output ol,
.preview-output li,
.preview-output blockquote,
.preview-output pre {
  margin-top: 0;
}

.preview-output pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  background: rgba(148, 163, 184, 0.08);
  padding: 12px;
  border-radius: 10px;
}

.preview-output a {
  color: var(--accent);
}

.placeholder {
  margin: 0;
  color: var(--muted);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 640px) {
  .page-shell {
    padding-top: 20px;
  }

  .app-card {
    border-radius: 18px;
  }

  .result-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
