import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildOneCdComponent } from './parent-one-child-one-cd.component';

describe('ParentOneChildOneCdComponent', () => {
  let component: ParentOneChildOneCdComponent;
  let fixture: ComponentFixture<ParentOneChildOneCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOneChildOneCdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOneChildOneCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
