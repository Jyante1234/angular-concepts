import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoChildTwoCdComponent } from './parent-two-child-two-cd.component';

describe('ParentTwoChildTwoCdComponent', () => {
  let component: ParentTwoChildTwoCdComponent;
  let fixture: ComponentFixture<ParentTwoChildTwoCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTwoChildTwoCdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoChildTwoCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
