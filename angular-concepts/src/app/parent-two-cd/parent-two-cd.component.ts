import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two-cd',
  templateUrl: './parent-two-cd.component.html',
  styleUrls: ['./parent-two-cd.component.css']
})
export class ParentTwoCdComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Angular is checking for changes in p2')
  }
  onClick(){
    
  }
}
