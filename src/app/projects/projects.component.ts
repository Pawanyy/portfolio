import { Component } from '@angular/core';
import { Project } from '../models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: '2D Platformer Game Development',
      technologies: 'C#, Unity, SQLite',
      description: [
        'Developed 2D Platformer Game in Unity.',
      ]
    },
    {
      title: 'Cron Job Schedular',
      technologies: 'Node js, Javascript',
      description: [
        'Developed a Cron Job Schedular Tool for Windows.',
      ]
    },
    {
      title: 'Tic-Tac-Toe',
      technologies: 'C#, Unity',
      description: [
        'Developed Tic-Tac-Toe Game in Unity.',
      ]
    },
    {
      title: 'Gym Fitness Website',
      technologies: 'PHP, MYSQL',
      description: [
        'Developed Gym Fitness Website.',
      ]
    },
    {
      title: 'NSS Website',
      technologies: 'PHP, MYSQL',
      description: [
        'Developed NSS Website.',
      ]
    },
    {
      title: 'RealEstate Management System',
      technologies: 'C#, ASP.NET, SQL Server',
      description: [
        'Developed RealEstate Website in ASP.NET.',
      ]
    },
    {
      title: 'Dating Website',
      technologies: 'C#, ASP.NET Core API, SQL Server, Angular, Postman',
      description: [
        'Developing an Dating Website using ASP.NET Core and Angular.',
      ]
    },
    {
      title: 'Tic-Tac-Toe PWA',
      technologies: 'Angular',
      description: [
        'Developed Tic-Tac-Toe Game in Angular.',
      ]
    },
    {
      title: 'Event API',
      technologies: 'C#, ASP.NET Core, SQLite, Postman',
      description: [
        'Developed Event Manage API in ASP.NET Core with JWT authentication.',
      ]
    },
  ];
}
