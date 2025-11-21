export const ROLE_STANDARDS: Record<string, string[]> = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"],
  "Backend Developer": ["Java", "Spring Boot", "SQL", "Rest API", "Docker", "Git"],
  "Full Stack Developer": ["React", "Node.js", "SQL", "MongoDB", "Docker", "TypeScript"],
  "Data Analyst": ["Python", "SQL", "Excel", "Tableau", "Statistics"]
};

export const MOCK_ROADMAPS: Record<string, any[]> = {
  "Frontend Developer": [
    { time: "Month 1", title: "The Foundation", items: ["Semantic HTML", "CSS Grid/Flex", "Modern JS (ES6+)"] },
    { time: "Month 2", title: "Frameworks", items: ["React Components", "Hooks Deep Dive", "Tailwind CSS"] },
    { time: "Month 3", title: "Advanced", items: ["Next.js", "State Management", "Performance"] }
  ],
  "Backend Developer": [
    { time: "Month 1", title: "Core Logic", items: ["Java Syntax", "OOP Patterns", "Data Structures"] },
    { time: "Month 2", title: "API & DB", items: ["Spring Boot/Express", "PostgreSQL", "RESTful Design"] },
    { time: "Month 3", title: "Architecture", items: ["Microservices", "Docker/K8s", "System Design"] }
  ],
  
  "Full Stack Developer": [
    { time: "Month 1-2", title: "Frontend Mastery", items: ["React.js", "Tailwind CSS", "TypeScript Basics"] },
    { time: "Month 3-4", title: "Backend & DB", items: ["Node.js/Express", "MongoDB & SQL", "API Security"] },
    { time: "Month 5-6", title: "DevOps & Scale", items: ["Docker Containerization", "CI/CD Pipelines", "Cloud Deploy"] }
  ]
};