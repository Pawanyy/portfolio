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
    "Hi, I'm a passionate software developer with 2 years of experience in C#, Java, PHP, JavaScript, Dot Net, Laravel, MySQL, Unity & WinForms with SQL Server. I enjoy creating user-friendly software solutions that meet clients' needs. I'm always looking for new challenges and opportunities to enhance my abilities.",
  ]
}
