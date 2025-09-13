import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Achievement {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class Achievements {
  achievements: Achievement[] = [
    {
      category: 'Oracle Certifications (Expired)',
      items: [
        'Oracle Cloud Infrastructure Foundations Associate – Oracle – 2021',
        'Oracle Cloud Infrastructure Developer Associate – Oracle – 2021',
        'Oracle Autonomous Database Specialist – Oracle – 2021'
      ]
    },
    {
      category: 'Microsoft Certifications (Expired)',
      items: [
        'Aviatrix Multi-Cloud Networking Associate Engineer – Microsoft – 2022',
        'Microsoft Azure Developer Associate – Microsoft – 2022'
      ]
    },
    {
      category: 'Cambridge English Certification',
      items: [
        'Cambridge Business English (ESOL) Preliminary – Cambridge – 2021'
      ]
    },
    {
      category: 'Publications & Presentations',
      items: [
        'Co-Author: "Performance of CNN for NIDS" – NeuroQuantology Journal – 2023',
        'Presented: "Unsupervised Clustering Techniques" – SmartCom 2023 Conference – 2023'
      ]
    },
    {
      category: 'Online Courses & Certifications',
      items: [
        'Technical Interview Preparation Course – CodePath – 2025',
        'AI for Everyone Course – deeplearning.ai – 2023',
        'Coding Ninjas Aptitude Test Certificate – 2020',
        'AI Course Completion – MyCaptain – 2020',
        'Introduction to AI Course – IBM – 2020'
      ]
    }
  ];
}