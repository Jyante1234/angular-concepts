import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoCdComponent } from './parent-two-cd.component';

describe('ParentTwoCdComponent', () => {
  let component: ParentTwoCdComponent;
  let fixture: ComponentFixture<ParentTwoCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTwoCdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
