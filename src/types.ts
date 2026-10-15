export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  image: string;
  technologies: string[];
}

export interface Capability {
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface ToolItem {
  name: string;
  category: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
