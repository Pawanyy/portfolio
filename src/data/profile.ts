import type { Profile } from "../types";

const profile: Profile = {
    name: "Pawan Yadav",
    designation: "Software Developer",
    description: "I'm a motivated web developer with 3+ years of experience, seeking opportunities to leverage my skills in JavaScript and Node.js. I’m passionate about building scalable web applications and delivering results.",
    social: {
        mail: "yadavpawan69290@gmail.com",
        phone: "+91 7276616829",
        website: "beta-pawanyadav.vercel.app",
        github: "github.com/Pawanyy",
        location: "Ulhasnagar, India",
        linkedin: "linkedin.com/in/pawan-yadav-a455a31b8"
    },
    workExperience: [
        {
            company: "Ank It Solutions Pvt. Ltd",
            jobTitle: "Junior Application Developer",
            startDate: "15/05/2023",
            endDate: "01/07/2024",
            location: "Ghansoli, India",
            responsibilities: [
                "Developing web apps using Spring Boot and React.js to create efficient and user - friendly interfaces.",
                "Optimized the frontend to enhance performance and elevate the overall user experience.",
                "Created comprehensive project user and technical documentation to ensure smooth project management.",
                "Played a key role in the team by contributing to project planning and execution.",
                "Strengthened security measures by implementing features such as TOTP and Cryptographic Services.",
                "Utilized Node.js to work on writing IA APIs, scheduling tasks, and integrating external APIs within the Jio Payments Bank project.",
                "Identified and addressed bugs in existing APIs, collaborating with the team to implement enhancements aimed at improving speed and functionality.",
                "Assisted the team in troubleshooting issues by analyzing and monitoring logs related to APIs"
            ]
        },
        {
            company: "Rudratech It Services",
            jobTitle: "Software Developer",
            startDate: "10/01/2021",
            endDate: "04/11/2022",
            location: "Ambernath, India",
            responsibilities: [
                "Developed hotel, B2B, and B2C Desktop Solutions.",
                "Developed an LMS website with features such as AWS integration for videos, social login, payment integration, and a referral system.",
                "Worked on developing API's. Also consumed and integrated them on Android, desktop, and web platforms.",
                "Developed a Bootcamp website, tours and travel website with features such as cashbook, P&L account, supplier account, expense account, etc.",
                "Worked on optimizing websites by removing the performance bottlenecks from C# code and Database query.",
                "Optimized and customized a theme for a travel website.",
                "Optimized websites for Google ranking, added features to an HMS software, and optimized its theme for faster load.",
                "Developed an internal management system for an export company to manage the flow of jobs between teams."
            ]
        },

    ],
    education: [
        {
            institution: "SDT Kalani College",
            boardOrUnivercity: "Mumbai University",
            degree: "B.Sc. Information Technology",
            fieldOfStudy: "Information Technology",
            grade: "8.57 CGPA",
            startDate: "01/06/2017",
            endDate: "01/09/2020"
        }, {
            institution: "Pet Oxford Jr College",
            boardOrUnivercity: "Maharashtra State Board",
            degree: "HSC(12th Computer Science)",
            fieldOfStudy: "Computer Science",
            grade: "57.08%",
            startDate: "01/06/2016",
            endDate: "01/04/2017"
        }
    ],
    skills: [
        {
            "category": "Front end",
            "skills": [
                { "name": "HTML" },
                { "name": "CSS" },
                { "name": "JavaScript" },
                { "name": "React JS" },
                { "name": "Angular" },
                { "name": "Vite" },
                { "name": "Tailwind CSS" },
                { "name": "Bootstrap" }
            ]
        },
        {
            "category": "Backend",
            "skills": [
                { "name": "Node JS" },
                { "name": "Express JS" },
                { "name": "Mongo DB" },
                { "name": "SQL Server" },
                { "name": "MYSQL" },
                { "name": "SQLite" }
            ]
        },
        {
            "category": "Programming Languages",
            "skills": [
                { "name": "Javascript" },
                { "name": "C#" },
                { "name": "Java" },
            ]
        },
        {
            "category": "Frameworks & Libraries",
            "skills": [
                { "name": ".NET" },
                { "name": "ASP.NET" },
                { "name": "MVC" },
                { "name": "Unity" }
            ]
        },
        {
            "category": "Tools & Platforms",
            "skills": [
                { "name": "Git" },
                { "name": "Redis" },
                { "name": "Rabbitmq" },
                { "name": "PM2" },
                { "name": "JDK/JRE" },
                { "name": "Trello" }
            ]
        }
    ],
    languages: [
        {
            name: "English",
            proficiency: "Professional"
        },
        {
            name: "Hindi",
            proficiency: "Native"

        }
    ],
    hobbies: ["Reading Books", "Chess", "Video Gaming"],
    projects: [{
        title: "JSON Path Finder",
        description: "Developed a GUI Tool for finding json path by Visulization of json data",
        technologies: ["React.js", "Node.js", "Tailwind CSS"],
        startDate: "29/04/2024",
        endDate: "16/05/2024",
        url: "https://json-path-finder-beta.vercel.app/",
        github: "https://github.com/Pawanyy/JsonPathFinder",
        showInResume: true,
    }, {
        title: "RealEstate",
        description: "Developed a RealEstate website with admin panel.",
        technologies: ["C#", "ASP.NET MVC", "SQL SERVER"],
        startDate: "11/02/2023",
        endDate: "28/03/2023",
        github: "https://github.com/Pawanyy/RealEstate"
    }, {
        title: "Event API",
        description: "Event Manage API in ASP.NET Core with JWT authentication.",
        technologies: ["C#", "SQL SERVER", "ASP.NET Core"],
        startDate: "03/05/2023",
        endDate: "03/05/2020",
        github: "https://github.com/Pawanyy/eventApi"
    }, {
        title: "Tic-Tac-Toe",
        description: "Created 2 Player Tic-Tac-Toe(Naught and crosses) PWA in Angular.",
        technologies: ["Typescript", "Angular", "CSS", "HTML"],
        startDate: "24/02/2023",
        endDate: "26/02/2023",
        url: "https://pawanyy.github.io/tic-tac-toe/",
        github: "https://github.com/Pawanyy/tic-tac-toe",
        showInResume: true
    }, {
        title: "Quiz Web App",
        description: "Created a Quiz Web Application With Admin Panel",
        technologies: ["Javascript", "PHP", "MYSQL"],
        startDate: "16/03/2023",
        endDate: "15/03/2023",
        github: "https://github.com/Pawanyy/quizApp"
    }, {
        title: "Fitness Gym Website",
        description: "Created a Fitness Gym Website With Admin Panel",
        technologies: ["Javascript", "PHP", "MYSQL"],
        startDate: "25/04/2023",
        endDate: "27/04/2023",
        github: "https://github.com/Pawanyy/Fitness"
    }, {
        title: "Dating App",
        description: "Created a Dating App",
        technologies: ["Typescript", "C#", "SQL SERVER", "Angular"],
        startDate: "19/04/2023",
        endDate: "04/05/2023",
        github: "https://github.com/Pawanyy/DatingApp"
    }, {
        title: "NSS Website",
        description: "Created a NSS Website With Admin Panel",
        technologies: ["Javascript", "PHP", "MYSQL"],
        startDate: "05/04/2023",
        endDate: "06/04/2023",
        github: "https://github.com/Pawanyy/nss"
    }, {
        title: "Cron Job Tool",
        description: "Created a Curl Cron Job Runner to run Curl Cron jobs from Windows.",
        technologies: ["Javascript", "Node JS"],
        startDate: "25/11/2022",
        endDate: "30/11/2022",
        github: "https://github.com/Pawanyy/cron_job_tool",
        showInResume: true
    }, {
        title: "2D Platformer Game Development",
        description: "Developed 2D Platformer Game College Final Year Project in Windows Platform",
        technologies: ["C#", "SQLite", "Unity Engine"],
        startDate: "11/07/2019",
        endDate: "28/03/2020",
        github: "https://github.com/Pawanyy/Platformer-2D-Game",
        showInResume: true
    }
    ]
};


export default profile;