import { Component } from '@angular/core';
import { Skill } from '../models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'HTML',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'CSS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Node JS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'React.JS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'C#',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: '.Net',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'ASP.Net, MVC',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Winforms',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Unity',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Github',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'PHP',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Laravel',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'MYSQL',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'SQL Server',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'SQLite',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      rating: 65,
    },
  ];
}
