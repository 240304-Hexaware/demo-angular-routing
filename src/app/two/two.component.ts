import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  toggleAdmin() {
    let value: string | null = localStorage.getItem("role");
    if(value === null || value === "user") {
      localStorage.setItem("role", "admin");
      value = "admin";
    } else if(value === "admin") {
      localStorage.setItem("role", "user");
      value = "user";
    }
  }
  /*
  Happens once, first thing when the component object is built. 
  This is just a JS/TS class constructor.
  */
  constructor() {
    console.log("CONSTRUCTOR");
  }

  /*
  ngOnChanges occurs when Angular detects changes which would need it to change what is
  shown on screen. "Called when any data-bound property of a directive changes" 
  When a component has data-bound properties, that component is dependant on some state
  and needs to be re-rendered when that state changes.
  */
  ngOnChanges() {
    console.log("ngOnChanges()");
  }


  /*
  Called once, after the first time ngOnChanges() would be called, even if it is not.
  */
  ngOnInit() {
    console.log("ngOnInit()");
  }

  /*
  Called after ngOnChanges() during change detection, and after ngOnInit() during 
  initialization
  */
  ngDoCheck() {
    console.log("ngDoCheck()");
  }
  
  /*
  Called once after the first ngDoCheck()
  */
  ngAfterContentInit() {
    console.log("ngAfterContentInit()");
  }
  
  /*
  Called after ngAfterContentInit() and every ngDoCheck()
  */
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked()");
  }
  
  /*
  Called once after the first ngAfterContentChecked()
  */
  ngAfterViewInit() {
    console.log("ngAfterViewInit()");
  }
  
  /*
  Called after ngAfterViewInit() and every ngAfterContentChecked()
  */
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked()");
  }
  
  /*
  Called immediately before the component is destroyed.
  */
  ngOnDestroy() {
    console.log("ngOnDestroy()");
  }
}
