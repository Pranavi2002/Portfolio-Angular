import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  // <-- import NgFor

interface Project {
  title: string;
  image: string;
  techStack: string;
  description: string;
  overlayTitle: string;
  overlayTechStack: string;
  overlayPoints: string[];
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [NgFor],
  standalone: true
})
export class Projects {

  // Angular concept: Property binding and data-driven component
  // All projects stored in a TypeScript array
  projects: Project[] = [
    {
      title: "E-Commerce Microservices Application",
      image: "ecommerce.png",
      techStack: "ReactJS, Spring Boot, Microservices, Docker",
      description: "Built a scalable microservices system with Eureka, API Gateway, and Docker.",
      overlayTitle: "E-Commerce Microservices Project",
      overlayTechStack: "ReactJS, Spring Boot, Spring Cloud, Eureka, API Gateway, H2 Database, Docker",
      overlayPoints: [
        "Built a scalable e-commerce system with microservices for products, orders, and users, ensuring modularity and independent deployment.",
        "Implemented service discovery with Eureka and API Gateway for secure routing and load balancing.",
        "Developed product and order management features with persistent storage using H2, enabling seamless CRUD operations.",
        "Containerized services using Docker for consistent deployment and scalability across environments."
      ],
      githubLink: "https://github.com/Pranavi2002/Full-Stack-Microservices_ECommerce-Project"
    },
    {
      title: "User Management System",
      image: "user-management.png",
      techStack: "ReactJS, Spring Boot, MySQL",
      description: "Full-stack web app to manage users with CRUD operations, secure backend, and responsive frontend.",
      overlayTitle: "User Management Project",
      overlayTechStack: "ReactJS, Spring Boot, MySQL, Axios, Bootstrap, React Router",
      overlayPoints: [
        "Developed a responsive frontend with React.js and Bootstrap for seamless user interaction.",
        "Implemented CRUD operations (Add, Edit, View, Delete) with Axios for RESTful API calls.",
        "Designed a secure backend with Spring Boot, integrating JWT authentication and role-based access.",
        "Optimized database interactions using MySQL, ensuring efficient user data management.",
        "Enabled client-side routing with React Router for smooth navigation across app pages.",
        "Achieved 40% faster data retrieval through query optimization and clean API integration."
      ],
      githubLink: "https://github.com/Pranavi2002/Full-Stack-Project"
    },
    {
      title: "User Management System with Enhanced Security",
      image: "user-security.png",
      techStack: "ReactJS, Spring Boot, Spring Security, JWT, MySQL",
      description: "Full-stack system with authentication, authorization, and secure API communication.",
      overlayTitle: "User Management Security Project",
      overlayTechStack: "ReactJS, Spring Boot, Spring Security, JWT, MySQL, Bootstrap, Axios",
      overlayPoints: [
        "Implemented JWT-based authentication and Spring Security to ensure secure login and registration.",
        "Designed role-based access control with distinct dashboards for Admins and Normal Users.",
        "Developed CRUD functionalities for managing employees and users with granular access permissions.",
        "Protected frontend routes using React Router with conditional rendering and token validation.",
        "Improved overall system security by ensuring encrypted communication and token-based request validation.",
        "Optimized database operations with MySQL for persistent and reliable data management."
      ],
      githubLink: "https://github.com/Pranavi2002/Full-Stack-Security-Project"
    },
    {
      title: "Full-Stack MERN Weather App",
      image: "weather.png",
      techStack: "ReactJS, Node.js, Express, MongoDB, OpenWeather API",
      description: "Weather app with authentication, geolocation, and personalized search history.",
      overlayTitle: "Full-Stack MERN Weather App",
      overlayTechStack: "ReactJS, Node.js, Express.js, MongoDB, JWT, OpenWeatherMap API",
      overlayPoints: [
        "Developed a weather app supporting city-based and geolocation-based searches using OpenWeatherMap API.",
        "Implemented JWT authentication for secure login/registration with personalized weather search history.",
        "Built RESTful APIs in Express.js for weather retrieval, authentication, and history management.",
        "Integrated MongoDB with Mongoose for storing user accounts and historical weather searches.",
        "Designed a responsive UI in React with Context API for global state management and smooth UX.",
        "Enhanced user experience by enabling history view/clear features and real-time data fetching."
      ],
      githubLink: "https://github.com/Pranavi2002/Full-Stack-WeatherApp"
    },
    {
      title: "React Task Tracker App",
      image: "tasktracker.png",
      techStack: "React.js, Material UI, Framer Motion",
      description: "A feature-rich task tracker to manage daily tasks efficiently, showcasing modern React practices.",
      overlayTitle: "React Task Tracker App",
      overlayTechStack: "React.js, Context API, Local Storage, Material UI, Framer Motion",
      overlayPoints: [
        "Manage tasks with add, edit, delete, and completion tracking.",
        "Inline editing for quick task updates without page refresh.",
        "Theme toggle (light/dark) with persistence via Local Storage.",
        "Filter & sort tasks by status, text, or creation date.",
        "Responsive design with smooth animations using MUI & Framer Motion."
      ],
      githubLink: "https://github.com/Pranavi2002/Task-Tracker-React-Project"
    },
    {
      title: "Certificate Management Web App (Certaethon)",
      image: "certeathon.png",
      techStack: "Azure, JavaScript, REST APIs",
      description: "Integrated Azure Blob Storage & Form Recognizer OCR to automate certificate management.",
      overlayTitle: "Certaethon-frontend",
      overlayTechStack: "HTML, CSS, Bootstrap, JavaScript, RESTful APIs, Azure Blob Storage, Azure Logic App, Azure Function App, Azure Form Recognizer",
      overlayPoints: [
        "Developed a responsive web app to manage and track certifications for 200+ users.",
        "Integrated Azure Blob Storage & Form Recognizer OCR to automate certificate data extraction and storage, reducing manual entry by 80%.",
        "Designed an admin dashboard to monitor certifications and view adoption trends.",
        "Leveraged Azure Logic Apps and Function Apps for backend automation, enhancing system efficiency and reliability."
      ],
      githubLink: "https://github.com/Pranavi2002/590Team1UI"
    },
    {
      title: "Hotel Booking Data Analysis",
      image: "hotel-booking.jpg",
      techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly",
      description: "Performed exploratory data analysis to uncover booking, cancellation, and pricing trends.",
      overlayTitle: "Hotel Booking Data Analysis Project",
      overlayTechStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Jupyter Notebook",
       overlayPoints: [
          "Performed exploratory data analysis on 100,000+ hotel booking records to uncover guest behavior and cancellation patterns.",
          "Analyzed demographic and geographic origins, identifying Portugal, UK, and France as top contributors.",
          "Visualized booking and cancellation trends across months, highlighting peak cancellations during summer.",
          "Examined room price variations (ADR) by season, revealing higher rates during peak travel months.",
          "Studied stay durations, showing 1–4 nights as most common, with longer stays in resort hotels.",
          "Identified online travel agents (OTA) as the dominant booking channel across customer segments."
      ],
      githubLink: "https://github.com/Pranavi2002/Hotel-Booking-Data-Analysis-Project"
    },
    {
      title: "COVID-19 Patient Precondition Analysis",
      image: "covid19.png",
      techStack: "Tableau, Data Visualization",
      description: "Built an interactive Tableau dashboard analyzing the impact of pre-existing conditions on COVID-19 patient outcomes.",
      overlayTitle: "COVID-19 Patient Precondition Analysis Project",
      overlayTechStack: "Tableau, Data Visualization, Kaggle COVID-19 Dataset",
       overlayPoints: [
          "Created 25+ charts and KPIs to analyze patient outcomes based on age, preconditions, and severity levels.",
          "Built dashboards tracking total patients, % of critical cases, and average age of critical patients.",
          "Implemented a parameter-driven condition selector for comparing criticality across different preconditions.",
          "Visualized time-series trends of critical cases, highlighting fluctuations and notable peaks.",
          "Developed a story point view combining KPIs, trends, and condition-specific criticality for interactive exploration.",
          "Delivered actionable insights into how conditions like diabetes and hypertension impacted patient outcomes."
      ],
      githubLink: "https://github.com/Pranavi2002/Hotel-Booking-Data-Analysis-Project"
    },
  ];
}


    
