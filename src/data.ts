export const portfolioData = {
  personalInfo: {
    name: "Abhijeet Kumar",
    title: "AI Control Center",
    role: "Backend Developer & AI Enthusiast",
    subheading: "AI / Backend Systems - Building scalable architectures and intelligent solutions.",
    github: "https://github.com/Abhijeet-kumar-04",
    linkedin: "https://www.linkedin.com/in/abhijeet-kumar-2a280b2a3",
    resume: "/resume.pdf",
    email: "abhijeet@example.com", // Update with actual email
  },
  academicHistory: [
    {
      institution: "National Institute of Technology (NIT), Silchar",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2023 - June 2027",
      description: "Focusing on core computer science principles, advanced data structures, and algorithms while exploring interests in full-stack web development.",
      grade: "CGPA: 8.17",
      location: "Assam, India",
      logo: "/nit-logo.png"
    },
    {
      institution: "Nirmala Convent High School",
      degree: "Class XII (CBSE)",
      duration: "July 2021 - June 2022",
      description: "Completed higher secondary education with a strong focus on science and mathematics, building a solid foundation for engineering.",
      grade: "Percentage: 92.2%",
      location: "Uttar Pradesh, India",
      logo: "/ncs-logo.png"
    },
    {
      institution: "Nirmala Convent High School",
      degree: "Class X (CBSE)",
      duration: "July 2019 - June 2020",
      description: "Completed secondary education with distinction.",
      grade: "Percentage: 89.4%",
      location: "Uttar Pradesh, India",
      logo: "/ncs-logo.png"
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
        { label: "Live Demo ↗", url: "https://notebook-7qpw.onrender.com/" },
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
