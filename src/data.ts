export const portfolioData = {
  personalInfo: {
    name: "Abhijeet Kumar",
    title: "AI Control Center",
    role: "Backend Developer & AI Enthusiast",
    subheading: "AI / Backend Systems - Building scalable architectures and intelligent solutions.",
    github: "https://github.com/Abhijeet-kumar-04",
    linkedin: "#", // Update with actual LinkedIn URL later
    resume: "/resume.pdf",
    email: "abhijeet@example.com", // Update with actual email
  },
  academicHistory: [
    {
      institution: "National Institute of Technology, Silchar",
      degree: "B.Tech, Computer Science and Engineering",
      duration: "2023 - 2027",
      description: "Highlighting participation in ICPC, TechM CODE, and ZS Campus Beats.",
      logoColor: "bg-blue-500", 
    },
    {
      institution: "Kendriya Vidyalaya Duliajan",
      degree: "High School",
      duration: "Completed July 2022",
      description: "Grade: 89.6%",
      logoColor: "bg-red-500",
    },
  ],
  projects: [
    {
      title: "Compile-Hire",
      subtitle: "A comprehensive recruitment suite with intelligent matching algorithms.",
      description: "Transform the technical hiring process with our streamlined, intelligent platform. Connect with top technical talent efficiently through unified dashboards, post-interview evaluation, and smart candidate matching.",
      features: ["Integrated Candidate Dashboard", "Intelligent Matching", "RBAC", "Evaluation Flow"],
      techStack: ["TypeScript", "Node.js", "Express", "MongoDB"],
      links: [
        { label: "Live Demo ↗", url: "https://compile-hire.vercel.app/" },
        { label: "GitHub Repo ↗", url: "https://github.com/Abhijeet-kumar-04/Compile-Hire" },
      ]
    },
    {
      title: "Music Hub",
      subtitle: "Full-stack music streaming platform with seamless playback.",
      description: "A dynamic, full-stack application for music lovers. Features seamless file uploading, interactive playback controls, and a robust database structure for cataloging and searching through vast libraries of audio.",
      features: ["Music Uploads", "Interactive Playback", "Dynamic Search", "Secure Authentication"],
      techStack: ["React.js", "Express.js", "MongoDB", "Node.js"],
      links: [
        { label: "Live Demo ↗", url: "https://music-hub-spy9.onrender.com/" },
        { label: "GitHub Repo ↗", url: "https://github.com/Abhijeet-kumar-04/Music-Hub" },
      ]
    },
    {
      title: "NoteBook",
      subtitle: "Secure and real-time collaborative note-taking application.",
      description: "A collaborative workspace for teams, facilitating instant information sharing. Features include tag-based filtering and search, real-time updates via WebSockets, and a distributed Redis caching layer for performance.",
      features: ["Real-time Editing", "WebSocket Integration", "Advanced Filtering", "Caching Layer"],
      techStack: ["React", "Node.js", "WebSockets", "Redis"],
      links: [
        { label: "Live Demo ↗", url: "https://notebook-app-demo.vercel.app/" },
        { label: "GitHub Repo ↗", url: "https://github.com/Abhijeet-kumar-04/NoteBook" },
      ]
    },
    {
      title: "Hackathon-Platform",
      subtitle: "End-to-end management from ideation to submission and judging.",
      description: "A central platform to manage hackathons efficiently. Implements dynamic content discovery using flexible filters and real-time data updates via WebSockets for a seamless user experience.",
      features: ["Ideation to Submission", "Judging Workflow", "Dynamic Filtering", "WebSocket-based Updates"],
      techStack: ["React", "Node.js", "WebSockets", "Redis"],
      links: [
        { label: "Coming Soon", url: "#", disabled: true },
        { label: "GitHub Repo ↗", url: "https://github.com/Abhijeet-kumar-04/Hackathon-Platform" },
      ]
    },
  ],
};
