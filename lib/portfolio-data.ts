export const profile = {
  name: 'Palagiri Thasneem',
  firstName: 'Thasneem',
  title: 'AI & ML Developer',
  degree: 'BTech CSE (AI & ML) Student',
  intro:
    'I build intelligent, practical applications with Python and machine learning, from RAG-powered chatbots to computer vision systems, turning ideas into products people can actually use.',
  email: 'palagirithasneem@gmail.com',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/palagirithasneem',
  linkedin: 'https://www.linkedin.com/in/palagiri-thasneem',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const skillGroups = [
  {
    title: 'AI & Programming',
    icon: 'brain',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'AI / ML', level: 82 },
    ],
  },
  {
    title: 'Data & Databases',
    icon: 'database',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'DBMS', level: 82 },
    ],
  },
  {
    title: 'Web Development',
    icon: 'code',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: 'git',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 86 },
    ],
  },
] as const

export const projects = [
  {
    name: 'ProResume AI',
    tagline: 'AI-powered resume builder',
    description:
      'Generates polished, ATS-friendly resumes from user details and tailors content to job descriptions using language models.',
    tags: ['Python', 'LLMs', 'NLP', 'Web App'],
    icon: 'file',
    featured: true,
  },
  {
    name: 'InterviewVerse AI',
    tagline: 'Mock interview assistant',
    description:
      'Simulates role-specific technical and HR interviews, evaluates answers, and gives actionable feedback to help candidates improve.',
    tags: ['AI', 'Prompt Engineering', 'JavaScript'],
    icon: 'mic',
    featured: true,
  },
  {
    name: 'CertifyPro',
    tagline: 'Certificate generation & verification',
    description:
      'Automates bulk certificate creation and provides a secure verification system to validate certificate authenticity.',
    tags: ['Python', 'SQL', 'Automation'],
    icon: 'award',
    featured: false,
  },
  {
    name: 'College RAG Chatbot',
    tagline: 'Retrieval-augmented campus assistant',
    description:
      'Answers student queries about courses, admissions, and campus life by retrieving context from college documents before generating responses.',
    tags: ['RAG', 'Embeddings', 'Vector DB', 'Python'],
    icon: 'bot',
    featured: false,
  },
  {
    name: 'Face Recognition Attendance',
    tagline: 'Computer vision attendance system',
    description:
      'Detects and recognizes faces in real time to mark attendance automatically, storing records in a database for easy reporting.',
    tags: ['OpenCV', 'Deep Learning', 'SQL'],
    icon: 'scan',
    featured: false,
  },
] as const

export const certifications = [
  { title: 'Python for Data Science', issuer: 'Online Certification', year: '2025' },
  { title: 'Machine Learning Fundamentals', issuer: 'Online Certification', year: '2025' },
  { title: 'Generative AI & Prompt Engineering', issuer: 'Online Certification', year: '2025' },
  { title: 'SQL & Database Management', issuer: 'Online Certification', year: '2024' },
  { title: 'Web Development (HTML, CSS, JS)', issuer: 'Online Certification', year: '2024' },
  { title: 'Git & GitHub Essentials', issuer: 'Online Certification', year: '2024' },
]

export const education = [
  {
    degree: 'BTech in Computer Science and Engineering (AI & ML)',
    institution: 'Engineering College',
    period: 'Pursuing',
    detail: 'Coursework in machine learning, deep learning, data structures, DBMS, and software engineering.',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Junior College',
    period: 'Completed',
    detail: 'Mathematics, Physics, and Chemistry.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'High School',
    period: 'Completed',
    detail: 'Built a strong foundation in mathematics and science.',
  },
]
