import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-view-encap',
  templateUrl: './top-view-encap.component.html',
  styleUrls: ['./top-view-encap.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopViewEncapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
