export interface StoryStep {
  id: number;
  title: string;
  description: string;
  color: string;
  visualText: string;
  badgeText?: string;
}

export interface StoryData {
  topic: string;
  steps: StoryStep[];
}
