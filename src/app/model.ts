export interface Education {
  institution: string;
  course: string;
  duration: string;
}
export interface Experience{
  role: string;
  company: string;
  duration: string;
  description: string[];
}
export interface Skill {
  name: string;
  level: string;
  duration: string;
  rating: number;
}
export interface ProjectData {
  title: string;
  image: string;
  templateUrl: string;
  technologies: string[];
  description: string;
}
