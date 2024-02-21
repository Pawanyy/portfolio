import { Component } from '@angular/core';
import { WorkExperience } from '../models/model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Junior Application Developer',
      company: 'Ank It Solutions Pvt Ltd',
      duration: 'May 2023 - Present',
      description: [
        'Developed web applications using Spring Boot and React.js.',
        'Optimized the frontend to enhance performance and improve user experience.',
        'Created comprehensive project documentation to facilitate smooth project management.',
        'Collaborated with the team in planning and executing the trading project.',
        'Implemented security features such as TOTP and Crypt Services to enhance project security.',
        'Worked on integrating APIs such as BGV or writing new APIs in Jio Payments Bank project using node js.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Rudratech IT Services',
      duration: 'Jan 2021 - Dec 2022',
      description: [
        'Developed hotel, B2B, and B2C solutions with Winforms and C#, as well as added thermal printing support.',
        'Created MVPs for billing solutions, games, and mobile apps.',
        'Developed an LMS website with features such as AWS integration for videos, social login, payment integration, and a referral system.',
        'Optimized and customized a WordPress theme for a travel website, developed games for Android, desktop, and web platforms using Unity, Javascript.',
        'Optimized websites for Google ranking, added features to an HMS software, and optimized its theme for faster load.',
        'Developed an app prototype in Xamarin and made changes to a Kotlin app for custom intent.',
        'Created plugins for Unity apps such as date picker, calendar picker, and custom IJI modal using java and C#.',
        'Developed a Bootcamp website, tours and travel website with features such as cashbook, P&L account, supplier account, expense account, etc.',
        'Developed an internal management system for an export company to manage the flow of jobs between teams',
      ],
      contact: ['Rahul Sachwani', '+91-7208344434']
    },
  ]
}
