import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Programming",
    icon: web,
  },
  {
    title: "User Experience",
    icon: mobile,
  },
  {
    title: "Custom  React/JS/JQUERY",
    icon: backend,
  },
  {
    title: "Graphics & Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Software Engineer",
    company_name: "Upwork",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing and maintaining web applications, specializing in front-end coding, UX and 3D models, implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Marketing Automation Developer",
    company_name: "3M",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Management and creation of digital assets for marketing. Using (HTML5 - CSS - Javascript) to implement email layouts, data gathering forms, landing pages and web pages before deploying mass media campaigns and all its automated processes.",
    ],
  },
  {
    title: "Software Contract Administrator",
    company_name: "Brillio",
    icon: meta,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "From cloud services to data analytics, the creation, administration and delivery of software & cloud service packages offered via contracts to various tech enterprises depending on their needs.",
    ],
  },
  {
    title: "Technical Support",
    company_name: "Hewlett Packard Enterprise",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2016 - 2017",
    points: [
      "Provided technical support to warehouse administrators, this was done remotely after analyzing the problems and needs from OS active directory and the collected data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is always working late, to ensure we have everything needed and logs in early in the morning to make sure everything is good.",
    name: "Jodi Baron",
    designation: "Corp - SIBG",
    company: "3M",
    image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
  },
  {
    testimonial:
      "This looks really good, thank you for sharing! At a minimum I would recommend sharing this with Corporate.",
    name: "Eric Butterwick",
    designation: "Manager - Marketing Technology",
    company: "3M",
    image: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
  },
  {
    testimonial:
      "Jose - Thank you for going above and beyond. You are always pleasant, responsive and very helpful to work with. THANK YOU!!",
    name: "Dina Palmer",
    designation: "Marketer - SIBG",
    company: "3M",
    image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
  },
];

const projects = [
  {
    name: "LinkedIn",
    description:
      "Here I do most of my work, and networking. Creating connections, sharing knowledge and empowering people in the same area. Let's connect!",
    tags: [
      {
        name: "linkedin",
        color: "blue-text-gradient",
      },
      {
        name: "connections",
        color: "green-text-gradient",
      },
      {
        name: "corp",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/jdsabo/",
  },
  {
    name: "Github",
    description:
      "Feel free to take a look at some of my projects on Github, they range from Python projects using arrays and normal math logics, to Angular to-do list apps.",
    tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "repositories",
        color: "green-text-gradient",
      },
      {
        name: "cloudwork",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JDsabo?tab=repositories",
  },
  {
    name: "Upwork",
    description:
      "I provide freelance services for quality front-end coding, UX designs and 3D modeling. Click the circular icon on the top-right for more info.",
    tags: [
      {
        name: "freelancing",
        color: "blue-text-gradient",
      },
      {
        name: "upwork",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.upwork.com/freelancers/~0181b7d36fc95cfc55?mp_source=share",
  },
];

export { services, technologies, experiences, testimonials, projects };
