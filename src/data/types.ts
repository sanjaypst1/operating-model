export type ScaleLevel =
  | "foundation"
  | "multi-team"
  | "value-stream"
  | "portfolio"
  | "enterprise";

export type ScaleApplicability =
  | "all-scales"
  | "multi-team"
  | "value-stream"
  | "portfolio"
  | "enterprise"
  | "optional"
  | "regulated";

export type PillarId = "operating-model" | "standards" | "coaching";

export type EvidenceType = "evidence" | "interpretation" | "recommendation";

export interface ScaleInfo {
  id: ScaleLevel;
  name: string;
  audience: string;
  structure: string;
  focus: string[];
  add: string[];
  principle: string;
}

export interface RoleCard {
  id: string;
  title: string;
  summary: string;
  responsibilities: string[];
  decisionRights: string[];
  interactions: string[];
  escalations: string[];
  scaleGuidance: Partial<Record<ScaleLevel | ScaleApplicability | string, string>>;
  antiPatterns: string[];
  mayCombineWith?: string[];
}

export interface EventDef {
  id: string;
  name: string;
  level: "team" | "multi-team" | "value-stream" | "portfolio" | "enterprise";
  purpose: string;
  participants: string[];
  owner: string;
  inputs: string[];
  activities: string[];
  outputs: string[];
  decisions: string[];
  frequency: string;
  duration: string;
  preconditions: string[];
  followUp: string[];
  scale: ScaleApplicability;
  antiPatterns: string[];
  artifacts: string[];
}

export interface ArtifactDef {
  id: string;
  name: string;
  purpose: string;
  owner: string;
  contributors: string[];
  minimumContent: string[];
  quality: string;
  updateFrequency: string;
  lifecycle: string;
  relatedEvents: string[];
  relatedStandards: string[];
  scale: ScaleApplicability;
  commonMistakes: string[];
  templateOutline: string[];
}

export interface StandardDef {
  id: string;
  name: string;
  category: string;
  purpose: string;
  whyItMatters: string;
  scope: string;
  minimum: string[];
  recommended: string[];
  advanced: string[];
  scale: ScaleApplicability;
  owner: string;
  rolesAffected: string[];
  tools: string[];
  templates: string[];
  examples: { good: string; poor: string };
  antiPatterns: string[];
  evidenceExpected: string[];
  exceptions: string;
  reviewFrequency: string;
  version: string;
  lastReviewed: string;
  relatedProcesses: string[];
  relatedCoaching: string[];
}

export interface CoachingService {
  id: string;
  name: string;
  level: "individual" | "team" | "leadership" | "enterprise";
  purpose: string;
  whenToUse: string;
  outcomes: string[];
  format: string;
  duration: string;
  scale: ScaleApplicability;
}

export interface ResearchSource {
  id: string;
  title: string;
  publisher: string;
  publicationDate: string;
  accessDate: string;
  url: string;
  category:
    | "operating-model"
    | "product-model"
    | "portfolio-management"
    | "ways-of-working"
    | "engineering-standards"
    | "coaching"
    | "leadership"
    | "organisational-change"
    | "maturity"
    | "governance"
    | "team-effectiveness"
    | "scaling";
  supports: string;
  limitations: string;
  evidenceType: EvidenceType;
}
