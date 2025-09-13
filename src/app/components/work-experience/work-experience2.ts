import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  duration: string;
  points: string[];
  overlayPoints: string[];
  github?: string; // optional
}

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule],
  templateUrl: './work-experience2.html',
  styleUrls: ['./work-experience.css'],
  standalone: true
})
export class WorkExperience {
  experiences: Experience[] = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'University of South Carolina',
      duration: 'Aug 2023 – May 2025',
      points: [
        'Mentored 60+ undergraduates in HTML, CSS, and JavaScript.',
        'Designed hands-on lab sessions improving class performance by 20%.',
        'Supported debugging of 100+ codebases, reducing assignment errors.'
      ],
      overlayPoints: [
        'Mentored and tutored a diverse class of 60+ undergraduate students in HTML, CSS, and JavaScript, fostering a strong foundation in web development principles.',
        'Designed and conducted interactive, hands-on lab sessions to reinforce theoretical concepts, improving overall class performance by 20% based on feedback and grades.',
        'Provided one-on-one technical support to students, assisting with debugging and troubleshooting over 100 codebases, which contributed to a significant reduction in assignment errors.',
        'Developed and shared best practices for responsive design, cross-browser compatibility, and efficient coding techniques, boosting students’ confidence and coding efficiency.',
        'Created supplementary learning materials, including tutorials and walkthroughs, that enhanced learning outcomes and increased student engagement in labs and coursework.'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Verzeo Edutech',
      duration: 'Nov 2022 – Jan 2023',
      points: [
        'Developed responsive websites with ReactJS, CSS, Bootstrap.',
        'Built a full-stack e-Approval system using Servlets and MySQL.'
      ],
      overlayPoints: [
        'Built a 3-page responsive website using ReactJS, CSS, and Bootstrap, reducing page load times by 30% and enhancing accessibility for over 95% of devices.',
        'Improved user engagement by designing an intuitive interface optimized for diverse audiences.',
        'Automated student admission eligibility verification for over 500 applications, reducing manual intervention by 90%.',
        'Built a full-stack application using HTML, CSS, Servlets, and MySQL, improving approval speed by 50% and ensuring 90% accuracy in eligibility checks.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Yhills Edutech',
      duration: 'Feb 2023 – Mar 2023',
      points: [
        'Developed predictive models with 80%+ accuracy.',
        'Worked on data preprocessing, feature engineering, and evaluation.'
      ],
      overlayPoints: [
        'Built a predictive model using Linear Regression for New York Taxi Fare prediction based on distance and trip duration.',
        'Applied feature scaling and preprocessing to improve model interpretability and accuracy.',
        'Developed a Logistic Regression model to predict H1N1 vaccination likelihood using demographic and behavioral data.',
        'Achieved ~80% training and test accuracy on vaccination model, demonstrating strong generalization.',
        'Performed feature engineering, model evaluation, and analysis to derive actionable insights from datasets.'
      ]
    },
    {
      title: 'Deloitte Data Analytics Simulation',
      company: 'Forage',
      duration: 'Aug 2025',
      points: ['Applied data visualization and business analysis using Tableau & Excel.'],
      overlayPoints: [
        'Analyzed one month of machine telemetry data to identify patterns in breakdowns using Tableau dashboards.',
        'Determined factory-level machine failure rates and highlighted high-risk machine types for Daikibo Industrials.',
        'Built Excel-based classification models for gender pay equality using IF() and OR() logic functions.',
        'Applied business data analysis, data cleaning, and visualization to deliver actionable insights.',
        'Strengthened hands-on skills in Tableau, Excel, and analytical decision-making through a real-world case study.'
      ],
      github: 'https://github.com/Pranavi2002/Deloitte-Data-Analytics-Internship-Program'
    }
  ];
}
