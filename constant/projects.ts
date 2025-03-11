import { ProjectDetail } from '@/types/Project'
import { images } from './images'

export const projects: ProjectDetail[] = [
  {
    id: 1,
    name: 'Funday',
    description: 'The Expense Tracker System is a web application designed to help users efficiently manage their financial activities. With a user-friendly interface, this system allows individuals to track their income and expenses, ensuring better budgeting and financial control.',
    technologies: [
      { id: 1, title: 'Node', image: images.nodeJS },
      { id: 2, title: 'MongoDB', image: images.mongoDB },
      { id: 3, title: 'React', image: images.reactJS },
      { id: 4, title: 'Express', image: images.expressJS },
      { id: 4, title: 'Tailwind', image: images.tailwind },
    ],
  },
  {
    id: 2,
    name: 'Cassa Caffea',
    description: 'The Point of Sale (POS) with Ordering Management System is a comprehensive solution designed specifically for Cassa Coffea Café to improve operational efficiency, streamline order management, and enhance customer experience.',
    technologies: [
      { id: 1, title: 'Laravel', image: images.laravel },
      { id: 2, title: 'MySQL', image: images.mysql },
      { id: 3, title: 'Tailwind', image: images.tailwind },
    ],
  },
]
