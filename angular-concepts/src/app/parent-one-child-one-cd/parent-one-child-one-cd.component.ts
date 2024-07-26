// import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, DoCheck, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-one-cd',
  templateUrl: './parent-one-child-one-cd.component.html',
  styleUrls: ['./parent-one-child-one-cd.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentOneChildOneCdComponent implements OnInit, DoCheck {
  @Input()
  myStrArr: any[] = [];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(this.myStrArr);
    this.cd.markForCheck();
    console.log("Parent One Child One component change detection");
  }

  onClick() {
    this.myStrArr.push("WebTechTalk");
  }
}
