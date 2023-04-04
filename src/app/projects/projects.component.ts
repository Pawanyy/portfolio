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
      title: 'Prj 1',
      technologies: 'C, C++, C#',
      description: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        'Dignissimos quae nisi minus.',
        'Suscipit ipsum sed excepturi, dolorum enim exercitationem minima expedita sunt ut facere tempore natus aliquam porro adipisci est!'
      ]
    }
  ];
}
