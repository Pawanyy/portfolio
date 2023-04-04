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
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Unity',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Unity',
      level: 'Intermediate',
      rating: 65,
    },
  ];
}
