import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-two-cd',
  templateUrl: './parent-one-child-two-cd.component.html',
  styleUrls: ['./parent-one-child-two-cd.component.css']
})
export class ParentOneChildTwoCdComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Angular is checking for changes in p1 c2')
  }
  onClick(){
    
  }
}
