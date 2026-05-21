export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  services: string[];
  client: string;
  previewUrl?: string;
}

export interface WorkHistory {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  techStack?: string[];
  previewImage?: string;
  description?: string;
  website?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  message: string;
}
