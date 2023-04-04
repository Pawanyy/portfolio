import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {
  @HostBinding("class.pc") pcMode = false;
  constructor(
    private element:ElementRef, 
    private breakpointObserver: BreakpointObserver
    ) {
      this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
          next:(result: any) => {
            for(let breakpoint of Object.keys(result.breakpoints)){
              if(result.breakpoints[breakpoint]){
                if(breakpoint === Breakpoints.HandsetPortrait){
                  this.pcMode = false;
                }
                if(breakpoint === Breakpoints.WebLandscape){
                  this.pcMode = true;
                }
              }
            }
          }
        });
  }

}
