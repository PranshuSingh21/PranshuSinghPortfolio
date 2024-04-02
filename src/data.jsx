import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/online-blog.jpg';
import Work2 from './assets/NumberPlateDetection.png';
import Work3 from './assets/DocScanner.jpg';
import Work4 from './assets/PersonalPortfolio.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Pranshu',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Singh',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'College: ',
    description: 'Delhi Technological University(DTU)',
  },

  {
    id: 6,
    title: 'Degree : ',
    description: 'B.Tech. , Electrical Engineering',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+918708492595'
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'pranshusingh2108@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn: ',
    description: 'pranshusingh',
  },

  {
    id: 10,
    title: 'Technical Skills : ',
    description: `HTML - CSS - JavaScript - React - NodeJs -Python -Open CV- IOT - Elementary Machine Learning - SQL - 
    PowerBI - EDA - C- C++-MATLAB-Git/Github - Data Structures and Algorithms`,
  },
];

export const stats = [
  {
    id: 1,
    no: '2',
    title: 'Internships',
  },

  {
    id: 2,
    no: '4',
    title: 'Completed Projects',
  },

  {
    id: 3,
    no: '7.94',
    title: 'Cgpa in college',
  },

  {
    id: 4,
    no: '0',
    title: ' BackLogs ',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023-2 Months',
    title: 'Site Trainee Engineer <span> Icon Facilitator Pvt. Ltd. </span>',
    desc: `Worked under the guidance of industry professionals to learn how to manage sites and their 
    electrical componets`,
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022- 1 Month',
    title: 'Site Shut-Down Trainee <span> HCL </span>',
    desc: `Learnt and worked under the capacity of a quality engineer, serviced and checkd the working conditions
    of all the electrical componets like DGs, servers ,circuit-breakers etc in the company campus`,
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Trainee Engineer <span> G-20(Icon-Facilitator Site) </span>',
    desc: `Responsible for managing a workforce of more than 40 people responsible for various tasks 
    including but not limited to lift staff, VIP facility crew, also shadowed an electrical engineer
    under the capacity of a trainee`,
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Electrical Engineering <span> Delhi Technological University(Formerly DCE) </span>',
    desc: 'Current Aggregate till 7th sem-7.94 cgpa',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'High School <span> Heera Lal Public School </span>',
    desc: 'Graduated with 86.4%',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Class X <span> OP Jindal Modern School </span>',
    desc: 'Graduated with 87.4%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'c++',
    percentage: '70',
  },

  {
    id: 5,
    title: 'React',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Python',
    percentage: '50',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '30',
  },

  {
    id: 8,
    title: 'MATLAB',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Production Grade Blog Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Mega Blog',
      },
      {
        icon: <FiUser />,
        title: 'About : ',
        desc: `This website is a blog website which has many features such as Authetication , add and edit
        post etc`,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JavaScript,React,Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: `<a href="https://github.com/PranshuSingh21/ProductionGradeBlog">Visit Github</a>`, 
        /* yahan pe html likh k link laga denge preview ka and usse html react parser use karke render karwa denge
         PortfolioItem.jsx mein to make the link clickable */
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Number Plate Detection',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Number Plate Detection',
      },
      {
        icon: <FiUser />,
        title: 'About : ',
        desc: `Developed an OpenCV and C++ project for real-time detection and capturing of Russian
        vehicle license plates, efficiently saving the images for further processing.
        `,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Open CV - C++',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: `<a href="https://github.com/PranshuSingh21/NumberPlateRecognition-OpenCV-c-">Visit Github</a>`,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Document Scanner',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Document Scanner',
      },
      {
        icon: <FiUser />,
        title: 'About : ',
        desc: `DribbleDesigned an advanced OpenCV and C++ project for precise document detection and image
        capture from photos. Seamlessly extracts documents, ensuring accuracy and reliability for various 
        applications.`,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Open CV-C++',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: `<a href="https://github.com/PranshuSingh21/DocumentScanner-OpenCV-C-">Visit Github</a>`,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Personal Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Personal Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'About : ',
        desc: `Crafted a personal portfolio website with ReactJs showcasing skills and projects.Deployed Flawlessly
        on Netlify, presenting a polished and impressive image`,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: `<a href="https://pranshusinghportfolio.netlify.app/">Portfolio</a>`,
      },
    ],
  },

  /*{
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },*/
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
