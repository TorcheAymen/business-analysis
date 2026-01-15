
export interface Persona {
  name: string;
  age: number;
  role: string;
  experience: string;
  sector: string;
  context: string;
  biography: string;
  approach: string[];
  models: string[];
  tools: { name: string; description: string }[];
  goals: string[];
  frustrations: string[];
  valueCriteria: { icon: string; text: string }[];
}
