import { Clock, TrendingUp, Users, Zap } from "lucide-react";

export const projects = [
  {
    id: "financial-solution",
    title: "Financial Solution",
    description:
      "MidasBox is a CAC-approved and regulated financial services provider dedicated to empowering individuals and businesses with accessible and innovative financial solutions. Our mission is to break down financial barriers by offering secure, convenient, and reliable services that promote financial inclusion and stability. \nKey Offerings: \nProof of Funds - Fast, secure verification for travel, studies, or visa approvals. \nSalary Advance - Quick cash access before payday with flexible repayment. \nDaily Savings - Grow savings effortlessly with flexible plans and easy withdrawals. \nGroup Lending - Affordable community-based loans to improve credit access. \nShort-Term Loans - Immediate funding for urgent needs with no hidden fees. \nAsset Financing - Hassle-free financing for business or personal assets. \nInvestment Pool - High-return investment opportunities with guaranteed safety. \nAgency Banking - Earn commissions by providing financial services in your community. \nAgent E-Float - Affordable float loans for POS operators to boost transactions.",
    category: "web-development",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "MidasBox is a CAC-approved and regulated financial services provider dedicated to empowering individuals and businesses with accessible and innovative financial solutions.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
  // Add other projects with similar structure
  {
    id: "ever-journal",
    title: "Ever Journal",
    description:
      "We built Ever Journal to help you remember all of them — for yourself. In a world where everything is shared, what’s often missing is a space to reflect on what truly mattered. We saw how people’s lives were scattered across photos, voice notes, half-written journals, and fleeting posts — but nowhere brought it all together. So we built a new kind of space. Private by default. Emotionally intelligent. A quiet home for your thoughts, memories, and daily reflections to naturally become your story. With Eve, your AI companion, journaling becomes less about writing the perfect entry — and more about making sense of your life, one moment at a time.",
    category: "web-development",
    technologies: ["Vue.js", "Python", "MongoDB", "AWS"],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "We built Ever Journal to help you remember all of them — for yourself. In a world where everything is shared, what’s often missing is a space to reflect on what truly mattered. We saw how people’s lives were scattered across photos, voice notes, half-written journals, and fleeting posts — but nowhere brought it all together.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
  {
    id: "ifbc",
    title: "IFBC Franchise Solutions",
    description:
      "At IFBC we offer you a complete resource hub for all your franchising needs. We bridge the gap between aspiring franchisees and franchise companies and train future franchise consultants. We offer expert guidance that will help you make the right investment and exclusive tools that will help you manage and grow your businessants who have been in the industry for over 20 years. We have helped hundreds of franchise companies grow and expand their business. We are dedicated to helping you find the perfect franchise opportunity that fits your needs and budget.",
    category: "web-development",
    technologies: ["Angular", "Django", "PostgreSQL", "Docker"],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "At IFBC we offer you a complete resource hub for all your franchising needs. We bridge the gap between aspiring franchisees and franchise companies and train future franchise consultants. We offer expert guidance that will help you make the right investment and exclusive tools that will help you manage and grow your businessants who have been in the industry for over 20 years.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
  {
    id: "whouepp",
    title: "Loan and Lending App",
    description:
      "WhoUEpp platform enables borrowers to access funds quickly and easily while allowing lenders to earn competitive returns on their investments.",
    category: "mobile-development",
    technologies: ["Flutter", "Django", "Firebase"],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "WhoUEpp platform enables borrowers to access funds quickly and easily while allowing lenders to earn competitive returns on their investments.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
  {
    id: "locum",
    title: "LocumSpace",
    description:
      "We make it easy for you to find rewarding job placements, ensure and facilitate payment for your work hours and create a healthy job environment where job seekers and employers thrive.",
    category: "web-development",
    technologies: [
      "Next",
      "Nest",
      "Firebase",
      "MongoDB",
      "Python",
      "TensorFlow",
    ],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "We make it easy for you to find rewarding job placements, ensure and facilitate payment for your work hours and create a healthy job environment where job seekers and employers thrive.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
  {
    id: "mobi-bank",
    title: "Mobi Bank App",
    description:
      "Mobi Bank is a secure and robust e-Banking system getting popular all over the world nowadays. We offer the best FDR, DPS & Loan plans to our account holders.",
    category: "web-development",
    technologies: [
      "Redis",
      "Firebase",
      "PostgreSQL",
      "Go",
      "TensorFlow",
      "Python",
    ],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "Mobi Bank is a secure and robust e-Banking system getting popular all over the world nowadays. We offer the best FDR, DPS & Loan plans to our account holders.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
    {
    id: "notch-crm",
    title: "Notch CRM",
    description:
      "Break down silos and empower collaboration! NotchCRM brings your sales, service, and client management under one roof. Our user-friendly platform delivers immediate value, equipping all teams with a 360° view of your customer.",
    category: "web-development",
    technologies: [
      "Redis",
      "Firebase",
      "PostgreSQL",
      "Go",
      "TensorFlow",
      "Python",
    ],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    overview:
      "Break down silos and empower collaboration! NotchCRM brings your sales, service, and client management under one roof. Our user-friendly platform delivers immediate value, equipping all teams with a 360° view of your customer.",
    challenges: [
      "Complex inventory management across multiple warehouses",
      "High traffic spikes during peak shopping seasons",
      "Integration with existing ERP and payment systems",
      "Real-time inventory synchronization",
    ],
    solutions: [
      "Microservices architecture with auto-scaling",
      "Redis caching and CDN optimization",
      "RESTful APIs for seamless integrations",
      "Real-time WebSocket connections",
    ],
    techStack: {
      frontend: [
        { name: "React", version: "v18.2" },
        { name: "TypeScript", version: "v5.0" },
        { name: "Next.js", version: "v14.0" },
        { name: "Tailwind CSS", version: "v3.3" },
      ],
      backend: [
        { name: "Node.js", version: "v20.0" },
        { name: "Express.js", version: "v4.18" },
        { name: "Socket.io", version: "v4.7" },
        { name: "JWT Auth", version: "v9.0" },
      ],
      infrastructure: [
        { name: "PostgreSQL", version: "v15.0" },
        { name: "Redis", version: "v7.0" },
        { name: "AWS", version: "EC2, RDS" },
        { name: "Docker", version: "v24.0" },
      ],
    },
    process: [
      {
        phase: "Discovery",
        duration: "2 weeks",
        description:
          "Requirements gathering, user research, and technical planning",
        color: "blue",
      },
      {
        phase: "Design",
        duration: "3 weeks",
        description: "UI/UX design, wireframes, and user flow optimization",
        color: "purple",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description:
          "Agile development with 2-week sprints and continuous integration",
        color: "green",
      },
      {
        phase: "Launch",
        duration: "2 weeks",
        description: "Testing, deployment, and post-launch optimization",
        color: "orange",
      },
    ],
    results: [
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Year-over-year revenue increase",
        icon: TrendingUp,
        color: "green",
      },
      {
        metric: "User Engagement",
        value: "+65%",
        description: "Average session duration increase",
        icon: Users,
        color: "blue",
      },
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Improved checkout completion",
        icon: Zap,
        color: "purple",
      },
      {
        metric: "Performance",
        value: "1.2s",
        description: "Average page load time",
        icon: Clock,
        color: "orange",
      },
    ],
    testimonial: {
      quote:
        "The new e-commerce platform has completely revolutionized our online presence. The team at MindByte delivered beyond our expectations, creating a scalable solution that has driven incredible growth for our business.",
      author: "Sarah Johnson",
      role: "CEO, RetailCorp",
    },
    featured: true,
    status: "completed",
  },
];

export const pageProjects = [
  {
    id: "financial-solution",
    icon: "🛒",
    title: "Financial Solution",
    description:
      "MidasBox is a CAC-approved and regulated financial services provider dedicated to empowering individuals and businesses with accessible and innovative financial solutions. Our mission is to break down financial barriers by offering secure, convenient, and reliable services that promote financial inclusion and stability. \nKey Offerings: \nProof of Funds - Fast, secure verification for travel, studies, or visa approvals. \nSalary Advance - Quick cash access before payday with flexible repayment. \nDaily Savings - Grow savings effortlessly with flexible plans and easy withdrawals. \nGroup Lending - Affordable community-based loans to improve credit access. \nShort-Term Loans - Immediate funding for urgent needs with no hidden fees. \nAsset Financing - Hassle-free financing for business or personal assets. \nInvestment Pool - High-return investment opportunities with guaranteed safety. \nAgency Banking - Earn commissions by providing financial services in your community. \nAgent E-Float - Affordable float loans for POS operators to boost transactions.",
    category: "web-development",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: {
      users: "500K+",
      growth: "300%",
      conversion: "45%",
      loadTime: "1.2s",
    },
    featured: true,
    status: "completed",
    url: 'https://www.midasbox.ng',
  },
  {
    id: "ever-journal",
    icon: "📊",
    title: "Ever Journal",
    description:
      "We built Ever Journal to help you remember all of them — for yourself. In a world where everything is shared, what’s often missing is a space to reflect on what truly mattered. We saw how people’s lives were scattered across photos, voice notes, half-written journals, and fleeting posts — but nowhere brought it all together. So we built a new kind of space. Private by default. Emotionally intelligent. A quiet home for your thoughts, memories, and daily reflections to naturally become your story. With Eve, your AI companion, journaling becomes less about writing the perfect entry — and more about making sense of your life, one moment at a time.",
    category: "web-development",
    technologies: ["Vue.js", "Python", "FastAPI", "MongoDB"],
    metrics: {
      users: "50K+",
      growth: "150%",
      conversion: "35%",
      loadTime: "0.8s",
    },
    featured: false,
    status: "completed",
    url: 'https://ever-journal.com'
  },
  {
    id: "ifbc",
    icon: "🌍",
    title: "IFBC Franchise Solutions",
    description:
      "At IFBC we offer you a complete resource hub for all your franchising needs. We bridge the gap between aspiring franchisees and franchise companies and train future franchise consultants. We offer expert guidance that will help you make the right investment and exclusive tools that will help you manage and grow your businessants who have been in the industry for over 20 years. We have helped hundreds of franchise companies grow and expand their business. We are dedicated to helping you find the perfect franchise opportunity that fits your needs and budget.",
    category: "web-development",
    technologies: ["Angular", "Django", "PostgreSQL", "Docker"],
    metrics: {
      users: "100K+",
      growth: "200%",
      conversion: "40%",
      loadTime: "1.5s",
    },
    featured: true,
    status: "completed",
    url: 'https://ifbc.co'
  },
  {
    id: "whouepp",
    icon: "📱",
    title: "Loan and Lending App",
    description:
      "WhoUEpp platform enables borrowers to access funds quickly and easily while allowing lenders to earn competitive returns on their investments.",
    category: "mobile-development",
    technologies: ["Flutter", "Firebase", "Redux"],
    metrics: {
      users: "250K+",
      growth: "180%",
      conversion: "30%",
      loadTime: "0.5s",
    },
    featured: false,
    status: "completed",
    url: 'https://www.whouepp.com'
  },
  {
    id: "locum",
    icon: "🏥",
    title: "LocumSpace",
    description:
      "We make it easy for you to find rewarding job placements, ensure and facilitate payment for your work hours and create a healthy job environment where job seekers and employers thrive.",
    category: "ai-ml",
    technologies: [
      "Next",
      "Nest",
      "Firebase",
      "MongoDB",
      "Python",
      "TensorFlow",
    ],
    metrics: {
      users: "75K+",
      growth: "400%",
      conversion: "50%",
      loadTime: "2.1s",
    },
    featured: true,
    status: "completed",
    url: 'https://www.whouepp.com'
  },
  {
    id: "mobi-bank",
    icon: "💳",
    title: "Mobi Bank App",
    description:
      "Mobi Bank is a secure and robust e-Banking system getting popular all over the world nowadays. We offer the best FDR, DPS & Loan plans to our account holders.",
    category: "cloud-solutions",
    technologies: [
      "Redis",
      "Firebase",
      "PostgreSQL",
      "Go",
      "TensorFlow",
      "Python",
    ],
    metrics: {
      users: "1M+",
      growth: "250%",
      conversion: "N/A",
      loadTime: "0.9s",
    },
    featured: false,
    status: "completed",
    url: 'https://mobibankapp.onrender.com'
  },
    {
    id: "notch-crm",
    icon: "📊",
    title: "Notch CRM",
    description:
      "Break down silos and empower collaboration! NotchCRM brings your sales, service, and client management under one roof. Our user-friendly platform delivers immediate value, equipping all teams with a 360° view of your customer.",
    category: "cloud-solutions",
    technologies: [
      "Redis",
      "Firebase",
      "PostgreSQL",
      "Node.js",
      "TensorFlow",
      "Python",
    ],
    metrics: {
      users: "1M+",
      growth: "250%",
      conversion: "N/A",
      loadTime: "0.9s",
    },
    featured: false,
    status: "completed",
    url: 'https://notchcrm.com'
  },
];
