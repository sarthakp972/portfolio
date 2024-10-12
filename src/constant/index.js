import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import patwautensils from "../assets/projects/patwa-utensils.png";
import currency from "../assets/projects/currency-convert.png";
import portfolio from "../assets/projects/portfolio.png";
import pumaecommerce from "../assets/projects/puma-ecommerce.jpeg"
import wordlength from "../assets/projects/Word-length.png";
import Tudo from "../assets/projects/Tudo-list.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Java,PHP, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PHP, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;  

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Text Manipulation Tool Built with React JS",
    image: wordlength,
    description:
      "I created a dynamic web application using React JS that provides users with essential text manipulation functionalities. With this interactive tool, users can easily:",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Location Track",
    image: project2,
    description:
      "developed a real-time location tracking application using React.js, integrating APIs for geolocation services to provide users with seamless tracking and sharing capabilities. This project demonstrates modern web development techniques while ensuring a responsive and user-friendly interface..",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Utensils-Store",
    image: patwautensils,
    description:
      "I created a comprehensive e-commerce website titled 'Patwa Bartan Bhandar' dedicated to providing a wide range of utensils and kitchenware. This application is built using Vite and React for a modern, efficient, and scalable front-end experience, while Tailwind CSS ensures a responsive and visually appealing design..",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "Currency Convert",
    image: currency,
    description:
      "I developed a fully responsive currency converter web application using Vite and React, leveraging modern web technologies to ensure an optimal user experience. The application interfaces with a reliable currency conversion API to provide real-time exchange rates, allowing users to seamlessly convert between various currencies.",
    technologies: [ "CSS", "Vite", "React"],
  },

  {
    title: "Tudo App",
    image: Tudo ,
    description:
      "A basic To-Do List app built using Next.js is a straightforward application designed to help users manage tasks efficiently. This app allows users to add, edit, and delete tasks, providing a simple interface for task management..",
    technologies: [ "CSS", "Vite", "React"],
  },

  {
    title: "Shoe Ecommerce Website",
    image:pumaecommerce,
    description:
      "Creating a shoe website using PHP, JavaScript, SQL, and jQuery involves developing a dynamic e-commerce platform that showcases various shoe products, enables user interaction, and facilitates online transactions..",
    technologies: [ "CSS", "Vite", "React"],
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};