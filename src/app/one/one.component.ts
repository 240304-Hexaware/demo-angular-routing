import { Component } from '@angular/core';
import { OneChildComponent } from '../one-child/one-child.component';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [OneChildComponent],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
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
