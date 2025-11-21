export interface SkillResponse {
  role: string;
  matched: string[];
  missing: string[];
  score: number;
}

export interface RoadmapPhase {
  time: string;
  title: string;
  items: string[];
}

export interface RoadmapResponse {
  roadmap: RoadmapPhase[];
}

export interface HackerNewsItem {
  id: number;
  title: string;
  url: string;
  score: number;
  time: number;
  by: string;
  type: string;
}