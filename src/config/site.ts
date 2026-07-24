/**
 * Central site configuration.
 *
 * All marketing copy and outbound links live here so they can be updated in
 * one place. Links marked with `# TODO` are placeholders — replace them with
 * the real URLs when available.
 */

export const site = {
  name: "TEX Labs",
  legalName: "TEX Labs",
  url: "https://texlabs.org",
  email: "texblabs@gmail.com",
  description:
    "TEX Labs is a software engineering company focused on Platform Engineering, Cloud Infrastructure and SaaS — with deep expertise in Blockchain and AI. Official partner of the Midnight Network.",
  tagline: "Platform engineering for products built to scale.",
} as const;

/** Social / external profiles. Replace `#` with real URLs. */
export const socials = {
  x: "https://x.com/texlabsorg/",
  linkedin: "#", // TODO
  telegram: "#", // TODO
  github: "#", // TODO
  medium: "#", // TODO
  discord: "#", // TODO
} as const;

export const nav = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Partnership", href: "#partnership" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const expertise = [
  {
    key: "platform",
    title: "Platform Engineering",
    summary:
      "Backend systems, microservices, APIs, worker services and distributed architectures designed for large-scale products.",
  },
  {
    key: "cloud",
    title: "Cloud Infrastructure",
    summary:
      "Deployment and operations on AWS and Azure with containers, CI/CD, monitoring and observability for stability and scale.",
  },
  {
    key: "saas",
    title: "SaaS Development",
    summary:
      "End-to-end SaaS products — from backend to frontend — including admin, authentication, subscriptions, analytics and workflow automation.",
  },
  {
    key: "blockchain",
    title: "Blockchain & DeFi",
    summary:
      "Blockchain infrastructure such as explorers, indexers, data APIs and analytics that power Web3 and DeFi ecosystems.",
  },
  {
    key: "ai",
    title: "AI Integration",
    summary:
      "Applying AI and LLMs to products — automating workflows and elevating user experience with practical, production-grade solutions.",
  },
] as const;

export const projects = [
  {
    key: "midnight-explorer",
    name: "Midnight Explorer",
    category: "Blockchain Infrastructure",
    description:
      "A blockchain explorer for the Midnight ecosystem: real-time on-chain data, transaction and wallet search, staking, validators and analytics.",
    href: "#", // TODO: live URL
  },
  {
    key: "api-platform",
    name: "API Platform",
    category: "Developer Platform",
    description:
      "A blockchain data API platform with API keys, authentication, rate limiting, usage analytics and subscriptions built for developers.",
    href: "#", // TODO: live URL
  },
  {
    key: "catalyst",
    name: "Catalyst",
    category: "Funded Research",
    description:
      "Raised 165K ADA (≈ $200K) through Project Catalyst in 2024 to build solutions across Real-World Assets (RWA) and Healthcare.",
    href: "#", // TODO
  },
] as const;

export const values = [
  "Favor architecture that is simple and easy to scale.",
  "Build stable systems that are production-ready.",
  "Continuously optimize the developer experience.",
  "Never stop researching and applying new technology.",
  "Take on hard problems across Platform, Blockchain and AI.",
] as const;

export const team = [
  {
    name: "Long Tran",
    role: "Senior Blockchain Engineer",
    image: "/Long.JPG",
  },
  {
    name: "Hiep Tran",
    role: "Senior DevOps Engineer",
    image: "/Hiep.jpg",
  },
  {
    name: "Bach Trinh",
    role: "Product Manager",
    image: "/Bach.JPG",
  },
  {
    name: "Minh Le Dinh",
    role: "Business Development",
    image: "/Minh.JPG",
  },
  {
    name: "Trung Pham",
    role: "Senior Software Engineer",
    image: "/Trung.jpg",
  },
] as const;

export const partner = {
  name: "Midnight Network",
  blurb:
    "TEX Labs is an official partner of the Midnight Network — a data-protection blockchain whose ecosystem reached a market capitalization of ~$1.5B in 2026.",
  marketCap: "$1.5B",
  href: "#", // TODO: Midnight partner page
} as const;
