export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  logo?: string
}

export interface Skill {
  name: string
  level: 'débutant' | 'intermédiaire' | 'avancé' | 'expert'
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'design' | 'ai'
}

export interface ChatMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone?: string
  linkedin?: string
  github?: string
  website?: string
}