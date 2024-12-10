const projects = [
    {
      "id": 1,
      "title": "NumPixel",
      "category": "Web",
      "description": "Fully functional web app with built-in interpolation UI Calculator with real time calculations and graphs.",
      "image": '/banner/NumPixel.png',
      "repository": 'https://github.com/JohnRaivenOlazo/NumPixel'
    },
    // {
    //   "id": 2,
    //   "title": "Placeholder",
    //   "category": "",
    //   "description": "",
    //   "image": "/banner/"
    // }
]

import { javascript, typescript, python, java, lua, react, nextjs, nodejs, mongodb, html, css, sass, tailwindcss, bootstrap } from "../icons";

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "Lua", icon: lua },
  
  { name: "React", icon: react },
  { name: "NextJS", icon: nextjs },
  { name: "NodeJS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },

  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Sass", icon: sass },
  { name: "TailwindCSS", icon: tailwindcss },
  { name: "Bootstrap", icon: bootstrap },
];



const sections = [
  { id: "overview", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Technologies" },
  { id: "contact", label: "Contact" },
  { id: "", label: "Footer" },
];

export { technologies, projects, sections }