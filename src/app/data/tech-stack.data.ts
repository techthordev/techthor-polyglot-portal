export interface TechStackItem {
  name: string;
  category:
    | 'Backend Language'
    | 'Frontend Framework'
    | 'Framework'
    | 'Database'
    | 'DevOps'
    | 'Development Tools';
  description: string;
  iconPath: string;
}

export const TECH_STACK_DATA: TechStackItem[] = [
  // Backend && Framworks
  {
    name: 'Java',
    category: 'Backend Language',
    description: 'The foundation for robust, cross-platform enterprise applications.',
    iconPath: 'assets/icons/java-logo.png',
  },
  {
    name: 'Spring',
    category: 'Framework',
    description: 'Microservice-ready, convention-over-configuration framework for Java.',
    iconPath: 'assets/icons/spring-logo.png',
  },
  { 
      name: 'Python', 
      category: 'Backend Language', 
      description: 'Versatile language used for scripting, data science, and web APIs.', 
      iconPath: 'assets/icons/python-logo.png'
    },
    { 
      name: 'FastAPI', 
      category: 'Framework', 
      description: 'Modern, fast (High performance) web framework for building Python APIs.', 
      iconPath: 'assets/icons/fastapi-logo.png'
    },
    { 
      name: 'Rust', 
      category: 'Backend Language', 
      description: 'System programming focused on safety and high performance.', 
      iconPath: 'assets/icons/rust-logo.png'
    },
    
    // 🌐 Frontend Frameworks
    { 
      name: 'Angular (21+)', 
      category: 'Frontend Framework', 
      description: 'Modern, scalable web applications using TypeScript and Standalone Components.', 
      iconPath: 'assets/icons/angular-logo.png'
    },
    { 
      name: 'TypeScript', 
      category: 'Frontend Framework', 
      description: 'Superset of JavaScript that adds static typing for increased reliability.', 
      iconPath: 'assets/icons/typescript-logo.png'
    },
    
    // 💾 Database
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      description: 'Robust, open-source relational database, preferred for reliability and extensibility.', 
      iconPath: 'assets/icons/postgresql-logo.png'
    },
    
    // ⚙️ DevOps
    { 
      name: 'Docker', 
      category: 'DevOps', 
      description: 'Containerization for consistent environments and simplified deployment.', 
      iconPath: 'assets/icons/docker-logo.png'
    },
  
    // 🖥️ Development Tools & OS
    { 
      name: 'Fedora', 
      category: 'Development Tools', 
      description: 'Primary Linux OS for development, security, and stability.', 
      iconPath: 'assets/icons/fedora-logo.png'
    },
    { 
      name: 'Zed', 
      category: 'Development Tools', 
      description: 'Preferred IDEs for Java/Backend (IntelliJ) and fast, modern Frontend/Rust development (Zed).', 
      iconPath: 'assets/icons/zed-logo.png'
    },
    { 
      name: 'Git', 
      category: 'Development Tools', 
      description: 'Version control system, enforcing the standard `main` branch.', 
      iconPath: 'assets/icons/git-logo.png'
    },
  ];

export const getGroupedStack = (data: TechStackItem[]) => {
  return data.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {} as Record<TechStackItem['category'], TechStackItem[]>);
};