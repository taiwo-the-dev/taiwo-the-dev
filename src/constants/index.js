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
  sass,
  chakra,
  material,
  bootstrap,
  sqi,
  regnant,
  giver,
  gpt,
  tmdb,
  natours,
  cryptonect,
  getlinked,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "portfolio",
    title: "My Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Writing",
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
    name: "Sass",
    icon: sass,
  },
  {
    name: "Chakra UI",
    icon: chakra,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },

];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "SQL Academy ICT",
    icon: sqi,
    iconBg: "#E6DEDD",
    date: "September 2020 - October 2021",
    points: [
      "Conversion of mock design to code",
      "Conversion of Figma design to css",
      "Development of web application with engaging user-interface",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Regnant Digital",
    icon: regnant,
    iconBg: "#E6DEDD",
    date: "October 2021 - November 2022",
    points: [
      "Conversion of ui/ux designs into real web design",
      "Creation of websites with cms (wordpress & Shopify)",
      "Fixing and Debugging of Wordpress sites",
      "Creation of ecommerce sites with wordpress (woocomerce) and shopify",
      "Installation, upgrading, maintaining, testing and troubleshooting",
    ],
  },
];

const projects = [
  {
    name: "GpT 3",
    description:
    "Welcome to GPT-3: Where Creativity Meets AI. Explore my portfolio showcasing cutting-edge web design, highlighting the seamless fusion of art and artificial intelligence. Witness the future of digital experiences!",
    tags: [
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/taiwo-the-dev/gpt-4/",
    web_link: "https://taiwo-john.dev/portfolio/gpt-3/",
  },
  {
    name: "Giver",
    description:
      "A sleek web design solution tailored specifically for the real estate industry. Giver combines stunning visuals, user-friendly navigation, and powerful features to showcase their listings and services.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "pink-text-gradient",
      },
    ],
    image: giver,
    source_code_link: "https://github.com/taiwo-the-dev/gpt-4/",
    web_link: "https://giver.netlify.app/",
  },
  {
    name: "Natours",
    description:
      "Natours is a captivating web design project that showcases my expertise in creating visually stunning and user-friendly websites tailored for outdoor enthusiasts and adventure seekers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/taiwo-the-dev/natours",
    web_link: "https://natours-outdoorscss.netlify.app",
  },
  {
    name: "React Movie",
    description:
      "A dynamic movie web application showcasing the power of React technology and TMDB API in web design. Explore a visually stunning and user-friendly interface for browsing your favorite movies.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tmdb,
    source_code_link: "https://github.com/taiwo-the-dev/react_tmdb",
    web_link: "https://taiwo-john.dev/portfolio/tmdb/",
  },
  {
    name: "Cryptonect",
    description:
      "A modern cryptocurrency website that combines cutting-edge visuals with intuitive user experience, creating a seamless connection between users and the world of digital currencies.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cryptonect,
    web_link: "https://cryptonect.app",
  },
  {
    name: "GetLinked Challenge",
    description:
      "This project encapsulates my ability to transform concepts into visually stunning and user-friendly websites. Dive into a world where innovation meets aesthetics, and witness how I leverage my skills.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: getlinked,
    source_code_link: "https://github.com/taiwo-the-dev/challenge_linked/",
    web_link: "https://getlinked-john.netlify.app",
  },
];

export { services, technologies, experiences, projects };
