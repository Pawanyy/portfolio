import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService:Title, private metaService:Meta) {}

  ngOnInit(): void {
    
    this.titleService.setTitle('Pawan Yadav - Portfolio');

    this.metaService.updateTag(
      { name: 'description', content: 'Pawan Yadav Resume Website ' },
    );
    this.metaService.updateTag(
      { name: 'keywords', content: 'Pawan Yadav, PawanYadav, YadavPawan, ' },
    );
    this.metaService.updateTag(
      { name: 'language', content: 'English' },
    );
    this.metaService.updateTag(
      { name: 'author', content: 'Pawan Pramod Yadav' },
    );
  }
}
