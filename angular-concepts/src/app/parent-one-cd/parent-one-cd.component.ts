import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one-cd',
  templateUrl: './parent-one-cd.component.html',
  styleUrls: ['./parent-one-cd.component.css']
})
export class ParentOneCdComponent implements OnInit, DoCheck {

  constructor() { }

  strArrInParent: any[] = [];
  ngOnInit(): void {
  }

  onClick() {
    this.strArrInParent.push("Please subscribe");
  }
  ngDoCheck(): void {
    console.log('Angular is checking for changes in p1')
  }
}
