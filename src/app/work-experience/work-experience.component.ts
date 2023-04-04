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
      role: 'Software Developer',
      company: 'Rudratech IT Services',
      duration: 'Jan 2021 - Dec 2022',
      description: [
        'Developed hotel, B2B, and B2C solutions with Winforms and C#, as well as added thermal printing support.',
        'Created MVPs for billing solutions, games, and mobile apps.',
        'Developed an LMS website with features such as AWS integration for videos, social login, payment integration, and a referral system.'
      ],
      contact: ['Rahul Sachwani', '+91-7208344434']
    }
  ]
}
