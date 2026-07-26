// src/Data/Projects.js

const projects = [
  {
    title: "Reminder App",
    description:
      "A production-ready full-stack MERN application that enables users to create reminders using AI-powered natural language, manage one-time and recurring schedules, receive real-time browser push notifications, and organize tasks through an interactive calendar. Built with React, Node.js, Express, MongoDB, Firebase Cloud Messaging, JWT, and Google OAuth, the application delivers a secure, responsive, and production-quality user experience.",
    image: "/Projects/01.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase", "Google OAuth"],
    github: "https://github.com/Rakesh-dev07/Reminder_app",
    live: "https://reminder-app-rho-eight.vercel.app",
    featured: false,
  },
   {
    title: "FlowDesk — Multi-Tenant SaaS Project Management System",
    description: "A production-ready full-stack SaaS application built with the MERN stack, featuring multi-tenant architecture, role-based access control (RBAC), project and task management, real-time status updates, and a modern responsive UI.",
    tags: ["MERN Stack","Multi-Tenancy","RBAC","SaaS","React","Node.js","Express","MongoDB","JWT Auth","Tailwind CSS","REST API",],
    image: "/Projects/lk.png",
    github: "https://github.com/Rakesh-dev07/WorkFlow_saas",
    live: "https://work-flow-saas.vercel.app",
    featured: true,
  },
  {
    title: "Online Course Platform (MERN Stack)",
    description:
      "A full-stack Learning Management System (LMS) built using the MERN stack. Features PayPal Sandbox for secure payments and Cloudinary for video uploads. (Demo mode — no real transactions.)",
    image: "/Projects/Course.png",
    tags: ["React","Tailwind","Node.js","Express","MongoDB","PayPal API","Cloudinary"],
    github: "https://github.com/Rakesh-dev07/Online-course-platform",
    live: "https://onlinecourseplatform-one.vercel.app/",
    featured: true,
  },

  //{
  //   title: "Bookstore App",
  //   description:
  //     "A full-featured digital bookstore where users can explore and purchase books with a smooth UI and admin management.",
  //   image: "/Projects/bookstore.png",
  //   tags: ["React", "JavaScript", "REST API", "CSS", "Node.js", "Express", "MongoDB"],
  //   github: "https://github.com/Rakesh-dev07/Book-store-with-admin",
  //   live: "https://book-store-with-admin-tau.vercel.app/",
  //   featured: true,
  // },

  // {
  //   title: "Role-Playing Game (Dragon Repeller)",
  //   description:
  //     "A classic browser-based RPG game built with HTML, CSS, and JavaScript. Defeat monsters, earn gold, upgrade weapons, and battle the dragon!",
  //   image: "/Projects/Game.png",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/Rakesh-dev07/Role-Playing-Game",
  //   live: "https://rakesh-dev07.github.io/Role-Playing-Game/",
  //   featured: true,
  // },
];

export default projects;
