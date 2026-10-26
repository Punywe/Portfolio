import { Router, Request, Response } from 'express';

const router = Router();

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Portfolio Website',
    description: 'A personal portfolio built with React, Tailwind CSS v4, TypeScript, and Node.js.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Full-Stack Task Manager',
    description: 'Productivity application with real-time updates and intuitive dashboard.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    featured: false,
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: sampleProjects,
  });
});

export default router;
