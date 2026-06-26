---
theme: '@jungsap/slidev-theme-sap'
info: |
  WeAreDevelopers World Congress 2026 — Friday, July 10, Mainstage, Berlin.
  Thomas Jung & Shilpa Shankar, SAP Developer Advocacy.
# Browser tab + share-card title — `%s` is the slide's title; default
# template appends " - Slidev" which we don't want for a branded deck.
titleTemplate: '%s'
# Local-only SAP favicon. Slidev injects this href verbatim with no
# base-URL rewrite, so it works in `npm run dev` and any build whose
# base is `/` — but it 404s on the GH Pages deploy (base `/<repo>/`).
# We accept that mismatch: local presentation shows SAP brand, the
# public Pages site shows the default favicon. Tracked in
# https://github.com/slidevjs/slidev/issues for upstream.
favicon: /logos/logo-sap-primary.svg
layout: cover
variant: l
image: /covers/Kasimir.jpg 
title: Evolving the Developer Experience in the Age of AI
presenters: [thomas-jung, shilpa-shankar]
event: WeAreDevelopers World Congress 2026
date: 2026-07-10
classification: PUBLIC
partnerLogo: /partners/wad-logo.svg
---

---
layout: title-text
title: Your speakers
---

<Bio presenter="thomas-jung" compact />

<Bio presenter="shilpa-shankar" compact />

---
layout: team-roster
title: Meet the SAP Developer Advocates
team: dev-advocates
columns: 6
classification: PUBLIC
---

A global team of community-focused engineers who run workshops, write
tutorials, build samples, and speak at SAP events worldwide. Scan any
QR to reach that advocate's profile.

<!--
Speaker notes: quick beat — "the two of us are on stage, but the
work we'll show today is the team's." Don't read names; just gesture
at the roster and move on within ~30 seconds.
-->

---
layout: agenda
title: Agenda
items:
  - title: The DevEx gap in the AI era
    description: Why generic AI interfaces aren't enough for enterprise developers
  - title: Embedding intelligence in the workflow
    description: AI where developers already work — not in a separate tab
  - title: Rebuilding learning with generative AI
    description: How SAP retooled its developer learning infrastructure
  - title: Listening at scale
    description: Turning developer feedback into tooling decisions
  - title: Education + community = adoption
    description: Combining automated guidance with human community support
  - title: What's next
    description: Open questions and where this is heading
---

---
layout: divider
title: The DevEx gap in the AI era
---

---
layout: text-with-icons
title: Who are we creating content for now?
items:
  - icon: write-new-document
    title: Shape content for AI
    description: So the AIs developers ask first answer accurately about SAP.
  - icon: e-learning
    title: Deliver content through AI
    description: So when developers come to us, they get adaptive, contextual help.
  - icon: overview-chart
    title: Close the loop
    description: What AIs get wrong about SAP becomes our next content priority and what AI tells us about the way developers work informs our content decisions.
---

<!--
Early in 2026 we asked ourselves a question that felt almost taboo:
are developers still our primary audience — or is it the AI they
ask *before* they ever open a doc?

We landed on both — and that split the work in two.

First, shape our content for AI consumption: when a developer asks
ChatGPT, Copilot, or Claude about SAP — wherever they ask — the
answer should be accurate, current, and grounded in our reality.

Second, deliver more of our content through AI: when a developer
does come to us directly, they get adaptive, contextual help —
not a static tutorial page from 2019.

Third, close the loop: instrument what the AIs answer about SAP,
treat the wrong answers as a content backlog, and feed corrections
back upstream. This is the bridge to the "Listening at scale"
section later in the deck.

Be candid here about how uncomfortable that debate was. The three
tiles are the spine for the rest of the talk — pause on them.
-->

---
layout: divider
title: Embedding intelligence in the workflow
---

---
layout: text-with-icons
title: Where developers already are
items:
  - icon: laptop
    title: Inside the IDE
    description: VS Code, BAS, Eclipse, JetBrains, Joule Studio — context the assistant can read directly, no copy-paste.
  - icon: wrench
    title: In the CLI
    description: Where build, deploy, login, and debug already live. The terminal is the busiest tab.
  - icon: people-connected
    title: Inside the AI assistant
    description: Claude, Copilot, Cursor, Gemini — via MCP, our knowledge shows up where developers already ask.
---

**Right tool, right context, right time.** The win isn't a better
chat window — it's intelligence that meets the developer on the
surface they're already on.

<!--
Speaker notes: the temptation in 2025 was to build "yet another
chatbot." We resisted. The three surfaces on this slide are the
ones we actually invested in.

Inside the IDE: extensions for VS Code and Business Application
Studio that ground answers in the open project — the CDS model,
the package.json, the BTP target.

In the CLI: a single `sap-devs` binary developers can run from any
project. Tips, error lookup, news, samples — all without leaving
the terminal. It's also the host that wires up our MCP servers.

Inside the assistant: an MCP server (sap-devs-server) that any
MCP-compatible client can connect to. So when a developer asks
Claude or Copilot about CAP, the answer is grounded in our
current content — not 2023 training data.

This is the spine of the demo coming up next.
-->

---
layout: title-content
title: Demo — sap-devs CLI + MCP
---

<DemoCallout kind="live" fallback="recorded walkthrough if the network bites" />

A single binary that brings curated SAP context to every AI tool
the developer already uses — and a terminal-native interface for
when they'd rather just ask the CLI or the AI

**What we'll show:**

- `sap-devs news` — Friday's Developer News, no browser switch
- `sap-devs tutorial show` — step-by-step SAP tutorials in the terminal
- `sap-devs mcp serve` — same content, exposed over MCP to Claude
- `sap-devs inject` — refresh AI tool context with one command

<!--
Speaker notes: this is the live demo. ~3 minutes max.

Beat 1 (CLI, 45s): run `sap-devs news` so they see Friday's
episode in the terminal. Then `sap-devs tutorial show` to walk through a step-by-step SAP tutorial.

Beat 2 (MCP, 90s): switch to Claude / Copilot, ask "what's
changing in CAP 10?" — answer comes back grounded in our content
because sap-devs-server is wired in. Show the tool call.

Beat 3 (close the loop, 30s): `sap-devs context add "..."` to
demonstrate scratch notes flowing into the next inject. This is
the bridge to "Listening at scale".

Fallback: if the network is bad, screenshot the same flow.
Don't fight the demo gods.
-->

---
layout: divider
title: Rebuilding learning with generative AI
---

---
layout: title-text
title: developers.sap.com — the front door
---

For most developers, **developers.sap.com is the first SAP
property they ever touch**. Tutorials, missions, learning paths,
sample code, blog posts — millions of sessions a year.

If that front door doesn't speak the language of how developers
work *now* — interactive, conversational, in-context — we've
lost them before they ever reach a product page.

So we rebuilt it. New stack, new authoring pipeline, and a
new contract with the reader: **tutorials that respond.**

<!--
Speaker notes: ground the section in scale. developers.sap.com
is genuinely the highest-traffic developer surface SAP runs.
Lean into "front door" as the frame — it's not just docs, it's
the introduction to everything that comes after.

The stack change matters but don't dwell: AEM + Java IMS →
CAP + HANA + Hugo on BTP. Faster publishing, real-time content,
GitHub Actions per-slug republish. The interesting story is
what that infrastructure unlocks, which is the next slide.
-->

---
layout: text-with-icons
title: Tutorials that respond
items:
  - icon: write-new-document
    title: AI-authored quizzes
    description: Multiple-choice and free-text questions generated from tutorial content at build time. Cached, optional, indistinguishable from hand-written.
  - icon: lightbulb
    title: AI-graded free-text answers
    description: LLM evaluates reader responses against learning concepts. Partial credit, prefers false negatives — never punishes a right answer phrased differently.
  - icon: message-popup
    title: Paste-code AI feedback
    description: Reader pastes their attempt; AI compares it semantically to the reference and explains what's off. Not pass/fail — a teaching response.
  - icon: people-connected
    title: Joule chat, scoped to the tutorial
    description: Contextual assistant pre-seeded with the current tutorial slug and step. RAG over tutorial content, not generic web answers.
---

<!--
Speaker notes: this is the heart of the section. Each tile is a
real shipping feature on the new platform.

AI-authored quizzes: the author writes the tutorial; the build
pipeline generates the assessment. Authors review and edit, but
the first draft is free. Means every tutorial can have a quiz
without an army of curriculum designers.

AI-graded free-text: the bias toward false negatives is
deliberate — better to mark a correct answer "needs review"
than to falsely tell a developer they got it right. Be honest
about that tradeoff.

Paste-code AI feedback: this is the one that lands with audiences.
Show the contrast: old world = "run my tests, hope they pass."
New world = "here's why your version doesn't work and where to look."

Joule chat: the key word is "scoped." Generic chat is noisy.
Tutorial-scoped chat with RAG over the tutorial itself is
actually useful — and it stays on topic.

Also worth mentioning if there's time: Command Palette (⌘K),
tabbed code blocks that sync OS choice across the whole site,
reader mode (press `f`). Small UX wins.
-->

---
layout: title-content
title: Demo — the new developers.sap.com
---

<DemoCallout kind="live" fallback="recorded walkthrough of the same flow" />

We'll open a tutorial on the new platform and walk through the
AI features as a reader would actually meet them.

**What we'll show:**

- Open a CAP tutorial — note the new reader experience
- Ask **Joule** a question about the current step
- Take the **AI-authored quiz** at the end of the section
- Paste a deliberately-broken code snippet, see the **AI feedback**
- Hit **⌘K** to jump across the platform without losing context

<!--
Speaker notes: this demo is the payoff for the section. ~3 min.

Beat 1 (45s): open a CAP tutorial on the new platform. Point out
reader mode (`f`), tabbed code blocks syncing across OS choice.
Don't dwell — these are table stakes now.

Beat 2 (60s): scroll to a step where the reader might get stuck.
Open Joule. Ask something tutorial-specific ("why does this need
a service binding?"). Show the answer is grounded in *this*
tutorial's content, not generic web knowledge.

Beat 3 (60s): hit the end-of-section quiz. Answer one free-text
question deliberately phrased differently from the reference —
show the AI grades it correctly. Then submit a paste-code answer
with a subtle bug and read the feedback aloud.

Beat 4 (15s): ⌘K to a different tutorial, demonstrate
continuity. Close.

Fallback: recorded walkthrough. If even that fails, the screen-
shots in the speaker deck appendix.
-->

---
layout: divider
title: Listening at scale
---

---
layout: title-text
title: Authors were flying blind
---

For years, the honest answer to "is this tutorial any good?" was
**a page-view count and the occasional angry tweet.** Authors
shipped, then guessed.

The new platform changes the contract. Every tutorial now emits
**structured telemetry** — and that telemetry is available to
the author in real time, not in a quarterly report.

The question stops being "did anyone read this?" and starts
being "where exactly did they get stuck, and why?"

<!--
Speaker notes: be honest here. The old developer-content pipeline
at SAP — and at most enterprise vendors — had zero feedback loop
for authors. You wrote a tutorial, it went live, it lived or
died on traffic alone. No idea which step lost the reader.

The shift is from "publish and pray" to "publish and listen."
Lean into that frame. It resonates with anyone who's ever
written docs.
-->

---
layout: text-with-icons
title: What we now measure
items:
  - icon: full-stacked-column-chart
    title: Time on each step
    description: Where readers linger and where they speed through. A 30-second step that takes most readers 8 minutes is a rewrite signal.
  - icon: dimension
    title: Branch usage
    description: Which OS tab, which runtime, which path through a branched mission. Tells authors which variants actually deserve maintenance.
  - icon: target-group
    title: Drop-off points
    description: The exact step where readers close the tab. Not "this tutorial has 60% completion" — "step 4 loses everyone."
  - icon: lightbulb
    title: Quiz & paste-code results
    description: Where AI grading is rejecting answers, where paste-code feedback fires. The questions readers fail are the concepts we're explaining badly.
---

<!--
Speaker notes: four signals, all per-step, all per-tutorial.

Time on step: outliers in both directions matter. Too fast =
nothing to do here, maybe collapse with the next step. Too slow =
unclear, missing prerequisite, or a broken instruction.

Branch usage: this is the one that changes content strategy.
If 95% of readers are on macOS, the Windows tab probably doesn't
need a deep rewrite. If a branched mission has a "deploy to
Kyma" path that nobody takes, that's a signal to deprecate.

Drop-off: the single most actionable metric. If step 4 of 8
loses 40% of readers, that's a flashing red light pointing at
exactly the paragraph that needs work.

Quiz/paste-code: the AI grading is also a measurement instrument.
A free-text question with 80% rejection rate means our concept
explanation is weak, not that readers are dumb.
-->

---
layout: title-text
title: Joule, for authors
---

The breakthrough isn't the dashboard. **Dashboards have been
broken for a decade** — authors don't have time to learn a new
analytics tool every quarter, and the data sits unread.

So we wired the same telemetry into **Joule**, scoped to the
author's own tutorials. The author asks in plain language:

> *"How can I improve this tutorial?"*

Joule answers with **the actual data** — drop-off step, failed
quiz questions, branch imbalance — and **proposes specific
edits**. Not "engagement is down 12%." Try: *"Readers stall at
step 4. The CLI command on line 23 fails on Windows. Here's a
rewritten step."*

<!--
Speaker notes: this is the moment the section earns its keep.
Land it slowly.

The pattern is bigger than tutorials. The same shape — telemetry
+ scoped LLM + actionable suggestions — is how we want every
SAP content surface to work for its authors.

Acknowledge openly: Joule still gets things wrong. It will
sometimes suggest a rewrite that misses the point. The author
stays in control — Joule's output is a draft and a hypothesis,
not a deploy. But the time-to-insight collapses from weeks to
seconds.

If asked about privacy: the telemetry is aggregate and scoped
to the author's own content. No individual reader identification
flows into the author view.
-->

---
layout: title-content
title: Demo — ask Joule how to improve a tutorial
---

<DemoCallout kind="live" fallback="recorded walkthrough of the author console" />

We'll switch into the **author view** of a real tutorial and let
Joule do its job.

**What we'll show:**

- The author dashboard — drop-off, time-on-step, branch split
- Ask Joule: *"Where are readers struggling in this tutorial?"*
- Ask Joule: *"How can I improve step 4?"* — get a concrete edit
- Compare Joule's proposed rewrite against the current step
- One-click open a PR with the suggested change

<!--
Speaker notes: ~3 minutes. This is the strongest demo in the
deck — milk it.

Beat 1 (45s): open the author view on a tutorial we've seeded
with real telemetry. Walk through the per-step metrics so the
audience sees the raw signal *before* AI. Make the point: even
without Joule, this would be a step change for authors.

Beat 2 (60s): open Joule with the tutorial in context. Ask the
"where are readers struggling" question. The answer should
identify a specific step with specific evidence. Read the
evidence aloud — that's what makes it credible.

Beat 3 (60s): ask the improvement question on the worst step.
Joule proposes a rewrite. Read both versions side by side.
Be honest about whether the suggestion is good — if it's only
70% right, say so. Authentic critique sells the tool.

Beat 4 (15s): show the one-click "open PR" hook into the
GitHub authoring workflow. The loop closes: telemetry → Joule
→ author edit → ship → new telemetry.

Fallback: pre-recorded screencap; we still walk through the
beats verbally.
-->

---
layout: divider
title: Education + community = adoption
---

---
layout: title-text
title: Humans + AI, not humans or AI
---

Automated guidance gets developers unstuck for the first 80% —
the "command not found," the "missing service binding," the
"how do I scaffold X." That's a fine job for AI.

The other 20% — architecture calls, judgement, "is this even
the right approach?" — is where the **community and the
advocate team** earn their keep. Neither alone scales.

<!--
Speaker notes: the framing matters. We're not replacing the
DevRel team with AI; we're freeing them from answering the
same first-day questions for the thousandth time so they can
work on the hard ones.

If asked: yes, this changes the advocate role. More
content engineering, less repeated 101 talks. Most of the
team is energized by that.
-->

---
layout: text-with-icons
title: What scales each side
items:
  - icon: laptop
    title: AI handles the repetitive
    description: First-time setup, known errors, "where do I find X" — fast, consistent, always available.
  - icon: people-connected
    title: Community handles the judgement
    description: Architecture review, edge cases, the "should I even do this" calls — advocates, champions, MVPs.
  - icon: target-group
    title: We instrument the handoff
    description: When AI can't answer, the developer gets pointed to the right human channel — not a dead end.
---

<!--
Speaker notes: the third tile is the underrated one. The worst
outcome is an AI confidently wrong with no escape hatch. Every
sap-devs surface has a "go ask a human" path, and we measure how
often it gets used — that's where we invest community effort.
-->

---
layout: divider
title: What's next
---

---
layout: title-text
title: Open questions we're working on
---

- How do we measure **developer joy**, not just time-to-first-commit?
- What's the right boundary between **AI suggestion** and **developer agency**?
- How does DevRel evolve when AI handles the easy questions —
  and what's the new role?
- Who owns the **content data product** as it becomes the
  most-read interface to SAP?

We don't have final answers. We have working versions, shipping
weekly. Come find us — we'd rather discuss this with you than
present it at you.

<!--
Speaker notes: leave these genuinely open. Don't claim victory.
The strongest close is "here's what we don't know yet" — invite
the audience to bring their answers to Q&A or to the booth.
-->

---
layout: quote
title: Closing thought
author: Thomas Jung & Shilpa Shankar
company: SAP Developer Advocacy
---

The developer experience isn't a UI question anymore.
It's a **distribution question** — getting the right
context to the right surface at the right moment.

---
layout: q-and-a
title: Questions?
---

<Speaker :presenters="['thomas-jung', 'shilpa-shankar']" />

Find us after the talk, or via the socials on our bios.

---
layout: thank-you
title: Thank you
presenter: thomas-jung
qrUrl: https://github.com/jung-thomas/devex-age-of-ai-wad2026
---
