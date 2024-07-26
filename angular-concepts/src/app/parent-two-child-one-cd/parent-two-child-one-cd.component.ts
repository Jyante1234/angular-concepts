import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-one-cd',
  templateUrl: './parent-two-child-one-cd.component.html',
  styleUrls: ['./parent-two-child-one-cd.component.css']
})
export class ParentTwoChildOneCdComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Angular is checking for changes in p2 c1')
  }

  onClick(){
    
  }
}
