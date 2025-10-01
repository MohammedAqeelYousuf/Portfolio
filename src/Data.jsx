import gitlogo from "./assets/git.png"
import htmllogo from "./assets/html.png"
import csslogo from "./assets/css.png"
import jslogo from "./assets/javascript.png"
import clublogo from "./assets/club.png"
import cognizantlogo from "./assets/cognizant.png"
import reactlogo from "./assets/react.png"
import nodejslogo from "./assets/nodejs.png"
import pythonlogo from "./assets/python.jpg"
import mongodblogo from "./assets/mongodb.png"
import bootstraplogo from "./assets/bootstrap.png"



export const projectData = [
    {
    title: "Source Code Vulnerability Tester",
    shortDesc: "Analyzes source code for security flaws using AST & ML.",
    fullDesc:
      "The Software Vulnerability Tester is a machine learning–based system designed to automatically detect the presence of vulnerabilities in source code. Its primary goal is to assist developers and security analysts in identifying insecure code segments early in the development cycle, ensuring safer software deployment. The system does not classify the type or severity of the vulnerability; rather, it offers a binary decision — whether a given code sample is vulnerable or not vulnerable.",
    link: "https://github.com/MohammedAqeelYousuf/Software-Vulnerability-Tester-using-Borderline-SMOTE",
  },
  {
    title: "Real Time Threat Monitoring System",
    shortDesc: "Predicts the severity of the attack occuring in the cyberspace",
    fullDesc:
      "This project is designed to collect real-time cyber threat data by scraping websites that publish information about ongoing cyberattacks. It uses machine learning to analyze the descriptions of these incidents and predict their CVSS (Common Vulnerability Scoring System) scores. By doing so, the system helps security teams quickly assess the severity of new threats and prioritize their response accordingly, improving overall threat management in cyberspace.",
    link: "https://github.com/MohammedAqeelYousuf/Real-Time-Threat-Monitoring-System",
  },
  {
    title: "Text to Speech Convertor",
    shortDesc: "A web-based Text-to-Speech converter that reads out user-inputted text using the Web Speech API.",
    fullDesc: `This project is a Text-to-Speech (TTS) converter that allows users to input text and hear it spoken aloud using the Web Speech API. It features a simple user interface where users can type or paste text, select a voice, and control playback, making it useful for accessibility and learning applications.`,
    link: "https://text-to-speech-aqeel.netlify.app/"
  }
];

export const experiences = [
  {
    title: "Secure Hub (Student Club) - Co-Founder",
    shortDesc: "Founded and led the official Cybersecurity club in college.",
    details: `•I Co-Founded Secure Hub, a student-driven cybersecurity club, aimed at creating awareness and providing hands-on experience in ethical hacking.\n• As part of the club's initiatives, I organized a three-day Bug Bounty workshop focused on web penetration testing and also coordinated a seminar with a cybersecurity expert to bridge academic learning with real-world practices.`,
    image: clublogo,
    time: 'December 2023 - June 2025'
  },
  {
    title: "Cognizant - Programmer Analyst Trainee",
    shortDesc: "Currently working at Cognizant as an Intern.",
    details: `• I am completed my internship at Cognizant in the domain of React development.\n• Throughout this internship, I have gained hands-on experience with modern web technologies such as HTML, CSS, Bootstrap, JavaScript, and React.\n• I actively contributed to a real-time enterprise-level project titled Smart Connect, a portal designed to improve internal communication and streamline support services.\n• The project specifically serves as a platform for students to stay informed about college announcements, upcoming events, and important updates. Working in an Agile environment, I regularly took part in sprint planning, daily stand-up meetings, and collaborative development processes using Git.\n• This experience is not only enhanced my technical skills but also provided valuable exposure to industry-standard development practices and teamwork in a professional setting.`,
    image: cognizantlogo,
    time: 'May 2025 - September 2025'
  }
];

export const skillData = [
  {
    name: 'Git',
    level: 90,
    logo: gitlogo
  },
  {
    name: 'HTML',
    level: 95,
    logo: htmllogo
  },
  {
    name: 'CSS',
    level: 95,
    logo: csslogo
  },
  {
    name: 'Bootstrap',
    level: 95,
    logo: bootstraplogo
  },
  {
    name: 'JavaScript',
    level: 85,
    logo: jslogo
  },
  {
    name: 'React',
    level: 90,
    logo: reactlogo
  },
  {
    name: 'Node.js',
    level: 75,
    logo: nodejslogo
  },
   
  {
    name: 'MongoDB',
    level: 90,
    logo: mongodblogo
  },
  {
    name: 'Python',
    level: 80,
    logo: pythonlogo
  },
];
