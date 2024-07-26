import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoChildOneCdComponent } from './parent-two-child-one-cd.component';

describe('ParentTwoChildOneCdComponent', () => {
  let component: ParentTwoChildOneCdComponent;
  let fixture: ComponentFixture<ParentTwoChildOneCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTwoChildOneCdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoChildOneCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
