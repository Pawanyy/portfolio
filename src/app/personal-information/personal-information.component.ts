import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {

  myData: string[][] = [
    ["Name", "Pawan Yadav"],
    ["DOB", "10/09/1999"],
    ["Work Exp", "2 Years"],
    ["Education", "B.Sc. IT (2020)"],
    ["Interests", "Reading, Chess, Video Game"]
  ];

  aboutMe: string[] = [
    "Hi, I am Software Developer with 2 Years of Experience.",
    "Hi, I am Software Developer with 2 Years of Experience.",
    "Hi, I am Software Developer with 2 Years of Experience.",
    "Hi, I am Software Developer with 2 Years of Experience.",
    "Hi, I am Software Developer with 2 Years of Experience.",
  ]
}
