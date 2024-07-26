import { Component, DoCheck, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements DoCheck{
  count = 2;

  increase() {
    this.count++
  }

  ngDoCheck() {
    // console.log("Angular is checking for changes");
    console.log("Root component change detection");
  }

  onClick() {}
}
