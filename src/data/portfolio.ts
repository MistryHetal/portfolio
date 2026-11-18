export const profile = {
  name: "Hetal Mistry",
  role: "Full-Stack MERN Developer",
  location: "Ahmedabad, Gujarat, India",
  email: "hetal.mistry.bca19@gmail.com",
  phone: "+91 78745 28943",
  summary:
    "Results-driven MERN Stack Developer with hands-on industry experience building scalable web applications using Node.js, React.js and modern JavaScript technologies. Experienced in developing end-to-end features, reusable APIs, real-time workflows and third-party integrations while improving performance and collaborating with cross-functional teams.",
  linkedin: "https://www.linkedin.com/in/hetal-mistry-482a64240",
  github: "https://github.com/MistryHetal?tab=repositories",
};
export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit (RTK)",
      "Material UI",
      "Ant Design",
      "WebSocket",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSocket",
      "Authentication",
      "Authorization",
    ],
  },
  { group: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  {
    group: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "AWS",
      "Responsive Design",
      "API Integration",
      "Performance Optimization",
      "Code Reviews",
    ],
  },
];
export const education = [
  {
    degree: "B.C.A.",
    institution: "Gujarat University",
    result: "63.00%",
    period: "April 2022",
  },
  {
    degree: "H.S.C.",
    institution: "G.S.H.S.E.B.",
    result: "63.47%",
    period: "March 2019",
  },
  {
    degree: "S.S.C.",
    institution: "G.S.H.S.E.B.",
    result: "66.00%",
    period: "March 2017",
  },
];
export const softSkills = [
  "Strong organization",
  "Time management",
  "Communication",
  "Teamwork",
  "Flexible, positive attitude",
  "Attention to detail",
];
export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Alvi Software Pvt. Ltd.",
    period: "December 2025 – Present",
    details: [
      "Develop and maintain full-stack web applications using Node.js, React.js, MySQL and MongoDB.",
      "Build reusable APIs and integrate third-party services.",
      "Optimize application performance and support scalability.",
      "Collaborate with UI/UX designers and frontend teams to implement responsive interfaces.",
      "Participate in code reviews and follow development best practices.",
    ],
  },
  {
    role: "Node.js Developer",
    company: "Excellent WebWorld",
    period: "July 2023 – December 2024",
    details: [
      "Develop and maintain server-side logic using Node.js.",
      "Collaborate with frontend developers to integrate user-facing elements with server-side logic.",
      "Optimize applications for speed and scalability.",
      "Implement security and data-protection measures.",
    ],
  },
];
export type Project = {
  slug: string;
  name: string;
  company: string;
  role: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  stack: string[];
  accent: string;
};
export const projects: Project[] = [
  {
    slug: "excellent-home-stay",
    name: "Excellent Home Stay",
    company: "Excellent WebWorld",
    role: "Node.js & React.js Developer",
    category: "Full Stack",
    summary:
      "An Airbnb-style platform for discovering properties, booking stays and sharing guest reviews.",
    description:
      "A home-stay booking platform that supports both hosts and guests through property listings, booking workflows and reviews.",
    image: "/projects/excellent-home-stay.svg",
    imageAlt: "Illustration of a welcoming holiday home surrounded by greenery",
    features: [
      "Property listing and management",
      "Stay booking experience",
      "Host and guest workflows",
      "Reviews and ratings",
    ],
    stack: ["React.js", "Node.js", "Express.js", "Database", "REST APIs"],
    accent: "lavender",
  },
  {
    slug: "salon-management",
    name: "Salon Management System",
    company: "Alvi Software",
    role: "Node.js & React.js Developer",
    category: "Full Stack",
    summary:
      "A web platform for managing salon appointments, staff, services and customer records.",
    description:
      "A salon operations platform with secure authentication, booking updates and an administrative dashboard for day-to-day business management.",
    image: "/projects/salon-management.svg",
    imageAlt: "Illustration of salon products and a salon appointment dashboard",
    features: [
      "Appointment booking",
      "Staff management",
      "Service listings",
      "Customer records",
      "Admin dashboard",
      "Real-time booking updates",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Authentication"],
    accent: "pink",
  },
  {
    slug: "fitness-training",
    name: "Fitness Training Management System",
    company: "Alvi Software",
    role: "Node.js & React.js Developer",
    category: "Full Stack",
    summary:
      "A fitness platform for training programs, workout tracking and personalized plans.",
    description:
      "A fitness management solution with user and trainer workflows, performance analytics, subscriptions and role-based access.",
    image: "/projects/fitness-training.svg",
    imageAlt: "Illustration of a fitness dashboard with workout and progress metrics",
    features: [
      "Program enrollment",
      "Workout and progress tracking",
      "Trainer dashboards",
      "Performance analytics",
      "Subscription management",
      "Role-based access control",
    ],
    stack: ["React.js", "Node.js", "Express.js", "Database", "REST APIs"],
    accent: "green",
  },
  {
    slug: "food-delivery",
    name: "Food Delivery Application",
    company: "Alvi Software",
    role: "React.js Developer",
    category: "Frontend",
    summary:
      "A responsive food-ordering experience for browsing restaurants, managing a cart and following orders.",
    description:
      "A frontend application integrating APIs for restaurant menus, cart operations and order-status updates.",
    image: "/projects/food-delivery.svg",
    imageAlt: "Illustration of a food delivery order with a meal and delivery bag",
    features: [
      "Restaurant browsing",
      "Menu display",
      "Cart management",
      "Order status updates",
      "Responsive user experience",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "CSS"],
    accent: "orange",
  },
  {
    slug: "skriti",
    name: "Skriti",
    company: "Excellent WebWorld",
    role: "React.js Developer",
    category: "Frontend",
    summary:
      "A content discovery and sharing application that encourages knowledge exchange and collaboration.",
    description:
      "A community-oriented platform where users can explore topics and share insights across a wide range of interests.",
    image: "/projects/skriti.svg",
    imageAlt: "Illustration of a community sharing ideas and discovering content",
    features: [
      "Content discovery",
      "Topic exploration",
      "Sharing insights",
      "Knowledge community experience",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "CSS"],
    accent: "blue",
  },
  {
    slug: "smart-irrigation",
    name: "Smart Irrigation System",
    company: "Excellent WebWorld",
    role: "Node.js Developer",
    category: "Backend",
    summary:
      "An irrigation automation system that optimizes water usage using real-time environmental data.",
    description:
      "A system that considers soil moisture, weather conditions and crop requirements to support efficient water distribution.",
    image: "/projects/smart-irrigation.svg",
    imageAlt: "Illustration of crop rows with smart irrigation and water monitoring",
    features: [
      "Soil moisture monitoring",
      "Weather-aware irrigation logic",
      "Crop requirement considerations",
      "Efficient water distribution",
    ],
    stack: ["Node.js", "Express.js", "REST APIs", "Database"],
    accent: "teal",
  },
];
