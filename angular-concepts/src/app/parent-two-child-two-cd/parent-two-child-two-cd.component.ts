import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-two-cd',
  templateUrl: './parent-two-child-two-cd.component.html',
  styleUrls: ['./parent-two-child-two-cd.component.css']
})
export class ParentTwoChildTwoCdComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Angular is checking for changes in p2 c2')
  }

  onClick(){
    
  }
}
