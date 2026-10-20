// Initial seed jobs matching the reference design and expanded tech openings
export const INITIAL_JOBS = [
  {
    postId: 101,
    postProfile: "Senior Full-Stack Engineer",
    companyName: "TechNova Solutions",
    companyShort: "TN",
    companyAvatarBg: "bg-primary text-on-primary",
    jobLocation: "Bengaluru (Hybrid)",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    experienceReq: "3-6 Years",
    salary: "₹18–24 LPA",
    salaryNumeric: 2100000,
    matchRate: "98% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    isHero: true,
    postedAgo: "2h ago",
    category: "Software Development",
    postTechStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    postDesc: "TechNova Solutions is looking for an experienced Senior Full-Stack Engineer to architect mission-critical cloud software. You will design scalable web microservices, guide frontend component standards, and collaborate directly with product leaders.",
    requirements: [
      "3+ years of experience with modern React, TypeScript, and state management",
      "Proficient in Node.js, Express/NestJS, and relational databases (PostgreSQL/MySQL)",
      "Hands-on experience with REST and GraphQL APIs, Docker, and CI/CD pipelines",
      "Strong understanding of web security, performance optimization, and responsive design"
    ],
    benefits: [
      "Competitive base salary + equity options",
      "Comprehensive medical insurance for employee & family",
      "Flexible hybrid work environment (2 days office / 3 days remote)",
      "₹50,000 annual learning & certification budget"
    ]
  },
  {
    postId: 102,
    postProfile: "Java Developer",
    companyName: "TechNova Solutions",
    companyShort: "TN",
    companyAvatarBg: "bg-surface-container-high text-primary",
    jobLocation: "Bengaluru (Hybrid)",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    experienceReq: "1-3 Years",
    salary: "₹4–8 LPA",
    salaryNumeric: 600000,
    matchRate: "92% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    postedAgo: "4h ago",
    category: "Backend Engineering",
    postTechStack: ["Java 17", "Spring Boot", "MySQL"],
    postDesc: "Looking for an enthusiastic Java Developer with solid understanding of Spring Boot, JPA/Hibernate, and enterprise REST API architectures.",
    requirements: [
      "Proficiency in Java 11/17, Object-Oriented Design, and Collections framework",
      "Experience developing RESTful APIs with Spring Boot and Spring Data JPA",
      "Solid understanding of relational database schema design and SQL querying",
      "Familiarity with Git version control, Maven/Gradle, and JUnit testing"
    ],
    benefits: [
      "Structured mentorship from principal architects",
      "Performance-linked bonuses twice a year",
      "Health & wellness subsidies"
    ]
  },
  {
    postId: 103,
    postProfile: "Frontend Developer",
    companyName: "PixelCraft Digital",
    companyShort: "PC",
    companyAvatarBg: "bg-secondary-container/40 text-secondary",
    jobLocation: "Hyderabad (Remote)",
    workplaceType: "Remote",
    employmentType: "Full-time",
    experienceReq: "2-4 Years",
    salary: "₹5–9 LPA",
    salaryNumeric: 700000,
    matchRate: "95% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    postedAgo: "1d ago",
    category: "Frontend Engineering",
    postTechStack: ["React", "TypeScript", "Tailwind CSS"],
    postDesc: "PixelCraft Digital crafts high-traffic SaaS applications. We need a creative, detail-oriented Frontend Developer who cares deeply about design fidelity, animations, and micro-interactions.",
    requirements: [
      "Strong mastery of semantic HTML5, CSS3, modern JavaScript (ES6+), and TypeScript",
      "Extensive experience with React 18, React Router, hooks, and component libraries",
      "High proficiency in Tailwind CSS, CSS Grid/Flexbox, and responsive UI",
      "Experience optimizing web vitals, Lighthouse scores, and cross-browser compatibility"
    ],
    benefits: [
      "100% remote flexibility with home office setup stipend",
      "Unlimited paid time off (PTO) policy",
      "Top-tier MacBook Pro workstation provided"
    ]
  },
  {
    postId: 104,
    postProfile: "Backend Developer",
    companyName: "CloudSphere Systems",
    companyShort: "CS",
    companyAvatarBg: "bg-tertiary-fixed text-tertiary",
    jobLocation: "Pune (Hybrid)",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    experienceReq: "2-5 Years",
    salary: "₹6–12 LPA",
    salaryNumeric: 900000,
    matchRate: "94% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    postedAgo: "1d ago",
    category: "Backend Engineering",
    postTechStack: ["Node.js", "Go", "Docker"],
    postDesc: "Join CloudSphere Systems to build robust, distributed cloud services and high-throughput data processing engines with Node.js and Golang.",
    requirements: [
      "Proven track record building asynchronous backend systems in Node.js or Go",
      "Hands-on containerization experience with Docker and Kubernetes basics",
      "Good knowledge of caching mechanisms (Redis) and message queues (RabbitMQ/Kafka)",
      "Strong focus on system resilience, error handling, and unit test coverage"
    ],
    benefits: [
      "Quarterly performance incentives",
      "Flexible working hours with core overlap",
      "Comprehensive medical insurance"
    ]
  },
  {
    postId: 105,
    postProfile: "Software Engineer Intern",
    companyName: "CodeBridge Labs",
    companyShort: "CB",
    companyAvatarBg: "bg-surface-container text-on-surface",
    jobLocation: "Remote",
    workplaceType: "Remote",
    employmentType: "Internship",
    experienceReq: "Fresher / Student",
    salary: "₹15k–25k/mo",
    salaryNumeric: 250000,
    matchRate: "91% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    postedAgo: "2d ago",
    category: "Internships & Entry",
    postTechStack: ["Python", "Django", "Git"],
    postDesc: "Exciting 6-month software internship for ambitious college seniors or fresh grads. You will work on live client projects with dedicated 1:1 mentorship from seasoned engineering leads.",
    requirements: [
      "Solid grasp of fundamental data structures, algorithms, and Python syntax",
      "Basic exposure to web frameworks such as Django, Flask, or FastAPI",
      "Familiarity with Git commits, branches, and pull requests",
      "High curiosity, eagerness to learn, and collaborative team mindset"
    ],
    benefits: [
      "Direct conversion opportunity to Full-Time Employee (FTE) based on performance",
      "Paid monthly stipend with performance perks",
      "Flexible hours around university exams"
    ]
  },
  {
    postId: 106,
    postProfile: "Data Analyst",
    companyName: "InsightWorks Tech",
    companyShort: "IW",
    companyAvatarBg: "bg-surface-container-high text-primary",
    jobLocation: "Bengaluru (On-site)",
    workplaceType: "On-site",
    employmentType: "Full-time",
    experienceReq: "1-3 Years",
    salary: "₹4–7 LPA",
    salaryNumeric: 550000,
    matchRate: "89% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    postedAgo: "3d ago",
    category: "Data Science & AI",
    postTechStack: ["SQL", "Python", "PowerBI"],
    postDesc: "InsightWorks Tech is searching for a detail-driven Data Analyst to transform complex user interaction datasets into executive leadership dashboards and actionable product decisions.",
    requirements: [
      "Advanced SQL skills (joins, window functions, query optimization)",
      "Proficiency in Python (Pandas, NumPy, Matplotlib/Seaborn) for exploratory analysis",
      "Hands-on expertise developing interactive dashboards in PowerBI or Tableau",
      "Clear verbal and written communication of statistical insights"
    ],
    benefits: [
      "Prime Bengaluru campus with catered meals & recreation zone",
      "Comprehensive annual health checkup coverage",
      "Paid certifications in data engineering"
    ]
  },
  {
    postId: 107,
    postProfile: "Full Stack Developer",
    companyName: "DevOrbit Cloud",
    companyShort: "DO",
    companyAvatarBg: "bg-surface-variant text-on-surface",
    jobLocation: "Remote",
    workplaceType: "Remote",
    employmentType: "Full-time",
    experienceReq: "2-4 Years",
    salary: "₹7–14 LPA",
    salaryNumeric: 1050000,
    matchRate: "96% Match",
    isVerifiedPartner: true,
    isFeatured: true,
    postedAgo: "3d ago",
    category: "Software Development",
    postTechStack: ["Next.js", "PostgreSQL", "AWS"],
    postDesc: "DevOrbit Cloud enables global teams to deploy infrastructure with ease. We need an end-to-end Full Stack Developer skilled in Next.js App Router, server actions, and cloud infrastructure.",
    requirements: [
      "2+ years experience building production apps with Next.js and React",
      "Proficiency with modern SQL databases (PostgreSQL/Supabase) and ORMs (Prisma/Drizzle)",
      "Hands-on familiarity with AWS services (S3, Lambda, ECS, CloudFront)",
      "Strong debugging and automated testing skills"
    ],
    benefits: [
      "Competitive salary with generous equity stake",
      "Work from anywhere in the world",
      "Annual company retreats abroad"
    ]
  },
  {
    postId: 108,
    postProfile: "AI & Machine Learning Engineer",
    companyName: "NeuroAI Labs",
    companyShort: "NA",
    companyAvatarBg: "bg-primary text-on-primary",
    jobLocation: "Bengaluru (Hybrid)",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    experienceReq: "2-5 Years",
    salary: "₹14–26 LPA",
    salaryNumeric: 2000000,
    matchRate: "97% Match",
    isVerifiedPartner: true,
    isFeatured: false,
    postedAgo: "1d ago",
    category: "Data Science & AI",
    postTechStack: ["Python", "PyTorch", "LLMs", "LangChain"],
    postDesc: "Build cutting-edge generative AI agents and semantic search pipelines. Work with open-source foundation models, fine-tuning, and retrieval-augmented generation architectures.",
    requirements: [
      "Strong grasp of deep learning, PyTorch, and NLP fundamentals",
      "Experience with LLM orchestration (LangChain, LlamaIndex, vLLM)",
      "Hands-on with vector databases (Pinecone, Qdrant, ChromaDB)",
      "Production deployment experience with FastAPI and Triton Inference Server"
    ],
    benefits: [
      "Access to high-compute GPU clusters (H100 / A100)",
      "Top-tier compensation and equity grants",
      "Conference sponsorship (NeurIPS, ICML, CVPR)"
    ]
  },
  {
    postId: 109,
    postProfile: "Cloud & DevOps Engineer",
    companyName: "ApexCloud",
    companyShort: "AC",
    companyAvatarBg: "bg-tertiary-fixed text-tertiary",
    jobLocation: "Pune (Remote)",
    workplaceType: "Remote",
    employmentType: "Full-time",
    experienceReq: "3-6 Years",
    salary: "₹8–16 LPA",
    salaryNumeric: 1200000,
    matchRate: "93% Match",
    isVerifiedPartner: true,
    isFeatured: false,
    postedAgo: "4d ago",
    category: "Cloud & DevOps",
    postTechStack: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    postDesc: "Manage multi-region infrastructure, improve automated deployment velocities, and uphold high availability SLAs across enterprise cloud clusters.",
    requirements: [
      "In-depth knowledge of Kubernetes cluster operations and Helm charts",
      "Production Infrastructure as Code using Terraform or OpenTofu",
      "Experience with GitHub Actions / GitLab CI and observability tools (Datadog, Prometheus)",
      "Strong Linux system administration and networking troubleshooting"
    ],
    benefits: [
      "Flexible schedule and remote autonomy",
      "Health and dental coverage",
      "Home office setup reimbursement"
    ]
  },
  {
    postId: 110,
    postProfile: "Cybersecurity Analyst",
    companyName: "ShieldPoint Security",
    companyShort: "SS",
    companyAvatarBg: "bg-surface-container-high text-primary",
    jobLocation: "Gurgaon (Hybrid)",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    experienceReq: "2-4 Years",
    salary: "₹7–13 LPA",
    salaryNumeric: 1000000,
    matchRate: "91% Match",
    isVerifiedPartner: true,
    isFeatured: false,
    postedAgo: "2d ago",
    category: "Cybersecurity",
    postTechStack: ["SIEM", "Network Security", "Python", "SOC"],
    postDesc: "Monitor enterprise security events, conduct vulnerability assessments, and lead incident response protocols for financial tech infrastructure.",
    requirements: [
      "Experience working in a 24/7 or hybrid Security Operations Center (SOC)",
      "Familiarity with Splunk, Microsoft Sentinel, or Elastic SIEM",
      "Knowledge of OWASP Top 10 vulnerabilities and mitigation strategies",
      "Certifications like CEH, CompTIA Security+, or CISSP associate are preferred"
    ],
    benefits: [
      "Certification exam vouchers paid in full",
      "Shift allowances & wellness incentives",
      "Generous health coverage"
    ]
  },
  {
    postId: 111,
    postProfile: "Product & UI/UX Designer",
    companyName: "DesignFlow Studio",
    companyShort: "DF",
    companyAvatarBg: "bg-secondary-container/40 text-secondary",
    jobLocation: "Bengaluru (Hybrid)",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    experienceReq: "2-5 Years",
    salary: "₹6–12 LPA",
    salaryNumeric: 900000,
    matchRate: "94% Match",
    isVerifiedPartner: true,
    isFeatured: false,
    postedAgo: "1w ago",
    category: "Product & UI/UX",
    postTechStack: ["Figma", "Design Systems", "Prototyping", "User Research"],
    postDesc: "Craft delightful user journeys, maintain scalable multi-brand design systems in Figma, and conduct usability tests with real enterprise customers.",
    requirements: [
      "Strong portfolio demonstrating intuitive mobile and desktop web product workflows",
      "Deep mastery of Figma components, auto-layout, variables, and design tokens",
      "Ability to translate complex user problems into crisp wireframes and interactive prototypes",
      "Close collaboration with engineering teams to ensure design implementation quality"
    ],
    benefits: [
      "Latest M3 Max MacBook Pro + 4K dual monitor desk setup",
      "Annual design book and conference allowance",
      "Flexible hybrid hours"
    ]
  }
];

// Initial Kanban Pipeline Items matching reference
export const INITIAL_PIPELINE = [
  {
    id: "app-1",
    company: "DevOrbit",
    role: "Full Stack Dev",
    salary: "₹7–14 LPA",
    status: "applied",
    appliedDate: "3d ago",
    stageLabel: "Application Received",
    badgeColor: "bg-surface-container text-on-surface-variant",
    notes: "Applied via Jobify 1-click apply. Profile shortlisted by automated screener."
  },
  {
    id: "app-2",
    company: "CloudSphere",
    role: "Backend Go Eng",
    salary: "₹6–12 LPA",
    status: "applied",
    appliedDate: "5d ago",
    stageLabel: "In Review",
    badgeColor: "bg-surface-container text-on-surface-variant",
    notes: "Resume reviewed by talent acquisition team."
  },
  {
    id: "app-3",
    company: "TechNova",
    role: "Senior Full-Stack",
    salary: "₹18-24 LPA",
    status: "interviewing",
    appliedDate: "1w ago",
    stageLabel: "Tech Round",
    badgeColor: "bg-primary text-on-primary",
    interviewTime: "Tue 10:00 AM",
    meetingType: "Google Meet Video Call",
    notes: "System design and live coding session with Principal Architect."
  },
  {
    id: "app-4",
    company: "PixelCraft",
    role: "Frontend Engineer",
    salary: "₹5–9 LPA",
    status: "interviewing",
    appliedDate: "4d ago",
    stageLabel: "HR Screening",
    badgeColor: "bg-surface-container text-on-surface-variant",
    interviewTime: "Thursday 3:00 PM",
    meetingType: "Phone Call",
    notes: "Cultural fit and compensation expectation discussion."
  },
  {
    id: "app-5",
    company: "InsightWorks",
    role: "Data Analyst II",
    salary: "₹8.5 LPA",
    status: "offer",
    appliedDate: "2w ago",
    stageLabel: "Offer Extended",
    badgeColor: "bg-secondary text-on-secondary",
    notes: "Formal offer letter sent to inbox. Valid until next Friday.",
    hasOfferAction: true
  }
];

// Career Categories for 8-card grid
export const CAREER_CATEGORIES = [
  {
    id: "software-dev",
    title: "Software Development",
    icon: "terminal",
    count: "1,420 Active Jobs",
    filterKey: "Software Development"
  },
  {
    id: "frontend-eng",
    title: "Frontend Engineering",
    icon: "devices",
    count: "850 Active Jobs",
    filterKey: "Frontend Engineering"
  },
  {
    id: "backend-eng",
    title: "Backend Engineering",
    icon: "dns",
    count: "930 Active Jobs",
    filterKey: "Backend Engineering"
  },
  {
    id: "data-ai",
    title: "Data Science & AI",
    icon: "psychology",
    count: "620 Active Jobs",
    filterKey: "Data Science & AI"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "cloud_queue",
    count: "480 Active Jobs",
    filterKey: "Cloud & DevOps"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "verified_user",
    count: "310 Active Jobs",
    filterKey: "Cybersecurity"
  },
  {
    id: "product-design",
    title: "Product & UI/UX",
    icon: "draw",
    count: "540 Active Jobs",
    filterKey: "Product & UI/UX"
  },
  {
    id: "internships",
    title: "Internships & Entry",
    icon: "school",
    count: "1,200 Active Roles",
    filterKey: "Internships & Entry"
  }
];

// Company Directory items
export const COMPANIES_DATA = [
  {
    name: "TechNova Solutions",
    short: "TN",
    tagline: "Enterprise Cloud Platforms & Scalable Architectures",
    location: "Bengaluru, India",
    rating: 4.8,
    reviewsCount: 340,
    openRolesCount: 14,
    size: "500-1000 Employees",
    industry: "Information Technology & Cloud",
    verified: true
  },
  {
    name: "PixelCraft Digital",
    short: "PC",
    tagline: "Next-gen Interactive Digital SaaS Products",
    location: "Hyderabad, India (Remote-first)",
    rating: 4.9,
    reviewsCount: 190,
    openRolesCount: 8,
    size: "100-250 Employees",
    industry: "Design & Software",
    verified: true
  },
  {
    name: "CloudSphere Systems",
    short: "CS",
    tagline: "Resilient Distributed Microservices & Edge Infrastructure",
    location: "Pune, India",
    rating: 4.6,
    reviewsCount: 220,
    openRolesCount: 11,
    size: "250-500 Employees",
    industry: "Cloud Infrastructure",
    verified: true
  },
  {
    name: "InsightWorks Tech",
    short: "IW",
    tagline: "Data Intelligence & Machine Learning Decisions",
    location: "Bengaluru, India",
    rating: 4.7,
    reviewsCount: 410,
    openRolesCount: 9,
    size: "1000+ Employees",
    industry: "Analytics & AI",
    verified: true
  },
  {
    name: "CodeBridge Labs",
    short: "CB",
    tagline: "Engineering Incubator for Fresh Graduate Talent",
    location: "Remote / Pan-India",
    rating: 4.8,
    reviewsCount: 150,
    openRolesCount: 6,
    size: "50-100 Employees",
    industry: "EdTech & Software",
    verified: true
  },
  {
    name: "DevOrbit Cloud",
    short: "DO",
    tagline: "Continuous Deployment and Developer Tooling",
    location: "Remote",
    rating: 4.9,
    reviewsCount: 95,
    openRolesCount: 5,
    size: "20-50 Employees",
    industry: "DevOps & Developer Tools",
    verified: true
  }
];

// Local Storage Helper Utilities
export const getStoredJobs = () => {
  try {
    const raw = localStorage.getItem('jobify_jobs');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn("Could not load stored jobs:", e);
  }
  localStorage.setItem('jobify_jobs', JSON.stringify(INITIAL_JOBS));
  return INITIAL_JOBS;
};

export const saveStoredJobs = (jobs) => {
  try {
    localStorage.setItem('jobify_jobs', JSON.stringify(jobs));
  } catch (e) {
    console.error("Failed to save jobs:", e);
  }
};

export const getStoredPipeline = () => {
  try {
    const raw = localStorage.getItem('jobify_pipeline');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn("Could not load stored pipeline:", e);
  }
  localStorage.setItem('jobify_pipeline', JSON.stringify(INITIAL_PIPELINE));
  return INITIAL_PIPELINE;
};

export const saveStoredPipeline = (pipeline) => {
  try {
    localStorage.setItem('jobify_pipeline', JSON.stringify(pipeline));
  } catch (e) {
    console.error("Failed to save pipeline:", e);
  }
};
