import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewEncapComponent } from './top-view-encap.component';

describe('TopViewEncapComponent', () => {
  let component: TopViewEncapComponent;
  let fixture: ComponentFixture<TopViewEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewEncapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
