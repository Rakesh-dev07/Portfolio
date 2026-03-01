// src/Data/Projects.js

const projects = [
  {
    title: "Reminder App",
    description:
      "Reminder App is a full-stack MERN application that enables users to create, manage, and receive scheduled reminders with secure authentication via JWT and Google OAuth. The system exposes RESTful APIs for CRUD operations, leverages MongoDB for persistent storage, and integrates Firebase Cloud Messaging to deliver real-time push notifications. Background cron jobs handle automated reminder scheduling and execution.",
    image: "/Projects/02.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase", "Google OAuth"],
    github: "https://github.com/Rakesh-dev07/Reminder_app",
    live: "https://reminder-app-rho-eight.vercel.app",
    featured: false,
  },
  {
    title: "Online Course Platform (MERN Stack)",
    description:
      "A full-stack Learning Management System (LMS) built using the MERN stack. Features PayPal Sandbox for secure payments and Cloudinary for video uploads. (Demo mode — no real transactions.)",
    image: "/Projects/Course.png",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "PayPal API",
      "Cloudinary",
    ],
    github: "https://github.com/Rakesh-dev07/Online-course-platform",
    live: "https://onlinecourseplatform-one.vercel.app/",
    featured: true,
  },

  {
    title: "Bookstore App",
    description:
      "A full-featured digital bookstore where users can explore and purchase books with a smooth UI and admin management.",
    image: "/Projects/bookstore.png",
    tags: ["React", "JavaScript", "REST API", "CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Rakesh-dev07/Book-store-with-admin",
    live: "https://book-store-with-admin-tau.vercel.app/",
    featured: true,
  },

  // {
  //   title: "Role-Playing Game (Dragon Repeller)",
  //   description:
  //     "A classic browser-based RPG game built with HTML, CSS, and JavaScript. Defeat monsters, earn gold, upgrade weapons, and battle the dragon!",
  //   image: "/Projects/Game.png",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/Rakesh-dev07/Role-Playing-Game",
  //   live: "https://rakesh-dev07.github.io/Role-Playing-Game/",
  //   featured: false,
  // },
];

export default projects;
