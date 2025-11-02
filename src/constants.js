// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Web Developer",
      company: "Lumbini Technologies Pvt. Ltd",
      date: "OCT 2024 - Nov 2024",
      desc: "Gained hands-on experience in front-end web development using HTML, CSS, Bootstrap, and JavaScript, contributing to live projects by designing responsive user interfaces and enhancing user experience, and consistently meeting project deadlines with high-quality code and proper documentation.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "SQL",
        
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "AI Intern",
      company: "TechSaksham (Microsoft & SAP | Edunet Foundation)",
      date: "Jan 2025 - Feb 2025",
      desc: "Worked on developing an AI model for medical diagnosis, leveraging data-driven insights to identify disease patterns and support clinical decision-making.Collaborated with mentors from Edunet Foundation to implement real-world applications of artificial intelligence in the healthcare domain.",
      skills: [
        "Python",
        "Streamlit",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "MERN Stack Intern",
      company: "EY Global Delivery Services & AICTE (Edunet Foundation)",
      date: "Feb 2025 – Mar 2025",
      desc: "Completed a 6-week internship focused on building modern web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).Developed full-stack web solutions and gained practical exposure to frontend–backend integration and API development.",
      skills: [
        "ReactJS",
        "NodeJS",
        "MongoDB", "Tailwind CSS"
      ],
    },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 1,
      img: bsaLogo,
      school: "Jain University, Bengaluru",
      date: "Sept 2022 - Present",
      grade: "85.3%",
      desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE), where I developed a strong foundation in both theoretical and practical aspects of computing. My coursework covered key areas such as Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, and Web Development.",
      degree: "Bachelor of Technology - BTECH (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "C N Raju Junior College, Rayachoty",
      date: "Apr 2020 - March 2022",
      grade: "86.5%",
      desc: "I completed my class 12 education from C N Raju Junior College, Rayachoty, under the Intermediate board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: glaLogo,
      school: "Govt High School, Rayachoty",
      date: "Apr 2019 - March 2020",
      grade: "95.3%",
      desc: "I completed my class 10 education from Govt High School, Rayachoty, under the SSC board..",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SkillSwap - Peer to Peer learning platform",
      description:
        "SkillSwap is a MERN stack web platform designed to facilitate collaborative learning and skill development through peer-to-peer guidance. The platform emphasizes reciprocal knowledge exchange, industrial-grade security features, and user-friendly interfaces to create a dynamic learning environment.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "MongoDB"],
      github: "https://github.com/VGNANADILEEPREDDY/SkillSwap.git",
      webapp: "https://skill-swap-q8tq.vercel.app/",
    },
    {
      id: 1,
      title: "Quiz App",
      description:
        "Developed an interactive Quiz Application using HTML, CSS, and JavaScript that allows users to test their knowledge across multiple topics. The app features dynamic question loading, score calculation, and instant feedback after each quiz.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/VGNANADILEEPREDDY/Quiz-App.git",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Crowdfunding",
      description:
        "A modern crowdfunding platform that allows individuals and organizations to raise funds for startups, creative projects, social causes, and product pre-orders. Built with React.js, it features user authentication, secure payment integration, and an admin dashboard for campaign monitoring.",
      image: movierecLogo,
      tags: ["React JS", "NodeJS", "MogoDB"],
      github: "https://github.com/VGNANADILEEPREDDY/Crowdfunding.git",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Implementation-of-AI-Powered-Medical-Diagnosis-System",
      description:
        "An AI-driven diagnosis system using Python and Streamlit, leveraging ML & deep learning for disease prediction. It processes medical data, analyzes images, and extracts insights using NLP. With a user-friendly UI and compliance with security standards, it enhances diagnostic accuracy and patient care..",
      image: npmLogo,
      tags: ["Python", "Jupyter"],
      github: "https://github.com/VGNANADILEEPREDDY/Implementation-of-AI-Powered-Medical-Diagnosis-System.git",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  