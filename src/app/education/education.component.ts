import { Component } from '@angular/core';
import { Education } from '../models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Bhartiya Hindi High School',
      course: 'SSC',
      board: 'Maharashtra State Board',
      duration: '2014-2015',
      score: '69%',
    },
    {
      institute: 'Pet Oxford Jr. College',
      course: 'HSC (Computer Science)',
      board: 'Maharashtra State Board',
      duration: '2016-2017',
      score: '57.08%',
    },
    {
      institute: 'SDT Kalani College',
      course: 'BSc IT',
      board: 'Mumbai University',
      duration: '2017-2020',
      score: '8.57 CGPA',
    },
  ]
}
