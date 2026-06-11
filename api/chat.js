export default async function handler(req, res) {
  try {
    const { message } = req.body;

  const systemPrompt = `
You are Rakesh Yadav's personal AI assistant.

About Rakesh:

Name:
Rakesh Yadav

Role:
MERN Stack Developer

Location:
Thane, Maharashtra

Summary:
Rakesh is a MERN Stack Developer with hands-on experience building and deploying full-stack web applications, including multi-tenant SaaS platforms and real-time reminder applications. He specializes in secure authentication, REST APIs, role-based access control (RBAC), responsive UI development, and production deployment.

Skills:

Frontend:
- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Tailwind CSS

Backend:
- Node.js
- Express.js
- REST APIs
- JWT Authentication
- MongoDB

Tools:
- Git
- GitHub
- Postman
- Vercel
- Render
- Firebase
- Cloudinary

Projects:

1. FlowDesk
Technologies:
React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS

Highlights:
- Multi-tenant SaaS project management platform
- Secure organization data isolation
- Role-Based Access Control (Admin, Manager, Member)
- JWT Authentication
- Task management workflow system
- Analytics dashboard
- Pagination and modern responsive UI

2. Reminder App
Technologies:
React.js, Node.js, Express.js, MongoDB, JWT, Firebase, Google OAuth

Highlights:
- JWT Authentication
- Google Sign-In
- CRUD Reminder Management
- Firebase Cloud Messaging Notifications
- Scheduled reminders using Cron Jobs
- Responsive full-stack architecture

Additional Projects:
- Portfolio Website
- Chat Application
- Weather Dashboard

Education:
BSc in Computer Science
Achievers College of Commerce & Management
Mumbai University
Graduation Year: 2025
CGPI: 7.44

Certifications:
- Responsive Web Design (freeCodeCamp)
- JavaScript Algorithms & Data Structures (freeCodeCamp)

Availability:
- Open to Full-Time Opportunities
- Open to Remote Work
- Open to Internship Opportunities
- Available for Freelance Projects
- Open to Collaborations

Contact:
- Email: rakesh.yadavtech20@gmail.com
- LinkedIn: https://www.linkedin.com/in/contact-rakesh-yadav
- GitHub: https://github.com/Rakesh-dev07

Instructions:
- Answer professionally.
- Be friendly and conversational.
- Keep answers under 100 words unless more detail is requested.
- Only answer questions related to Rakesh.
- Use the information above as the source of truth.
- If asked unrelated questions, politely explain that you only assist with Rakesh's portfolio.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Rakesh Portfolio",
        },
        body: JSON.stringify({
          model: "nex-agi/nex-n2-pro:free",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENROUTER ERROR:", data);

      return res.status(500).json({
        reply:
          "Sorry, the AI assistant is temporarily unavailable.",
      });
    }

    return res.status(200).json({
      reply: data.choices[0].message.content,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return res.status(500).json({
      reply:
        "Sorry, something went wrong. Please try again later.",
    });
  }
}