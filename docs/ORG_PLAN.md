# starter-series Organization Plan

## What is starter-series?

A collection of modern dev starters with CI/CD built-in. Each repo is a **ready-to-use template** — clone, configure secrets, push, and deploy.

## Mission

Lower the barrier to shipping production-ready projects. Every starter includes:
- Minimal but complete source code
- CI pipeline (lint, test, validate)
- CD pipeline (auto-deploy to target platform)
- Step-by-step setup guide with screenshots

## Repo Roadmap

### Phase 1 — Browser & Frontend
| Repo | Description | Stack | Deploy Target |
|------|-------------|-------|---------------|
| `browser-extension-starter` | MV3 extension template | Vanilla JS | Chrome Web Store |
| `nextjs-oauth-starter` | OAuth with multiple providers | Next.js + Auth.js | Vercel |
| `nextjs-saas-starter` | Full-stack SaaS boilerplate | Next.js + Prisma + Stripe | Vercel |

### Phase 2 — Infrastructure
| Repo | Description | Stack | Deploy Target |
|------|-------------|-------|---------------|
| `docker-k8s-starter` | Containerized app with K8s deploy | Docker + Kubernetes | AWS/GCP |
| `terraform-aws-starter` | IaC for common AWS setups | Terraform | AWS |

### Phase 3 — Specialized
| Repo | Description | Stack | Deploy Target |
|------|-------------|-------|---------------|
| `discord-bot-starter` | Discord bot with slash commands | Node.js / Python | Railway/Fly.io |
| `cli-tool-starter` | npm/brew distributable CLI | Node.js / Go | npm / Homebrew |

## Naming Convention

`[tech]-starter` — short, searchable, consistent.

Examples:
- `browser-extension-starter` (not `chrome-extension-template`)
- `nextjs-oauth-starter` (not `next-auth-boilerplate`)
- `docker-k8s-starter` (not `kubernetes-docker-cicd-template`)

## Repo Standards

Every repo must include:

```
├── README.md              # Quick Start in 3-5 steps
├── LICENSE                # MIT
├── .gitignore
├── .github/
│   ├── workflows/
│   │   ├── ci.yml         # Lint + test + validate
│   │   └── cd.yml         # Auto-deploy
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/                  # Setup guides
└── src/                   # Minimal working code
```

### README Structure (standard across all repos)
1. Title + one-line description + badges
2. Quick Start (3-5 copy-paste steps)
3. Project structure tree
4. Features (bullet list)
5. CI/CD explanation table
6. Customization guide
7. "Part of Starter Series" cross-links
8. Contributing + License

## Growth Strategy

### Initial Launch (per repo)
- Reddit: r/webdev, r/chrome_extensions, r/nextjs (relevant sub)
- X/Twitter: short demo GIF + link
- Korean communities: OKKY, Disquiet

### Ongoing
- Cross-link between repos (traffic loop)
- GitHub Template Repository flag enabled (one-click "Use this template")
- Respond to issues/PRs quickly (builds trust)

## Maintenance Policy

- Dependencies: update quarterly
- Breaking changes: new major version branch
- Issues: respond within 48 hours
- PRs: review within 1 week
