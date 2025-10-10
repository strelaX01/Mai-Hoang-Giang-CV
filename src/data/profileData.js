import avatar from "../assets/avatar.png";

const profileData = {
  name: "MAI HOANG GIANG",
  title: "SOFTWARE ENGINEER",
  avatar: avatar,
  dob: "28/09/2001",
  phone: "(+84) 989856001",
  email: "hoanggiangstrela@gmail.com",
  location: "Son Dong Commune, Bac Ninh Province",
  facebook: "https://www.facebook.com/hoang.giang.319064",
  github: "https://github.com/strelaX01",
  profile:
    "I’m a passionate and detail-oriented software engineer with hands-on experience in full-stack and mobile app development. I enjoy building efficient, user-friendly applications using ReactJS, React Native, and Node.js. I aim to write clean, maintainable code and continuously learn new technologies to deliver scalable and valuable solutions that make a real impact on users and businesses.",
  experience: [
    {
      role: "Intern",
      company: "VI Technology Co., Ltd.",
      period: "07/2024 - 11/2024",
      bullets: [
        "Developed and optimized a Shopify application, adding custom options and improving performance and flexibility for clients.",
        "Designed intuitive user interfaces using Figma, and implemented frontends with ReactJS, Liquid, HTML, CSS, and JavaScript.",
        "Supported backend API development using Node.js and Express.js, handling data processing and server-side logic.",
        "Collaborated with another member developer team, strengthening communication, version control (Git), and time management skills.",
        "Gained valuable experience in real-world development workflow and client-based customization.",
      ],
    },
  ],
  project: {
    name: "Graduation Thesis: Personal Finance Management Application",
    period: "11/2024 - 03/2025",
    bullets: [
      "Developed a cross-platform mobile application that allows users to record income and expenses, manage categories, and view insightful charts and reports.",
      "Designed a clean, user-friendly interface for seamless navigation using React Native.",
      "Built backend APIs with Node.js and Express.js, and implemented secure JWT-based authentication.",
      "Managed data storage and queries with MySQL for reliable performance.",
      "GitHub: https://github.com/strelaX01/Personal-spending-management",
    ],
  },
  education: {
    school:
      "Thai Nguyen University of Information and Communication Technology",
    period: "2020 - 2025",
    degree: "Bachelor's Degree in Software Engineering",
    gpa: "3.15 / 4.0",
  },
  skills: {
    technical: [
      "HTML, CSS, JavaScript",
      "React Native, ReactJS",
      "NodeJS, ExpressJS",
      "MySQL, RESTful APIs",
    ],
    soft: [
      "Teamwork & Collaboration",
      "Problem-Solving & Logical Thinking",
      "Adaptability & Continuous Learning",
      "Communication in English",
    ],
  },
  certificates: [
    "B1 VSTEP English Certificate"
],
  hobbies: [
    "Reading books on software architecture",
    "Playing team sports to improve collaboration",
    "Exploring new technologies and improving coding skills",
  ],
};

export default profileData;
