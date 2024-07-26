import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneCdComponent } from './parent-one-cd.component';

describe('ParentOneCdComponent', () => {
  let component: ParentOneCdComponent;
  let fixture: ComponentFixture<ParentOneCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOneCdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOneCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
