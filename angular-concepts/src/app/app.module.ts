import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopViewEncapComponent } from './top-view-encap/top-view-encap.component';
import { BottomViewEncapComponent } from './bottom-view-encap/bottom-view-encap.component';
import { ParentOneCdComponent } from './parent-one-cd/parent-one-cd.component';
import { ParentOneChildOneCdComponent } from './parent-one-child-one-cd/parent-one-child-one-cd.component';
import { ParentOneChildTwoCdComponent } from './parent-one-child-two-cd/parent-one-child-two-cd.component';
import { ParentTwoCdComponent } from './parent-two-cd/parent-two-cd.component';
import { ParentTwoChildOneCdComponent } from './parent-two-child-one-cd/parent-two-child-one-cd.component';
import { ParentTwoChildTwoCdComponent } from './parent-two-child-two-cd/parent-two-child-two-cd.component';

@NgModule({
  declarations: [
    AppComponent,
    TopViewEncapComponent,
    BottomViewEncapComponent,
    ParentOneCdComponent,
    ParentOneChildOneCdComponent,
    ParentOneChildTwoCdComponent,
    ParentTwoCdComponent,
    ParentTwoChildOneCdComponent,
    ParentTwoChildTwoCdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
